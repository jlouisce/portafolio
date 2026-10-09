"use client";
import { site } from "@/data/site";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="flex items-center justify-between border-t border-line px-6 py-8 font-mono text-xs uppercase tracking-widest text-muted md:px-10">
      <p>© 2026 {site.name}</p>
      <a href="#" className="hover:text-accent">{t.footer.top}</a>
    </footer>
  );
}
