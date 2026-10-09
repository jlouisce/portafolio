export type Lang = "en" | "es";

export type Content = {
  nav: { id: string; label: string }[];
  menu: { open: string; close: string };
  intro: { words: string[]; hint: string; pre: string; em: string };
  hero: { lines: string[]; tagline: string; scroll: string };
  sections: { philosophy: string; projects: string; services: string; process: string; about: string; contact: string };
  pillars: { title: string; text: string }[];
  projects: {
    filters: { all: string; web: string; app: string; ecommerce: string };
    view: string;
    back: string;
    next: string;
    year: string;
    type: string;
    stack: string;
    code: string;
  };
  services: { title: string; scope: string[] }[];
  process: { stage: string; title: string; text: string }[];
  experience: { role: string; org: string; period: string }[];
  about: { bio: string[]; cv: string; languages: string };
  contact: { title: string; location: string };
  footer: { top: string };
};

export const content: Record<Lang, Content> = {
  en: {
    nav: [
      { id: "filosofia", label: "Philosophy" },
      { id: "proyectos", label: "Projects" },
      { id: "servicios", label: "Services" },
      { id: "proceso", label: "Process" },
      { id: "sobre-mi", label: "About" },
      { id: "contacto", label: "Contact" },
    ],
    menu: { open: "Menu", close: "Close" },
    intro: {
      words: ["Versatility", "Perfection", "Efficiency"],
      hint: "Scroll ↓",
      pre: "Your greatest desire ",
      em: "in code",
    },
    hero: {
      lines: ["From wireframe", "to production,", "with intent."],
      tagline: "From wireframe to production.",
      scroll: "Scroll ↓",
    },
    sections: {
      philosophy: "Philosophy",
      projects: "Projects",
      services: "Services",
      process: "Process",
      about: "About me",
      contact: "Let's talk",
    },
    pillars: [
      { title: "Design", text: "Wireframes, flows and screens that developers can implement directly. The experience is thought through before the code." },
      { title: "Engineering", text: "Typed code, well-modeled data and cloud infrastructure. Products that grow from one user to many." },
      { title: "Detail", text: "Performance, accessibility and motion crafted down to the last pixel. The best work is the work you don't notice." },
    ],
    projects: {
      filters: { all: "All", web: "Web", app: "App", ecommerce: "E-commerce" },
      view: "View project →",
      back: "← Projects",
      next: "Next project →",
      year: "Year",
      type: "Type",
      stack: "Stack",
      code: "View code on GitHub ↗",
    },
    services: [
      { title: "SaaS products", scope: ["Multi-tenant architecture", "Next.js · Node.js · PostgreSQL", "AWS and Docker"] },
      { title: "Websites & e-commerce", scope: ["Custom design and development", "React · Next.js · Tailwind", "Deployment and hosting"] },
      { title: "UI/UX design", scope: ["Wireframes and prototypes in Figma", "User flows", "Developer handoff"] },
      { title: "Automation & AI", scope: ["Python and API tools", "AI agents in development workflows", "Data pipelines"] },
    ],
    process: [
      { stage: "Discover", title: "Understand the problem", text: "Requirements, users and goals before drawing or coding anything." },
      { stage: "Design", title: "Wireframe to high fidelity", text: "Flows and screens in Figma, ready to implement." },
      { stage: "Build", title: "End-to-end engineering", text: "Frontend, backend and data with review and deployment standards." },
      { stage: "Deliver", title: "Production and improvement", text: "Cloud deployment, iteration with real users and support." },
    ],
    experience: [
      { role: "Full Stack Developer & UI/UX Designer", org: "Melora Connect", period: "Oct 2026 — Present" },
      { role: "Full Stack Developer · Co-founder", org: "CloudeMed", period: "Aug 2026 — Present" },
      { role: "Full Stack Developer · Internship", org: "Universidad Icesi", period: "Jun — Jul 2026" },
      { role: "Software Engineer · Co-founder", org: "OGX", period: "Feb — Jun 2026" },
      { role: "Software Engineer · Freelance", org: "QueryApp", period: "Sep 2025 — Jan 2026" },
      { role: "Full Stack Programmer · Internship", org: "Productos Ramo S.A.", period: "Feb — Jun 2025" },
    ],
    about: {
      bio: [
        "I design and build web and SaaS products end to end: from the wireframe to production deployment.",
        "Today I design and build at Melora Connect and co-found CloudeMed, a multi-tenant SaaS platform for dental practices. I'm studying Interactive Media Design at Universidad Icesi.",
      ],
      cv: "View full CV ↗",
      languages: "Spanish native · English C2",
    },
    contact: { title: "Let's talk", location: "Cali, Colombia · Remote" },
    footer: { top: "Back to top ↑" },
  },
  es: {
    nav: [
      { id: "filosofia", label: "Filosofía" },
      { id: "proyectos", label: "Proyectos" },
      { id: "servicios", label: "Servicios" },
      { id: "proceso", label: "Proceso" },
      { id: "sobre-mi", label: "Sobre mí" },
      { id: "contacto", label: "Contacto" },
    ],
    menu: { open: "Menú", close: "Cerrar" },
    intro: {
      words: ["Versatilidad", "Perfección", "Eficiencia"],
      hint: "Scroll ↓",
      pre: "Tu mayor deseo ",
      em: "en código",
    },
    hero: {
      lines: ["Del wireframe", "a producción,", "con intención."],
      tagline: "Del wireframe a producción.",
      scroll: "Scroll ↓",
    },
    sections: {
      philosophy: "Filosofía",
      projects: "Proyectos",
      services: "Servicios",
      process: "Proceso",
      about: "Sobre mí",
      contact: "Hablemos",
    },
    pillars: [
      { title: "Diseño", text: "Wireframes, flujos y pantallas que los desarrolladores pueden implementar directamente. La experiencia se piensa antes del código." },
      { title: "Ingeniería", text: "Código tipado, datos bien modelados e infraestructura en la nube. Productos que crecen de un usuario a muchos." },
      { title: "Detalle", text: "Rendimiento, accesibilidad y movimiento cuidados hasta el último píxel. Lo mejor es lo que no estorba." },
    ],
    projects: {
      filters: { all: "Todos", web: "Web", app: "App", ecommerce: "E-commerce" },
      view: "Ver proyecto →",
      back: "← Proyectos",
      next: "Siguiente proyecto →",
      year: "Año",
      type: "Tipo",
      stack: "Stack",
      code: "Ver código en GitHub ↗",
    },
    services: [
      { title: "Productos SaaS", scope: ["Arquitectura multi-tenant", "Next.js · Node.js · PostgreSQL", "AWS y Docker"] },
      { title: "Sitios y e-commerce", scope: ["Diseño y desarrollo a medida", "React · Next.js · Tailwind", "Despliegue y hosting"] },
      { title: "Diseño UI/UX", scope: ["Wireframes y prototipos en Figma", "Flujos de usuario", "Handoff a desarrollo"] },
      { title: "Automatización e IA", scope: ["Herramientas con Python y APIs", "Agentes de IA en flujos de desarrollo", "Pipelines de datos"] },
    ],
    process: [
      { stage: "Descubrir", title: "Entender el problema", text: "Requisitos, usuarios y objetivos antes de dibujar o programar nada." },
      { stage: "Diseñar", title: "Wireframe a alta fidelidad", text: "Flujos y pantallas en Figma, listos para implementar." },
      { stage: "Construir", title: "Ingeniería de punta a punta", text: "Frontend, backend y datos con estándares de revisión y despliegue." },
      { stage: "Entregar", title: "Producción y mejora", text: "Despliegue en la nube, iteración con usuarios reales y soporte." },
    ],
    experience: [
      { role: "Full Stack Developer & UI/UX Designer", org: "Melora Connect", period: "Oct 2026 — Presente" },
      { role: "Full Stack Developer · Co-fundador", org: "CloudeMed", period: "Ago 2026 — Presente" },
      { role: "Full Stack Developer · Práctica", org: "Universidad Icesi", period: "Jun — Jul 2026" },
      { role: "Software Engineer · Co-fundador", org: "OGX", period: "Feb — Jun 2026" },
      { role: "Software Engineer · Freelance", org: "QueryApp", period: "Sep 2025 — Ene 2026" },
      { role: "Full Stack Programmer · Práctica", org: "Productos Ramo S.A.", period: "Feb — Jun 2025" },
    ],
    about: {
      bio: [
        "Diseño y construyo productos web y SaaS de principio a fin: desde el wireframe hasta el despliegue en producción.",
        "Hoy diseño y desarrollo en Melora Connect y co-fundo CloudeMed, una plataforma SaaS multi-tenant para consultorios odontológicos. Estudio Diseño de Medios Interactivos en la Universidad Icesi.",
      ],
      cv: "Ver CV completo ↗",
      languages: "Español nativo · Inglés C2",
    },
    contact: { title: "Hablemos", location: "Cali, Colombia · Remoto" },
    footer: { top: "Volver arriba ↑" },
  },
};
