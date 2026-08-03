import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarClock, History } from "lucide-react";
import { requireTeamSession } from "../../../auth";
import ActivityForm from "../ActivityForm";
import CrmShell from "../CrmShell";
import ProspectForm from "../ProspectForm";
import { activityTypeLabels, statusLabels, statusStyles } from "../data";

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  timeZone: "America/Argentina/Buenos_Aires",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

const dateTimeInputFormatter = new Intl.DateTimeFormat("sv-SE", {
  timeZone: "America/Argentina/Buenos_Aires",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

function formatDate(value) {
  if (!value) return "Sin fecha";
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Sin fecha" : dateFormatter.format(date);
}

function dateTimeLocalValue(value) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return dateTimeInputFormatter.format(date).replace(" ", "T");
}

export default async function ProspectoDetallePage({ params, searchParams }) {
  const session = await requireTeamSession();
  const { id } = await params;
  const messages = await searchParams;

  const [{ data: prospect }, { data: activities = [] }] = await Promise.all([
    session.supabase.from("prospects").select("*").eq("id", id).maybeSingle(),
    session.supabase.from("prospect_activities").select("*").eq("prospect_id", id).order("created_at", { ascending: false }),
  ]);

  if (!prospect) notFound();

  let sellers = [];
  let people = [session.profile];
  if (session.profile.role === "admin") {
    const { data } = await session.supabase.from("profiles").select("id, full_name, email").eq("active", true).order("full_name");
    sellers = data || [];
    people = data || [session.profile];
  }

  const peopleById = new Map(people.map((person) => [person.id, person]));
  const owner = peopleById.get(prospect.owner_id);
  const formProspect = { ...prospect, next_contact_value: dateTimeLocalValue(prospect.next_contact_at) };

  return (
    <CrmShell profile={session.profile}>
      <div className="mx-auto max-w-[1060px]">
        <Link href="/equipo/panel/crm" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0896a5]"><ArrowLeft size={17} />Volver a prospectos</Link>

        <div className="mt-7 rounded-[24px] bg-[#071a2f] p-6 text-white sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div><p className="text-xs font-bold tracking-[0.14em] text-cyan-200 uppercase">Oportunidad comercial</p><h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{prospect.company_name}</h1><p className="mt-3 text-sm text-slate-300">{[prospect.industry, prospect.city].filter(Boolean).join(" · ") || "Información comercial pendiente"}</p></div>
            <span className={`w-fit rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[prospect.status] || statusStyles.nuevo}`}>{statusLabels[prospect.status] || prospect.status}</span>
          </div>
          <div className="mt-6 grid gap-3 border-t border-white/10 pt-5 text-sm text-slate-300 sm:grid-cols-3">
            <p><strong className="block text-xs text-slate-500">Contacto</strong>{prospect.contact_name || "Sin informar"}</p>
            <p><strong className="block text-xs text-slate-500">Próximo paso</strong>{prospect.next_step || "Sin definir"}</p>
            <p><strong className="block text-xs text-slate-500">Próximo contacto</strong>{formatDate(prospect.next_contact_at)}</p>
          </div>
          {session.profile.role === "admin" && owner && <p className="mt-5 text-xs font-semibold text-cyan-200">Responsable: {owner.full_name || owner.email}</p>}
        </div>

        {messages?.created && <p className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Prospecto registrado correctamente.</p>}
        {messages?.updated && <p className="mt-5 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">Cambios guardados correctamente.</p>}

        <div className="mt-7"><ProspectForm mode="edit" prospect={formProspect} sellers={sellers} isAdmin={session.profile.role === "admin"} /></div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <ActivityForm prospectId={prospect.id} />
          <section className="rounded-[22px] border border-slate-200 bg-white p-5 sm:p-7">
            <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9f8fa] text-[#0896a5]"><History size={20} /></div><div><h2 className="text-lg font-semibold text-[#071a2f]">Historial</h2><p className="text-xs text-slate-500">Conversaciones y acciones registradas</p></div></div>
            {activities.length === 0 ? (
              <p className="mt-6 rounded-xl bg-slate-50 px-4 py-6 text-center text-sm text-slate-500">Todavía no hay actividades registradas.</p>
            ) : (
              <div className="mt-6 space-y-3">
                {activities.map((activity) => {
                  const author = peopleById.get(activity.author_id);
                  return (
                    <article key={activity.id} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4">
                      <div className="flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-[#0896a5]">{activityTypeLabels[activity.activity_type] || activity.activity_type}</span><span className="text-xs text-slate-400">{formatDate(activity.created_at)}</span></div>
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-slate-700">{activity.description}</p>
                      {author && <p className="mt-3 text-xs text-slate-500">Registrado por {author.full_name || author.email}</p>}
                      {activity.next_contact_at && <p className="mt-3 flex items-center gap-2 text-xs font-medium text-amber-700"><CalendarClock size={15} />Próximo contacto: {formatDate(activity.next_contact_at)}</p>}
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        </div>
      </div>
    </CrmShell>
  );
}
