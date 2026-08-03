import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Building2,
  CheckCircle2,
  Layers3,
  Lightbulb,
  Store,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const capabilities = [
  "Productos y stock.",
  "Clientes.",
  "Precios y listas personalizadas.",
  "Pedidos.",
  "Descuentos, mínimos y condiciones de compra.",
  "Pagos, envíos y vendedores.",
];

export default function QueEsVentasXMayorPage() {
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
        <div className="mx-auto max-w-[920px]">
          <div className="rounded-[28px] bg-[#071a2f] p-7 text-white shadow-[0_24px_70px_rgba(7,26,47,.16)] sm:p-10 lg:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 01</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><Store size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]">¿Qué es VentasXMayor?</h1>
            <p className="mt-6 max-w-[720px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">La base para comprender la solución, identificar su verdadero valor y explicarla correctamente frente a un prospecto.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><Building2 size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Una plataforma de comercio electrónico B2B</h2>
              <p className="mt-4 text-base leading-7 text-slate-600">VentasXMayor es una plataforma de comercio electrónico B2B creada específicamente para fabricantes, mayoristas y distribuidores.</p>
              <p className="mt-4 text-base leading-7 text-slate-600">Permite que cada empresa tenga su propio canal de ventas mayoristas online, donde sus clientes pueden ingresar, consultar el catálogo, ver sus precios y condiciones particulares, y realizar pedidos de forma ordenada.</p>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><Layers3 size={22} /></div>
                <h2 className="text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Qué puede administrar la empresa</h2>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {capabilities.map((capability) => (
                  <div key={capability} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm font-medium text-slate-600">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#18b8c6]" />
                    {capability}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><Lightbulb size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Lo más importante</h2>
              <p className="mt-4 text-base leading-7 text-slate-700">VentasXMayor no es un marketplace y no es simplemente una página web.</p>
              <p className="mt-4 text-base leading-7 text-slate-700">Es una herramienta para digitalizar y organizar el canal de ventas mayoristas, reduciendo la dependencia de WhatsApp, catálogos enviados manualmente, planillas y pedidos desordenados.</p>
            </section>

            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><BookOpenCheck size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Cómo explicarlo en una frase</h2>
              <blockquote className="mt-5 rounded-2xl border-l-4 border-[#18b8c6] bg-slate-50 px-5 py-5 text-lg leading-8 font-medium text-[#14293d]">“VentasXMayor es una plataforma B2B que permite a una empresa mayorista centralizar su catálogo, clientes y pedidos en su propio canal de ventas online.”</blockquote>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Qué debe recordar el vendedor</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">No vendemos una página web. Ayudamos a las empresas mayoristas a vender de una forma más ordenada, profesional y escalable.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver a la capacitación</Link>
            <Link href="/equipo/panel/ventasxmayor/problemas" className="flex items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f]">Continuar al módulo 02<ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
