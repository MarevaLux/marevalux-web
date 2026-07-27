import {
  ArrowUpRight,
  CheckCircle2,
  Eye,
  ListChecks,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Comprensión real",
    text: "Conocemos la solución, su valor y sus límites antes de representarla.",
  },
  {
    icon: Target,
    title: "Selección con criterio",
    text: "Priorizamos empresas que presentan una necesidad y un potencial concreto.",
  },
  {
    icon: ListChecks,
    title: "Seguimiento constante",
    text: "Cada conversación tiene contexto, registro y una próxima acción definida.",
  },
  {
    icon: ShieldCheck,
    title: "Reputación protegida",
    text: "Cuidamos la confianza y la imagen comercial de todas las partes.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="diferencial"
      className="relative isolate overflow-hidden bg-[#071a2f] py-24 text-white md:py-32"
    >
      {/* Fondo premium */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to right, black, transparent 58%, black)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage: "url('/world-map.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(1350px, 120%) auto",
        }}
      />

      <div className="pointer-events-none absolute -left-40 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 -bottom-28 h-[440px] w-[440px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="page-shell relative">
        <div className="grid items-center gap-16 lg:grid-cols-[.92fr_1.08fr] lg:gap-20">
          {/* Mensaje principal */}
          <div>
            <span className="eyebrow !text-cyan-300">Por qué MarevaLux</span>

            <h2 className="mt-5 max-w-2xl text-[clamp(2.55rem,4.8vw,4.6rem)] leading-[1.01] font-semibold tracking-[-0.058em] text-white">
              Representar bien también significa saber qué no prometer.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Nuestro diferencial está en el criterio: comprender, seleccionar,
              comunicar con honestidad y sostener cada relación comercial con
              método.
            </p>

            {/* Declaración */}
            <div className="relative mt-9 max-w-xl overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.055] p-7 backdrop-blur-sm">
              <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#37cbd5] to-[#0896a5]" />
              <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-cyan-300/10 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                    <Sparkles size={18} />
                  </span>

                  <p className="text-xs font-bold tracking-[0.15em] text-cyan-200 uppercase">
                    Nuestro compromiso
                  </p>
                </div>

                <p className="mt-5 text-lg leading-8 font-medium text-white">
                  No prometemos resultados sin comprender primero la solución y
                  el mercado.
                </p>

                <p className="mt-3 leading-7 text-slate-300">
                  Sí comprometemos preparación, comunicación clara, seguimiento
                  profesional y continuidad en cada oportunidad.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Criterio", "Método", "Transparencia", "Continuidad"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-xs font-semibold text-slate-300"
                  >
                    <CheckCircle2 size={13} className="text-cyan-300" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Estándares */}
          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] border border-cyan-200/10" />
            <div className="absolute -inset-10 rounded-[46px] border border-white/[0.04]" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[#0c2743]/90 p-7 shadow-[0_35px_90px_rgba(0,0,0,.28)] backdrop-blur-xl sm:p-9">
              <div className="flex items-center justify-between gap-6 border-b border-white/10 pb-7">
                <div className="flex items-center gap-4">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f] shadow-[0_12px_30px_rgba(24,184,198,.25)]">
                    <ShieldCheck size={25} />
                  </span>

                  <div>
                    <p className="text-xs font-bold tracking-[0.15em] text-cyan-200 uppercase">
                      Nuestro estándar
                    </p>

                    <p className="mt-1 text-xl font-semibold tracking-[-0.025em] text-white">
                      Claridad en cada paso
                    </p>
                  </div>
                </div>

                <span className="hidden rounded-full border border-cyan-200/15 bg-cyan-300/10 px-3 py-1.5 text-[0.65rem] font-bold tracking-[0.12em] text-cyan-200 uppercase sm:inline-flex">
                  MarevaLux
                </span>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {principles.map(({ icon: Icon, title, text }, index) => (
                  <article
                    key={title}
                    className="group relative overflow-hidden rounded-[20px] border border-white/[0.08] bg-white/[0.045] p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-200/20 hover:bg-white/[0.075]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200 transition group-hover:bg-[#18b8c6] group-hover:text-[#071a2f]">
                        <Icon size={18} />
                      </span>

                      <span className="text-xs font-bold tracking-widest text-white/20">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-white">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      {text}
                    </p>
                  </article>
                ))}
              </div>

              <a
                href="#contacto"
                className="mt-6 flex items-center justify-between rounded-[18px] border border-white/10 bg-[#071a2f]/60 px-5 py-4 text-sm font-semibold text-white transition hover:border-cyan-200/20 hover:bg-[#071a2f]"
              >
                Evaluar si existe una oportunidad para trabajar juntos
                <ArrowUpRight size={18} className="shrink-0 text-cyan-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}