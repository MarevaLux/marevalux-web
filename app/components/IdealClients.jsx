import {
  ArrowUpRight,
  Boxes,
  CheckCircle2,
  Factory,
  MonitorCog,
  PackageSearch,
  Sparkles,
} from "lucide-react";

const clientProfiles = [
  {
    number: "01",
    icon: Factory,
    title: "Fabricantes",
    text: "Empresas con capacidad productiva que buscan desarrollar nuevos clientes, distribuidores o canales comerciales.",
    detail: "Productos y capacidad de crecimiento",
  },
  {
    number: "02",
    icon: MonitorCog,
    title: "Empresas tecnológicas",
    text: "Proveedores de software y soluciones digitales que necesitan una representación comercial especializada.",
    detail: "Tecnología aplicada a empresas",
  },
  {
    number: "03",
    icon: Boxes,
    title: "Proveedores B2B",
    text: "Compañías con servicios o soluciones de valor que requieren un proceso constante para generar oportunidades.",
    detail: "Soluciones empresariales",
  },
  {
    number: "04",
    icon: PackageSearch,
    title: "Mayoristas y distribuidores",
    text: "Negocios que quieren fortalecer, organizar o digitalizar sus operaciones y su canal comercial.",
    detail: "Comercialización entre empresas",
  },
];

const selectionCriteria = [
  "Una solución que resuelva una necesidad concreta.",
  "Capacidad para atender correctamente a nuevos clientes.",
  "Visión de crecimiento y relaciones de largo plazo.",
];

export default function IdealClients() {
  return (
    <section
      id="empresas"
      className="relative isolate overflow-hidden border-y border-slate-200 bg-white py-24 md:py-32"
    >
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute -right-48 -top-48 h-[520px] w-[520px] rounded-full bg-cyan-200/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-56 -left-40 h-[480px] w-[480px] rounded-full bg-blue-100/50 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(8,150,165,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(8,150,165,.12) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to right, transparent, black 45%, transparent)",
        }}
      />

      <div className="page-shell relative">
        {/* Encabezado */}
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <span className="eyebrow">Con quiénes trabajamos</span>

            <h2 className="section-title">
              Representamos empresas preparadas para convertir su potencial en
              crecimiento.
            </h2>
          </div>

          <div className="pb-2 lg:justify-self-end">
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Trabajamos con organizaciones que ofrecen una solución sólida,
              comprenden el valor de un proceso comercial y buscan construir
              relaciones sostenibles.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#0896a5]">
              <span className="h-px w-10 bg-[#18b8c6]" />
              Selección estratégica de representadas
            </div>
          </div>
        </div>

        {/* Composición principal */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[.78fr_1.22fr]">
          {/* Criterios */}
          <article className="relative overflow-hidden rounded-[30px] border border-[#173b5a] bg-[#071a2f] p-8 text-white shadow-[0_28px_75px_rgba(7,26,47,.2)] sm:p-10">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-300/15 blur-3xl" />

            <div className="relative">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f] shadow-[0_12px_30px_rgba(24,184,198,.28)]">
                <Sparkles size={23} />
              </span>

              <p className="mt-8 text-xs font-bold tracking-[0.16em] text-cyan-200 uppercase">
                Nuestro criterio
              </p>

              <h3 className="mt-4 max-w-md text-[clamp(2rem,3.5vw,3rem)] leading-[1.05] font-semibold tracking-[-0.045em] text-white">
                No se trata de representar cualquier propuesta.
              </h3>

              <p className="mt-6 max-w-md leading-7 text-slate-300">
                Antes de comenzar, evaluamos la solución, el mercado y la
                capacidad de ambas partes para construir una relación comercial
                seria.
              </p>

              <div className="mt-9 space-y-4 border-t border-white/10 pt-8">
                {selectionCriteria.map((criterion) => (
                  <div
                    key={criterion}
                    className="flex gap-3 text-sm leading-6 text-slate-200"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-cyan-300"
                    />
                    {criterion}
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/30 hover:bg-white/[0.1]"
              >
                Evaluar una representación
                <ArrowUpRight size={17} className="text-cyan-300" />
              </a>
            </div>
          </article>

          {/* Perfiles */}
          <div className="grid gap-5 sm:grid-cols-2">
            {clientProfiles.map(
              ({ number, icon: Icon, title, text, detail }) => (
                <article
                  key={number}
                  className="group relative overflow-hidden rounded-[26px] border border-[#dce6eb] bg-[#f8fbfc] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:bg-white hover:shadow-[0_22px_60px_rgba(7,26,47,.1)] sm:p-8"
                >
                  <div className="pointer-events-none absolute -right-14 -top-14 h-36 w-36 rounded-full bg-cyan-200/0 blur-2xl transition duration-300 group-hover:bg-cyan-200/30" />

                  <div className="relative">
                    <div className="flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-100 bg-white text-[#0896a5] shadow-[0_8px_24px_rgba(7,26,47,.06)] transition group-hover:border-[#18b8c6] group-hover:bg-[#18b8c6] group-hover:text-[#071a2f]">
                        <Icon size={22} />
                      </span>

                      <span className="text-sm font-bold tracking-[0.14em] text-slate-300">
                        {number}
                      </span>
                    </div>

                    <h3 className="mt-8 text-2xl leading-tight font-semibold tracking-[-0.035em] text-[#071a2f]">
                      {title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {text}
                    </p>

                    <div className="mt-7 flex items-center justify-between border-t border-slate-200 pt-5">
                      <span className="max-w-[80%] text-xs font-semibold tracking-[0.04em] text-[#0896a5]">
                        {detail}
                      </span>

                      <ArrowUpRight
                        size={17}
                        className="text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0896a5]"
                      />
                    </div>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}