import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Home,
  LogOut,
  MessageSquareText,
  Mic2,
  PackageCheck,
  Phone,
  PlayCircle,
  Search,
  ShieldCheck,
  Store,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import Brand from "../../components/Brand";
import { logoutAction } from "../actions";

const navigation = [
  [Home, "Inicio", "/equipo/panel", true],
  [Users, "Prospectos", "/equipo/panel/crm", false],
  [BookOpen, "Capacitación", "/equipo/panel", false],
  [Mic2, "Práctica", "/equipo/panel/ventasxmayor/practica", false],
  [MessageSquareText, "Guiones", "/equipo/panel/ventasxmayor/guiones-contacto", false],
  [CircleHelp, "Objeciones", "/equipo/panel/ventasxmayor/objeciones-respuestas", false],
];

const modules = [
  {
    number: "01",
    title: "¿Qué es VentasXMayor?",
    description: "Comprendé la plataforma, su función y la forma correcta de explicarla.",
    status: "Disponible",
    Icon: Store,
    href: "/equipo/panel/ventasxmayor/que-es",
  },
  {
    number: "02",
    title: "Problemas que resuelve",
    description: "Identificá los procesos desordenados y las oportunidades de digitalización.",
    status: "Disponible",
    Icon: Target,
    href: "/equipo/panel/ventasxmayor/problemas",
  },
  {
    number: "03",
    title: "Cliente ideal",
    description: "Reconocé qué fabricantes, mayoristas y distribuidores tienen mejor encaje.",
    status: "Disponible",
    Icon: Users,
    href: "/equipo/panel/ventasxmayor/cliente-ideal",
  },
  {
    number: "04",
    title: "Preguntas de diagnóstico",
    description: "Detectá necesidades reales antes de presentar la solución.",
    status: "Disponible",
    Icon: Search,
    href: "/equipo/panel/ventasxmayor/preguntas-diagnostico",
  },
  {
    number: "05",
    title: "Guiones de contacto",
    description: "Prepará llamadas, mensajes iniciales y seguimientos comerciales.",
    status: "Disponible",
    Icon: Phone,
    href: "/equipo/panel/ventasxmayor/guiones-contacto",
  },
  {
    number: "06",
    title: "Presentación del servicio",
    description: "Explicá el valor de VentasXMayor de forma clara y profesional.",
    status: "Disponible",
    Icon: MessageSquareText,
    href: "/equipo/panel/ventasxmayor/presentacion-servicio",
  },
  {
    number: "07",
    title: "Objeciones y respuestas",
    description: "Respondé las preguntas frecuentes sin improvisar información.",
    status: "Disponible",
    Icon: CircleHelp,
    href: "/equipo/panel/ventasxmayor/objeciones-respuestas",
  },
  {
    number: "08",
    title: "Registro y comunicación de ventas",
    description: "Registrá cada oportunidad y comunicala correctamente a MarevaLux.",
    status: "Disponible",
    Icon: PackageCheck,
    href: "/equipo/panel/ventasxmayor/registro-ventas",
  },
];

const practiceTools = [
  [Phone, "Simulador de llamadas", "Entrená conversaciones breves con distintos escenarios comerciales."],
  [CircleHelp, "Entrenamiento de objeciones", "Practicá respuestas claras, preguntas y próximos pasos."],
  [Mic2, "Grabación y entrega", "Grabá tu presentación de un minuto y entregala desde el panel."],
  [Trophy, "Puntajes y progreso", "Revisá intentos, objetivos, mejores resultados y audios enviados."],
];

