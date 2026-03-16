import type { SupabaseClient } from "@supabase/supabase-js";

export async function ensureProfile(supabase: SupabaseClient) {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError) throw userError;
  if (!user) return null;

  // Check if profile exists
  const { data: existing, error: selectError } = await supabase
    .from("profiles")
    .select("id")
    .eq("id", user.id)
    .maybeSingle();

  if (selectError) throw selectError;

  if (existing) return user;

  // Create profile
  const { error: insertError } = await supabase.from("profiles").insert({
    id: user.id,
    email: user.email,
    full_name: user.user_metadata?.full_name ?? null,
  });

  if (insertError) throw insertError;

  return user;
}
