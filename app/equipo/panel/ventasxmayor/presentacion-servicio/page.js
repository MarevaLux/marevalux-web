import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  CircleX,
  Layers3,
  Lightbulb,
  Link2,
  MessageSquareText,
  MonitorCheck,
  PackageCheck,
  Presentation,
  Sparkles,
  Target,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const presentationSteps = [
  {
    number: "01",
    title: "Recordar el problema",
    description: "Comenzar con lo que el prospecto confirmó durante el diagnóstico.",
    example: "Hoy reciben pedidos por WhatsApp y después deben volver a cargarlos manualmente.",
  },
  {
    number: "02",
    title: "Conectar la solución",
    description: "Explicar únicamente las capacidades relacionadas con ese problema.",
    example: "VentasXMayor les permite centralizar catálogo, clientes y pedidos en su propio canal B2B.",
  },
  {
    number: "03",
    title: "Traducirlo en valor",
    description: "Mostrar el resultado operativo sin exagerar ni prometer cifras.",
    example: "Así reducen tareas repetidas, errores y dependencia de conversaciones individuales.",
  },
  {
    number: "04",
    title: "Proponer el siguiente paso",
    description: "Cerrar con una acción sencilla y específica.",
    example: "El próximo paso sería una demostración aplicada a su proceso para evaluar el encaje.",
  },
];

const valueConnections = [
  {
    problem: "Pedidos dispersos por WhatsApp, teléfono o vendedores",
    value: "Un canal mayorista propio donde los clientes pueden consultar y realizar pedidos.",
    Icon: Link2,
  },
  {
    problem: "Carga manual y pedidos desordenados",
    value: "Pedidos centralizados para reducir la repetición de tareas y facilitar el seguimiento.",
    Icon: PackageCheck,
  },
  {
    problem: "Listas y catálogos que deben reenviarse",
    value: "Catálogo, productos, precios y stock administrados desde un mismo lugar.",
    Icon: Layers3,
  },
  {
    problem: "Condiciones comerciales diferentes por cliente",
    value: "Precios, descuentos, mínimos y condiciones de compra personalizadas.",
    Icon: Target,
  },
  {
    problem: "Clientes que dependen de una respuesta para comprar",
    value: "Acceso online para consultar sus condiciones y preparar pedidos de forma ordenada.",
    Icon: MonitorCheck,
  },
];

const recommendedLanguage = [
  "Canal de ventas mayoristas propio.",
  "Centralizar catálogo, clientes y pedidos.",
  "Ordenar y digitalizar el proceso comercial.",
  "Reducir tareas manuales y errores.",
  "Adaptar precios y condiciones a cada cliente.",
  "Evaluar el encaje mediante una demostración.",
];

const avoidLanguage = [
  "Es solamente una página web.",
  "Es un marketplace donde aparecerá su empresa.",
  "Va a solucionar absolutamente todo.",
  "Se integra con cualquier sistema sin revisión.",
  "Todos sus clientes lo usarán inmediatamente.",
  "Prometer precios, plazos o funciones no confirmadas.",
];

const tailoredPresentations = [
  {
    situation: "Si depende de WhatsApp",
    pitch: "VentasXMayor les permite ofrecer a sus clientes un canal propio para consultar productos, precios y condiciones y realizar pedidos sin que toda la operación dependa de conversaciones separadas.",
  },
  {
    situation: "Si carga pedidos manualmente",
    pitch: "La plataforma centraliza los pedidos mayoristas para reducir la doble carga, ordenar la información y facilitar el seguimiento del equipo.",
  },
  {
    situation: "Si maneja precios diferentes",
    pitch: "Cada cliente puede acceder a las condiciones comerciales que le corresponden, incluyendo precios, descuentos, mínimos y formas de compra.",
  },
  {
    situation: "Si quiere crecer",
    pitch: "El canal digital permite atender más clientes y pedidos sin aumentar el desorden operativo en la misma proporción.",
  },
];

export default function PresentacionServicioVentasXMayorPage() {
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
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 06</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><Presentation size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.3rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]">Presentación del servicio</h1>
            <p className="mt-6 max-w-[800px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Presentar bien no significa enumerar funciones. Significa conectar cada problema que el prospecto reconoció con una capacidad concreta de VentasXMayor y un resultado comprensible.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><Sparkles size={22} /></div>
              <p className="mt-5 text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Presentación breve</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Cómo explicarlo en 30 segundos</h2>
              <blockquote className="mt-5 rounded-2xl border-l-4 border-[#18b8c6] bg-white/90 px-5 py-5 text-base leading-7 font-medium text-slate-700">“VentasXMayor es una plataforma de comercio electrónico B2B que permite a fabricantes, mayoristas y distribuidores tener su propio canal de ventas online. Allí pueden centralizar productos, clientes, precios, condiciones y pedidos para reducir tareas manuales y ordenar su operación comercial.”</blockquote>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><MessageSquareText size={22} /></div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Estructura comercial</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Presentar en cuatro pasos</h2>
                </div>
              </div>
              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                {presentationSteps.map(({ number, title, description, example }) => (
                  <div key={number} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                    <div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#18b8c6] text-xs font-bold text-[#071a2f]">{number}</span><h3 className="font-semibold text-[#071a2f]">{title}</h3></div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                    <p className="mt-4 rounded-xl bg-white p-4 text-sm leading-6 text-slate-600">“{example}”</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><Link2 size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Conectar problema y valor</h2>
              <div className="mt-6 space-y-3">
                {valueConnections.map(({ problem, value, Icon }) => (
                  <div key={problem} className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 md:grid-cols-[1fr_40px_1fr] md:items-center">
                    <div><p className="text-xs font-bold tracking-[0.1em] text-slate-400 uppercase">Problema detectado</p><p className="mt-2 text-sm leading-6 font-medium text-slate-700">{problem}</p></div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18b8c6] text-[#071a2f]"><Icon size={19} /></div>
                    <div><p className="text-xs font-bold tracking-[0.1em] text-[#0896a5] uppercase">Valor a presentar</p><p className="mt-2 text-sm leading-6 text-slate-600">{value}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><Lightbulb size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Presentaciones según la necesidad</h2>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {tailoredPresentations.map(({ situation, pitch }) => (
                  <div key={situation} className="rounded-2xl bg-white/90 p-5"><h3 className="font-semibold text-[#071a2f]">{situation}</h3><p className="mt-3 text-sm leading-6 text-slate-600">“{pitch}”</p></div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600"><CheckCircle2 size={22} /></div>
                <h2 className="mt-5 text-xl font-semibold text-[#071a2f]">Palabras recomendadas</h2>
                <div className="mt-5 space-y-3">{recommendedLanguage.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><CheckCircle2 size={18} className="mt-1 shrink-0 text-emerald-500" />{item}</div>)}</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500"><CircleX size={22} /></div>
                <h2 className="mt-5 text-xl font-semibold text-[#071a2f]">Frases que debemos evitar</h2>
                <div className="mt-5 space-y-3">{avoidLanguage.map((item) => <div key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><CircleX size={18} className="mt-1 shrink-0 text-red-400" />{item}</div>)}</div>
              </div>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Idea central del módulo</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">No presentamos todas las funciones. Presentamos la parte de VentasXMayor que responde directamente al problema que el prospecto acaba de confirmar.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel/ventasxmayor/guiones-contacto" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al módulo 05</Link>
            <Link href="/equipo/panel/ventasxmayor/objeciones-respuestas" className="flex items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f]">Continuar al módulo 07<ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
