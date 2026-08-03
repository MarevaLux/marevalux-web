import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  CircleHelp,
  Clock3,
  Ear,
  ListChecks,
  MessageCircleMore,
  PackageSearch,
  RefreshCw,
  Route,
  Search,
  Users,
  Workflow,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const questionStages = [
  {
    number: "01",
    title: "Entender el proceso actual",
    objective: "Descubrir cómo ingresa un pedido y quién participa.",
    Icon: Route,
    questions: [
      "¿Cómo reciben actualmente los pedidos mayoristas?",
      "¿Quién se encarga de recibirlos y organizarlos?",
      "¿Los pedidos llegan por un solo canal o por WhatsApp, teléfono y vendedores?",
    ],
  },
  {
    number: "02",
    title: "Detectar trabajo manual",
    objective: "Reconocer tareas repetidas, demoras y posibilidades de error.",
    Icon: Workflow,
    questions: [
      "¿Y esos pedidos después tienen que cargarlos u organizarlos manualmente en otro sistema?",
      "Cuando cambia un precio, el stock o aplican descuentos, ¿lo actualizan una sola vez o tienen que volver a enviar listas y catálogos?",
      "¿Cómo administran los precios, mínimos y condiciones diferentes de cada cliente?",
    ],
  },
  {
    number: "03",
    title: "Medir el impacto",
    objective: "Comprender qué consecuencias tiene el proceso para la empresa.",
    Icon: Clock3,
    questions: [
      "Cuando aumenta la cantidad de pedidos, ¿qué parte del proceso se vuelve más difícil?",
      "¿Les ha pasado que un pedido quede incompleto, se demore o tenga que corregirse?",
      "¿Cuánto tiempo dedica el equipo a responder precios, stock y consultas repetidas?",
    ],
  },
  {
    number: "04",
    title: "Explorar la oportunidad",
    objective: "Confirmar si ordenar y digitalizar el canal tendría valor real.",
    Icon: Search,
    questions: [
      "¿Sus clientes pueden consultar y hacer pedidos sin esperar que alguien responda?",
      "¿Les serviría centralizar catálogo, clientes, precios y pedidos en un mismo lugar?",
      "Si pudieran reducir la carga manual, ¿en qué ayudaría principalmente al equipo?",
    ],
  },
];

const responsePaths = [
  {
    answer: "Recibimos por WhatsApp",
    followUp: "O sea, esos pedidos después tienen que cargarlos y organizarlos manualmente en otro sistema, ¿no?",
    Icon: MessageCircleMore,
  },
  {
    answer: "Los toman los vendedores",
    followUp: "¿Y cómo registra cada vendedor el pedido para que después quede centralizado?",
    Icon: Users,
  },
  {
    answer: "Ya tenemos una plataforma",
    followUp: "Perfecto. ¿La utilizan todos los clientes y también administra sus precios y condiciones particulares?",
    Icon: PackageSearch,
  },
  {
    answer: "Enviamos listas o catálogos",
    followUp: "Cuando cambia un precio, el stock o un descuento, ¿tienen que modificarlos y enviarlos nuevamente?",
    Icon: RefreshCw,
  },
];

const conversationRules = [
  "No realizar todas las preguntas: elegir las que correspondan según la conversación.",
  "Escuchar la respuesta completa antes de pensar en la siguiente pregunta.",
  "No criticar la forma actual de trabajo ni afirmar que está mal organizada.",
  "Profundizar con naturalidad cuando aparezcan demoras, errores o tareas repetidas.",
  "No prometer funciones o integraciones que no estén confirmadas.",
  "Terminar resumiendo lo comprendido y pedir confirmación al prospecto.",
];

const diagnosisSignals = [
  "Los pedidos llegan por varios canales.",
  "La información debe volver a cargarse manualmente.",
  "Los cambios obligan a reenviar listas o catálogos.",
  "Cada cliente posee precios o condiciones diferentes.",
  "El equipo responde las mismas consultas repetidamente.",
  "El prospecto reconoce demoras, errores o dificultad para crecer.",
];

