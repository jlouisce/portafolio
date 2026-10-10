"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "./LanguageProvider";


const PAPER = "#fdfcfa";

type LenisLike = {
  resize: () => void;
  scrollTo: (y: number, o?: { immediate?: boolean; force?: boolean }) => void;
};

/**
 * Intro ligada al scroll: frase -> cortinas que se cierran -> mensaje que cruza
 * de izquierda a derecha -> sitio. Una vez por sesión; al terminar se oculta
 * y la página queda en el hero sin forma de volver a ella.
 */
export default function Intro() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const words = t.intro.words;

  useEffect(() => {
    const root = rootRef.current!;
    const html = document.documentElement;
    const seen = (() => {
      try { return !!sessionStorage.getItem("intro-seen"); } catch { return false; }
    })();
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (seen || reduced || window.location.hash) {
      html.dataset.intro = "skip";
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    html.dataset.intro = "active";

    const ctx = gsap.context(() => {
      // Entrada de la frase (al cargar, no depende del scroll)
      gsap.from(".intro-word", { y: 40, opacity: 0, duration: 1.1, ease: "power3.out", stagger: 0.18, delay: 0.2 });
      gsap.from(".intro-hint", { opacity: 0, duration: 1, delay: 1.2 });

      // Línea de tiempo ligada al scroll
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      tl.to(".intro-hint", { opacity: 0, duration: 0.05 }, 0)
        .to(".intro-phrase", { yPercent: -4, duration: 0.4 }, 0)
        // Cortinas: una desde arriba, otra desde abajo, cerrando hacia el centro
        .fromTo(".intro-curtain-top", { yPercent: -100 }, { yPercent: 0, duration: 0.25 }, 0.15)
        .fromTo(".intro-curtain-bottom", { yPercent: 100 }, { yPercent: 0, duration: 0.25 }, 0.15)
        // Al juntarse, el filo dorado y la sombra desaparecen para no cruzar el mensaje
        .to(".intro-curtain-top, .intro-curtain-bottom", { borderColor: "rgba(140,109,35,0)", boxShadow: "0 0 0 0 rgba(0,0,0,0)", duration: 0.06 }, 0.36)
        // Mensaje: entra por la izquierda, se detiene en el centro y sale por la derecha
        .fromTo(".intro-message", { xPercent: -110 }, { xPercent: 0, ease: "power2.out", duration: 0.22 }, 0.4)
        .to(".intro-message", { xPercent: 110, ease: "power2.in", duration: 0.2 }, 0.72)
        .to({}, { duration: 0.06 }, 0.94);

      // Fin: el sitio ya está en el borde superior -> se quita la intro y se compensa el scroll
      let finished = false; // evita que el refresh vuelva a disparar este mismo callback
      ScrollTrigger.create({
        trigger: root,
        start: "bottom top",
        onEnter: (self) => {
          if (finished) return;
          finished = true;
          self.kill();
          tl.scrollTrigger?.kill();
          const y = Math.max(0, window.scrollY - root.offsetHeight);
          root.style.display = "none";
          html.dataset.intro = "done";
          try { sessionStorage.setItem("intro-seen", "1"); } catch {}
          const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
          if (lenis) {
            lenis.resize();
            lenis.scrollTo(y, { immediate: true, force: true });
          } else {
            window.scrollTo(0, y);
          }
          // Fuera del callback y con los triggers de la intro ya eliminados
          requestAnimationFrame(() => ScrollTrigger.refresh());
          window.dispatchEvent(new Event("intro-done"));
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="intro-root relative z-[60] h-[400vh]" style={{ backgroundColor: PAPER }}>
      <div className="sticky top-0 h-svh overflow-hidden" style={{ backgroundColor: PAPER }}>
        {/* 1. Frase */}
        <div className="intro-phrase absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center md:flex-row md:gap-8">
          {words.map((w, i) => (
            <span key={w} className="flex items-center gap-8">
              <span className="intro-word font-serif text-[clamp(2.4rem,6.2vw,6rem)] leading-none text-foreground">{w}</span>
              {i < words.length - 1 && <span className="intro-word hidden font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none text-accent md:inline" aria-hidden="true">·</span>}
            </span>
          ))}
        </div>
        <p className="intro-hint absolute inset-x-0 bottom-8 text-center font-mono text-xs uppercase tracking-widest text-muted">{t.intro.hint}</p>

        {/* 2. Cortinas blancas con filo dorado para que se note el movimiento */}
        <div
          className="intro-curtain-top absolute inset-x-0 top-0 h-1/2 border-b border-accent/60"
          style={{ backgroundColor: PAPER, boxShadow: "0 14px 30px -12px rgba(18,18,18,.18)" }}
        />
        <div
          className="intro-curtain-bottom absolute inset-x-0 bottom-0 h-1/2 border-t border-accent/60"
          style={{ backgroundColor: PAPER, boxShadow: "0 -14px 30px -12px rgba(18,18,18,.18)" }}
        />

        {/* 3. Mensaje */}
        <div className="intro-message pointer-events-none absolute inset-0 flex items-center justify-center px-6">
          <p className="whitespace-nowrap font-serif text-[clamp(2.2rem,7.5vw,7rem)] leading-none text-foreground">
            {t.intro.pre}<span className="italic text-accent">{t.intro.em}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
