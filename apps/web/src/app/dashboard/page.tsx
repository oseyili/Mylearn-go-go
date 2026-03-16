import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabaseServer";
import { ensureProfile } from "@/lib/profiles";

export default async function DashboardPage() {
  const supabase = await supabaseServer();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.log("[dashboard] getUser error:", error.message);
  }

  if (!user) {
    console.log("[dashboard] user: NONE -> redirect /login");
    redirect("/login");
  }

  console.log("[dashboard] user:", user.id, user.email);

  // Auto-create profile row on first login
  await ensureProfile(supabase);

  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="opacity-80">Welcome, {user.email}</p>
      <p className="text-sm opacity-70">
        Profile auto-check ran. Open Supabase Table Editor → profiles to confirm
        your row exists.
      </p>
    </main>
  );
}
