import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Flag,
  LockKeyhole,
  MessageSquareText,
  PackageCheck,
  Send,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const requiredFields = [
  { field: "Empresa", detail: "Nombre comercial, rubro, ciudad y sitio web o redes." },
  { field: "Contacto", detail: "Nombre, cargo, teléfono, WhatsApp y correo del responsable." },
  { field: "Origen", detail: "Dónde se encontró el prospecto y fecha del primer contacto." },
  { field: "Proceso actual", detail: "Cómo recibe, organiza y actualiza los pedidos mayoristas." },
  { field: "Problemas detectados", detail: "Tareas manuales, demoras, errores o necesidades que reconoció." },
  { field: "Encaje", detail: "Por qué Ventas puede aportar valor a esa empresa." },
  { field: "Estado", detail: "Situación real de la oportunidad dentro del proceso comercial." },
  { field: "Próximo paso", detail: "Acción acordada, responsable y fecha exacta de seguimiento." },
];

const opportunityStatuses = [
  { status: "Nuevo", description: "Prospecto identificado, todavía sin contacto." },
  { status: "Contactado", description: "Se realizó el primer intento y se registró el canal utilizado." },
  { status: "Respondió", description: "Hubo conversación, pero todavía falta calificar la necesidad." },
  { status: "Calificado", description: "Existe buen encaje, necesidad reconocida y contacto válido." },
  { status: "Presentación agendada", description: "Hay día, hora y participantes confirmados." },
  { status: "En seguimiento", description: "La oportunidad continúa activa con un próximo paso definido." },
  { status: "Listo para avanzar", description: "El decisor confirmó interés y MarevaLux debe continuar el proceso." },
  { status: "Ganado o perdido", description: "Usar solamente cuando MarevaLux confirme el resultado final." },
];

const workflow = [
  { number: "01", title: "Registrar", description: "Crear el prospecto en el CRM antes de iniciar o inmediatamente después del primer contacto.", Icon: ClipboardCheck },
  { number: "02", title: "Actualizar", description: "Anotar cada respuesta, problema, objeción y acción realizada el mismo día.", Icon: FileCheck2 },
  { number: "03", title: "Calificar", description: "Definir el encaje y evitar marcar como venta a una persona que solamente pidió información.", Icon: UserCheck },
  { number: "04", title: "Comunicar", description: "Enviar a MarevaLux el resumen completo cuando exista una oportunidad calificada o lista para avanzar.", Icon: Send },
  { number: "05", title: "Continuar", description: "Seguir únicamente el próximo paso acordado y mantener actualizado el estado hasta el cierre.", Icon: Flag },
];

const confidentialityRules = [
  "Toda oportunidad se registra y se gestiona a nombre de MarevaLux.",
  "No contactar directamente al proveedor tecnológico ni compartir sus datos internos.",
  "No revelar comisiones, acuerdos, márgenes o información comercial interna.",
  "No trasladar prospectos a cuentas personales ni utilizar su información fuera del trabajo.",
  "No enviar precios, descuentos, contratos o condiciones sin confirmación de MarevaLux.",
  "No compartir accesos, materiales privados o información de otros clientes.",
];

const readyChecklist = [
  "La persona tiene autoridad de decisión o identificó a quienes deciden.",
  "La necesidad y el proceso actual quedaron registrados claramente.",
  "El prospecto comprende qué es VentasXMayor y qué problema puede resolver.",
  "Existe una acción concreta: presentación, validación comercial o decisión.",
  "Los datos de contacto y la información de la empresa están completos.",
  "No existen promesas pendientes que MarevaLux no haya confirmado.",
];

const qualifiedTemplate = `OPORTUNIDAD CALIFICADA · VENTASXMAYOR

Empresa:
Rubro y ciudad:
Sitio web o redes:
Contacto y cargo:
WhatsApp / correo:
Cómo recibe los pedidos:
Problemas detectados:
Qué busca mejorar:
Objeciones o dudas:
Próximo paso acordado:
Fecha del próximo contacto:`;

const readyTemplate = `OPORTUNIDAD LISTA PARA AVANZAR

Empresa:
Persona que decide:
Necesidad confirmada:
Solución presentada:
Condiciones solicitadas:
Preguntas pendientes:
Acción que debe realizar MarevaLux:
Fecha comprometida con el prospecto:`;

