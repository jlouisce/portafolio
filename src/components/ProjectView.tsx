"use client";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useLang } from "./LanguageProvider";

export default function ProjectView({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) return null;
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <main className="min-h-svh px-6 pb-20 pt-28 md:px-10">
      <Link href="/#proyectos" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent">{t.projects.back}</Link>
      <p className="mt-16 font-mono text-xs uppercase tracking-widest text-accent">0{i + 1} — {p.type} · {p.year}</p>
      <h1 className="mt-4 font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.95]">{p.title[lang]}</h1>
      <div
        className="mt-14 aspect-[16/9] w-full bg-stone"
        style={{ backgroundImage: `radial-gradient(circle at 30% 20%, hsl(${36 + (p.hue % 12)} 60% ${52 + (p.hue % 18)}% / .5), transparent 60%)` }}
        role="img"
        aria-label={`${p.title[lang]} (placeholder)`}
      />
      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <p className="font-serif text-3xl leading-snug md:col-span-7 md:text-4xl">{p.summary[lang]}</p>
        <dl className="space-y-6 font-mono text-xs uppercase tracking-widest md:col-span-4 md:col-start-9">
          <div><dt className="text-muted">{t.projects.year}</dt><dd className="mt-1">{p.year}</dd></div>
          <div><dt className="text-muted">{t.projects.type}</dt><dd className="mt-1">{p.type}</dd></div>
          <div><dt className="text-muted">{t.projects.stack}</dt><dd className="mt-1 leading-relaxed">{p.stack.join(" / ")}</dd></div>
        </dl>
      </div>
      {p.repo && (
        <a href={p.repo} target="_blank" rel="noreferrer" className="mt-12 inline-block font-mono text-xs uppercase tracking-widest text-accent hover:underline">{t.projects.code}</a>
      )}
      <Link href={`/proyectos/${next.slug}`} className="mt-28 block border-t border-line pt-8">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">{t.projects.next}</span>
        <span className="mt-2 block font-serif text-5xl transition hover:text-accent md:text-7xl">{next.title[lang]}</span>
      </Link>
    </main>
  );
}
