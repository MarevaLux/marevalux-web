import { BriefcaseBusiness, Network, Search } from "lucide-react";

const services = [
  {
    number: "01",
    icon: BriefcaseBusiness,
    title: "Representación comercial",
    text: "Actuamos como una extensión profesional del equipo comercial de cada empresa que representamos.",
  },
  {
    number: "02",
    icon: Search,
    title: "Prospección B2B",
    text: "Identificamos empresas, necesidades y decisores con potencial real para iniciar conversaciones relevantes.",
  },
  {
    number: "03",
    icon: Network,
    title: "Desarrollo de alianzas",
    text: "Construimos vínculos estratégicos y acompañamos cada oportunidad con seguimiento, orden y continuidad.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#f3f8fa] py-24 md:py-32">
      <div className="page-shell">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_420px]">
          <div>
            <span className="eyebrow">Qué hacemos</span>
            <h2 className="section-title">
              Un sistema comercial pensado para oportunidades reales.
            </h2>
          </div>
          <p className="pb-2 text-lg leading-8 text-slate-600">
            Menos improvisación. Más comprensión del negocio, mejores conversaciones
            y un proceso que se puede medir y mejorar.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map(({ number, icon: Icon, title, text }) => (
            <article
              key={number}
              className="group flex min-h-[330px] flex-col rounded-[24px] border border-[#dce6eb] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-[0_20px_55px_rgba(7,26,47,.09)]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-[#0896a5] transition group-hover:bg-[#18b8c6] group-hover:text-[#071a2f]">
                  <Icon size={23} />
                </span>
                <span className="text-sm font-semibold tracking-widest text-slate-300">
                  {number}
                </span>
              </div>
              <h3 className="mt-auto text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-slate-600">{text}</p>
              <div className="mt-7 h-px w-full bg-slate-200">
                <div className="h-px w-10 bg-[#18b8c6] transition-all duration-300 group-hover:w-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
