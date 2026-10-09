import { services } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <Section id="servicios" index="03" title="Servicios">
      <Reveal>
        {services.map((s, i) => (
          <div key={s.title} data-r className="grid gap-6 border-t border-line py-10 transition hover:bg-black/[0.02] md:grid-cols-12">
            <p className="font-mono text-xs text-accent md:col-span-1">0{i + 1}</p>
            <h3 className="font-serif text-4xl md:col-span-6 md:text-5xl">{s.title}</h3>
            <ul className="space-y-2 font-mono text-xs uppercase tracking-widest text-muted md:col-span-5">
              {s.scope.map((x) => <li key={x}>— {x}</li>)}
            </ul>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
