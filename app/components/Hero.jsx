import { ArrowRight, Check, MapPin, Target } from "lucide-react";

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#071a2f] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: "url('/world-map.svg')",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(1200px, 110%) auto",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-40 h-[480px] w-[480px] rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="page-shell relative grid min-h-[720px] items-center gap-16 py-24 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
        <div className="max-w-[690px]">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.12em] text-cyan-200 uppercase">
            <MapPin size={14} />
            Representación comercial B2B · Argentina
          </div>

          <h1 className="text-[clamp(3rem,6.4vw,5.7rem)] leading-[0.96] font-semibold tracking-[-0.065em] text-white">
            Convertimos soluciones de valor en{" "}
            <span className="text-[#37cbd5]">oportunidades comerciales.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Representamos fabricantes, empresas tecnológicas y proveedores B2B
            mediante un desarrollo comercial profesional, estructurado y enfocado
            en relaciones de largo plazo.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="button-primary">
              Evaluar una representación
              <ArrowRight size={18} />
            </a>
            <a href="#servicios" className="button-secondary">
              Conocer nuestro enfoque
            </a>
          </div>
        </div>

        <aside className="relative lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[34px] border border-cyan-300/10" />
          <div className="relative max-w-[470px] rounded-[28px] border border-white/12 bg-white/[0.07] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-10">
            <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]">
              <Target size={25} strokeWidth={2.2} />
            </div>
            <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase">
              Nuestro enfoque
            </p>
            <h2 className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.04em] text-white">
              Ser una extensión confiable de su equipo comercial.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              Comprendemos la solución, identificamos empresas con potencial y
              conducimos cada oportunidad con seguimiento y criterio profesional.
            </p>

            <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
              {[
                "Representación profesional",
                "Prospección B2B estructurada",
                "Relaciones comerciales sostenibles",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-slate-200">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200">
                    <Check size={14} />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
