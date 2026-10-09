"use client";
import { useState } from "react";
import { nav, site } from "@/data/site";

type LenisLike = { scrollTo: (t: Element, o?: object) => void };

function go(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-[#ece7dd] mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="font-serif text-2xl tracking-tight">{site.short}<span className="text-accent">.</span></a>
        <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} className="opacity-70 transition hover:opacity-100">{n.label}</button>
          ))}
        </nav>
        <button className="font-mono text-xs uppercase tracking-widest lg:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 -z-10 flex flex-col justify-center gap-4 bg-[#0b0b0a] px-6 lg:hidden">
          {nav.map((n, i) => (
            <button key={n.id} onClick={() => { setOpen(false); go(n.id); }} className="text-left font-serif text-5xl">
              <span className="mr-3 font-mono text-xs text-accent">0{i + 1}</span>{n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
