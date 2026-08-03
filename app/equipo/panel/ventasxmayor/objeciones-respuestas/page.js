import Link from "next/link";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleHelp,
  CircleX,
  Clock3,
  MessageCircleQuestion,
  MessageSquareReply,
  Search,
  ShieldCheck,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const responseMethod = [
  { number: "01", title: "Escuchar", description: "Dejar que el prospecto termine y no responder de forma defensiva." },
  { number: "02", title: "Validar", description: "Reconocer que su duda es razonable sin darle la razón automáticamente." },
  { number: "03", title: "Aclarar", description: "Hacer una pregunta para descubrir qué hay realmente detrás de la objeción." },
  { number: "04", title: "Responder", description: "Usar información confirmada y relacionarla con su situación particular." },
  { number: "05", title: "Avanzar", description: "Comprobar si la duda quedó resuelta y proponer el siguiente paso." },
];

const objections = [
  {
    objection: "Ya trabajamos por WhatsApp y nos funciona",
    clarify: "¿Después esos pedidos deben cargarlos o controlarlos manualmente en otro lugar?",
    response: "WhatsApp puede seguir siendo un canal de comunicación. VentasXMayor busca ordenar catálogo, clientes, condiciones y pedidos para que toda la operación no dependa de conversaciones separadas.",
  },
  {
    objection: "Ya tenemos una página web",
    clarify: "¿Esa web está preparada para ventas B2B y muestra a cada cliente sus precios y condiciones particulares?",
    response: "Una web institucional o tienda minorista cumple otra función. VentasXMayor está diseñada específicamente para administrar el canal mayorista y sus reglas comerciales.",
  },
  {
    objection: "Ya tenemos una plataforma o sistema",
    clarify: "¿Qué parte del proceso resuelve bien y qué tareas todavía quedan fuera o se hacen manualmente?",
    response: "Perfecto; no buscamos reemplazar algo que funciona sin comprenderlo. Primero evaluamos si existe alguna necesidad no resuelta y si VentasXMayor puede complementarla o aportar valor.",
  },
  {
    objection: "Mis clientes no van a querer usarlo",
    clarify: "¿Qué dificultad pensás que tendrían: acceso, hábito, tiempo o forma de realizar el pedido?",
    response: "Es normal que exista un cambio de hábito. La adopción se trabaja mostrando al comprador que puede consultar su información y preparar el pedido de manera más clara, sin depender de una respuesta para cada consulta.",
  },
  {
    objection: "No tenemos tiempo para implementar algo nuevo",
    clarify: "¿La preocupación es el tiempo inicial o el trabajo que debería hacer el equipo después?",
    response: "La implementación debe planificarse para reducir la carga sobre la empresa. El siguiente paso es revisar su operación y explicar con claridad qué información y participación necesitarían.",
  },
  {
    objection: "Ahora no es prioridad",
    clarify: "¿Qué tendría que cambiar para que ordenar el canal mayorista se vuelva prioritario?",
    response: "Entiendo. Podemos registrar el momento adecuado y retomar cuando exista mayor volumen, crecimiento, cambios de catálogo o necesidad de reducir tareas manuales.",
  },
  {
    objection: "Parece caro / ¿cuánto cuesta?",
    clarify: "¿Lo estás comparando con una página web, con otro sistema o con el costo del proceso actual?",
    response: "El valor debe evaluarse según la operación y el alcance necesario. MarevaLux confirma la información comercial correspondiente antes de presentar cualquier precio o condición.",
  },
  {
    objection: "Mandame información y después vemos",
    clarify: "Claro. ¿Qué te interesa revisar principalmente: pedidos, precios por cliente, catálogo o administración comercial?",
    response: "Te envío información enfocada en ese punto. Para no dejarla sin contexto, coordinemos también cuándo puedo contactarte para responder dudas.",
  },
  {
    objection: "¿Se integra con nuestro sistema?",
    clarify: "¿Qué sistema utilizan y qué información necesitarían conectar?",
    response: "La posibilidad depende del sistema y del alcance. No confirmamos una integración sin revisión técnica; registramos el dato para que MarevaLux lo valide correctamente.",
  },
  {
    objection: "Tengo que hablarlo con mi socio o con dirección",
    clarify: "¿Qué información necesitarían para evaluarlo y quiénes deberían participar?",
    response: "Perfecto. Podemos coordinar una presentación breve con las personas involucradas para que todos reciban la misma información y puedan hacer preguntas.",
  },
];

const forbiddenResponses = [
  "Discutir para demostrar que el prospecto está equivocado.",
  "Criticar el sistema, la web o la forma de trabajo actual.",
  "Inventar precios, descuentos, plazos, integraciones o funcionalidades.",
  "Prometer resultados económicos o adopción garantizada.",
  "Responder una duda técnica sin contar con información confirmada.",
  "Presionar cuando el prospecto ha pedido terminar la conversación.",
];

