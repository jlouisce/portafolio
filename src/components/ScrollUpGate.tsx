"use client";
import { useEffect, useState } from "react";

/** Cuánto hay que "tirar" hacia arriba estando en el tope para que aparezca (px de scroll). */
const PULL_TO_SHOW = 320;
/** Si se deja de tirar este tiempo (ms), el acumulado se reinicia. */
const PULL_RESET_MS = 600;

/** Al insistir hacia arriba desde el inicio, tapa todo con "Efficient As Fck". */
export default function ScrollUpGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const ready = () => html.dataset.intro !== "active" && html.dataset.intro !== undefined;
    const atTop = () => window.scrollY <= 1;

    let pull = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const reset = () => { pull = 0; if (timer) clearTimeout(timer); };
    const addPull = (amount: number) => {
      if (!ready() || !atTop()) { reset(); return; }
      pull += amount;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => { pull = 0; }, PULL_RESET_MS);
      if (pull >= PULL_TO_SHOW) { reset(); setShow(true); }
    };
    const down = () => { reset(); setShow(false); };

    const onWheel = (e: WheelEvent) => {
      const px = e.deltaMode === 1 ? e.deltaY * 40 : e.deltaY;
      if (px < 0) addPull(-px);
      else if (px > 0) down();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") addPull(60);
      else if (e.key === "PageUp" || e.key === "Home") addPull(PULL_TO_SHOW);
      else if (["ArrowDown", "PageDown", "End", " "].includes(e.key)) down();
    };
    let lastTouchY = 0;
    const onTouchStart = (e: TouchEvent) => { lastTouchY = e.touches[0].clientY; reset(); };
    const onTouchMove = (e: TouchEvent) => {
      const y = e.touches[0].clientY;
      const dy = y - lastTouchY; // dedo hacia abajo = subir en la página
      lastTouchY = y;
      if (dy > 0) addPull(dy);
      else if (dy < -8) down();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      reset();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#fdfcfa] transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"}`}
    >
      <p className="px-6 text-center font-serif text-[clamp(2.4rem,8vw,7.5rem)] leading-none">
        Efficient As <span className="italic text-accent">Fck</span>
      </p>
    </div>
  );
}
