"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireTeamSession } from "../../auth";
import { activityTypeOptions, priorityOptions, statusOptions } from "./data";

const allowedStatuses = new Set(statusOptions.map(([value]) => value));
const allowedPriorities = new Set(priorityOptions.map(([value]) => value));
const allowedActivityTypes = new Set(activityTypeOptions.map(([value]) => value));

function text(formData, name, maxLength = 4000) {
  return String(formData.get(name) || "").trim().slice(0, maxLength);
}

function optionalDate(formData, name) {
  const value = text(formData, name, 40);
  if (!value) return null;

  const argentinaValue = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)
    ? `${value}:00-03:00`
    : value;
  const date = new Date(argentinaValue);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

function prospectValues(formData) {
  const status = text(formData, "status", 40);
  const priority = text(formData, "priority", 20);

  return {
    company_name: text(formData, "company_name", 180),
    industry: text(formData, "industry", 120),
    city: text(formData, "city", 120),
    website: text(formData, "website", 300),
    contact_name: text(formData, "contact_name", 180),
    contact_role: text(formData, "contact_role", 120),
    phone: text(formData, "phone", 80),
    email: text(formData, "email", 240).toLowerCase(),
    source: text(formData, "source", 180),
    current_process: text(formData, "current_process"),
    problems: text(formData, "problems"),
    opportunity_fit: text(formData, "opportunity_fit"),
    objections: text(formData, "objections"),
    notes: text(formData, "notes", 8000),
    priority: allowedPriorities.has(priority) ? priority : "media",
    status: allowedStatuses.has(status) ? status : "nuevo",
    next_step: text(formData, "next_step", 500),
    next_contact_at: optionalDate(formData, "next_contact_at"),
  };
}

async function resolveOwner(session, formData) {
  if (session.profile.role !== "admin") return session.userId;

  const requestedOwner = text(formData, "owner_id", 80);
  if (!requestedOwner) return session.userId;

  const { data: owner } = await session.supabase
    .from("profiles")
    .select("id")
    .eq("id", requestedOwner)
    .eq("active", true)
    .maybeSingle();

  return owner?.id || session.userId;
}

function databaseErrorMessage(error) {
  if (error?.code === "23505") {
    return "Este prospecto ya está registrado. Buscalo en el CRM antes de crear otro contacto.";
  }

  return "No pudimos guardar la información. Revisá los datos e intentá nuevamente.";
}

export async function createProspectAction(_previousState, formData) {
  const session = await requireTeamSession();
  const values = prospectValues(formData);

  if (!values.company_name) {
    return { error: "El nombre de la empresa es obligatorio." };
  }

  const ownerId = await resolveOwner(session, formData);
  const { data, error } = await session.supabase
    .from("prospects")
    .insert({
      ...values,
      provider_code: "ventasxmayor",
      owner_id: ownerId,
      created_by: session.userId,
    })
    .select("id")
    .single();

  if (error || !data) {
    return { error: databaseErrorMessage(error) };
  }

  revalidatePath("/equipo/panel/crm");
  redirect(`/equipo/panel/crm/${data.id}?created=1`);
}

export async function updateProspectAction(prospectId, _previousState, formData) {
  const session = await requireTeamSession();
  const values = prospectValues(formData);

  if (!values.company_name) {
    return { error: "El nombre de la empresa es obligatorio." };
  }

  const ownerId = await resolveOwner(session, formData);
  const { data, error } = await session.supabase
    .from("prospects")
    .update({ ...values, owner_id: ownerId })
    .eq("id", prospectId)
    .select("id")
    .maybeSingle();

  if (error || !data) {
    return { error: databaseErrorMessage(error) };
  }

  revalidatePath("/equipo/panel/crm");
  revalidatePath(`/equipo/panel/crm/${prospectId}`);
  redirect(`/equipo/panel/crm/${prospectId}?updated=1`);
}

export async function addActivityAction(prospectId, _previousState, formData) {
  const session = await requireTeamSession();
  const description = text(formData, "description", 5000);
  const requestedType = text(formData, "activity_type", 40);
  const activityType = allowedActivityTypes.has(requestedType) ? requestedType : "nota";

  if (!description) {
    return { error: "Escribí el detalle de la actividad.", success: "" };
  }

  const nextContactAt = optionalDate(formData, "next_contact_at");
  const { error } = await session.supabase
    .from("prospect_activities")
    .insert({
      prospect_id: prospectId,
      author_id: session.userId,
      activity_type: activityType,
      description,
      next_contact_at: nextContactAt,
    });

  if (error) {
    return { error: "No pudimos registrar la actividad.", success: "" };
  }

  if (nextContactAt) {
    await session.supabase
      .from("prospects")
      .update({ next_contact_at: nextContactAt })
      .eq("id", prospectId);
  }

  revalidatePath("/equipo/panel/crm");
  revalidatePath(`/equipo/panel/crm/${prospectId}`);
  return { error: "", success: "Actividad registrada correctamente." };
}
