type LenisLike = { scrollTo: (t: Element, o?: object) => void };

/** Desplaza suavemente a una sección por id (usa Lenis si está activo). */
export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as unknown as { __lenis?: LenisLike }).__lenis;
  if (lenis) lenis.scrollTo(el);
  else el.scrollIntoView({ behavior: "smooth" });
}
