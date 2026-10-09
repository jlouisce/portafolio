import Reveal from "./Reveal";

export default function Section({ id, index, title, children }: { id: string; index: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="border-t border-line px-6 py-28 md:px-10 md:py-40">
      <Reveal>
        <div data-r className="mb-16 flex items-baseline gap-6">
          <span className="font-mono text-xs text-accent">{index}</span>
          <h2 className="font-serif text-[clamp(2.5rem,6vw,5.5rem)] leading-none">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