export default function PreguntasDiagnosticoVentasXMayorPage() {
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
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 04</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><CircleHelp size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.35rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]">Preguntas de diagnóstico</h1>
            <p className="mt-6 max-w-[800px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">El diagnóstico no es un interrogatorio. Es una conversación ordenada para comprender cómo trabaja la empresa, detectar problemas reales y decidir si VentasXMayor puede aportar valor.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><ListChecks size={22} /></div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Orden de conversación</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Las cuatro etapas del diagnóstico</h2>
                </div>
              </div>
              <p className="mt-4 max-w-[800px] text-base leading-7 text-slate-600">No hace falta completar cada etapa con todas sus preguntas. El vendedor escucha, selecciona y profundiza solamente donde aparece una necesidad.</p>
              <div className="mt-7 space-y-4">
                {questionStages.map(({ number, title, objective, Icon, questions }) => (
                  <div key={number} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#0896a5] shadow-sm"><Icon size={21} /></div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Etapa {number}</span>
                          <span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-slate-500">{objective}</span>
                        </div>
                        <h3 className="mt-3 text-lg font-semibold text-[#071a2f]">{title}</h3>
                        <div className="mt-4 space-y-2.5">
                          {questions.map((question) => (
                            <div key={question} className="flex gap-3 rounded-xl bg-white px-4 py-3 text-sm leading-6 text-slate-700">
                              <CircleHelp size={17} className="mt-1 shrink-0 text-[#18b8c6]" />
                              {question}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><MessageCircleMore size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Cómo continuar según la respuesta</h2>
              <p className="mt-3 max-w-[780px] text-base leading-7 text-slate-700">La mejor pregunta siguiente nace de lo que el prospecto acaba de decir. Estas continuaciones sirven como referencia.</p>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {responsePaths.map(({ answer, followUp, Icon }) => (
                  <div key={answer} className="rounded-2xl bg-white/85 p-5">
                    <div className="flex items-center gap-3 text-sm font-semibold text-[#071a2f]"><Icon size={19} className="shrink-0 text-[#0896a5]" />Si responde: “{answer}”</div>
                    <div className="mt-4 border-l-2 border-[#18b8c6] pl-4 text-sm leading-6 text-slate-600">“{followUp}”</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><Ear size={22} /></div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Reglas para conversar</h2>
                <div className="mt-6 space-y-3">
                  {conversationRules.map((rule) => (
                    <div key={rule} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />
                      {rule}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><AlertCircle size={22} /></div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Señales para registrar</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Estas respuestas deben quedar anotadas porque permitirán presentar la solución de forma específica.</p>
                <div className="mt-6 space-y-3">
                  {diagnosisSignals.map((signal) => (
                    <div key={signal} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600">
                      <BadgeCheck size={18} className="mt-1 shrink-0 text-[#0896a5]" />
                      {signal}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-white p-6 sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-[#0896a5] uppercase">Cierre del diagnóstico</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Confirmar antes de presentar</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">El vendedor resume lo comprendido y permite que el prospecto confirme o corrija la información:</p>
              <div className="mt-5 rounded-2xl bg-[#e9f8fa] p-5 text-base leading-7 font-medium text-slate-700">
                “Entonces, hoy reciben los pedidos principalmente por WhatsApp, después deben cargarlos manualmente y cada cambio de precio obliga a actualizar o reenviar información. ¿Lo entendí bien?”
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-500">Si el prospecto confirma, recién entonces se conecta cada problema detectado con una parte concreta de la solución.</p>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Idea central del módulo</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">Una buena presentación nace de un buen diagnóstico. Cuanto mejor comprendamos el proceso del prospecto, menos necesitaremos convencerlo con explicaciones generales.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel/ventasxmayor/cliente-ideal" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al módulo 03</Link>
            <span className="rounded-xl bg-slate-200/70 px-5 py-3 text-center text-sm font-semibold text-slate-500">Módulo 05 · Próximamente</span>
          </div>
        </div>
      </section>
    </main>
  );
}
