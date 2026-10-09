"use client";
import { useState } from "react";
import { site } from "@/data/site";
import type { Lang } from "@/data/content";
import { useLang } from "./LanguageProvider";

type LenisLike = { scrollTo: (t: Element, o?: object) => void };

function go(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth" });
}

function LangToggle() {
  const { lang, setLang } = useLang();
  const opt = (l: Lang) => (
    <button
      type="button"
      onClick={() => setLang(l)}
      aria-pressed={lang === l}
      aria-label={l === "en" ? "English" : "Español"}
      className={`transition ${lang === l ? "text-accent" : "opacity-60 hover:opacity-100"}`}
    >
      {l.toUpperCase()}
    </button>
  );
  return (
    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest" role="group" aria-label="Language">
      {opt("en")}
      <span aria-hidden="true" className="opacity-40">/</span>
      {opt("es")}
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 text-foreground backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <a href="#" className="font-serif text-2xl tracking-tight">{site.short}<span className="text-accent">.</span></a>
        <div className="flex items-center gap-8">
          <nav className="hidden gap-8 font-mono text-xs uppercase tracking-widest lg:flex" aria-label="Main">
            {t.nav.map((n) => (
              <button key={n.id} onClick={() => go(n.id)} className="opacity-70 transition hover:opacity-100">{n.label}</button>
            ))}
          </nav>
          <LangToggle />
          <button className="font-mono text-xs uppercase tracking-widest lg:hidden" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? t.menu.close : t.menu.open}
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 -z-10 flex flex-col justify-center gap-4 bg-background px-6 lg:hidden">
          {t.nav.map((n, i) => (
            <button key={n.id} onClick={() => { setOpen(false); go(n.id); }} className="text-left font-serif text-5xl">
              <span className="mr-3 font-mono text-xs text-accent">0{i + 1}</span>{n.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
