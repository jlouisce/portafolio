import { site, experience } from "@/data/site";
import Section from "./Section";
import Reveal from "./Reveal";

export default function About() {
  return (
    <Section id="sobre-mi" index="05" title="Sobre mí">
      <Reveal className="grid gap-12 md:grid-cols-12">
        <div
          data-r
          className="aspect-[4/5] bg-[#141413] md:col-span-4"
          style={{ backgroundImage: "radial-gradient(circle at 50% 30%, rgba(214,255,63,.25), transparent 65%)" }}
          role="img"
          aria-label="Foto (placeholder)"
        />
        <div className="md:col-span-7 md:col-start-6">
          {site.bio.map((b) => (
            <p key={b} data-r className="mb-6 font-serif text-3xl leading-snug md:text-4xl">{b}</p>
          ))}
          <ul data-r className="mt-12 border-b border-line">
            {experience.map((e) => (
              <li key={e.org} className="grid gap-1 border-t border-line py-4 md:grid-cols-12">
                <span className="font-mono text-xs uppercase tracking-widest text-muted md:col-span-4">{e.period}</span>
                <span className="font-serif text-2xl md:col-span-4">{e.org}</span>
                <span className="text-sm text-muted md:col-span-4">{e.role}</span>
              </li>
            ))}
          </ul>
          <a data-r href={site.cv} target="_blank" rel="noreferrer" className="mt-8 inline-block font-mono text-xs uppercase tracking-widest text-accent hover:underline">Ver CV completo ↗</a>
          <div data-r className="mt-12 flex flex-wrap gap-2">
            {site.stack.map((s) => (
              <span key={s} className="rounded-full border border-line px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted">{s}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
