"use client";
import { site } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function Contact() {
  const { t } = useLang();
  return (
    <Section id="contacto" index="06" title={t.contact.title}>
      <Reveal>
        <a data-r href={`mailto:${site.email}`} className="block break-all font-serif text-[clamp(1.8rem,6vw,5.5rem)] italic leading-tight transition hover:text-accent">
          {site.email}
        </a>
        <div data-r className="mt-16 flex flex-wrap items-center justify-between gap-6 font-mono text-xs uppercase tracking-widest text-muted">
          <p>{t.contact.location}</p>
          <div className="flex gap-6">
            {site.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="hover:text-accent">{s.label} ↗</a>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
