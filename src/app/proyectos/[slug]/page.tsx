import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} — ${site.name}`, description: p.summary } : {};
}

export default async function ProjectPage({ params }: PageProps<"/proyectos/[slug]">) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i === -1) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <main className="min-h-svh px-6 pb-20 pt-28 md:px-10">
      <Link href="/#proyectos" className="font-mono text-xs uppercase tracking-widest text-muted hover:text-accent">← Proyectos</Link>
      <p className="mt-16 font-mono text-xs uppercase tracking-widest text-accent">0{i + 1} — {p.type} · {p.year}</p>
      <h1 className="mt-4 font-serif text-[clamp(3rem,10vw,9rem)] leading-[0.95]">{p.title}</h1>
      <div
        className="mt-14 aspect-[16/9] w-full bg-[#141413]"
        style={{ backgroundImage: `radial-gradient(circle at 30% 20%, hsl(${p.hue} 70% 45% / .55), transparent 60%)` }}
        role="img"
        aria-label={`Vista previa de ${p.title} (placeholder)`}
      />
      <div className="mt-14 grid gap-10 md:grid-cols-12">
        <p className="font-serif text-3xl leading-snug md:col-span-7 md:text-4xl">{p.summary}</p>
        <dl className="space-y-6 font-mono text-xs uppercase tracking-widest md:col-span-4 md:col-start-9">
          <div><dt className="text-muted">Año</dt><dd className="mt-1">{p.year}</dd></div>
          <div><dt className="text-muted">Tipo</dt><dd className="mt-1">{p.type}</dd></div>
          <div><dt className="text-muted">Stack</dt><dd className="mt-1 leading-relaxed">{p.stack.join(" / ")}</dd></div>
        </dl>
      </div>
      <Link href={`/proyectos/${next.slug}`} className="mt-28 block border-t border-line pt-8">
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Siguiente proyecto →</span>
        <span className="mt-2 block font-serif text-5xl transition hover:text-accent md:text-7xl">{next.title}</span>
      </Link>
    </main>
  );
}
