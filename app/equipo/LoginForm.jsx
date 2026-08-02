"use client";

import { useActionState } from "react";
import { ArrowRight } from "lucide-react";
import { loginAction } from "./actions";

const initialState = { error: "" };

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="mt-8 space-y-5">
      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Correo corporativo</span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          placeholder="nombre@marevalux.com"
          className="mt-2 h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a2f] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
        />
      </label>

      <label className="block">
        <span className="text-sm font-semibold text-slate-700">Contraseña</span>
        <input
          required
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Ingresá tu contraseña"
          className="mt-2 h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-[#071a2f] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
        />
      </label>

      {state.error && (
        <p role="alert" className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#18b8c6] px-5 text-sm font-bold text-[#071a2f] shadow-[0_12px_28px_rgba(24,184,198,.22)] transition hover:-translate-y-0.5 hover:bg-[#37cbd5] disabled:cursor-wait disabled:opacity-70"
      >
        {pending ? "Verificando..." : "Continuar"}
        <ArrowRight size={18} />
      </button>
    </form>
  );
}
