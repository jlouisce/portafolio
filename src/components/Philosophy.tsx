import { pillars } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Philosophy() {
  return (
    <Section id="filosofia" index="01" title="Filosofía">
      <Reveal className="grid gap-12 md:grid-cols-3">
        {pillars.map((p, i) => (
          <div key={p.title} data-r className="border-t border-line pt-6">
            <p className="font-mono text-xs text-muted">0{i + 1}</p>
            <h3 className="mt-4 font-serif text-4xl italic">{p.title}</h3>
            <p className="mt-4 max-w-sm text-muted">{p.text}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
