"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import Brand from "./Brand";

const links = [
  ["Nosotros", "#nosotros"],
  ["Servicios", "#servicios"],
  ["Diferencial", "#diferencial"],
  ["Proceso", "#proceso"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-[0_8px_30px_rgba(7,26,47,.04)] backdrop-blur-xl">
      <div className="page-shell flex h-[86px] items-center justify-between">
        <a href="#inicio" aria-label="Ir al inicio" className="shrink-0">
          <Brand />
        </a>

        <nav
          className="hidden items-center gap-1 rounded-full border border-slate-200/80 bg-slate-50/80 p-1.5 lg:flex"
          aria-label="Navegación principal"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-full px-4 py-2 text-[0.82rem] font-semibold text-slate-600 transition hover:bg-white hover:text-[#071a2f] hover:shadow-sm"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden items-center rounded-full bg-[#18b8c6] px-6 py-3 text-sm font-bold text-[#071a2f] shadow-[0_10px_24px_rgba(24,184,198,.22)] transition hover:-translate-y-0.5 hover:bg-[#37cbd5] hover:shadow-[0_14px_30px_rgba(24,184,198,.3)] lg:inline-flex"
        >
          Agendar una reunión
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-[#071a2f] lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden" aria-label="Navegación móvil">
          <div className="page-shell flex flex-col gap-1">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-medium text-slate-700 hover:bg-slate-50"
              >
                {label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#18b8c6] px-4 py-3 text-center font-bold text-[#071a2f]"
            >
              Agendar una reunión
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
