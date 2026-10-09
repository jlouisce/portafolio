import { process as steps } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <Section id="proceso" index="04" title="Proceso">
      <Reveal className="grid gap-px bg-line md:grid-cols-4">
        {steps.map((p, i) => (
          <div key={p.stage} data-r className="bg-background p-6 md:min-h-80 md:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-accent">0{i + 1} · {p.stage}</p>
            <h3 className="mt-10 font-serif text-3xl leading-tight">{p.title}</h3>
            <p className="mt-4 text-sm text-muted">{p.text}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
