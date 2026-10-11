import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import ProjectView from "@/components/ProjectView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/proyectos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title.en} — ${site.name}`, description: p.summary.en } : {};
}

async function ProjectContent({ params }: { params: PageProps<"/proyectos/[slug]">["params"] }) {
  const { slug } = await params;
  if (!projects.some((x) => x.slug === slug)) notFound();
  return <ProjectView slug={slug} />;
}

export default function ProjectPage({ params }: PageProps<"/proyectos/[slug]">) {
  // `params` se lee dentro de Suspense para que la navegación sea instantánea (Cache Components)
  return (
    <Suspense fallback={<main className="min-h-svh" />}>
      <ProjectContent params={params} />
    </Suspense>
  );
}
