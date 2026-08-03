import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  Filter,
  Plus,
  Search,
  Target,
  UsersRound,
} from "lucide-react";
import { requireTeamSession } from "../../auth";
import CrmShell from "./CrmShell";
import { priorityLabels, statusLabels, statusOptions, statusStyles } from "./data";

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  timeZone: "America/Argentina/Buenos_Aires",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

function formatDate(value) {
  if (!value) return "Sin fecha";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Sin fecha" : dateFormatter.format(date);
}

export default async function CrmPage({ searchParams }) {
  const session = await requireTeamSession();
  const params = await searchParams;
  const search = String(params?.q || "").trim().toLowerCase();
  const status = String(params?.status || "");

  const { data: prospects = [], error } = await session.supabase
    .from("prospects")
    .select("*")
    .eq("provider_code", "ventasxmayor")
    .order("updated_at", { ascending: false });

  let people = [];
  if (session.profile.role === "admin") {
    const { data } = await session.supabase
      .from("profiles")
      .select("id, full_name, email")
      .eq("active", true);
    people = data || [];
  }

  const peopleById = new Map(people.map((person) => [person.id, person]));
  const filteredProspects = prospects.filter((prospect) => {
    const matchesStatus = !status || prospect.status === status;
    const haystack = [
      prospect.company_name,
      prospect.industry,
      prospect.city,
      prospect.contact_name,
      prospect.phone,
      prospect.email,
    ].join(" ").toLowerCase();
    return matchesStatus && (!search || haystack.includes(search));
  });

  const scheduled = prospects.filter((prospect) => prospect.next_contact_at).length;

  const stats = [
    [Building2, "Prospectos", prospects.length, "Total registrado"],
    [Target, "Calificados", prospects.filter((item) => item.status === "calificado").length, "Con necesidad confirmada"],
    [CalendarClock, "Programados", scheduled, "Contactos con fecha"],
    [CheckCircle2, "Ganados", prospects.filter((item) => item.status === "ganado").length, "Cierres confirmados"],
  ];

  return (
    <CrmShell profile={session.profile}>
      <div className="mx-auto max-w-[1160px]">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold tracking-[0.15em] text-[#0896a5] uppercase">CRM comercial · VentasXMayor</p>
            <h1 className="mt-3 text-[clamp(2rem,4vw,3.3rem)] font-semibold tracking-[-0.05em] text-[#071a2f]">Prospectos y oportunidades</h1>
            <p className="mt-3 max-w-[680px] text-sm leading-6 text-slate-600">Registrá cada contacto, mantené el próximo paso actualizado y comunicá las oportunidades sin sacar información del circuito de MarevaLux.</p>
          </div>
          <Link href="/equipo/panel/crm/nuevo" className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#18b8c6] px-5 text-sm font-bold text-[#071a2f] shadow-[0_12px_28px_rgba(24,184,198,.2)] transition hover:bg-[#37cbd5]"><Plus size={18} />Nuevo prospecto</Link>
        </div>

        <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map(([Icon, label, value, detail]) => (
            <div key={label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><Icon size={20} /></div><span className="text-2xl font-semibold text-[#071a2f]">{value}</span></div>
              <p className="mt-4 text-sm font-semibold text-[#071a2f]">{label}</p>
              <p className="mt-1 text-xs text-slate-500">{detail}</p>
            </div>
          ))}
        </div>

        <form className="mt-6 grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:grid-cols-[1fr_230px_auto]" method="get">
          <label className="relative block">
            <Search size={18} className="pointer-events-none absolute left-4 top-3.5 text-slate-400" />
            <input name="q" defaultValue={params?.q || ""} placeholder="Buscar empresa, contacto, ciudad..." className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100" />
          </label>
          <label className="relative block">
            <Filter size={17} className="pointer-events-none absolute left-4 top-3.5 text-slate-400" />
            <select name="status" defaultValue={status} className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100">
              <option value="">Todos los estados</option>
              {statusOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <button className="h-11 rounded-xl bg-[#071a2f] px-5 text-sm font-bold text-white">Aplicar filtros</button>
        </form>

        {error ? (
          <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-700">No pudimos cargar los prospectos. Revisá la conexión con Supabase.</div>
        ) : filteredProspects.length === 0 ? (
          <div className="mt-5 rounded-[24px] border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
            <UsersRound size={30} className="mx-auto text-slate-300" />
            <h2 className="mt-4 text-lg font-semibold text-[#071a2f]">No hay prospectos para mostrar</h2>
            <p className="mt-2 text-sm text-slate-500">Registrá el primer contacto o cambiá los filtros de búsqueda.</p>
          </div>
        ) : (
          <div className="mt-5 overflow-hidden rounded-[22px] border border-slate-200 bg-white">
            <div className="hidden grid-cols-[1.2fr_.9fr_.8fr_.8fr_44px] gap-4 border-b border-slate-200 bg-slate-50 px-5 py-3 text-[0.68rem] font-bold tracking-[0.1em] text-slate-400 uppercase lg:grid">
              <span>Empresa</span><span>Contacto</span><span>Estado</span><span>Próximo paso</span><span />
            </div>
            <div className="divide-y divide-slate-100">
              {filteredProspects.map((prospect) => {
                const owner = peopleById.get(prospect.owner_id);
                return (
                  <Link key={prospect.id} href={`/equipo/panel/crm/${prospect.id}`} className="group grid gap-4 px-5 py-5 transition hover:bg-cyan-50/40 lg:grid-cols-[1.2fr_.9fr_.8fr_.8fr_44px] lg:items-center">
                    <div>
                      <p className="font-semibold text-[#071a2f]">{prospect.company_name}</p>
                      <p className="mt-1 text-xs text-slate-500">{[prospect.industry, prospect.city].filter(Boolean).join(" · ") || "Sin rubro informado"}</p>
                      {session.profile.role === "admin" && owner && <p className="mt-2 text-xs font-medium text-[#0896a5]">Responsable: {owner.full_name || owner.email}</p>}
                    </div>
                    <div><p className="text-sm font-medium text-slate-700">{prospect.contact_name || "Sin contacto"}</p><p className="mt-1 text-xs text-slate-500">{prospect.phone || prospect.email || "Sin datos"}</p></div>
                    <div className="flex flex-wrap gap-2"><span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[prospect.status] || statusStyles.nuevo}`}>{statusLabels[prospect.status] || prospect.status}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-500">{priorityLabels[prospect.priority] || "Media"}</span></div>
                    <div><p className="text-sm text-slate-700">{prospect.next_step || "Sin próximo paso"}</p><p className="mt-1 text-xs text-slate-500">{formatDate(prospect.next_contact_at)}</p></div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition group-hover:bg-[#18b8c6] group-hover:text-[#071a2f]"><ArrowRight size={17} /></span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </CrmShell>
  );
}
