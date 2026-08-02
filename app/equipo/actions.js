"use server";

import { redirect } from "next/navigation";
import {
  createTeamSession,
  credentialsAreValid,
  destroyTeamSession,
  portalIsConfigured,
} from "./auth";

export async function loginAction(_previousState, formData) {
  if (!portalIsConfigured()) {
    return { error: "El acceso todavía no está habilitado." };
  }

  const email = String(formData.get("email") || "");
  const password = String(formData.get("password") || "");

  if (!credentialsAreValid(email, password)) {
    return { error: "El correo o la contraseña no son correctos." };
  }

  await createTeamSession();
  redirect("/equipo/panel");
}

export async function logoutAction() {
  await destroyTeamSession();
  redirect("/equipo");
}
