"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AuthStatus() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setEmail(session?.user?.email ?? null);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  async function logout() {
    await supabase.auth.signOut();
  }

  return (
    <div className="flex items-center gap-3">
      {email ? (
        <>
          <span className="text-sm opacity-80">Signed in: {email}</span>
          <button className="border rounded px-3 py-1" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <span className="text-sm opacity-80">Not signed in</span>
      )}
    </div>
  );
}