export default function ObjecionesRespuestasVentasXMayorPage() {
  return (
    <main className="min-h-screen bg-[#f2f7f9] text-[#14293d]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] w-[min(100%-32px,1180px)] items-center justify-between gap-4">
          <Link href="/" aria-label="Ir a MarevaLux"><Brand /></Link>
          <Link href="/equipo/panel" className="flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al panel</Link>
        </div>
      </header>

      <section className="px-4 py-8 sm:px-7 lg:py-12">
        <div className="mx-auto max-w-[1040px]">
          <div className="rounded-[28px] bg-[#071a2f] p-7 text-white shadow-[0_24px_70px_rgba(7,26,47,.16)] sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 07</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><MessageSquareReply size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.3rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]">Objeciones y respuestas</h1>
            <p className="mt-6 max-w-[800px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Una objeción no siempre es un rechazo. Puede ser una duda, una comparación incorrecta o información que todavía falta. La respuesta correcta empieza por comprender qué preocupa realmente al prospecto.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><CircleHelp size={22} /></div>
                <div><p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Método de respuesta</p><h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Cinco pasos antes de responder</h2></div>
              </div>
              <div className="mt-7 grid gap-3 md:grid-cols-5">
                {responseMethod.map(({ number, title, description }) => (
                  <div key={number} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#071a2f] text-xs font-bold text-cyan-200">{number}</span>
                    <h3 className="mt-4 font-semibold text-[#071a2f]">{title}</h3>
                    <p className="mt-2 text-xs leading-5 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><MessageCircleQuestion size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Objeciones frecuentes</h2>
              <p className="mt-3 max-w-[780px] text-base leading-7 text-slate-700">Primero se utiliza la pregunta de aclaración. Después se adapta la respuesta según lo que el prospecto explique.</p>
              <div className="mt-6 space-y-4">
                {objections.map(({ objection, clarify, response }, index) => (
                  <div key={objection} className="rounded-2xl bg-white/90 p-5 sm:p-6">
                    <div className="flex gap-3"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#18b8c6] text-xs font-bold text-[#071a2f]">{index + 1}</span><h3 className="pt-1 font-semibold text-[#071a2f]">“{objection}”</h3></div>
                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                      <div className="rounded-xl bg-slate-50 p-4"><p className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-[#0896a5] uppercase"><Search size={15} />Aclarar</p><p className="mt-3 text-sm leading-6 text-slate-600">“{clarify}”</p></div>
                      <div className="rounded-xl bg-[#071a2f] p-4 text-white"><p className="flex items-center gap-2 text-xs font-bold tracking-[0.1em] text-cyan-200 uppercase"><MessageSquareReply size={15} />Responder</p><p className="mt-3 text-sm leading-6 text-slate-300">“{response}”</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500"><CircleX size={22} /></div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Lo que nunca debemos responder</h2>
                <div className="mt-6 space-y-3">
                  {forbiddenResponses.map((item) => <div key={item} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600"><CircleX size={18} className="mt-1 shrink-0 text-red-400" />{item}</div>)}
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-[24px] border border-amber-200 bg-amber-50 p-6 sm:p-8">
                  <AlertTriangle size={24} className="text-amber-600" />
                  <h2 className="mt-5 text-xl font-semibold text-[#071a2f]">Si no sabés la respuesta</h2>
                  <p className="mt-3 text-sm leading-6 text-slate-600">No improvises. Registrá la pregunta y decí:</p>
                  <p className="mt-4 rounded-xl bg-white p-4 text-sm leading-6 font-medium text-slate-700">“Prefiero confirmarlo con el equipo antes de darte una respuesta incorrecta. Lo consulto y te respondo.”</p>
                </div>
                <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                  <ShieldCheck size={24} className="text-[#0896a5]" />
                  <h2 className="mt-5 text-xl font-semibold text-[#071a2f]">Objetivo de la respuesta</h2>
                  <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600"><p className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />Aclarar la preocupación real.</p><p className="flex gap-3"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />Responder sin confrontar.</p><p className="flex gap-3"><Clock3 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />Acordar el siguiente paso.</p></div>
                </div>
              </div>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Idea central del módulo</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">No se trata de ganar una discusión. Se trata de comprender la duda, responder con honestidad y ayudar al prospecto a decidir el siguiente paso con información correcta.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel/ventasxmayor/presentacion-servicio" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al módulo 06</Link>
            <Link href="/equipo/panel/ventasxmayor/registro-ventas" className="flex items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f]">Continuar al módulo 08<ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
