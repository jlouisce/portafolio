import type { Lang } from "./content";

export type Project = {
  slug: string;
  title: Record<Lang, string>;
  year: string;
  type: "Web" | "App" | "E-commerce";
  stack: string[];
  summary: Record<Lang, string>;
  hue: number; // placeholder visual si el proyecto aún no tiene captura
  image?: string; // captura en /public (formato ancho ~5:2)
  visual?: "terminal"; // proyectos sin interfaz (se muestra una vista de terminal)
  repo?: string;
};

const same = (s: string): Record<Lang, string> => ({ en: s, es: s });

export const projects: Project[] = [
  {
    slug: "wantme",
    title: same("Wantme"),
    year: "2026",
    type: "E-commerce",
    stack: ["Next.js", "Tailwind", "AWS"],
    summary: {
      en: "Online store for the Colombian market with a product catalog, item customization, discounts, user accounts, a shopping cart and nationwide shipping. Built for OGX.",
      es: "Tienda en línea para el mercado colombiano con catálogo, personalización de productos, descuentos, cuentas de usuario, carrito y envíos a todo el país. Construida para OGX.",
    },
    hue: 210,
    image: "/projects/wantme.webp",
  },
  {
    slug: "jgmc",
    title: same("JGMC"),
    year: "2026",
    type: "Web",
    stack: ["Next.js", "Tailwind", "AWS"],
    summary: {
      en: "Bilingual (ES/EN) corporate website for JGMC Human Capital Consulting: services, process, insights and consultation requests. Built for OGX.",
      es: "Sitio corporativo bilingüe (ES/EN) de JGMC Human Capital Consulting: servicios, proceso, insights y solicitud de asesoría. Construido para OGX.",
    },
    hue: 30,
    image: "/projects/jgmc.webp",
  },
  {
    slug: "ogx",
    title: same("OGX"),
    year: "2026",
    type: "Web",
    stack: ["Next.js", "Tailwind", "AWS"],
    summary: {
      en: "Website for OGX, the software studio I co-founded in Cali: web platforms, online stores and data systems for growing companies. Bilingual EN/ES.",
      es: "Sitio de OGX, el estudio de software que co-fundé en Cali: plataformas web, tiendas en línea y sistemas de datos para empresas en crecimiento. Bilingüe EN/ES.",
    },
    hue: 40,
    image: "/projects/ogx.webp",
  },
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
    image: "/projects/nextdocker.webp",
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
    image: "/projects/melora.webp",
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
      en: "Command-line lead-generation tool: queries official Google APIs with configurable filters, scores each prospect as high, medium or zero conversion probability, and exports the results to an Excel sheet.",
      es: "Herramienta de terminal para generar leads: consulta las APIs oficiales de Google con filtros configurables, clasifica cada prospecto con probabilidad de conversión alta, media o nula y exporta los resultados a una hoja de Excel.",
    },
    hue: 60,
    visual: "terminal",
  },
];
