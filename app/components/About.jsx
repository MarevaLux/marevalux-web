import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";

export default function About() {
  return (
    <section
      id="nosotros"
      className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f5fafb_48%,#eaf4f7_100%)] py-24 md:py-32"
    >
      {/* Profundidad del fondo */}
      <div className="about-orbit pointer-events-none absolute -left-52 top-24 h-[480px] w-[480px] rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="about-orbit-delayed pointer-events-none absolute -right-48 bottom-0 h-[440px] w-[440px] rounded-full bg-blue-200/25 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(8,150,165,.18) 1px, transparent 1px)",
          backgroundSize: "38px 38px",
          maskImage:
            "linear-gradient(to right, black, transparent 48%, transparent)",
        }}
      />

      <div className="page-shell relative grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        {/* Fotografía y viñeta originales */}
        <div className="about-photo-enter relative">
          {/* Marcos exteriores sin cambiar la fotografía */}
          <div className="pointer-events-none absolute -inset-5 rounded-[38px] border border-cyan-200/55" />
          <div className="pointer-events-none absolute -inset-10 rounded-[48px] border border-slate-200/45" />

          <div className="pointer-events-none absolute -right-10 -bottom-10 h-56 w-56 rounded-full bg-cyan-300/20 blur-3xl" />

          <div className="relative">
            <div className="overflow-hidden rounded-[30px] bg-slate-100 shadow-[0_35px_90px_rgba(7,26,47,.2)]">
              <Image
                src="/images/fundador-marevalux.jpeg"
                alt="Patric Emanuel, fundador de MarevaLux"
                width={1125}
                height={1136}
                loading="eager"
                className="aspect-square w-full object-cover object-center"
              />
            </div>

            {/* Viñeta: mismo tamaño y posición original */}
            <div className="relative z-10 -mt-24 ml-auto -mr-3 max-w-[340px] rounded-2xl bg-[#071a2f] p-6 text-white shadow-[0_24px_60px_rgba(7,26,47,.32)] sm:-mr-12">
              <ArrowUpRight className="text-cyan-300" size={22} />

              <p className="mt-4 text-xl font-semibold text-white">
                Patric Emanuel
              </p>

              <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase">
                Fundador · MarevaLux
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-200">
                Tras recorrer 20 países, convivir con el pueblo Shuar en la
                Amazonía y atravesar el Darién, Patric Emanuel convirtió
                experiencias extraordinarias en una visión con propósito.
                MarevaLux nace de esa convicción: con visión, disciplina y
                determinación, aquello que parece lejano puede convertirse en
                realidad.
              </p>
            </div>
          </div>
        </div>

        {/* Información de la empresa */}
        <div className="about-copy-enter relative">
          <div className="pointer-events-none absolute -left-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-cyan-300/60 to-transparent lg:block" />

          <span className="eyebrow">Quiénes somos</span>

          <h2 className="mt-5 max-w-2xl text-[clamp(2.6rem,4.7vw,4.4rem)] leading-[1.01] font-semibold tracking-[-0.057em] text-[#071a2f]">
            Una representación comercial seria, cercana y orientada a resultados.
          </h2>

          <div className="mt-8 rounded-[24px] border border-white/80 bg-white/60 p-7 shadow-[0_18px_55px_rgba(7,26,47,.07)] backdrop-blur-sm">
            <p className="text-[1.05rem] leading-8 text-[#425970]">
              MarevaLux nace en Argentina para acompañar a empresas con soluciones
              de alto valor que necesitan desarrollar nuevas oportunidades
              comerciales sin improvisación ni mensajes genéricos.
            </p>

            <p className="mt-5 text-[1.05rem] leading-8 text-[#425970]">
              Nos involucramos en el negocio que representamos, entendemos su
              propuesta y trabajamos cada conversación como parte de una relación
              de largo plazo.
            </p>
          </div>

          {/* Misión */}
          <div className="about-mission-glow relative mt-8 overflow-hidden rounded-[24px] border border-[#d3e4e9] bg-white p-7 shadow-[0_22px_60px_rgba(7,26,47,.1)]">
            <div className="absolute top-0 left-0 h-full w-1.5 bg-gradient-to-b from-[#37cbd5] to-[#0896a5]" />
            <div className="pointer-events-none absolute -right-12 -top-16 h-40 w-40 rounded-full bg-cyan-200/35 blur-2xl" />

            <div className="relative">
              <p className="text-xs font-bold tracking-[0.15em] text-[#0896a5] uppercase">
                Nuestra misión
              </p>

              <p className="mt-4 text-xl leading-8 font-medium tracking-[-0.025em] text-[#071a2f]">
                Transformar el potencial de empresas y fabricantes en crecimiento
                comercial mediante representación profesional B2B.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 border-t border-slate-200 pt-5">
                {[
                  "Criterio profesional",
                  "Comunicación clara",
                  "Visión de largo plazo",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-[#f1f8fa] px-3.5 py-2 text-xs font-semibold text-[#425970]"
                  >
                    <Check size={13} className="text-[#0896a5]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}