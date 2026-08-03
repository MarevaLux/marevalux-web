import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  MapPin,
} from "lucide-react";

const commitments = [
  {
    icon: Briefcase,
    title: "Trabajo con propósito",
    text: "Creamos oportunidades vinculadas al desarrollo comercial y al crecimiento de empresas argentinas.",
  },
  {
    icon: BookOpen,
    title: "Capacitación y crecimiento",
    text: "Preparamos a las personas con conocimientos, herramientas y acompañamiento para que puedan desarrollarse.",
  },
  {
    icon: MapPin,
    title: "Impacto nacional",
    text: "Buscamos que el crecimiento de cada empresa también genere experiencia, trabajo y futuro en nuestro país.",
  },
];

export default function Impact() {
  return (
    <section
      id="impacto"
      className="relative isolate overflow-hidden bg-[#071a2f] py-24 text-white md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.11) 1px, transparent 1px)",
          backgroundSize: "66px 66px",
          maskImage:
            "linear-gradient(to right, transparent, black 18%, black 82%, transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: "url('/world-map.svg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(1320px, 120%) auto",
        }}
      />

      <div className="pointer-events-none absolute -left-44 top-0 h-[460px] w-[460px] rounded-full bg-cyan-300/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />

      <div className="page-shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_.98fr] lg:gap-20">
          <div>
            <span className="eyebrow !text-cyan-300">Impacto argentino</span>

            <h2 className="mt-5 max-w-3xl text-[clamp(2.65rem,5vw,4.8rem)] leading-[1.01] font-semibold tracking-[-0.058em] text-white">
              Más crecimiento. Más trabajo. Más oportunidades para Argentina.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              MarevaLux no nació únicamente para representar empresas y generar
              ventas. Nació para transformar el crecimiento comercial en
              oportunidades reales para las personas.
            </p>

            <p className="mt-4 max-w-2xl leading-7 text-slate-400">
              Cada nueva empresa que confía en nosotros puede abrir caminos para
              vendedores, coordinadores y profesionales argentinos que buscan
              experiencia, capacitación y posibilidades de desarrollo.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Trabajo", "Formación", "Crecimiento", "Futuro"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-semibold text-slate-300"
                  >
                    <CheckCircle2 size={14} className="text-cyan-300" />
                    {item}
                  </span>
                ),
              )}
            </div>

            <a
              href="/oportunidades"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#18b8c6] px-6 py-3.5 text-sm font-bold text-[#071a2f] shadow-[0_14px_34px_rgba(24,184,198,.25)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#37cbd5] hover:shadow-[0_18px_42px_rgba(24,184,198,.34)]"
            >
              Conocé nuestras oportunidades
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[36px] border border-cyan-200/10" />
            <div className="relative overflow-hidden rounded-[30px] border border-white/12 bg-[#0c2743]/90 p-6 shadow-[0_35px_90px_rgba(0,0,0,.3)] backdrop-blur-xl sm:p-8">
              <div className="border-b border-white/10 pb-6">
                <p className="text-xs font-bold tracking-[0.15em] text-cyan-200 uppercase">
                  Nuestra misión
                </p>
                <p className="mt-3 text-xl leading-8 font-medium tracking-[-0.02em] text-white">
                  Ayudar a levantar el país detectando oportunidades y
                  convirtiéndolas en crecimiento compartido.
                </p>
              </div>

              <div className="mt-5 space-y-4">
                {commitments.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="group rounded-[20px] border border-white/[0.08] bg-white/[0.045] p-5 transition duration-300 hover:border-cyan-200/20 hover:bg-white/[0.075]"
                  >
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200 transition group-hover:bg-[#18b8c6] group-hover:text-[#071a2f]">
                        <Icon size={19} />
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.025em] text-white">
                          {title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
