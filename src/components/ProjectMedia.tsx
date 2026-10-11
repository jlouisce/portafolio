import Image from "next/image";
import type { Project } from "@/data/projects";
import TerminalPreview from "./TerminalPreview";

/** Contenido visual de un proyecto: captura, vista de terminal o degradado de reserva. */
export default function ProjectMedia({
  project,
  title,
  sizes,
  priority = false,
  zoomOnHover = false,
}: {
  project: Project;
  title: string;
  sizes: string;
  priority?: boolean;
  zoomOnHover?: boolean;
}) {
  if (project.visual === "terminal") return <TerminalPreview />;
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={`${title} website`}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover object-top ${zoomOnHover ? "transition-transform duration-700 group-hover:scale-[1.03]" : ""}`}
      />
    );
  }
  return (
    <div
      className="absolute inset-0"
      style={{ backgroundImage: `radial-gradient(circle at 30% 20%, hsl(${36 + (project.hue % 12)} 60% ${52 + (project.hue % 18)}% / .5), transparent 60%)` }}
      role="img"
      aria-label={`${title} (placeholder)`}
    />
  );
}
