import Link from "next/link";
import { BookOpenCheck, Headphones, LockKeyhole, ShieldCheck } from "lucide-react";
import Brand from "../components/Brand";
import LoginForm from "./LoginForm";

const benefits = [
  [BookOpenCheck, "Capacitación clara y ordenada"],
  [Headphones, "Guiones listos para practicar"],
  [ShieldCheck, "Acceso personal y protegido"],
];

export default function EquipoLoginPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071a2f] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "url('/world-map.svg')",
          backgroundPosition: "left 12% bottom 10%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(920px, 92vw) auto",
        }}
      />
      <div className="pointer-events-none absolute -left-40 -top-52 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-52 right-0 h-[520px] w-[520px] rounded-full bg-cyan-300/8 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen w-[min(100%-32px,1180px)] items-center gap-14 py-8 lg:grid-cols-[1.05fr_.75fr] lg:gap-24">
        <section className="py-6 lg:py-12">
          <Link href="/" aria-label="Volver a MarevaLux" className="inline-flex">
            <Brand light />
          </Link>

          <div className="mt-16 max-w-[650px] lg:mt-24">
            <p className="text-xs font-bold tracking-[0.18em] text-cyan-200 uppercase">
              Centro comercial MarevaLux
            </p>
            <h1 className="mt-6 text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.98] font-semibold tracking-[-0.06em]">
              Aprendé, practicá y salí a vender con claridad.
            </h1>
            <p className="mt-7 max-w-[570px] text-lg leading-8 text-slate-300">
              Todo lo necesario para representar nuestras soluciones con seguridad,
              criterio comercial y una metodología profesional.
            </p>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:max-w-[650px]">
              {benefits.map(([Icon, text]) => (
                <div key={text} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur-sm">
                  <Icon size={20} className="text-cyan-300" />
                  <p className="mt-3 text-sm leading-5 text-slate-200">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-12 text-xs tracking-[0.08em] text-slate-500 uppercase lg:mt-20">
            Plataforma de uso interno
          </p>
        </section>

        <section className="pb-8 lg:py-12">
          <div className="rounded-[28px] border border-white/15 bg-white p-7 text-[#14293d] shadow-[0_32px_90px_rgba(0,0,0,.28)] sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9f8fa] text-[#0896a5]">
              <LockKeyhole size={22} />
            </div>
            <p className="mt-7 text-xs font-bold tracking-[0.16em] text-[#0896a5] uppercase">Acceso del equipo</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#071a2f]">Ingresar al panel</h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Utilizá los datos de acceso proporcionados por MarevaLux.
            </p>

            <LoginForm />

            <div className="mt-6 flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-xs leading-5 text-slate-500">
              <ShieldCheck size={17} className="mt-0.5 shrink-0 text-[#0896a5]" />
              El acceso es personal. No compartas tu usuario ni tu contraseña.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
