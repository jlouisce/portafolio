import type { Lang } from "./content";

export type Project = {
  slug: string;
  title: Record<Lang, string>;
  year: string;
  type: "Web" | "App" | "E-commerce";
  stack: string[];
  summary: Record<Lang, string>;
  hue: number; // placeholder visual hasta tener capturas reales
  repo?: string;
};

const same = (s: string): Record<Lang, string> => ({ en: s, es: s });

export const projects: Project[] = [
  {
    slug: "nextdocker",
    title: same("NextDocker"),
    year: "2026",
    type: "E-commerce",
    stack: ["React", "Vite", "Tailwind", "React Router"],
    summary: {
      en: "Global shipping-container marketplace: buyers can change the origin port from the cart to save on freight or arrive faster. Frontend MVP with sample data; Supabase, Firebase and a freight API are planned.",
      es: "Marketplace global de contenedores marítimos: el comprador puede cambiar el puerto de origen desde el carrito para ahorrar en flete o llegar más rápido. MVP de frontend con datos de ejemplo; Supabase, Firebase y una API de fletes están planeados.",
    },
    hue: 210,
    repo: "https://github.com/jlouisce/NextDocker",
  },
  {
    slug: "cloudemed",
    title: same("CloudeMed"),
    year: "2026",
    type: "App",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "AWS"],
    summary: {
      en: "Multi-tenant SaaS platform for dental practices: medical records, scheduling, billing and administration. Co-founder, leading the frontend and UX.",
      es: "Plataforma SaaS multi-tenant para consultorios odontológicos: historias clínicas, agenda, facturación y administración. Co-fundador, lidero el frontend y la UX.",
    },
    hue: 195,
  },
  {
    slug: "melora-connect",
    title: same("Melora Connect"),
    year: "2026",
    type: "App",
    stack: ["Figma", "React", "UI/UX"],
    summary: {
      en: "Wireframes and high-fidelity screens, web and mobile, for an association management software (AMS) platform.",
      es: "Diseño de wireframes y pantallas de alta fidelidad, web y móvil, para una plataforma de gestión de asociaciones (AMS).",
    },
    hue: 280,
  },
  {
    slug: "programa-phoenix",
    title: same("Programa Phoenix"),
    year: "2026",
    type: "App",
    stack: ["React", "Node.js", "Firebase", "PostgreSQL"],
    summary: {
      en: "Universidad Icesi app where students facing academic difficulties set weekly goals and export their plan to Excel or PNG.",
      es: "App de la Universidad Icesi para que estudiantes con dificultades académicas fijen metas semanales y exporten su plan a Excel o PNG.",
    },
    hue: 25,
  },
  {
    slug: "wantme-jgmc",
    title: same("Wantme · JGMC"),
    year: "2026",
    type: "E-commerce",
    stack: ["Next.js", "Tailwind", "AWS"],
    summary: {
      en: "Wantme e-commerce platform and JGMC corporate website, from discovery and design to deployment. OGX projects.",
      es: "Plataforma e-commerce Wantme y sitio corporativo de JGMC, desde el descubrimiento y diseño hasta el despliegue. Proyectos de OGX.",
    },
    hue: 150,
  },
  {
    slug: "campus-marketplace",
    title: { en: "Campus Marketplace", es: "Marketplace de campus" },
    year: "2025",
    type: "E-commerce",
    stack: ["React", "Next.js", "Node.js", "AWS"],
    summary: {
      en: "E-commerce for the main university campuses in Cali, connecting customers with authorized vendors.",
      es: "E-commerce para las principales sedes universitarias de Cali que conecta clientes con vendedores autorizados.",
    },
    hue: 340,
  },
  {
    slug: "queryapp",
    title: same("QueryApp"),
    year: "2025",
    type: "Web",
    stack: ["Python", "Google Maps API", "Pandas"],
    summary: {
      en: "Lead-generation tool using official Google APIs, with prospect scoring (high, medium, none) exported to Excel.",
      es: "Herramienta de generación de leads con APIs oficiales de Google y puntuación de prospectos (alta, media, nula) exportada a Excel.",
    },
    hue: 60,
  },
];
