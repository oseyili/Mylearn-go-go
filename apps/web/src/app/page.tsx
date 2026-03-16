import Link from "next/link";
import AuthStatus from "./_components/AuthStatus";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6 space-y-4">
      <h1 className="text-3xl font-bold">Mylearn-go-go</h1>
      <p className="opacity-80">Local-first Learning Platform</p>

      <AuthStatus />

      <div className="flex gap-3 flex-wrap">
        <Link className="border px-3 py-2 rounded" href="/login">
          Login
        </Link>
        <Link className="border px-3 py-2 rounded" href="/dashboard">
          Dashboard
        </Link>
        <Link className="border px-3 py-2 rounded" href="/courses">
          Courses
        </Link>
        <Link className="border px-3 py-2 rounded" href="/admin/courses/new">
          New Course
        </Link>
      </div>
    </main>
  );
}