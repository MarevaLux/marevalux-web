import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MessageCircleMore,
  MessagesSquare,
  Phone,
  PhoneCall,
  Search,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const callSteps = [
  {
    number: "01",
    title: "Identificarse y ubicar el motivo",
    text: "Hola, ¿cómo estás? Soy [nombre] de MarevaLux. Estamos trabajando con empresas mayoristas para ordenar y digitalizar la recepción de pedidos.",
  },
  {
    number: "02",
    title: "Confirmar a la persona correcta",
    text: "¿Sos vos quien coordina las ventas mayoristas o los pedidos de la empresa?",
  },
  {
    number: "03",
    title: "Abrir el diagnóstico",
    text: "Perfecto. Te hago una consulta breve: ¿cómo reciben actualmente los pedidos mayoristas?",
  },
  {
    number: "04",
    title: "Profundizar en su respuesta",
    text: "Si responde WhatsApp: O sea, ¿esos pedidos después tienen que cargarlos y organizarlos manualmente en otro sistema?",
  },
  {
    number: "05",
    title: "Proponer el siguiente paso",
    text: "Por lo que me contás, tiene sentido que conozcan la solución. Podemos coordinar una presentación breve aplicada a su proceso. ¿Qué día les quedaría cómodo?",
  },
];

const messageScripts = [
  {
    title: "Primer mensaje",
    objective: "Presentación breve",
    Icon: MessageCircleMore,
    text: "Hola, [nombre]. Te saluda [vendedor] de MarevaLux. Somos una empresa argentina especializada en representación comercial y soluciones B2B.\nwww.marevalux.com",
  },
  {
    title: "Segundo mensaje",
    objective: "Abrir conversación",
    Icon: MessagesSquare,
    text: "Estamos presentando una nueva forma de ordenar y digitalizar los pedidos mayoristas para reducir la dependencia de WhatsApp y planillas. ¿Sos vos quien coordina las ventas mayoristas o los pedidos de la empresa?",
  },
  {
    title: "Seguimiento",
    objective: "Retomar sin presionar",
    Icon: Clock3,
    text: "Hola, [nombre]. Retomo mi mensaje porque vimos que la solución puede tener buen encaje con su operación mayorista. Quería confirmar si sos la persona indicada para conversar sobre pedidos y canal comercial.",
  },
  {
    title: "Cierre de seguimiento",
    objective: "Dejar la puerta abierta",
    Icon: Mail,
    text: "Hola, [nombre]. Cierro el seguimiento por ahora para no insistir. Si más adelante buscan ordenar catálogo, clientes y pedidos mayoristas, quedo disponible desde MarevaLux.",
  },
];

const situations = [
  {
    title: "Si atiende recepción",
    response: "Gracias. ¿Con quién debería hablar sobre ventas mayoristas o gestión de pedidos? ¿Podrías indicarme su nombre y el mejor medio para contactarlo?",
  },
  {
    title: "Si pide información",
    response: "Claro. Para enviarte algo relevante y no información genérica, ¿me contás primero cómo reciben hoy los pedidos mayoristas?",
  },
  {
    title: "Si ya usa una plataforma",
    response: "Perfecto. ¿La utilizan todos sus clientes y les permite manejar precios, descuentos y condiciones particulares para cada uno?",
  },
  {
    title: "Si está ocupado",
    response: "Entiendo. Solo necesito coordinar un momento más cómodo. ¿Preferís que te llame más tarde o que te escriba por WhatsApp?",
  },
];

const rules = [
  "Personalizar el nombre, la empresa y el motivo del contacto.",
  "Hablar con tono natural; el guion sirve como estructura, no para leerlo mecánicamente.",
  "Hacer una pregunta por vez y escuchar antes de continuar.",
  "No explicar toda la plataforma en el primer contacto.",
  "No enviar mensajes repetidos o masivos desde cuentas no autorizadas.",
  "Cerrar siempre con un próximo paso claro: llamada, respuesta, presentación o fecha de seguimiento.",
];

export default function GuionesContactoVentasXMayorPage() {
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
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 05</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><PhoneCall size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]">Guiones de contacto</h1>
            <p className="mt-6 max-w-[800px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Estructuras breves para iniciar llamadas y mensajes con seguridad. El objetivo del primer contacto no es explicar todo: es llegar a la persona correcta, abrir el diagnóstico y conseguir el siguiente paso.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><Phone size={22} /></div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Llamada en frío</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Guion principal de llamada</h2>
                </div>
              </div>
              <div className="mt-7 space-y-3">
                {callSteps.map(({ number, title, text }) => (
                  <div key={number} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:grid-cols-[48px_1fr]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#071a2f] text-sm font-bold text-cyan-200">{number}</span>
                    <div>
                      <h3 className="font-semibold text-[#071a2f]">{title}</h3>
                      <p className="mt-2 border-l-2 border-[#18b8c6] pl-4 text-sm leading-6 text-slate-600">“{text}”</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><MessageCircleMore size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Mensajes de WhatsApp</h2>
              <p className="mt-3 max-w-[790px] text-base leading-7 text-slate-700">Enviar la presentación y la pregunta en dos mensajes separados hace que el contacto sea más claro y fácil de responder.</p>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {messageScripts.map(({ title, objective, Icon, text }) => (
                  <div key={title} className="rounded-2xl bg-white/90 p-5">
                    <div className="flex items-center gap-3"><Icon size={19} className="text-[#0896a5]" /><h3 className="font-semibold text-[#071a2f]">{title}</h3></div>
                    <p className="mt-2 text-xs font-bold tracking-[0.1em] text-slate-400 uppercase">{objective}</p>
                    <p className="mt-4 whitespace-pre-line rounded-xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><Search size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Respuestas para situaciones frecuentes</h2>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {situations.map(({ title, response }) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                    <h3 className="flex items-center gap-2 font-semibold text-[#071a2f]"><UserCheck size={18} className="text-[#0896a5]" />{title}</h3>
                    <p className="mt-4 text-sm leading-6 text-slate-600">“{response}”</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><ShieldCheck size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Reglas de uso</h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {rules.map((rule) => (
                  <div key={rule} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />{rule}</div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Idea central del módulo</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">El guion ordena la conversación, pero la venta avanza cuando el vendedor escucha, adapta sus palabras y consigue un próximo paso concreto.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel/ventasxmayor/preguntas-diagnostico" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al módulo 04</Link>
            <Link href="/equipo/panel/ventasxmayor/presentacion-servicio" className="flex items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f]">Continuar al módulo 06<ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
