const steps = [
  {
    number: "01",
    title: "Comprendemos",
    text: "Analizamos la empresa, su solución, su cliente ideal y la propuesta de valor.",
  },
  {
    number: "02",
    title: "Definimos",
    text: "Seleccionamos segmentos, empresas objetivo y criterios comerciales claros.",
  },
  {
    number: "03",
    title: "Conectamos",
    text: "Abrimos conversaciones profesionales con decisores y socios relevantes.",
  },
  {
    number: "04",
    title: "Desarrollamos",
    text: "Calificamos, acompañamos y damos continuidad a cada oportunidad.",
  },
];

export default function Process() {
  return (
    <section id="proceso" className="bg-white py-24 md:py-32">
      <div className="page-shell">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Cómo trabajamos</span>
          <h2 className="section-title mx-auto">
            Un proceso claro desde la solución hasta la oportunidad.
          </h2>
          <p className="section-copy mx-auto">
            Cada etapa tiene un propósito concreto para que el crecimiento comercial
            no dependa de la improvisación.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-slate-200 lg:block" />
          {steps.map((step) => (
            <article key={step.number} className="relative text-center lg:text-left">
              <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-8 border-white bg-[#18b8c6] text-sm font-bold text-[#071a2f] shadow-md lg:mx-0">
                {step.number}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-[#071a2f]">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
