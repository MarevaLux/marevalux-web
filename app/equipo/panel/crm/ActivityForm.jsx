"use client";

import { useActionState } from "react";
import { Plus } from "lucide-react";
import { addActivityAction } from "./actions";
import { activityTypeOptions } from "./data";

const initialState = { error: "", success: "" };

export default function ActivityForm({ prospectId }) {
  const [state, formAction, pending] = useActionState(
    addActivityAction.bind(null, prospectId),
    initialState,
  );

  return (
    <form action={formAction} className="rounded-[22px] border border-slate-200 bg-white p-5 sm:p-7">
      <h2 className="text-lg font-semibold text-[#071a2f]">Registrar actividad</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Tipo</span>
          <select name="activity_type" defaultValue="nota" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100">
            {activityTypeOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Próximo contacto</span>
          <input type="datetime-local" name="next_contact_at" className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100" />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-slate-700">Detalle</span>
          <textarea required name="description" rows={4} placeholder="Qué ocurrió y qué información debe quedar registrada..." className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100" />
        </label>
      </div>
      {state.error && <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{state.error}</p>}
      {state.success && <p className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{state.success}</p>}
      <button type="submit" disabled={pending} className="mt-5 flex h-11 items-center justify-center gap-2 rounded-xl bg-[#071a2f] px-5 text-sm font-bold text-white transition hover:bg-[#18b8c6] hover:text-[#071a2f] disabled:opacity-60"><Plus size={17} />{pending ? "Guardando..." : "Agregar actividad"}</button>
    </form>
  );
}
