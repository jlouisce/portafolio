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
        <p data-r className="max-w-xl font-serif text-2xl leading-snug text-muted md:text-3xl">{t.contact.lead}</p>

        <a
          data-r
          href={`mailto:${site.email}`}
          className="group mt-12 block border-y border-line py-8 transition-colors hover:border-accent"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-accent">{t.contact.email} ↗</span>
          <span className="mt-3 block break-all font-serif text-[clamp(1.8rem,6vw,5.5rem)] italic leading-tight transition-colors group-hover:text-accent">
            {site.email}
          </span>
        </a>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {site.socials.map((s) => (
            <a
              key={s.label}
              data-r
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-40 flex-col justify-between border border-line bg-background/80 p-6 backdrop-blur-sm transition-colors duration-500 hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <span className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-muted transition-colors group-hover:text-gold">
                {s.label}
                <span aria-hidden="true" className="text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </span>
              <span className="font-serif text-3xl leading-tight">{s.handle}</span>
            </a>
          ))}
        </div>

        <p data-r className="mt-12 font-mono text-xs uppercase tracking-widest text-muted">{t.contact.location}</p>
      </Reveal>
    </Section>
  );
}
