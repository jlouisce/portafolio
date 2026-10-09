"use client";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function Philosophy() {
  const { t } = useLang();
  return (
    <Section id="filosofia" index="01" title={t.sections.philosophy}>
      <Reveal>
        <p data-r className="mb-14 max-w-xl font-serif text-2xl leading-snug text-muted md:text-3xl">{t.philosophyLead}</p>
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {t.pillars.map((p, i) => (
            <article key={i} data-r className="group border-t border-line pt-6">
              <div className="gold-rule mb-6 w-12 transition-all duration-500 group-hover:w-full" />
              <p className="font-mono text-xs text-accent">0{i + 1}</p>
              <h3 className="mt-4 font-serif text-5xl italic md:text-6xl">{p.title}</h3>
              <p className="mt-6 max-w-sm leading-relaxed text-muted">{p.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
