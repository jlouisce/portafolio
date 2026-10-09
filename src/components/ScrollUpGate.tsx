"use client";
import { useEffect, useState } from "react";

/** Si se intenta subir por encima del hero, tapa todo con "Efficient As Fck". */
export default function ScrollUpGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const ready = () => html.dataset.intro !== "active" && html.dataset.intro !== undefined;
    const atTop = () => window.scrollY <= 1;
    const up = () => { if (ready() && atTop()) setShow(true); };
    const down = () => setShow(false);

    // Aparece en cuanto se sube y se llega cerca del inicio (no hace falta llegar al tope).
    // Los saltos grandes (clic en el logo o en el menú) se ignoran.
    let lastY = window.scrollY;
    let upRun = 0; // distancia acumulada subiendo sin interrupción
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      if (Math.abs(delta) > window.innerHeight * 0.5) { upRun = 0; return; }
      if (delta < 0) {
        upRun += -delta;
        if (ready() && y < window.innerHeight * 0.35 && upRun > 160) setShow(true);
      } else if (delta > 4) {
        // ignora rebotes mínimos del scroll suave: solo cuenta bajar de verdad
        upRun = 0;
        setShow(false);
      }
    };

    const onWheel = (e: WheelEvent) => (e.deltaY < 0 ? up() : e.deltaY > 0 ? down() : undefined);
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowUp", "PageUp", "Home"].includes(e.key)) up();
      else if (["ArrowDown", "PageDown", "End", " "].includes(e.key)) down();
    };
    let startY = 0;
    const onTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY; };
    const onTouchMove = (e: TouchEvent) => {
      const dy = e.touches[0].clientY - startY;
      if (dy > 12) up();
      else if (dy < -12) down();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-[#fdfcfa] transition-opacity duration-500 ${show ? "opacity-100" : "opacity-0"}`}
    >
      <p className="px-6 text-center font-serif text-[clamp(2.4rem,8vw,7.5rem)] leading-none">
        Efficient As <span className="italic text-accent">Fck</span>
      </p>
    </div>
  );
}
