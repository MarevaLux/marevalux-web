export const statusOptions = [
  ["nuevo", "Nuevo"],
  ["contactado", "Contactado"],
  ["respondio", "Respondió"],
  ["calificado", "Calificado"],
  ["presentacion_agendada", "Presentación agendada"],
  ["seguimiento", "En seguimiento"],
  ["listo_para_avanzar", "Listo para avanzar"],
  ["ganado", "Ganado"],
  ["perdido", "Perdido"],
];

export const priorityOptions = [
  ["baja", "Baja"],
  ["media", "Media"],
  ["alta", "Alta"],
];

export const activityTypeOptions = [
  ["nota", "Nota"],
  ["llamada", "Llamada"],
  ["whatsapp", "WhatsApp"],
  ["email", "Correo"],
  ["reunion", "Reunión"],
  ["cambio_estado", "Cambio de estado"],
];

export const statusLabels = Object.fromEntries(statusOptions);
export const priorityLabels = Object.fromEntries(priorityOptions);
export const activityTypeLabels = Object.fromEntries(activityTypeOptions);

export const statusStyles = {
  nuevo: "bg-slate-100 text-slate-600",
  contactado: "bg-blue-50 text-blue-700",
  respondio: "bg-violet-50 text-violet-700",
  calificado: "bg-cyan-50 text-[#077f8c]",
  presentacion_agendada: "bg-indigo-50 text-indigo-700",
  seguimiento: "bg-amber-50 text-amber-700",
  listo_para_avanzar: "bg-emerald-50 text-emerald-700",
  ganado: "bg-emerald-100 text-emerald-800",
  perdido: "bg-red-50 text-red-600",
};