export default function RegistroVentasVentasXMayorPage() {
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
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 08</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><PackageCheck size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.2rem,6vw,4.4rem)] leading-[0.98] font-semibold tracking-[-0.055em]">Registro y comunicación de ventas</h1>
            <p className="mt-6 max-w-[820px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">Una oportunidad que no se registra correctamente puede perderse, repetirse o quedar sin seguimiento. Toda la información comercial debe permanecer centralizada en MarevaLux.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><ClipboardCheck size={22} /></div>
                <div><p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Información mínima</p><h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Qué registrar en el CRM</h2></div>
              </div>
              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                {requiredFields.map(({ field, detail }) => (
                  <div key={field} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5"><h3 className="flex items-center gap-2 font-semibold text-[#071a2f]"><BadgeCheck size={18} className="text-[#0896a5]" />{field}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{detail}</p></div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><Flag size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Estados de la oportunidad</h2>
              <p className="mt-3 max-w-[780px] text-base leading-7 text-slate-700">El estado debe reflejar lo que realmente ocurrió. No se marca una venta solamente porque alguien mostró interés o pidió información.</p>
              <div className="mt-6 grid gap-3 lg:grid-cols-2">
                {opportunityStatuses.map(({ status, description }) => (
                  <div key={status} className="rounded-2xl bg-white/90 p-5"><h3 className="font-semibold text-[#071a2f]">{status}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{description}</p></div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><Send size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Flujo obligatorio de trabajo</h2>
              <div className="mt-6 grid gap-3 md:grid-cols-5">
                {workflow.map(({ number, title, description, Icon }) => (
                  <div key={number} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4"><div className="flex items-center justify-between"><span className="text-xs font-bold text-[#0896a5]">{number}</span><Icon size={19} className="text-[#0896a5]" /></div><h3 className="mt-4 font-semibold text-[#071a2f]">{title}</h3><p className="mt-2 text-xs leading-5 text-slate-600">{description}</p></div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><CheckCircle2 size={22} /></div>
                <h2 className="mt-5 text-xl font-semibold text-[#071a2f]">Cuándo está lista para avanzar</h2>
                <div className="mt-5 space-y-3">{readyChecklist.map((item) => <div key={item} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600"><CheckCircle2 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />{item}</div>)}</div>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><LockKeyhole size={22} /></div>
                <h2 className="mt-5 text-xl font-semibold text-[#071a2f]">Confidencialidad y protección comercial</h2>
                <div className="mt-5 space-y-3">{confidentialityRules.map((rule) => <div key={rule} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600"><ShieldCheck size={18} className="mt-1 shrink-0 text-[#0896a5]" />{rule}</div>)}</div>
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><MessageSquareText size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Plantillas para comunicar a MarevaLux</h2>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                <div><p className="text-sm font-semibold text-[#071a2f]">Oportunidad calificada</p><pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-slate-50 p-5 font-sans text-sm leading-6 text-slate-600">{qualifiedTemplate}</pre></div>
                <div><p className="text-sm font-semibold text-[#071a2f]">Lista para avanzar</p><pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-[#071a2f] p-5 font-sans text-sm leading-6 text-slate-300">{readyTemplate}</pre></div>
              </div>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Idea central del módulo</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">El vendedor genera y desarrolla la oportunidad; MarevaLux centraliza la información, valida las condiciones y coordina la continuidad comercial. Ningún paso importante debe quedar fuera de ese circuito.</p>
            </section>

            <section className="rounded-[24px] border border-emerald-200 bg-emerald-50 p-6 text-center sm:p-8">
              <FileCheck2 size={28} className="mx-auto text-emerald-600" />
              <p className="mt-4 text-xs font-bold tracking-[0.14em] text-emerald-700 uppercase">Capacitación completa</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Ya conocés el proceso comercial de VentasXMayor</h2>
              <p className="mx-auto mt-3 max-w-[680px] text-sm leading-6 text-slate-600">Antes de comenzar a prospectar, consultá cualquier duda pendiente y utilizá únicamente los canales, materiales y condiciones autorizados por MarevaLux.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel/ventasxmayor/objeciones-respuestas" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al módulo 07</Link>
            <Link href="/equipo/panel" className="flex items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f]">Finalizar y volver al panel<PackageCheck size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
