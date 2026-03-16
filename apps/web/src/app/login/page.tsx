"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Sending magic link...");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setStatus(error ? `Error: ${error.message}` : "Check your email for the login link.");
  }

  return (
    <main className="mx-auto max-w-md p-6 space-y-4">
      <h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={sendMagicLink} className="space-y-3">
        <input
          className="w-full border rounded px-3 py-2"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="w-full border rounded px-3 py-2">
          Send magic link
        </button>
      </form>

      {status ? <p className="text-sm opacity-80">{status}</p> : null}
    </main>
  );
}