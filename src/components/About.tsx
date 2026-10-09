"use client";
import Image from "next/image";
import { site } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

export default function About() {
  const { t } = useLang();
  return (
    <Section id="sobre-mi" index="05" title={t.sections.about}>
      <Reveal className="grid gap-12 md:grid-cols-12">
        <div data-r className="relative aspect-[4/5] self-start overflow-hidden bg-stone md:sticky md:top-28 md:col-span-4">
          <Image
            src="/jonnathan.jpg"
            alt={site.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover object-[50%_32%]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" aria-hidden="true" />
        </div>
        <div className="md:col-span-7 md:col-start-6">
          {t.about.bio.map((b, i) => (
            <p key={i} data-r className="mb-6 font-serif text-3xl leading-snug md:text-4xl">{b}</p>
          ))}
          <ul data-r className="mt-12 border-b border-line">
            {t.experience.map((e) => (
              <li key={e.org} className="grid gap-1 border-t border-line py-4 md:grid-cols-12">
                <span className="font-mono text-xs uppercase tracking-widest text-muted md:col-span-4">{e.period}</span>
                <span className="font-serif text-2xl md:col-span-4">{e.org}</span>
                <span className="text-sm text-muted md:col-span-4">{e.role}</span>
              </li>
            ))}
          </ul>
          <a data-r href={site.cv} target="_blank" rel="noreferrer" className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-accent hover:underline">{t.about.cv}</a>
          <div data-r className="mt-12 flex flex-wrap gap-2">
            {site.stack.map((s) => (
              <span key={s} className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">{s}</span>
            ))}
          </div>
          <p data-r className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">{t.about.languages}</p>
        </div>
      </Reveal>
    </Section>
  );
}
