import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-24 md:py-32">
      <div className="page-shell grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative">
          <div className="overflow-hidden rounded-[30px] bg-slate-100 shadow-[0_24px_70px_rgba(7,26,47,.12)]">
            <Image
              src="/images/fundador-marevalux.jpeg"
              alt="Fundador de MarevaLux"
              width={1125}
              height={1136}
            className="aspect-square w-full object-cover object-center"
            />
          </div>
      <div className="relative z-10 -mt-24 ml-auto -mr-3 max-w-[340px] rounded-2xl bg-[#071a2f] p-6 text-white shadow-xl sm:-mr-12">
  <ArrowUpRight className="text-cyan-300" size={22} />

  <p className="mt-4 text-xl font-semibold text-white">
    Patric Emanuel
  </p>

  <p className="mt-2 text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase">
    Fundador · MarevaLux
  </p>

  <p className="mt-3 text-sm leading-6 text-slate-200">
    Tras recorrer 20 países, convivir con el pueblo Shuar en la Amazonía y atravesar el Darién, Patric Emanuel convirtió experiencias extraordinarias en una visión con propósito. MarevaLux nace de esa convicción: con visión, disciplina y determinación, aquello que parece lejano puede convertirse en realidad.
  </p>
</div>
        </div>

        <div>
          <span className="eyebrow">Quiénes somos</span>
          <h2 className="section-title">
            Una representación comercial seria, cercana y orientada a resultados.
          </h2>
          <p className="section-copy">
            MarevaLux nace en Argentina para acompañar a empresas con soluciones de
            alto valor que necesitan desarrollar nuevas oportunidades comerciales
            sin improvisación ni mensajes genéricos.
          </p>
          <p className="section-copy mt-5">
            Nos involucramos en el negocio que representamos, entendemos su propuesta
            y trabajamos cada conversación como parte de una relación de largo plazo.
          </p>
          <div className="mt-9 border-l-2 border-[#18b8c6] pl-6">
            <p className="text-sm font-semibold tracking-[0.12em] text-[#0896a5] uppercase">
              Nuestra misión
            </p>
            <p className="mt-3 text-xl leading-8 font-medium text-[#071a2f]">
              Transformar el potencial de empresas y fabricantes en crecimiento
              comercial mediante representación profesional B2B.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
