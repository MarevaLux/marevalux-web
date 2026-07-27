import {
  ArrowUpRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Check,
  Network,
  Search,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    label: "Representación",
    title: "Departamento comercial externo",
    text: "Nos integramos como una extensión profesional de la empresa para comprender, presentar y desarrollar comercialmente su solución.",
    points: [
      "Comprensión profunda de la solución",
      "Construcción de la propuesta comercial",
      "Representación profesional de la marca",
    ],
    featured: true,
  },
  {
    number: "02",
    icon: Search,
    label: "Investigación",
    title: "Prospección B2B",
    text: "Definimos el perfil de cliente adecuado, investigamos empresas y contactamos responsables con potencial real.",
    points: [
      "Definición del cliente ideal",
      "Investigación de empresas y decisores",
      "Contacto comercial personalizado",
    ],
  },
  {
    number: "03",
    icon: Network,
    label: "Desarrollo",
    title: "Oportunidades comerciales",
    text: "Convertimos los primeros contactos en conversaciones calificadas y acompañamos cada posibilidad de negocio.",
    points: [
      "Diagnóstico de necesidades",
      "Coordinación de presentaciones",
      "Seguimiento de propuestas",
    ],
  },
  {
    number: "04",
    icon: ChartNoAxesCombined,
    label: "Continuidad",
    title: "Seguimiento y crecimiento",
    text: "Organizamos cada próxima acción para evitar oportunidades abandonadas y construir relaciones comerciales sostenibles.",
    points: [
      "Registro del avance comercial",
      "Seguimiento de cada oportunidad",
      "Relaciones de largo plazo",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative isolate overflow-hidden bg-[#f3f8fa] py-24 md:py-32"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-blue-300/10 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(8,150,165,.16) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, transparent 90%)",
        }}
      />

      <div className="page-shell relative">
        {/* Encabezado */}
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_440px]">
          <div>
            <span className="eyebrow">Qué hacemos</span>

            <h2 className="section-title">
              Desarrollo comercial que se convierte en acciones concretas.
            </h2>
          </div>

          <div className="pb-2">
            <p className="text-lg leading-8 text-slate-600">
              MarevaLux no se limita a presentar empresas. Construimos un proceso
              para comprender, investigar, conectar y dar continuidad.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#0896a5]">
              <span className="h-px w-10 bg-[#18b8c6]" />
              Un sistema comercial completo
            </div>
          </div>
        </div>

        {/* Servicios */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map(
            ({
              number,
              icon: Icon,
              label,
              title,
              text,
              points,
              featured,
            }) => (
              <article
                key={number}
                className={`group relative overflow-hidden rounded-[28px] border p-8 transition duration-300 sm:p-10 ${
                  featured
                    ? "border-[#153b5e] bg-[#071a2f] text-white shadow-[0_28px_70px_rgba(7,26,47,.2)]"
                    : "border-[#dce6eb] bg-white shadow-[0_15px_45px_rgba(7,26,47,.045)] hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_24px_65px_rgba(7,26,47,.1)]"
                }`}
              >
                {featured && (
                  <>
                    <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />
                    <div
                      className="pointer-events-none absolute inset-0 opacity-[0.07]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                      }}
                    />
                  </>
                )}

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <span
                      className={`flex h-13 w-13 items-center justify-center rounded-2xl transition ${
                        featured
                          ? "bg-[#18b8c6] text-[#071a2f] shadow-[0_12px_30px_rgba(24,184,198,.25)]"
                          : "bg-cyan-50 text-[#0896a5] group-hover:bg-[#18b8c6] group-hover:text-[#071a2f]"
                      }`}
                    >
                      <Icon size={24} strokeWidth={2} />
                    </span>

                    <div className="text-right">
                      <span
                        className={`block text-xs font-bold tracking-[0.16em] uppercase ${
                          featured ? "text-cyan-200" : "text-[#0896a5]"
                        }`}
                      >
                        {label}
                      </span>

                      <span
                        className={`mt-2 block text-sm font-semibold tracking-widest ${
                          featured ? "text-white/25" : "text-slate-300"
                        }`}
                      >
                        {number}
                      </span>
                    </div>
                  </div>

                  <h3
                    className={`mt-9 max-w-md text-[clamp(1.65rem,2.8vw,2.25rem)] leading-tight font-semibold tracking-[-0.04em] ${
                      featured ? "text-white" : "text-[#071a2f]"
                    }`}
                  >
                    {title}
                  </h3>

                  <p
                    className={`mt-5 max-w-xl leading-7 ${
                      featured ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {text}
                  </p>

                  <div
                    className={`mt-8 space-y-3 border-t pt-7 ${
                      featured ? "border-white/10" : "border-slate-200"
                    }`}
                  >
                    {points.map((point) => (
                      <div
                        key={point}
                        className={`flex items-center gap-3 text-sm font-medium ${
                          featured ? "text-slate-200" : "text-slate-600"
                        }`}
                      >
                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                            featured
                              ? "bg-cyan-300/15 text-cyan-200"
                              : "bg-cyan-50 text-[#0896a5]"
                          }`}
                        >
                          <Check size={13} strokeWidth={2.5} />
                        </span>

                        {point}
                      </div>
                    ))}
                  </div>

                  <div
                    className={`mt-8 flex items-center justify-between rounded-2xl border px-5 py-4 ${
                      featured
                        ? "border-white/10 bg-white/[0.05]"
                        : "border-slate-200 bg-[#f8fbfc]"
                    }`}
                  >
                    <span
                      className={`text-xs font-semibold tracking-[0.11em] uppercase ${
                        featured ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Parte del sistema MarevaLux
                    </span>

                    <ArrowUpRight
                      size={18}
                      className={
                        featured
                          ? "text-cyan-300"
                          : "text-[#0896a5] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      }
                    />
                  </div>
                </div>
              </article>
            ),
          )}
        </div>

        {/* Cierre de sección */}
        <div className="mt-8 grid overflow-hidden rounded-[26px] border border-[#dce6eb] bg-white shadow-[0_18px_55px_rgba(7,26,47,.06)] lg:grid-cols-[1fr_auto]">
          <div className="px-7 py-8 sm:px-10">
            <p className="text-xs font-bold tracking-[0.15em] text-[#0896a5] uppercase">
              Nuestro compromiso
            </p>

            <p className="mt-3 max-w-3xl text-xl leading-8 font-medium tracking-[-0.02em] text-[#071a2f]">
              Cada oportunidad debe tener contexto, un responsable y una próxima
              acción claramente definida.
            </p>
          </div>

          <a
            href="#proceso"
            className="flex items-center justify-center gap-3 border-t border-slate-200 bg-[#0d2947] px-9 py-7 font-semibold text-white transition hover:bg-[#123858] lg:border-t-0 lg:border-l"
          >
            Ver nuestro proceso
            <ArrowUpRight size={18} className="text-cyan-300" />
          </a>
        </div>
      </div>
    </section>
  );
}