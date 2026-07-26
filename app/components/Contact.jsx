import { ArrowRight, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="bg-[#f3f8fa] py-20 md:py-28">
      <div className="page-shell">
        <div className="relative overflow-hidden rounded-[32px] bg-[#0d2947] px-7 py-14 text-white shadow-[0_24px_70px_rgba(7,26,47,.18)] sm:px-12 lg:px-16 lg:py-16">
          <div className="absolute -right-16 -top-24 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold tracking-[0.16em] text-cyan-200 uppercase">
                Conversemos
              </p>
              <h2 className="mt-5 max-w-3xl text-[clamp(2.2rem,4.3vw,4rem)] leading-[1.03] font-semibold tracking-[-0.05em] text-white">
                ¿Su empresa tiene una solución con potencial comercial?
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Analicemos si existe una oportunidad concreta para trabajar juntos
                mediante una representación profesional B2B.
              </p>
            </div>
            <a href="mailto:contact.marevalux@gmail.com" className="button-primary whitespace-nowrap">
              <Mail size={18} />
              Iniciar conversación
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
