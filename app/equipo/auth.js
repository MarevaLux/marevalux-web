import "server-only";

import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";

export async function getCurrentProfile() {
  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;

  if (claimsError || !userId) {
    return { supabase, userId: null, profile: null };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, email, full_name, role, active")
    .eq("id", userId)
    .maybeSingle();

  return {
    supabase,
    userId,
    profile: profile?.active ? profile : null,
  };
}

export async function requireTeamSession() {
  const session = await getCurrentProfile();

  if (!session.userId || !session.profile) {
    redirect("/equipo");
  }

  return session;
}
