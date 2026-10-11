"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, type Project } from "@/data/projects";
import ProjectMedia from "./ProjectMedia";
import Section from "./Section";
import Reveal from "./Reveal";
import { useLang } from "./LanguageProvider";

type Filter = "all" | Project["type"];
// Filas alternadas 7/5 y 5/7; nunca una tarjeta de ancho completo
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function Projects() {
  const { lang, t } = useLang();
  const [f, setF] = useState<Filter>("all");
  const list = projects.filter((p) => f === "all" || p.type === f);
  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t.projects.filters.all },
    { key: "Web", label: t.projects.filters.web },
    { key: "App", label: t.projects.filters.app },
    { key: "E-commerce", label: t.projects.filters.ecommerce },
  ];
  return (
    <Section id="proyectos" index="02" title={t.sections.projects}>
      <div className="mb-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
        {filters.map((x) => (
          <button
            key={x.key}
            onClick={() => setF(x.key)}
            className={`rounded-full border px-4 py-2 transition ${f === x.key ? "border-foreground bg-foreground text-background" : "border-line text-muted hover:text-foreground"}`}
          >
            {x.label}
          </button>
        ))}
      </div>
      <Reveal key={f} className="grid gap-x-6 gap-y-14 md:grid-cols-12">
        {list.map((p, i) => (
          <article key={p.slug} data-r className={`group relative ${spans[i % spans.length]}`}>
            <Link href={`/proyectos/${p.slug}`} className="absolute inset-0 z-10" aria-label={`${t.projects.view} ${p.title[lang]}`} />
            <div className="relative aspect-[16/10] overflow-hidden bg-stone ring-1 ring-inset ring-black/5 md:aspect-[5/2]">
              <ProjectMedia project={p} title={p.title[lang]} sizes="(min-width: 768px) 58vw, 100vw" zoomOnHover />
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest opacity-0 transition duration-500 group-hover:bg-black/55 group-hover:text-white group-hover:opacity-100">
                {t.projects.view}
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-3xl">{p.title[lang]}</h3>
              <span className="font-mono text-xs text-muted"><span className="text-accent">0{i + 1}</span> · {p.year} · {p.type}</span>
            </div>
            <p className="mt-2 max-w-md text-sm text-muted">{p.summary[lang]}</p>
            <p className="mt-3 font-mono text-xs text-muted">{p.stack.join(" / ")}</p>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