export default function TrainingPanelPage() {
  return (
    <main className="min-h-screen bg-[#f2f7f9] text-[#14293d]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] w-[min(100%-32px,1440px)] items-center justify-between">
          <Link href="/" aria-label="Ir a MarevaLux"><Brand /></Link>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-[#071a2f]">Equipo comercial</p>
              <p className="text-xs text-slate-500">MarevaLux</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071a2f] text-xs font-bold text-cyan-200">ML</div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-[min(100%,1440px)] lg:grid-cols-[250px_1fr]">
        <aside className="hidden min-h-[calc(100vh-78px)] border-r border-slate-200/80 bg-white p-5 lg:flex lg:flex-col">
          <p className="px-3 pt-2 text-[0.68rem] font-bold tracking-[0.15em] text-slate-400 uppercase">Centro comercial</p>
          <nav className="mt-4 space-y-1" aria-label="Panel comercial">
            {navigation.map(([Icon, label, href, active]) => (
              <Link key={label} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active ? "bg-[#e9f8fa] text-[#077f8c]" : "text-slate-500 hover:bg-slate-50 hover:text-[#071a2f]"}`}>
                <Icon size={18} />{label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl bg-[#071a2f] p-5 text-white">
            <ShieldCheck size={21} className="text-cyan-300" />
            <p className="mt-4 text-sm font-semibold">¿Necesitás ayuda?</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">Consultá antes de responder algo que no esté en la capacitación.</p>
            <p className="mt-4 text-xs font-bold text-cyan-300">Contactar a Patric</p>
          </div>

          <form action={logoutAction} className="mt-4">
            <button type="submit" className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-400 hover:bg-slate-50 hover:text-[#071a2f]">
              <LogOut size={18} />Cerrar sesión
            </button>
          </form>
        </aside>

        <section className="min-w-0 px-4 py-7 sm:px-7 lg:px-10 lg:py-10 xl:px-14">
          <nav className="mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden" aria-label="Navegación móvil">
            {navigation.slice(0, 4).map(([Icon, label, href, active]) => (
              <Link key={label} href={href} className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ${active ? "bg-[#071a2f] text-white" : "border border-slate-200 bg-white text-slate-600"}`}><Icon size={16} />{label}</Link>
            ))}
          </nav>

          <div className="mx-auto max-w-[1120px]">
            <div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
              <div className="max-w-[720px]">
                <p className="text-xs font-bold tracking-[0.16em] text-[#0896a5] uppercase">Capacitación específica · VentasXMayor</p>
                <h1 className="mt-4 text-[clamp(2.2rem,4vw,3.65rem)] leading-[1.02] font-semibold tracking-[-0.05em] text-[#071a2f]">Preparación comercial para representar VentasXMayor.</h1>
                <p className="mt-5 max-w-[670px] text-base leading-7 text-slate-600">Comprendé la solución, practicá conversaciones y comenzá a prospectar con una metodología clara.</p>
              </div>
              <div className="w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm xl:w-[300px]">
                <div className="flex items-center justify-between"><span className="text-sm font-semibold text-[#071a2f]">Capacitación</span><span className="text-sm font-bold text-[#0896a5]">8 módulos</span></div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full w-full rounded-full bg-[#18b8c6]" /></div>
                <p className="mt-3 text-xs text-slate-500">Todos los módulos y la zona práctica están disponibles.</p>
              </div>
            </div>

            <section className="mt-9 overflow-hidden rounded-[28px] bg-[#071a2f] text-white shadow-[0_24px_70px_rgba(7,26,47,.16)]">
              <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[1fr_280px] lg:p-10">
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><Mic2 size={24} /></div>
                  <p className="mt-6 text-xs font-bold tracking-[0.16em] text-cyan-200 uppercase">Nueva sección</p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">Zona práctica</h2>
                  <p className="mt-4 max-w-[680px] text-sm leading-7 text-slate-300">Simulá llamadas, entrená objeciones, grabá la presentación de un minuto y entregala para registrar tu puntaje y progreso.</p>
                  <Link href="/equipo/panel/ventasxmayor/practica" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#18b8c6] px-5 py-3 text-sm font-bold text-[#071a2f] transition hover:bg-[#37cbd5]">Comenzar práctica<ArrowRight size={17} /></Link>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  {practiceTools.map(([Icon, title, description]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                      <div className="flex items-center gap-3"><Icon size={18} className="text-cyan-300" /><p className="text-sm font-semibold">{title}</p></div>
                      <p className="mt-2 text-xs leading-5 text-slate-400">{description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="mt-10 grid gap-6 xl:grid-cols-[1fr_320px]">
              <div>
                <div className="mb-4 flex items-center justify-between"><h2 className="text-lg font-semibold tracking-[-0.02em] text-[#071a2f]">Capacitación VentasXMayor</h2><span className="text-xs font-semibold text-slate-400">8 módulos</span></div>
                <div className="space-y-3">
                  {modules.map(({ number, title, description, status, Icon, href }) => (
                    <article key={number} className="group grid gap-4 rounded-2xl border border-cyan-200 bg-white p-5 shadow-[0_14px_36px_rgba(7,26,47,.07)] transition sm:grid-cols-[48px_1fr_auto] sm:items-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#18b8c6] text-[#071a2f]"><Icon size={21} /></div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2"><span className="text-[0.66rem] font-bold tracking-[0.14em] text-slate-400 uppercase">Módulo {number}</span><span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[0.65rem] font-bold text-[#077f8c]">{status}</span></div>
                        <h3 className="mt-2 font-semibold text-[#071a2f]">{title}</h3>
                        <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
                      </div>
                      <Link href={href} aria-label={`Abrir ${title}`} className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#071a2f] text-white transition group-hover:bg-[#18b8c6] group-hover:text-[#071a2f] sm:flex"><ChevronRight size={18} /></Link>
                      <Link href={href} className="flex items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-4 py-3 text-sm font-bold text-white sm:hidden">Abrir lección<ChevronRight size={17} /></Link>
                    </article>
                  ))}
                </div>
              </div>

              <aside className="space-y-5">
                <div className="rounded-[22px] bg-[#071a2f] p-6 text-white shadow-[0_20px_50px_rgba(7,26,47,.16)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-cyan-300"><PlayCircle size={22} /></div>
                  <p className="mt-6 text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Primer paso</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em]">¿Qué es VentasXMayor?</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Comprendé qué es la plataforma y cómo explicarla sin confundirla con una página web tradicional.</p>
                  <Link href="/equipo/panel/ventasxmayor/que-es" className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#18b8c6] px-4 py-3 text-sm font-bold text-[#071a2f] transition hover:bg-[#37cbd5]">Comenzar módulo<ArrowRight size={17} /></Link>
                </div>

                <div className="rounded-[22px] border border-violet-200 bg-violet-50 p-6">
                  <Mic2 size={22} className="text-violet-600" />
                  <p className="mt-5 text-xs font-bold tracking-[0.14em] text-violet-600 uppercase">Zona práctica</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#071a2f]">Entrená y entregá tu audio</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Practicá la conversación de un minuto antes de comenzar a llamar prospectos.</p>
                  <Link href="/equipo/panel/ventasxmayor/practica" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-3 text-sm font-bold text-white">Abrir práctica<ArrowRight size={17} /></Link>
                </div>

                <div className="rounded-[22px] border border-slate-200 bg-white p-6">
                  <h2 className="text-sm font-semibold text-[#071a2f]">Reglas esenciales</h2>
                  <div className="mt-5 space-y-4">
                    {["Usar únicamente cuentas de MarevaLux.", "Registrar cada contacto en el CRM.", "Consultar antes de prometer algo nuevo."].map((rule) => (
                      <div key={rule} className="flex gap-3 text-sm leading-5 text-slate-500"><CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[#18b8c6]" />{rule}</div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[22px] border border-cyan-200 bg-[#e9f8fa] p-6">
                  <Users size={22} className="text-[#0896a5]" />
                  <p className="mt-5 text-xs font-bold tracking-[0.14em] text-[#0896a5] uppercase">Área de trabajo</p>
                  <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#071a2f]">CRM de prospectos</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">Registrá contactos, próximos pasos y oportunidades dentro del circuito protegido de MarevaLux.</p>
                  <Link href="/equipo/panel/crm" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f]">Abrir CRM<ArrowRight size={17} /></Link>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
