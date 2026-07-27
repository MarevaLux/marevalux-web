import {
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    label: "Análisis",
    title: "Comprendemos",
    text: "Analizamos la empresa, su solución, su cliente ideal y la propuesta de valor antes de iniciar cualquier acción.",
    result: "Propuesta comprendida",
  },
  {
    number: "02",
    icon: Target,
    label: "Estrategia",
    title: "Definimos",
    text: "Seleccionamos segmentos, empresas objetivo, responsables y criterios comerciales claros.",
    result: "Segmentación definida",
  },
  {
    number: "03",
    icon: MessageSquare,
    label: "Conexión",
    title: "Conectamos",
    text: "Abrimos conversaciones profesionales y personalizadas con decisores y socios relevantes.",
    result: "Conversación iniciada",
  },
  {
    number: "04",
    icon: TrendingUp,
    label: "Desarrollo",
    title: "Desarrollamos",
    text: "Calificamos, acompañamos y damos continuidad a cada oportunidad hasta obtener una decisión.",
    result: "Oportunidad en desarrollo",
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f2f8fa_100%)] py-24 md:py-32"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[420px] w-[420px] rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,150,165,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(8,150,165,.12) 1px, transparent 1px)",
          backgroundSize: "68px 68px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, transparent 90%)",
        }}
      />

      <div className="page-shell relative">
        {/* Encabezado */}
        <div className="grid items-end gap-9 lg:grid-cols-[1fr_410px]">
          <div>
            <span className="eyebrow">Cómo trabajamos</span>

            <h2 className="section-title">
              Un proceso claro desde la comprensión hasta la oportunidad.
            </h2>
          </div>

          <div className="rounded-[22px] border border-[#d8e6ea] bg-white/80 p-6 shadow-[0_16px_45px_rgba(7,26,47,.07)] backdrop-blur-sm">
            <p className="text-sm leading-7 text-slate-600">
              Cada etapa tiene un propósito concreto para que el desarrollo
              comercial pueda organizarse, medirse y mejorarse.
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">
              <span className="h-px w-8 bg-[#18b8c6]" />
              Método MarevaLux
            </div>
          </div>
        </div>

        {/* Proceso */}
        <div className="relative mt-16">
          {/* Línea de conexión en computadora */}
          <div className="absolute top-[43px] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-[#18b8c6]/60 to-transparent lg:block" />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map(
              ({ number, icon: Icon, label, title, text, result }, index) => (
                <article
                  key={number}
                  className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[26px] border border-[#d8e6ea] bg-white p-7 shadow-[0_16px_45px_rgba(7,26,47,.055)] transition duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-[0_28px_70px_rgba(7,26,47,.12)]"
                >
                  {/* Número decorativo */}
                  <span className="pointer-events-none absolute -right-2 -top-7 text-[7rem] leading-none font-bold tracking-[-0.08em] text-[#071a2f]/[0.035]">
                    {number}
                  </span>

                  <div className="relative">
                    <div className="flex items-center justify-between gap-4">
                      <span className="relative z-10 flex h-[86px] w-[86px] items-center justify-center rounded-[24px] border-[10px] border-white bg-[#0d2947] text-cyan-300 shadow-[0_15px_35px_rgba(7,26,47,.2)] transition duration-300 group-hover:bg-[#18b8c6] group-hover:text-[#071a2f]">
                        <Icon size={25} strokeWidth={2} />
                      </span>

                      <span className="text-sm font-bold tracking-[0.15em] text-slate-300">
                        {number}
                      </span>
                    </div>

                    <p className="mt-8 text-xs font-bold tracking-[0.15em] text-[#0896a5] uppercase">
                      {label}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {text}
                    </p>
                  </div>

                  <div className="relative mt-auto border-t border-slate-200 pt-6">
                    <p className="flex items-start gap-3 text-xs leading-5 font-semibold text-[#425970]">
                      <CheckCircle2
                        size={17}
                        className="mt-0.5 shrink-0 text-[#0896a5]"
                      />
                      {result}
                    </p>
                  </div>

                  {index < steps.length - 1 && (
                    <span className="absolute top-[31px] -right-4 z-20 hidden h-8 w-8 items-center justify-center rounded-full border border-cyan-200 bg-white text-[#0896a5] shadow-sm lg:flex">
                      <ArrowRight size={14} />
                    </span>
                  )}
                </article>
              ),
            )}
          </div>
        </div>

        {/* Cierre */}
        <div className="relative mt-8 overflow-hidden rounded-[26px] bg-[#071a2f] px-7 py-8 text-white shadow-[0_24px_65px_rgba(7,26,47,.18)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold tracking-[0.15em] text-cyan-200 uppercase">
              Claridad en cada etapa
            </p>

            <p className="mt-3 max-w-3xl text-xl leading-8 font-medium tracking-[-0.02em] text-white">
              Cada oportunidad tiene contexto, un responsable y una próxima acción
              claramente definida.
            </p>
          </div>

          <a
            href="#contacto"
            className="relative mt-6 inline-flex shrink-0 items-center gap-3 rounded-full bg-[#18b8c6] px-6 py-3.5 text-sm font-bold text-[#071a2f] shadow-[0_12px_30px_rgba(24,184,198,.24)] transition hover:-translate-y-0.5 hover:bg-[#37cbd5] lg:mt-0"
          >
            Iniciar una conversación
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}