import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle2,
  Factory,
  Gauge,
  PackageSearch,
  Repeat2,
  ShoppingCart,
  Store,
  Tags,
  Target,
  Truck,
  Users,
  XCircle,
} from "lucide-react";
import Brand from "../../../../components/Brand";

const idealProfiles = [
  {
    title: "Fabricantes",
    description: "Empresas que producen y venden sus productos a comercios, distribuidores o revendedores.",
    Icon: Factory,
  },
  {
    title: "Mayoristas",
    description: "Negocios con catálogo amplio, pedidos frecuentes y una cartera activa de compradores B2B.",
    Icon: Store,
  },
  {
    title: "Distribuidores",
    description: "Empresas que abastecen regularmente a comercios y necesitan ordenar clientes, precios y pedidos.",
    Icon: Truck,
  },
  {
    title: "Importadores",
    description: "Compañías que comercializan productos importados mediante listas, vendedores o canales mayoristas.",
    Icon: PackageSearch,
  },
  {
    title: "Marcas con revendedores",
    description: "Marcas que venden a locales, franquicias o revendedores con condiciones comerciales propias.",
    Icon: Building2,
  },
  {
    title: "Empresas con venta recurrente",
    description: "Proveedores cuyos clientes vuelven a comprar y necesitan hacer nuevos pedidos con facilidad.",
    Icon: Repeat2,
  },
];

const fitSignals = [
  {
    title: "Vende a empresas o comercios",
    description: "Tiene un canal B2B real, no solamente ventas al consumidor final.",
    Icon: Users,
  },
  {
    title: "Recibe pedidos con frecuencia",
    description: "Los clientes compran de forma recurrente y repiten productos.",
    Icon: ShoppingCart,
  },
  {
    title: "Maneja un catálogo",
    description: "Cuenta con varios productos, presentaciones, categorías o listas de precios.",
    Icon: PackageSearch,
  },
  {
    title: "Tiene condiciones diferentes",
    description: "Utiliza precios, descuentos, mínimos o formas de pago según cada cliente.",
    Icon: Tags,
  },
  {
    title: "El proceso todavía es manual",
    description: "Los pedidos dependen de WhatsApp, llamadas, vendedores o planillas.",
    Icon: Gauge,
  },
  {
    title: "Quiere crecer sin desordenarse",
    description: "Necesita atender más clientes sin aumentar el trabajo manual en la misma proporción.",
    Icon: Target,
  },
];

const lowFitProfiles = [
  "Negocios que venden únicamente al consumidor final.",
  "Empresas de servicios que no comercializan productos por catálogo.",
  "Emprendimientos con muy pocos pedidos y sin clientes recurrentes.",
  "Empresas que solo buscan una página institucional o una tienda minorista común.",
  "Prospectos sin un canal mayorista activo ni intención de desarrollarlo.",
];

const qualificationChecklist = [
  "Vende productos a comercios, empresas o revendedores.",
  "Tiene compradores que realizan pedidos de manera recurrente.",
  "Maneja catálogo, lista de precios o varias categorías de productos.",
  "Recibe pedidos por WhatsApp, teléfono, vendedores o planillas.",
  "Administra precios, descuentos o condiciones diferentes por cliente.",
  "Necesita ordenar el proceso o atender un mayor volumen de pedidos.",
];

export default function ClienteIdealVentasXMayorPage() {
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
              <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] text-cyan-200 uppercase">Módulo 03</span>
              <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-300">VentasXMayor</span>
            </div>
            <div className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]"><Users size={27} /></div>
            <h1 className="mt-7 text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] font-semibold tracking-[-0.055em]">Cliente ideal</h1>
            <p className="mt-6 max-w-[780px] text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">VentasXMayor no debe ofrecerse a cualquier negocio. El mejor prospecto vende productos a otras empresas, recibe pedidos recurrentes y necesita ordenar un proceso comercial que todavía depende de tareas manuales.</p>
          </div>

          <article className="mt-6 space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><Building2 size={22} /></div>
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-[#0896a5] uppercase">Dónde buscar</p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Perfiles con mejor encaje</h2>
                </div>
              </div>
              <div className="mt-7 grid gap-4 lg:grid-cols-2">
                {idealProfiles.map(({ title, description, Icon }) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#0896a5] shadow-sm"><Icon size={20} /></div>
                    <div>
                      <h3 className="font-semibold text-[#071a2f]">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-[24px] border border-cyan-200 bg-[#e9f8fa] p-6 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0896a5]"><Target size={22} /></div>
              <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Señales de buen encaje</h2>
              <p className="mt-3 max-w-[760px] text-base leading-7 text-slate-700">Un rubro puede parecer atractivo, pero lo importante es cómo vende la empresa. Estas señales permiten decidir si vale la pena avanzar.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {fitSignals.map(({ title, description, Icon }) => (
                  <div key={title} className="rounded-2xl bg-white/85 p-5">
                    <div className="flex items-center gap-3">
                      <Icon size={19} className="shrink-0 text-[#0896a5]" />
                      <h3 className="text-sm font-semibold text-[#071a2f]">{title}</h3>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-red-500"><XCircle size={22} /></div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">A quién no priorizar</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">No significa rechazar automáticamente, sino evitar gastar tiempo donde el valor de la solución será menor.</p>
                <div className="mt-6 space-y-3">
                  {lowFitProfiles.map((profile) => (
                    <div key={profile} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600">
                      <XCircle size={18} className="mt-1 shrink-0 text-slate-400" />
                      {profile}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#071a2f] text-cyan-300"><CheckCircle2 size={22} /></div>
                <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">Calificación rápida</h2>
                <p className="mt-3 text-sm leading-6 text-slate-600">Marcá mentalmente cuántas condiciones cumple el prospecto antes de dedicarle seguimiento comercial.</p>
                <div className="mt-6 space-y-3">
                  {qualificationChecklist.map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-600">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#18b8c6]" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-[#e9f8fa] p-4 text-sm leading-6 text-slate-700">
                  <strong className="font-semibold text-[#071a2f]">Prioridad alta:</strong> cumple cuatro o más condiciones y reconoce que su proceso actual le genera trabajo, demoras o errores.
                </div>
              </div>
            </section>

            <section className="rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
              <p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Idea central del módulo</p>
              <p className="mt-4 text-xl leading-8 font-semibold tracking-[-0.02em]">El cliente ideal no se define solamente por su rubro. Se reconoce porque vende de forma mayorista, recibe pedidos recurrentes y tiene un proceso que puede ordenarse y escalar con VentasXMayor.</p>
            </section>
          </article>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/equipo/panel/ventasxmayor/problemas" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-600 transition hover:border-cyan-200 hover:text-[#077f8c]"><ArrowLeft size={17} />Volver al módulo 02</Link>
            <Link href="/equipo/panel/ventasxmayor/preguntas-diagnostico" className="flex items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f]">Continuar al módulo 04<ArrowRight size={17} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
