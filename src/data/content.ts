export type Lang = "en" | "es";

export type Content = {
  nav: { id: string; label: string }[];
  menu: { open: string; close: string };
  intro: { words: string[]; hint: string; pre: string; em: string };
  hero: { lines: string[]; tagline: string; scroll: string; cv: string };
  philosophyLead: string;
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
  services: {
    headline: string;
    em: string;
    lead: string;
    items: { title: string; text: string; tags: string[] }[];
    cta: string;
  };
  process: { stage: string; title: string; text: string }[];
  experience: { role: string; org: string; period: string }[];
  about: { bio: string[]; cv: string; languages: string };
  contact: { title: string; lead: string; location: string; email: string };
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
      cv: "View Resume ↗",
    },
    philosophyLead: "Three principles behind every project I build.",
    sections: {
      philosophy: "Philosophy",
      projects: "Projects",
      services: "Services",
      process: "Process",
      about: "About me",
      contact: "Let's talk",
    },
    pillars: [
      { title: "Versatility", text: "From online stores to data platforms, from landing pages to SaaS. I move across the stack and across industries, so the tool always fits the problem, never the other way around." },
      { title: "Perfection", text: "Details are not decoration. Typography, spacing, motion and edge cases get the same care as the architecture, because the small things are what people remember." },
      { title: "Efficiency", text: "Clean, typed, maintainable code and sensible infrastructure. Fast to load, fast to ship and cheap to run: results without wasted effort." },
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
    services: {
      headline: "Any software need,",
      em: "solved.",
      lead: "I build websites of every kind, from e-commerce stores to data-management software. Whatever you need built, I can take it from idea to production.",
      items: [
        { title: "E-commerce & online stores", text: "Catalogs, carts, payments and logistics, built to sell and to scale.", tags: ["Next.js", "Payments", "Supabase"] },
        { title: "Websites & landing pages", text: "Corporate sites, portfolios and campaign pages: fast, accessible and unmistakably yours.", tags: ["React", "Tailwind", "SEO"] },
        { title: "Data & management software", text: "Dashboards, internal tools and reporting systems that turn raw data into decisions.", tags: ["PostgreSQL", "Python", "APIs"] },
        { title: "Web apps & SaaS", text: "Multi-tenant platforms with authentication, roles and billing, from MVP to production.", tags: ["Node.js", "AWS", "Docker"] },
        { title: "Automation & integrations", text: "Scripts, APIs and AI agents that remove repetitive work and connect your tools.", tags: ["Python", "REST", "AI agents"] },
        { title: "UI/UX design", text: "Wireframes, prototypes and design systems in Figma, ready for development.", tags: ["Figma", "Prototyping", "Handoff"] },
      ],
      cta: "Don't see your need? Tell me about it →",
    },
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
    contact: {
      title: "Let's talk",
      lead: "Have a project or an idea? Tell me about it. I'd love to hear what you want to build.",
      location: "Cali, Colombia · Remote",
      email: "Write me an email",
    },
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
      cv: "Ver CV ↗",
    },
    philosophyLead: "Tres principios detrás de cada proyecto que construyo.",
    sections: {
      philosophy: "Filosofía",
      projects: "Proyectos",
      services: "Servicios",
      process: "Proceso",
      about: "Sobre mí",
      contact: "Hablemos",
    },
    pillars: [
      { title: "Versatilidad", text: "De tiendas en línea a plataformas de datos, de landing pages a SaaS. Me muevo por todo el stack y por distintas industrias, para que la herramienta siempre se ajuste al problema y nunca al revés." },
      { title: "Perfección", text: "Los detalles no son decoración. La tipografía, el espaciado, el movimiento y los casos límite reciben el mismo cuidado que la arquitectura, porque lo pequeño es lo que la gente recuerda." },
      { title: "Eficiencia", text: "Código limpio, tipado y mantenible, e infraestructura sensata. Rápido de cargar, rápido de entregar y barato de operar: resultados sin esfuerzo desperdiciado." },
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
    services: {
      headline: "Cualquier necesidad de software,",
      em: "resuelta.",
      lead: "Creo sitios web de todo tipo, desde tiendas e-commerce hasta software de manejo de datos. Sea lo que necesites construir, puedo llevarlo de la idea a producción.",
      items: [
        { title: "E-commerce y tiendas en línea", text: "Catálogos, carritos, pagos y logística, pensados para vender y escalar.", tags: ["Next.js", "Pagos", "Supabase"] },
        { title: "Sitios web y landing pages", text: "Sitios corporativos, portafolios y páginas de campaña: rápidos, accesibles y inconfundiblemente tuyos.", tags: ["React", "Tailwind", "SEO"] },
        { title: "Software de datos y gestión", text: "Dashboards, herramientas internas y sistemas de reportes que convierten datos en decisiones.", tags: ["PostgreSQL", "Python", "APIs"] },
        { title: "Apps web y SaaS", text: "Plataformas multi-tenant con autenticación, roles y facturación, del MVP a producción.", tags: ["Node.js", "AWS", "Docker"] },
        { title: "Automatización e integraciones", text: "Scripts, APIs y agentes de IA que eliminan trabajo repetitivo y conectan tus herramientas.", tags: ["Python", "REST", "Agentes de IA"] },
        { title: "Diseño UI/UX", text: "Wireframes, prototipos y sistemas de diseño en Figma, listos para desarrollo.", tags: ["Figma", "Prototipos", "Handoff"] },
      ],
      cta: "¿No ves tu necesidad? Cuéntamela →",
    },
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
    contact: {
      title: "Hablemos",
      lead: "¿Tienes un proyecto o una idea? Cuéntamela. Me encantaría saber qué quieres construir.",
      location: "Cali, Colombia · Remoto",
      email: "Escríbeme un correo",
    },
    footer: { top: "Volver arriba ↑" },
  },
};
