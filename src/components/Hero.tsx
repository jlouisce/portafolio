"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { site } from "@/data/site";
import { useLang } from "./LanguageProvider";


const PHOTO =
  "https://images.unsplash.com/photo-1676471049029-f93852da351d?fm=jpg&q=75&w=2400&auto=format&fit=crop&ixlib=rb-4.1.0";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line > span", { yPercent: 110, duration: 1.3, ease: "power4.out", stagger: 0.12, delay: 0.2 });
      gsap.from(".hero-fade", { opacity: 0, y: 20, duration: 1, delay: 1, stagger: 0.15, ease: "power2.out" });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden px-6 pb-12 pt-32 text-[#f7f5f0] md:px-10">
      {/* Foto de fondo solo en esta sección, con degradado para mantener legible el texto */}
      <Image
        src={PHOTO}
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-[50%_35%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/75 via-black/30 to-black/45" aria-hidden="true" />

      <p className="hero-fade mb-8 font-mono text-xs uppercase tracking-widest text-white/75">00 — {site.role}</p>
      <h1 className="font-serif text-[clamp(3.2rem,11vw,10rem)] leading-[0.92] tracking-tight">
        {t.hero.lines.map((l, i) => (
          <span key={l} className="line-mask hero-line">
            <span className={i === 1 ? "italic text-gold" : ""}>{l}</span>
          </span>
        ))}
      </h1>
      <div className="hero-fade mt-14 flex items-end justify-between border-t border-white/25 pt-6 font-mono text-xs uppercase tracking-widest">
        <p className="max-w-xs text-white/75">{t.hero.tagline}</p>
        <p className="animate-pulse">{t.hero.scroll}</p>
      </div>
    </section>
  );
}
