"use client";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function Philosophy() {
  const { t } = useLang();
  return (
    <Section id="filosofia" index="01" title={t.sections.philosophy}>
      <Reveal className="grid gap-12 md:grid-cols-3">
        {t.pillars.map((p, i) => (
          <div key={i} data-r className="border-t border-line pt-6">
            <p className="font-mono text-xs text-muted">0{i + 1}</p>
            <h3 className="mt-4 font-serif text-4xl italic">{p.title}</h3>
            <p className="mt-4 max-w-sm text-muted">{p.text}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
