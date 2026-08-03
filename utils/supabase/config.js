const fallbackSupabaseUrl = "https://hsqtslinkygqskbohokl.supabase.co";
const fallbackSupabasePublishableKey =
  "sb_publishable_4_wEgzk-69oGUzbyVKijpQ_Tuqk7EvS";

export const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || fallbackSupabaseUrl;

export const supabasePublishableKey =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  fallbackSupabasePublishableKey;
