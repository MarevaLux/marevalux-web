import { CheckCircle2, ShieldCheck } from "lucide-react";

const principles = [
  "Conocemos la solución antes de representarla.",
  "Priorizamos empresas con una necesidad real.",
  "Cada oportunidad tiene una próxima acción.",
  "Cuidamos la reputación de todas las partes.",
];

export default function WhyChoose() {
  return (
    <section id="diferencial" className="relative overflow-hidden bg-[#071a2f] py-24 text-white md:py-32">
      <div className="absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="page-shell relative grid gap-16 lg:grid-cols-[1fr_.9fr] lg:gap-24">
        <div>
          <span className="eyebrow !text-cyan-300">Por qué MarevaLux</span>
          <h2 className="mt-5 max-w-2xl text-[clamp(2.3rem,4.5vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-white">
            Representar bien también significa saber qué no prometer.
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
            Nuestro diferencial está en el criterio: comprender, seleccionar,
            comunicar con honestidad y sostener cada relación comercial con método.
          </p>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm sm:p-10">
          <div className="flex items-center gap-4 border-b border-white/10 pb-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300 text-[#071a2f]">
              <ShieldCheck size={25} />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase">
                Nuestro estándar
              </p>
              <p className="mt-1 text-lg font-medium">Claridad en cada paso</p>
            </div>
          </div>

          <div className="mt-7 space-y-5">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-4">
                <CheckCircle2 className="mt-0.5 shrink-0 text-cyan-300" size={20} />
                <p className="leading-7 text-slate-200">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
