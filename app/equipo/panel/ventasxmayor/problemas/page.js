import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  FileSpreadsheet,
  ListChecks,
  MessageCircleMore,
  RefreshCw,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const problems = [
  {
    title: "Pedidos dispersos",
    description: "Los pedidos llegan por WhatsApp, audios, llamadas y planillas, sin un canal centralizado.",
    consequence: "Se pierde información y resulta difícil conocer qué pidió cada cliente.",
    Icon: MessageCircleMore,
  },
  {
    title: "Carga manual y duplicada",
    description: "Después de recibir un pedido, alguien debe volver a cargarlo en otra planilla o sistema.",
    consequence: "Aumentan el trabajo administrativo, las demoras y los errores.",
    Icon: FileSpreadsheet,
  },
  {
    title: "Precios y catálogos desactualizados",
    description: "Cada cambio obliga a modificar archivos y reenviar listas o catálogos a los clientes.",
    consequence: "Circulan precios antiguos y se repite trabajo que debería hacerse una sola vez.",
    Icon: RefreshCw,
  },
  {
    title: "Condiciones diferentes por cliente",
    description: "Cada comprador puede tener precios, descuentos, mínimos y formas de pago particulares.",
    consequence: "Administrar esas condiciones manualmente genera confusión y respuestas inconsistentes.",
    Icon: CircleDollarSign,
  },
  {
    title: "Falta de trazabilidad",
    description: "La información del pedido queda repartida entre conversaciones, personas y archivos.",
    consequence: "Cuesta seguir el estado de cada operación y resolver reclamos rápidamente.",
    Icon: ListChecks,
  },
  {
    title: "Dependencia de una persona",
    description: "El cliente debe esperar que alguien responda para consultar precios, stock o realizar un pedido.",
    consequence: "La empresa puede perder ventas fuera del horario de atención o en momentos de mucha demanda.",
    Icon: Clock3,
  },
  {
    title: "Equipo comercial desconectado",
    description: "Cada vendedor administra pedidos y clientes con su propio método o desde conversaciones separadas.",
    consequence: "La empresa pierde control y no cuenta con una visión ordenada de la actividad comercial.",
    Icon: Users,
  },
  {
    title: "Dificultad para escalar",
    description: "Aumentar clientes y pedidos también aumenta el trabajo manual y la posibilidad de cometer errores.",
    consequence: "El crecimiento queda limitado por la capacidad operativa del equipo.",
    Icon: TrendingUp,
  },
];

const diagnosticQuestions = [
  "¿Cómo reciben actualmente los pedidos mayoristas?",
  "¿Esos pedidos después tienen que cargarlos manualmente en otro sistema?",
  "Cuando cambia un precio o el stock, ¿dónde lo actualizan?",
  "¿Todos los clientes tienen los mismos precios y condiciones?",
  "¿Sus clientes pueden hacer pedidos sin esperar que alguien responda?",
  "¿Pueden conocer fácilmente el estado de cada pedido?",
];

const opportunitySignals = [
  "WhatsApp es el canal principal para recibir pedidos.",
  "La empresa reenvía listas de precios o catálogos con frecuencia.",
  "Los pedidos se copian manualmente a planillas o sistemas internos.",
  "Cada cliente tiene condiciones comerciales diferentes.",
  "Los compradores consultan constantemente precios, stock o mínimos.",
  "El seguimiento depende de revisar conversaciones individuales.",
];

export default function ProblemasVentasXMayorPage() {
  return (
    <main className="min-h-screen bg-[#f2f7f9] text-[#14293d]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] w-[min(100%-32px,1180px)] items-center justify-between gap-4">
          <Link href="/" aria-label="Ir a MarevaLux"><Brand /></Link>
          <Link href="/equipo/panel" className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]">
            <ArrowLeft size={17} />
            Volver al panel
          </Link>
        </div>
      </header>

      <section className="px-4 py-8 sm:px-7 lg:py-12">
        <div className="mx-auto max-w-[1040px]">
          <div className="rounded-[28px] bg-[#071a2f] p-7 text-white shadow-[0_24px_70px_rgba(7,26,47,.16)] sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 02</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><AlertTriangle size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]">Problemas que resuelve</h1>
            <p className="mt-6 max-w-[780px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Antes de presentar la plataforma, el vendedor debe reconocer cómo trabaja actualmente la empresa y cuánto desorden, trabajo manual y oportunidades perdidas existen en su proceso.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><Search size={22} /></div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Aprender a observar</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Los ocho problemas principales</h2>
                </div>
              </div>
              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                {problems.map(({ title, description, consequence, Icon }) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#0896a5] shadow-sm"><Icon size={20} /></div>
                    <h3 className="mt-4 font-semibold text-[#071a2f]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                    <p className="mt-4 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-500"><strong className="font-semibold text-[#14293d]">Consecuencia:</strong> {consequence}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><CheckCircle2 size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Señales de una oportunidad comercial</h2>
              <p className="mt-3 max-w-[760px] text-base leading-7 text-slate-700">Cuantas más de estas situaciones aparezcan, mayor será la posibilidad de que VentasXMayor aporte valor.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {opportunitySignals.map((signal) => (
                  <div key={signal} className="flex gap-3 rounded-xl bg-white/80 px-4 py-3.5 text-sm leading-6 text-slate-600">
                    <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />
                    {signal}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><Search size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Preguntas para detectar los problemas</h2>
              <p className="mt-3 text-base leading-7 text-slate-600">No deben realizarse como un interrogatorio. Se utilizan de forma natural, según lo que el prospecto vaya contando.</p>
              <div className="mt-6 space-y-3">
                {diagnosticQuestions.map((question, index) => (
                  <div key={question} className="flex gap-4 rounded-2xl bg-slate-50 px-5 py-4">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#18b8c6] text-xs font-bold text-[#071a2f]">{index + 1}</span>
                    <p className="pt-0.5 text-sm leading-6 font-medium text-slate-700">{question}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Idea central del módulo</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">El vendedor no comienza mostrando funciones. Primero descubre cuánto desorden, trabajo manual y oportunidades perdidas existen en el proceso actual.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel/ventasxmayor/que-es" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al módulo 01</Link>
            <span className="rounded-xl bg-slate-200/70 px-5 py-3 text-center text-sm font-semibold text-slate-500">Módulo 03 · Próximamente</span>
          </div>
        </div>
      </section>
    </main>
  );
}
