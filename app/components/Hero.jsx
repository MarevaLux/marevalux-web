import {
  ArrowRight,
  Building2,
  Check,
  Handshake,
  MapPin,
  Search,
  Target,
} from "lucide-react";

const processSteps = [
  {
    icon: Building2,
    title: "Comprensión estratégica",
    text: "Empresa, solución y propuesta de valor",
  },
  {
    icon: Search,
    title: "Prospección calificada",
    text: "Empresas y responsables con potencial",
  },
  {
    icon: Handshake,
    title: "Desarrollo comercial",
    text: "Conversaciones, seguimiento y continuidad",
  },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-[#071a2f] text-white"
    >
      {/* Fondo tecnológico */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/world-map.svg')",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(1300px, 115%) auto",
        }}
      />

      <div className="pointer-events-none absolute -right-32 -top-40 h-[560px] w-[560px] rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 h-[480px] w-[480px] rounded-full bg-blue-500/10 blur-3xl" />

      <div className="page-shell relative grid min-h-[700px] items-center gap-14 pb-20 pt-32 lg:grid-cols-[1.08fr_.92fr] lg:py-28">
        {/* Contenido principal */}
        <div className="max-w-[680px]">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.13em] text-cyan-200 uppercase backdrop-blur">
            <MapPin size={14} />
            Representación comercial B2B · Argentina
          </div>

          <h1 className="text-[clamp(2.75rem,5vw,4.5rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-white">
            Convertimos soluciones de valor en{" "}
            <span className="bg-gradient-to-r from-[#37cbd5] to-[#70e4e9] bg-clip-text text-transparent">
              oportunidades comerciales.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Actuamos como un departamento comercial externo para fabricantes,
            empresas tecnológicas y proveedores B2B que buscan desarrollar
            oportunidades con método, claridad y continuidad.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="button-primary">
              Evaluar una representación
              <ArrowRight size={18} />
            </a>

            <a href="#servicios" className="button-secondary">
              Conocer cómo trabajamos
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-7">
            {[
              "Enfoque selectivo",
              "Proceso estructurado",
              "Relaciones de largo plazo",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-sm text-slate-300"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-300/15 text-cyan-200">
                  <Check size={12} strokeWidth={2.5} />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Panel comercial */}
        <aside className="relative lg:justify-self-end">
          <div className="absolute -inset-5 rounded-[36px] border border-cyan-200/10" />
          <div className="absolute -inset-10 rounded-[48px] border border-white/[0.04]" />

          <div className="relative w-full max-w-[470px] overflow-hidden rounded-[30px] border border-white/15 bg-[#0c2743]/90 shadow-[0_35px_90px_rgba(0,0,0,.35)] backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-7 py-5">
              <div>
                <p className="text-[0.68rem] font-semibold tracking-[0.16em] text-cyan-200 uppercase">
                  Sistema MarevaLux
                </p>
                <p className="mt-1 text-sm text-slate-400">
                  Desarrollo comercial B2B
                </p>
              </div>

              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f] shadow-[0_10px_30px_rgba(24,184,198,.3)]">
                <Target size={22} strokeWidth={2.2} />
              </span>
            </div>

            <div className="p-7">
              <div className="rounded-[22px] border border-white/10 bg-white/[0.045] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">
                    Proceso comercial
                  </p>

                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/15 bg-cyan-300/10 px-3 py-1 text-[0.67rem] font-semibold tracking-wide text-cyan-200 uppercase">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    Estructurado
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {processSteps.map(({ icon: Icon, title, text }, index) => (
                    <div
                      key={title}
                      className="group flex gap-4 rounded-2xl border border-white/[0.07] bg-[#071a2f]/55 p-4 transition duration-300 hover:border-cyan-200/20 hover:bg-white/[0.07]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                        <Icon size={18} />
                      </span>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[0.65rem] font-bold text-cyan-300">
                            0{index + 1}
                          </span>
                          <p className="text-sm font-semibold text-white">
                            {title}
                          </p>
                        </div>

                        <p className="mt-1 text-xs leading-5 text-slate-400">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                    Prioridad
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Oportunidades reales
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-[0.65rem] font-semibold tracking-[0.12em] text-slate-400 uppercase">
                    Visión
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    Crecimiento sostenible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}