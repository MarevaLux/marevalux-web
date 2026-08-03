import { updateSession } from "@/utils/supabase/proxy";

export async function proxy(request) {
  return updateSession(request);
}

export const config = {
  matcher: ["/equipo/:path*"],
};
