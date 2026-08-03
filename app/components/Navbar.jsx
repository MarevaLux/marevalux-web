"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Brand from "./Brand";

const links = [
  ["Nosotros", "#nosotros"],
  ["Empresas", "#empresas"],
  ["Servicios", "#servicios"],
  ["Diferencial", "#diferencial"],
  ["Proceso", "#proceso"],
  ["Oportunidades", "/oportunidades"],
  ["Equipo", "/equipo"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const previousScroll = useRef(0);

  useEffect(() => {
    let animationFrame;

    function handleScroll() {
      cancelAnimationFrame(animationFrame);

      animationFrame = requestAnimationFrame(() => {
        const currentScroll = window.scrollY;

        if (open || currentScroll < 100) {
          setVisible(true);
        } else if (currentScroll > previousScroll.current) {
          setVisible(false);
        } else {
          setVisible(true);
        }

        previousScroll.current = currentScroll;
      });
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "-translate-y-[130%]"
      }`}
    >
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[22px] border border-white/15 bg-[#071a2f]/95 shadow-[0_20px_60px_rgba(0,0,0,.32)] backdrop-blur-2xl">
        <div className="flex h-[68px] items-center justify-between px-4 sm:px-5">
          {/* Logo */}
          <a
            href="#inicio"
            aria-label="Ir al inicio"
            className="shrink-0 transition duration-200 hover:scale-[1.02]"
          >
            <Brand light compact />
          </a>

          {/* Menú de escritorio */}
          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label="Navegación principal"
          >
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="rounded-full px-3.5 py-2.5 text-[0.86rem] font-bold tracking-[0.01em] !text-white [text-shadow:0_1px_8px_rgba(255,255,255,.22)] transition duration-200 hover:bg-white/[0.12] hover:!text-[#6ee7ef]"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Botón principal */}
          <a
            href="#contacto"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-[#18b8c6] to-[#35d0da] px-5 py-3 text-sm font-bold text-[#071a2f] shadow-[0_12px_28px_rgba(24,184,198,.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(24,184,198,.38)] lg:inline-flex"
          >
            Agendar una reunión
            <ArrowUpRight size={16} strokeWidth={2.3} />
          </a>

          {/* Botón móvil */}
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.07] text-white transition hover:bg-white/[0.12] lg:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-300/45 to-transparent" />

        {/* Menú móvil */}
        {open && (
          <nav
            className="border-t border-white/[0.06] bg-[#071a2f]/98 px-4 py-4 lg:hidden"
            aria-label="Navegación móvil"
          >
            <div className="flex flex-col gap-1">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-white/90 transition hover:bg-white/[0.08] hover:text-cyan-200"
                >
                  {label}
                </a>
              ))}

              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#18b8c6] px-4 py-3.5 text-sm font-bold text-[#071a2f]"
              >
                Agendar una reunión
                <ArrowUpRight size={16} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
