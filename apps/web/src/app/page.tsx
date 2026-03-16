import Link from "next/link";
import AuthStatus from "./_components/AuthStatus";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-3xl font-bold">Mylearn-go-go</h1>
      <AuthStatus />

      <div className="flex gap-3">
        <Link className="border px-3 py-2" href="/login">
          Login
        </Link>
        <Link className="border px-3 py-2" href="/dashboard">
          Dashboard
        </Link>
      </div>
    </main>
  );
}
