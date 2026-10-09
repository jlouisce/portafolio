export type Project = {
  slug: string;
  title: string;
  year: string;
  type: "Web" | "App" | "E-commerce";
  stack: string[];
  summary: string;
  hue: number; // placeholder visual hasta tener capturas reales
  repo?: string;
};

export const projects: Project[] = [
  {
    slug: "nextdocker",
    title: "NextDocker",
    year: "2026",
    type: "E-commerce",
    stack: ["React", "Vite", "Tailwind", "React Router"],
    summary: "Marketplace global de contenedores marítimos: el comprador puede cambiar el puerto de origen desde el carrito para ahorrar en flete o llegar más rápido. MVP de frontend con datos de ejemplo; Supabase, Firebase y una API de fletes están planeados.",
    hue: 210,
    repo: "https://github.com/jlouisce/NextDocker",
  },
  {
    slug: "cloudemed",
    title: "CloudeMed",
    year: "2026",
    type: "App",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    summary: "Plataforma SaaS multi-tenant para consultorios odontológicos: historias clínicas, agenda, facturación y administración. Co-fundador, lidero el frontend y la UX.",
    hue: 195,
  },
  {
    slug: "melora-connect",
    title: "Melora Connect",
    year: "2026",
    type: "App",
    stack: ["Figma", "React", "UI/UX"],
    summary: "Diseño de wireframes y pantallas de alta fidelidad, web y móvil, para una plataforma de gestión de asociaciones (AMS).",
    hue: 280,
  },
  {
    slug: "programa-phoenix",
    title: "Programa Phoenix",
    year: "2026",
    type: "App",
    stack: ["React", "Node.js", "Firebase", "PostgreSQL"],
    summary: "App de la Universidad Icesi para que estudiantes con dificultades académicas fijen metas semanales y exporten su plan a Excel o PNG.",
    hue: 25,
  },
  {
    slug: "wantme-jgmc",
    title: "Wantme · JGMC",
    year: "2026",
    type: "E-commerce",
    stack: ["Next.js", "Tailwind", "AWS"],
    summary: "Plataforma e-commerce Wantme y sitio corporativo de JGMC, desde el descubrimiento y diseño hasta el despliegue. Proyectos de OGX.",
    hue: 150,
  },
  {
    slug: "campus-marketplace",
    title: "Marketplace de campus",
    year: "2025",
    type: "E-commerce",
    stack: ["React", "Next.js", "Node.js", "AWS"],
    summary: "E-commerce para las principales sedes universitarias de Cali que conecta clientes con vendedores autorizados.",
    hue: 340,
  },
  {
    slug: "queryapp",
    title: "QueryApp",
    year: "2025",
    type: "Web",
    stack: ["Python", "Google Maps API", "Pandas"],
    summary: "Herramienta de generación de leads con APIs oficiales de Google y puntuación de prospectos (alta, media, nula) exportada a Excel.",
    hue: 60,
  },
];
