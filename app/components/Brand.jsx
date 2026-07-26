export default function Brand({ light = false, compact = false }) {
  return (
    <span className="inline-flex items-center gap-3" aria-label="MarevaLux">
      <span
        aria-hidden="true"
        className={`brand-mark ${light ? "brand-mark-light" : ""}`}
      >
        M
      </span>
      <span className="flex flex-col">
        <span
          className={`leading-none font-semibold tracking-[-0.055em] ${
            compact ? "text-[1.45rem]" : "text-[1.7rem]"
          } ${light ? "text-white" : "text-[#071a2f]"}`}
        >
          Mareva<span className="text-[#18b8c6]">Lux</span>
        </span>
        {!compact && (
          <span
            className={`mt-1 text-[0.54rem] leading-none font-semibold tracking-[0.2em] uppercase ${
              light ? "text-slate-400" : "text-slate-500"
            }`}
          >
            Representación comercial B2B
          </span>
        )}
      </span>
    </span>
  );
}
