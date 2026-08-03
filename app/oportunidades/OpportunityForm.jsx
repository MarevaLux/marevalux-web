"use client";

import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";

export default function OpportunityForm() {
  const [status, setStatus] = useState("initial");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xqerwgjv", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar el perfil");
      }

      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[26px] border border-cyan-200 bg-cyan-50 p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#18b8c6] text-[#071a2f]">
          <CheckCircle2 size={26} />
        </span>
        <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-[#071a2f]">
          Recibimos tu perfil
        </h3>
        <p className="mt-3 leading-7 text-slate-600">
          Gracias por tu interés en MarevaLux. Lo tendremos en cuenta cuando se
          abra una oportunidad compatible con tu experiencia.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="hidden"
        name="_subject"
        value="Nuevo perfil interesado en oportunidades MarevaLux"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre y apellido" id="nombre" required />
        <Field label="Ciudad y provincia" id="ubicacion" required />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Correo electrónico" id="email" type="email" required />
        <Field label="Teléfono / WhatsApp" id="telefono" type="tel" required />
      </div>

      <div>
        <label htmlFor="area" className="text-sm font-semibold text-[#14293d]">
          Área de interés
        </label>
        <select
          id="area"
          name="area"
          required
          defaultValue=""
          className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 text-sm text-[#14293d] outline-none transition focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option value="Ventas y desarrollo comercial">
            Ventas y desarrollo comercial
          </option>
          <option value="Coordinación y seguimiento">
            Coordinación y seguimiento
          </option>
          <option value="Marketing y comunicación">
            Marketing y comunicación
          </option>
          <option value="Tecnología y automatización">
            Tecnología y automatización
          </option>
          <option value="Otra área">Otra área</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="experiencia"
          className="text-sm font-semibold text-[#14293d]"
        >
          Contanos brevemente sobre tu experiencia
        </label>
        <textarea
          id="experiencia"
          name="experiencia"
          required
          rows={5}
          placeholder="Experiencia, fortalezas y el tipo de oportunidad que buscás. También podés agregar un enlace a tu CV o LinkedIn."
          className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3.5 text-sm text-[#14293d] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
        />
      </div>

      <label className="flex items-start gap-3 text-xs leading-5 text-slate-500">
        <input
          type="checkbox"
          name="consentimiento"
          required
          className="mt-1 h-4 w-4 rounded border-slate-300 accent-[#18b8c6]"
        />
        <span>
          Autorizo a MarevaLux a conservar estos datos exclusivamente para
          evaluar futuras oportunidades laborales. El envío no constituye una
          oferta ni garantiza una contratación.
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#18b8c6] px-5 text-sm font-bold text-[#071a2f] shadow-[0_12px_28px_rgba(24,184,198,.2)] transition hover:-translate-y-0.5 hover:bg-[#35d0da] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Enviando perfil..." : "Enviar mi perfil"}
        <Send size={16} />
      </button>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          No pudimos enviar el perfil. Intentá nuevamente o escribinos a
          contact.marevalux@gmail.com.
        </p>
      )}
    </form>
  );
}

function Field({ label, id, type = "text", required = false }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-[#14293d]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 text-sm text-[#14293d] outline-none transition focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
      />
    </div>
  );
}
