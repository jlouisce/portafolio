/**
 * Vista ilustrativa de QueryApp (herramienta de terminal, sin interfaz).
 * Los nombres y cifras son datos de ejemplo, no resultados reales.
 */
const leads = [
  { name: "Clínica Sonrisa Norte", rating: "4.8", score: "HIGH" },
  { name: "Dental Plus Granada", rating: "4.3", score: "MEDIUM" },
  { name: "Odontología San Fernando", rating: "—", score: "ZERO" },
] as const;

const scoreStyle: Record<(typeof leads)[number]["score"], string> = {
  HIGH: "bg-[#d9b866] text-[#14130f]",
  MEDIUM: "border border-[#d9b866]/70 text-[#d9b866]",
  ZERO: "border border-white/20 text-white/45",
};

const at = (n: number) => ({ ["--d" as string]: `${(0.1 + n * 0.45).toFixed(2)}s` }) as React.CSSProperties;

export default function TerminalPreview() {
  return (
    <div className="absolute inset-0 bg-[#14130f] text-[#ece7dd]" style={{ containerType: "inline-size" }}>
      <div
        className="flex h-full flex-col font-mono"
        style={{ fontSize: "clamp(9.5px, 2.5cqw, 24px)", lineHeight: 1.6 }}
      >
        {/* Barra de ventana */}
        <div className="flex shrink-0 items-center gap-[0.55em] border-b border-white/10 px-[1.4em] py-[0.7em]">
          <span className="h-[0.7em] w-[0.7em] rounded-full bg-white/20" />
          <span className="h-[0.7em] w-[0.7em] rounded-full bg-white/20" />
          <span className="h-[0.7em] w-[0.7em] rounded-full bg-[#d9b866]" />
          <span className="ml-[1em] text-white/45">queryapp — python</span>
          <span className="ml-auto text-[0.85em] uppercase tracking-widest text-white/30">sample output</span>
        </div>

        <div className="min-h-0 flex-1 overflow-hidden px-[1.4em] py-[1em]">
          <p className="term-line" style={at(0)}>
            <span className="text-[#d9b866]">$</span> python queryapp.py <span className="text-white/45">--niche</span> &quot;dental clinic&quot;{" "}
            <span className="text-white/45">--city</span> Cali
          </p>
          <p className="term-line text-white/55" style={at(1)}>
            › Searching Google Places API…
          </p>
          <p className="term-line" style={at(2)}>
            <span className="text-[#d9b866]">✓</span> 142 businesses found · scoring leads
          </p>
          <div className="mt-[0.4em]">
            {leads.map((l, i) => (
              <p key={l.name} className="term-line flex items-center gap-[1em] whitespace-nowrap" style={at(3 + i * 0.5)}>
                <span className="w-[17em] truncate text-white/85">{l.name}</span>
                <span className="w-[3.2em] text-white/45">★ {l.rating}</span>
                <span className={`rounded-full px-[0.8em] text-[0.8em] tracking-widest ${scoreStyle[l.score]}`}>{l.score}</span>
              </p>
            ))}
          </div>
          <p className="term-line mt-[0.4em]" style={at(5)}>
            <span className="text-[#d9b866]">✓</span> Exported → <span className="text-[#d9b866]">leads_cali.xlsx</span>
            <span className="term-cursor ml-[0.4em] inline-block h-[1em] w-[0.5em] translate-y-[0.15em] bg-[#d9b866]" />
          </p>
        </div>
      </div>
    </div>
  );
}
