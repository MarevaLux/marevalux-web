"use client";

import { useActionState } from "react";
import { Save } from "lucide-react";
import { createProspectAction, updateProspectAction } from "./actions";
import { priorityOptions, statusOptions } from "./data";

const initialState = { error: "" };

function Field({ label, name, defaultValue = "", type = "text", required = false, placeholder = "" }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <input required={required} type={type} name={name} defaultValue={defaultValue || ""} placeholder={placeholder} className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a2f] outline-none transition focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100" />
    </label>
  );
}

function Textarea({ label, name, defaultValue = "", placeholder = "" }) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-slate-700">{label}</span>
      <textarea name={name} defaultValue={defaultValue || ""} placeholder={placeholder} rows={4} className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-[#071a2f] outline-none transition focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100" />
    </label>
  );
}

export default function ProspectForm({ mode = "create", prospect = {}, sellers = [], isAdmin = false }) {
  const action = mode === "edit"
    ? updateProspectAction.bind(null, prospect.id)
    : createProspectAction;
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="space-y-6">
      <section className="rounded-[22px] border border-slate-200 bg-white p-5 sm:p-7">
        <h2 className="text-lg font-semibold text-[#071a2f]">Empresa y contacto</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field required label="Empresa" name="company_name" defaultValue={prospect.company_name} placeholder="Nombre de la empresa" />
          <Field label="Rubro" name="industry" defaultValue={prospect.industry} placeholder="Mayorista, fabricante, distribuidor..." />
          <Field label="Ciudad" name="city" defaultValue={prospect.city} />
          <Field label="Sitio web o redes" name="website" defaultValue={prospect.website} placeholder="https://" />
          <Field label="Nombre del contacto" name="contact_name" defaultValue={prospect.contact_name} />
          <Field label="Cargo" name="contact_role" defaultValue={prospect.contact_role} />
          <Field label="Teléfono o WhatsApp" name="phone" defaultValue={prospect.phone} />
          <Field label="Correo" name="email" type="email" defaultValue={prospect.email} />
          <Field label="Origen del prospecto" name="source" defaultValue={prospect.source} placeholder="Llamada, Instagram, búsqueda..." />
          {isAdmin && (
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Responsable</span>
              <select name="owner_id" defaultValue={prospect.owner_id || sellers[0]?.id || ""} required className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a2f] outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100">
                {sellers.map((seller) => <option key={seller.id} value={seller.id}>{seller.full_name || seller.email}</option>)}
              </select>
            </label>
          )}
        </div>
      </section>

      <section className="rounded-[22px] border border-slate-200 bg-white p-5 sm:p-7">
        <h2 className="text-lg font-semibold text-[#071a2f]">Diagnóstico comercial</h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Textarea label="Proceso actual" name="current_process" defaultValue={prospect.current_process} placeholder="Cómo recibe y organiza los pedidos..." />
          <Textarea label="Problemas detectados" name="problems" defaultValue={prospect.problems} />
          <Textarea label="Encaje de la solución" name="opportunity_fit" defaultValue={prospect.opportunity_fit} placeholder="Por qué Ventas puede aportar valor..." />
          <Textarea label="Objeciones o dudas" name="objections" defaultValue={prospect.objections} />
        </div>
      </section>

      <section className="rounded-[22px] border border-slate-200 bg-white p-5 sm:p-7">
        <h2 className="text-lg font-semibold text-[#071a2f]">Seguimiento</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Estado</span>
            <select name="status" defaultValue={prospect.status || "nuevo"} className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a2f] outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100">
              {statusOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="text-sm font-semibold text-slate-700">Prioridad</span>
            <select name="priority" defaultValue={prospect.priority || "media"} className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a2f] outline-none focus:border-[#18b8c6] focus:ring-4 focus:ring-cyan-100">
              {priorityOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
            </select>
          </label>
          <Field label="Próximo paso" name="next_step" defaultValue={prospect.next_step} placeholder="Llamar, enviar información, reunión..." />
          <Field label="Fecha del próximo contacto" name="next_contact_at" type="datetime-local" defaultValue={prospect.next_contact_value} />
          <div className="sm:col-span-2"><Textarea label="Notas internas" name="notes" defaultValue={prospect.notes} /></div>
        </div>
      </section>

      {state.error && <p role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{state.error}</p>}

      <button type="submit" disabled={pending} className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#18b8c6] px-5 text-sm font-bold text-[#071a2f] shadow-[0_12px_28px_rgba(24,184,198,.2)] transition hover:bg-[#37cbd5] disabled:cursor-wait disabled:opacity-60 sm:w-auto sm:min-w-[220px]">
        <Save size={18} />{pending ? "Guardando..." : mode === "edit" ? "Guardar cambios" : "Registrar prospecto"}
      </button>
    </form>
  );
}
