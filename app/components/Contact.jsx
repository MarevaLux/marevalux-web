"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Mail,
  MessageSquareText,
  Send,
  ShieldCheck,
} from "lucide-react";

const contactPoints = [
  "Conoceremos su empresa y su solución.",
  "Evaluaremos el perfil de cliente que busca desarrollar.",
  "Analizaremos si existe una oportunidad concreta de colaboración.",
];

export default function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const nombre = formData.get("nombre");
    const empresa = formData.get("empresa");
    const email = formData.get("email");
    const solucion = formData.get("solucion");
    const clientes = formData.get("clientes");
    const mensaje = formData.get("mensaje");

    const subject = `Evaluar una representación con ${empresa}`;

    const body = `
Hola MarevaLux,

Mi nombre es: ${nombre}
Empresa: ${empresa}
Correo electrónico: ${email}

Nuestra solución:
${solucion}

Empresas o clientes que buscamos desarrollar:
${clientes}

Información adicional:
${mensaje || "Sin información adicional."}

Me gustaría evaluar una posible representación comercial con MarevaLux.
    `.trim();

    window.location.href = `mailto:contact.marevalux@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section
      id="contacto"
      className="relative isolate overflow-hidden bg-[#edf5f7] py-24 md:py-32"
    >
      {/* Fondo decorativo */}
      <div className="pointer-events-none absolute -left-48 top-20 h-[440px] w-[440px] rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-48 bottom-0 h-[420px] w-[420px] rounded-full bg-blue-300/10 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.32]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(8,150,165,.16) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, transparent)",
        }}
      />

      <div className="page-shell relative">
        <div className="overflow-hidden rounded-[34px] border border-[#173b5a] bg-[#071a2f] shadow-[0_35px_100px_rgba(7,26,47,.24)]">
          <div className="grid lg:grid-cols-[.86fr_1.14fr]">
            {/* Presentación */}
            <div className="relative overflow-hidden px-7 py-14 text-white sm:px-12 lg:px-14 lg:py-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.08]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)",
                  backgroundSize: "58px 58px",
                }}
              />

              <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-white/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.14em] text-cyan-200 uppercase">
                  <MessageSquareText size={14} />
                  Conversemos
                </span>

                <h2 className="mt-7 max-w-xl text-[clamp(2.4rem,4.5vw,4.25rem)] leading-[1.02] font-semibold tracking-[-0.055em] text-white">
                  Una buena representación comienza entendiendo la solución.
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                  Comparta información sobre su empresa y analizaremos si existe
                  una oportunidad concreta para trabajar juntos.
                </p>

                <div className="mt-10 space-y-4 border-t border-white/10 pt-8">
                  {contactPoints.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-cyan-300"
                      />
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[22px] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                      <Mail size={19} />
                    </span>

                    <div>
                      <p className="text-xs font-semibold tracking-[0.12em] text-slate-400 uppercase">
                        Contacto directo
                      </p>

                      <a
                        href="mailto:contact.marevalux@gmail.com"
                        className="mt-1 block text-sm font-semibold text-white transition hover:text-cyan-200"
                      >
                        contact.marevalux@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white px-7 py-12 sm:px-12 lg:px-14 lg:py-16">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-bold tracking-[0.15em] text-[#0896a5] uppercase">
                    Evaluar una colaboración
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#071a2f]">
                    Cuéntenos sobre su empresa
                  </h3>
                </div>

                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-[#0896a5] sm:flex">
                  <Building2 size={22} />
                </span>
              </div>

              <form onSubmit={handleSubmit} className="mt-9">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="text-sm font-semibold text-[#14293d]"
                    >
                      Nombre y apellido
                    </label>

                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      placeholder="Su nombre"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3.5 text-sm text-[#14293d] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="empresa"
                      className="text-sm font-semibold text-[#14293d]"
                    >
                      Empresa
                    </label>

                    <input
                      id="empresa"
                      name="empresa"
                      type="text"
                      required
                      placeholder="Nombre de la empresa"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3.5 text-sm text-[#14293d] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-[#14293d]"
                  >
                    Correo electrónico
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="nombre@empresa.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3.5 text-sm text-[#14293d] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="solucion"
                    className="text-sm font-semibold text-[#14293d]"
                  >
                    ¿Qué solución ofrece su empresa?
                  </label>

                  <textarea
                    id="solucion"
                    name="solucion"
                    required
                    rows={3}
                    placeholder="Describa brevemente su producto o servicio"
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3.5 text-sm leading-6 text-[#14293d] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="clientes"
                    className="text-sm font-semibold text-[#14293d]"
                  >
                    ¿A qué empresas busca llegar?
                  </label>

                  <textarea
                    id="clientes"
                    name="clientes"
                    required
                    rows={3}
                    placeholder="Sectores, tipos de empresa o responsables objetivo"
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3.5 text-sm leading-6 text-[#14293d] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="mensaje"
                    className="text-sm font-semibold text-[#14293d]"
                  >
                    Información adicional{" "}
                    <span className="font-normal text-slate-400">(opcional)</span>
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    placeholder="Agregue cualquier información que considere relevante"
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fbfc] px-4 py-3.5 text-sm leading-6 text-[#14293d] outline-none transition placeholder:text-slate-400 focus:border-[#18b8c6] focus:bg-white focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-7 flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#18b8c6] px-6 font-bold text-[#071a2f] shadow-[0_14px_35px_rgba(24,184,198,.25)] transition hover:-translate-y-0.5 hover:bg-[#37cbd5] hover:shadow-[0_18px_40px_rgba(24,184,198,.32)]"
                >
                  <Send size={18} />
                  Preparar consulta
                  <ArrowRight size={18} />
                </button>

                <div className="mt-5 flex items-start justify-center gap-2 text-center text-xs leading-5 text-slate-500">
                  <ShieldCheck
                    size={15}
                    className="mt-0.5 shrink-0 text-[#0896a5]"
                  />
                  Al continuar, se abrirá su aplicación de correo con la
                  información preparada.
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}