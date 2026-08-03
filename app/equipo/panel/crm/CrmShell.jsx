import Link from "next/link";
import {
  BookOpen,
  CircleHelp,
  Home,
  LogOut,
  MessageSquareText,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import Brand from "../../../components/Brand";
import { logoutAction } from "../../actions";

const navigation = [
  [Home, "Inicio", "/equipo/panel"],
  [UsersRound, "Prospectos", "/equipo/panel/crm"],
  [BookOpen, "Capacitación", "/equipo/panel"],
  [MessageSquareText, "Guiones", "/equipo/panel/ventasxmayor/guiones-contacto"],
  [CircleHelp, "Objeciones", "/equipo/panel/ventasxmayor/objeciones-respuestas"],
];

export default function CrmShell({ profile, active = "Prospectos", children }) {
  const initials = profile.full_name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase() || "ML";

  return (
    <main className="min-h-screen bg-[#f2f7f9] text-[#14293d]">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[78px] w-[min(100%-32px,1440px)] items-center justify-between gap-4">
          <Link href="/" aria-label="Ir a MarevaLux"><Brand /></Link>
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-[#071a2f]">{profile.full_name}</p>
              <p className="text-xs text-slate-500">{profile.role === "admin" ? "Administrador" : "Vendedor"}</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#071a2f] text-xs font-bold text-cyan-200">{initials}</div>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-[min(100%,1440px)] lg:grid-cols-[250px_1fr]">
        <aside className="hidden min-h-[calc(100vh-78px)] border-r border-slate-200/80 bg-white p-5 lg:flex lg:flex-col">
          <p className="px-3 pt-2 text-[0.68rem] font-bold tracking-[0.15em] text-slate-400 uppercase">Centro comercial</p>
          <nav className="mt-4 space-y-1" aria-label="Panel comercial">
            {navigation.map(([Icon, label, href]) => (
              <Link key={label} href={href} className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition ${active === label ? "bg-[#e9f8fa] text-[#077f8c]" : "text-slate-500 hover:bg-slate-50 hover:text-[#071a2f]"}`}>
                <Icon size={18} />{label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl bg-[#071a2f] p-5 text-white">
            <ShieldCheck size={21} className="text-cyan-300" />
            <p className="mt-4 text-sm font-semibold">Información protegida</p>
            <p className="mt-2 text-xs leading-5 text-slate-400">Cada vendedor accede únicamente a las oportunidades autorizadas.</p>
          </div>

          <form action={logoutAction} className="mt-4">
            <button type="submit" className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-400 hover:bg-slate-50 hover:text-[#071a2f]"><LogOut size={18} />Cerrar sesión</button>
          </form>
        </aside>

        <section className="min-w-0 px-4 py-6 sm:px-7 lg:px-10 lg:py-9 xl:px-14">
          <nav className="mb-6 flex gap-2 overflow-x-auto pb-1 lg:hidden" aria-label="Navegación móvil">
            {navigation.slice(0, 3).map(([Icon, label, href]) => (
              <Link key={label} href={href} className={`flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold ${active === label ? "bg-[#071a2f] text-white" : "border border-slate-200 bg-white text-slate-600"}`}><Icon size={16} />{label}</Link>
            ))}
          </nav>
          {children}
        </section>
      </div>
    </main>
  );
}
