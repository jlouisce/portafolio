"use client";
import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import Section from "./Section";
import Reveal from "./Reveal";

const filters = ["Todos", "Web", "App", "E-commerce"] as const;
const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-12"];

export default function Projects() {
  const [f, setF] = useState<(typeof filters)[number]>("Todos");
  const list = projects.filter((p) => f === "Todos" || p.type === f);
  return (
    <Section id="proyectos" index="02" title="Proyectos">
      <div className="mb-10 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
        {filters.map((x) => (
          <button
            key={x}
            onClick={() => setF(x)}
            className={`rounded-full border px-4 py-2 transition ${f === x ? "border-accent bg-accent text-black" : "border-line text-muted hover:text-foreground"}`}
          >
            {x}
          </button>
        ))}
      </div>
      <Reveal key={f} className="grid gap-x-6 gap-y-14 md:grid-cols-12">
        {list.map((p, i) => (
          <article key={p.slug} data-r className={`group relative ${spans[i % spans.length]}`}>
            <Link href={`/proyectos/${p.slug}`} className="absolute inset-0 z-10" aria-label={`Ver ${p.title}`} />
            <div
              className="relative aspect-[4/3] overflow-hidden bg-[#141413]"
              style={{ backgroundImage: `radial-gradient(circle at 30% 20%, hsl(${p.hue} 70% 45% / .55), transparent 60%)` }}
            >
              <span className="absolute left-4 top-4 font-mono text-xs text-foreground/70">0{i + 1}</span>
              <div className="absolute inset-0 flex items-center justify-center font-mono text-xs uppercase tracking-widest opacity-0 transition duration-500 group-hover:bg-black/50 group-hover:opacity-100">
                Ver proyecto →
              </div>
            </div>
            <div className="mt-4 flex items-baseline justify-between">
              <h3 className="font-serif text-3xl">{p.title}</h3>
              <span className="font-mono text-xs text-muted">{p.year} · {p.type}</span>
            </div>
            <p className="mt-2 max-w-md text-sm text-muted">{p.summary}</p>
            <p className="mt-3 font-mono text-xs text-muted">{p.stack.join(" / ")}</p>
          </article>
        ))}
      </Reveal>
    </Section>
  );
}
