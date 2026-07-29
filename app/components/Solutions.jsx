import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  MapPin,
  MessageSquare,
  ShoppingCart,
  Workflow,
} from "lucide-react";

const funcionesVentas = [
  {
    title: "Catálogo digital",
    text: "Productos, precios y condiciones comerciales.",
  },
  {
    title: "Gestión de pedidos",
    text: "Clientes, vendedores y estados centralizados.",
  },
  
    {
  title: "Gestión de clientes (CRM)",
  text: "Clientes, vendedores y pedidos centralizados.",

  },
];

const automatizaciones = [
  { icon: MessageSquare, text: "WhatsApp y chatbots" },
  { icon: Bot, text: "Transcripción e interpretación de audios" },
  { icon: MapPin, text: "Mapas, sectores y tarifas" },
  { icon: Workflow, text: "Asignaciones y estados automáticos" },
  { icon: BarChart3, text: "Informes y análisis operativos" },
];

export default function Solutions() {
  return (
    <section id="soluciones" className="bg-white py-24 md:py-32">
      <div className="page-shell">
        <div className="max-w-3xl">
          <span className="eyebrow">
            Soluciones que representamos e implementamos
          </span>

          <h2 className="section-title">
            Tecnología aplicada a necesidades reales de negocio.
          </h2>

          <p className="section-copy">
            Representamos plataformas especializadas y desarrollamos
            automatizaciones adaptadas a la operación de cada empresa.
          </p>
        </div>

        <div className="mt-16 grid items-start gap-7 lg:grid-cols-2">
          <article className="group relative overflow-hidden rounded-[32px] border border-[#bcdde2] bg-[linear-gradient(145deg,#ffffff_0%,#eef9fa_55%,#e2f4f6_100%)] p-8 shadow-[0_24px_65px_rgba(7,26,47,.10)] sm:p-10">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between gap-5">
                <span className="rounded-full border border-[#18b8c6]/40 bg-white/70 px-4 py-2 text-xs font-bold tracking-[0.12em] text-[#087f8b] uppercase shadow-sm">
                  Solución representada
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#071a2f] text-cyan-300 shadow-lg">
                  <ShoppingCart size={23} />
                </span>
              </div>

              <p className="mt-9 text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
                Software de ventas y gestión B2B
              </p>

              <h3 className="mt-3 text-4xl font-semibold tracking-[-0.055em] text-[#071a2f]">
                Ventas<span className="text-[#18a9b7]">XMayor</span>
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
  VentasXMayor es un software comercial para mayoristas, fabricantes,
  importadores y distribuidores. Integra e-commerce B2B, gestión de
  clientes, pedidos y vendedores en una sola plataforma.
</p>

<div className="mt-6 flex flex-wrap gap-2">
  {["Software B2B", "E-commerce mayorista", "Gestión CRM"].map((item) => (
    <span
      key={item}
      className="rounded-full border border-[#bcdde2] bg-white px-3 py-1.5 text-xs font-bold text-[#087f8b]"
    >
      {item}
    </span>
  ))}
</div> 

              <div className="mt-8 rounded-[24px] border border-white bg-white/85 p-5 shadow-[0_16px_45px_rgba(7,26,47,.08)] backdrop-blur">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <p className="text-sm font-bold text-[#071a2f]">
                      Canal comercinal mayorista
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Organización y venta desde un solo lugar
                    </p>
                  </div>

                  <span className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Activo
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {funcionesVentas.map(({ title, text }) => (
                    <div key={title} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#071a2f] text-cyan-200">
                        <Check size={14} />
                      </span>

                      <div>
                        <p className="text-sm font-bold text-[#071a2f]">
                          {title}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-slate-500">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#071a2f] px-6 py-3.5 text-sm font-bold !text-white shadow-[0_12px_30px_rgba(7,26,47,.2)] transition hover:-translate-y-0.5 hover:bg-[#0d2947]"
              >
                Evaluar esta solución
                <ArrowRight size={17} />
              </a>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[32px] bg-[#071a2f] p-8 text-white shadow-[0_24px_70px_rgba(7,26,47,.18)] sm:p-10">
            <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-full bg-cyan-300/12 blur-3xl" />

            <div className="relative">
              <div className="flex items-center justify-between gap-5">
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">
                  Implementaciones MarevaLux
                </span>

                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f] shadow-lg">
                  <Bot size={25} />
                </span>
              </div>

              <p className="mt-9 text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase">
                Proyecto actualmente en desarrollo
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em] text-white sm:text-4xl">
                Automatización e inteligencia artificial
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                Desarrollamos sistemas que interpretan solicitudes, calculan tarifas,
                 asignan personal operativo y registran cada servicio desde WhatsApp.
              </p>

              <div className="mt-8 grid gap-3 border-t border-white/10 pt-7 sm:grid-cols-2">
                {automatizaciones.map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-slate-200"
                  >
                    <Icon className="shrink-0 text-cyan-300" size={17} />
                    {text}
                  </div>
                ))}
              </div>

              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#18b8c6] px-6 py-3.5 text-sm font-bold text-[#071a2f] shadow-[0_12px_30px_rgba(24,184,198,.22)] transition hover:-translate-y-0.5 hover:bg-[#37cbd5]"
              >
                Evaluar una automatización
                <ArrowRight size={17} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}