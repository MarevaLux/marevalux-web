import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { requireTeamSession } from "../../../auth";
import CrmShell from "../CrmShell";
import ProspectForm from "../ProspectForm";

export default async function NuevoProspectoPage() {
  const session = await requireTeamSession();
  let sellers = [];

  if (session.profile.role === "admin") {
    const { data } = await session.supabase
      .from("profiles")
      .select("id, full_name, email")
      .eq("active", true)
      .order("full_name");
    sellers = data || [];
  }

  return (
    <CrmShell profile={session.profile}>
      <div className="mx-auto max-w-[1000px]">
        <Link href="/equipo/panel/crm" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[#0896a5]"><ArrowLeft size={17} />Volver a prospectos</Link>
        <p className="mt-7 text-xs font-bold tracking-[0.15em] text-[#0896a5] uppercase">Nuevo registro</p>
        <h1 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-semibold tracking-[-0.05em] text-[#071a2f]">Registrar prospecto</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">Completá primero la información disponible. El diagnóstico y el seguimiento pueden actualizarse después de cada conversación.</p>
        <div className="mt-7"><ProspectForm sellers={sellers} isAdmin={session.profile.role === "admin"} /></div>
      </div>
    </CrmShell>
  );
}
