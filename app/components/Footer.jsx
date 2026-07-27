import { ArrowUpRight, Globe2, Mail, MapPin } from "lucide-react";
import Brand from "./Brand";

const navigation = [
  ["Nosotros", "#nosotros"],
  ["Empresas", "#empresas"],
  ["Servicios", "#servicios"],
  ["Diferencial", "#diferencial"],
  ["Proceso", "#proceso"],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#061526] text-white">
      <div className="pointer-events-none absolute -right-40 -top-48 h-[440px] w-[440px] rounded-full bg-cyan-300/8 blur-3xl" />

      <div className="page-shell relative pt-16 pb-8 md:pt-20">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[1.45fr_.7fr_.8fr_1.15fr] lg:gap-10">
          <div>
            <Brand light />
            <p className="mt-7 max-w-sm text-sm leading-7 text-slate-400">
              Representación comercial B2B para fabricantes, empresas tecnológicas
              y proveedores de soluciones de alto valor.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300">
              <MapPin size={14} className="text-cyan-300" />
              Empresa argentina
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Navegación
            </p>
            <div className="mt-6 flex flex-col gap-3.5 text-sm text-slate-400">
              {navigation.map(([label, href]) => (
                <a key={href} href={href} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Enfoque
            </p>
            <div className="mt-6 flex flex-col gap-3.5 text-sm text-slate-400">
              <span>Representación B2B</span>
              <span>Prospección comercial</span>
              <span>Desarrollo de alianzas</span>
              <span>Seguimiento profesional</span>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase">
              Contacto
            </p>
            <div className="mt-6 flex flex-col gap-4 text-sm">
              <a
                href="mailto:contact.marevalux@gmail.com"
                className="group flex items-start gap-3 text-slate-300 transition hover:text-white"
              >
                <Mail size={17} className="mt-0.5 shrink-0 text-cyan-300" />
                <span className="break-all">contact.marevalux@gmail.com</span>
              </a>
              <a
                href="https://marevalux.com"
                className="group flex items-center gap-3 text-slate-300 transition hover:text-white"
              >
                <Globe2 size={17} className="shrink-0 text-cyan-300" />
                marevalux.com
                <ArrowUpRight size={13} className="opacity-50 transition group-hover:opacity-100" />
              </a>
              <span className="flex items-center gap-3 text-slate-400">
                <MapPin size={17} className="shrink-0 text-cyan-300" />
                Argentina
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 MarevaLux. Todos los derechos reservados.</p>
          <p>Representación comercial con criterio y claridad.</p>
        </div>
      </div>
    </footer>
  );
}
