"use client";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";
import { scrollToId } from "@/lib/scroll";

export default function Services() {
  const { t } = useLang();
  const s = t.services;
  return (
    <Section id="servicios" index="03" title={t.sections.services}>
      <Reveal>
        <div className="mb-16 grid gap-10 md:grid-cols-12">
          <h3 data-r className="font-serif text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.02] md:col-span-8">
            {s.headline} <span className="italic text-accent">{s.em}</span>
          </h3>
          <p data-r className="leading-relaxed text-muted md:col-span-4 md:self-end">{s.lead}</p>
        </div>

        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {s.items.map((item, i) => (
            <article
              key={i}
              data-r
              className="group flex min-h-72 flex-col justify-between bg-background/90 p-7 backdrop-blur-sm transition-colors duration-500 hover:bg-foreground hover:text-background md:p-8"
            >
              <div>
                <p className="font-mono text-xs text-accent transition-colors group-hover:text-gold">0{i + 1}</p>
                <h4 className="mt-6 font-serif text-3xl leading-tight md:text-4xl">{item.title}</h4>
                <p className="mt-4 text-sm leading-relaxed text-muted transition-colors group-hover:text-background/70">{item.text}</p>
              </div>
              <ul className="mt-8 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors group-hover:border-background/30 group-hover:text-background/80"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <button
          data-r
          type="button"
          onClick={() => scrollToId("contacto")}
          className="mt-12 font-serif text-2xl italic transition-colors hover:text-accent md:text-3xl"
        >
          {s.cta}
        </button>
      </Reveal>
    </Section>
  );
}
