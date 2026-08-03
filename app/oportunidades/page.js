import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  HeartHandshake,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import Brand from "../components/Brand";
import Footer from "../components/Footer";
import OpportunityForm from "./OpportunityForm";

export const metadata = {
  title: "Oportunidades | MarevaLux",
  description:
    "Conocé el propósito de MarevaLux y registrá tu perfil para futuras oportunidades de desarrollo profesional en Argentina.",
  alternates: { canonical: "/oportunidades" },
};

const values = [
  {
    icon: Briefcase,
    title: "Experiencia real",
    text: "Buscamos que cada oportunidad permita aprender, aportar valor y desarrollar experiencia comercial concreta.",
  },
  {
    icon: BookOpen,
    title: "Formación continua",
    text: "El conocimiento de los servicios, las herramientas y los procesos forma parte del crecimiento profesional.",
  },
  {
    icon: HeartHandshake,
    title: "Crecimiento compartido",
    text: "Queremos que las empresas, las personas y MarevaLux puedan avanzar juntas con objetivos claros.",
  },
];

export default function OpportunitiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="absolute inset-x-0 top-0 z-20 px-4 pt-4">
        <div className="mx-auto flex h-[68px] max-w-[1180px] items-center justify-between rounded-[22px] border border-white/15 bg-[#071a2f]/90 px-4 shadow-[0_20px_60px_rgba(0,0,0,.28)] backdrop-blur-xl sm:px-5">
          <Link href="/" aria-label="Ir al inicio">
            <Brand light compact />
          </Link>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:inline">Volver al inicio</span>
            </Link>
            <Link
              href="/equipo"
              className="hidden rounded-full bg-[#18b8c6] px-4 py-2.5 text-sm font-bold text-[#071a2f] transition hover:bg-[#35d0da] sm:inline-flex"
            >
              Acceso al equipo
            </Link>
          </div>
        </div>
      </header>

      <section className="relative isolate overflow-hidden bg-[#071a2f] pt-36 pb-24 text-white md:pt-44 md:pb-32">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.11) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.11) 1px, transparent 1px)",
            backgroundSize: "66px 66px",
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "url('/world-map.svg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "min(1320px, 120%) auto",
          }}
        />
        <div className="pointer-events-none absolute -left-40 top-24 h-[420px] w-[420px] rounded-full bg-cyan-300/14 blur-3xl" />

        <div className="page-shell relative">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[0.06] px-4 py-2 text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">
              <MapPin size={14} />
              Oportunidades en Argentina
            </span>

            <h1 className="mt-7 text-[clamp(3rem,7vw,6.5rem)] leading-[0.96] font-semibold tracking-[-0.065em] text-white">
              Tu crecimiento también puede formar parte del nuestro.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Estamos construyendo una red comercial capaz de generar resultados
              para las empresas y oportunidades de desarrollo para las personas.
            </p>

            <a
              href="#registro"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#18b8c6] px-6 py-3.5 text-sm font-bold text-[#071a2f] shadow-[0_14px_34px_rgba(24,184,198,.25)] transition hover:-translate-y-0.5 hover:bg-[#37cbd5]"
            >
              Registrar mi perfil
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f2f8fa_100%)] py-24 md:py-32">
        <div className="page-shell">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-[26px] border border-[#d8e6ea] bg-white p-7 shadow-[0_16px_45px_rgba(7,26,47,.06)]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f8fa] text-[#0896a5]">
                  <Icon size={22} />
                </span>
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">
                  {title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>

          <div
            id="registro"
            className="mt-16 grid overflow-hidden rounded-[34px] border border-[#d5e5e9] bg-white shadow-[0_30px_90px_rgba(7,26,47,.12)] lg:grid-cols-[.82fr_1.18fr]"
          >
            <div className="relative overflow-hidden bg-[#071a2f] px-7 py-12 text-white sm:px-10 lg:px-12 lg:py-14">
              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-bold tracking-[0.15em] text-cyan-200 uppercase">
                  Registro de interés
                </p>
                <h2 className="mt-4 text-4xl leading-[1.02] font-semibold tracking-[-0.05em] text-white">
                  Queremos conocer tu historia y tu potencial.
                </h2>
                <p className="mt-6 leading-8 text-slate-300">
                  Todavía no publicamos cantidades ni cargos específicos. Podés
                  dejar tu perfil para que te contactemos cuando exista una
                  oportunidad compatible.
                </p>

                <div className="mt-9 rounded-[22px] border border-white/10 bg-white/[0.055] p-5">
                  <div className="flex gap-4">
                    <ShieldCheck className="mt-0.5 shrink-0 text-cyan-300" size={21} />
                    <p className="text-sm leading-6 text-slate-300">
                      Tus datos serán utilizados exclusivamente para evaluar
                      futuras oportunidades dentro de MarevaLux.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-7 py-12 sm:px-10 lg:px-12 lg:py-14">
              <OpportunityForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
