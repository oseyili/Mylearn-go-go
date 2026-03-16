import Link from "next/link";
import { listPublishedCourses } from "@/lib/courses";

export default async function CoursesPage() {
  const courses = await listPublishedCourses();

  return (
    <main className="mx-auto max-w-4xl p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Courses</h1>
        <Link className="border rounded px-3 py-2" href="/admin/courses/new">
          New Course
        </Link>
      </div>

      {courses.length === 0 ? (
        <p className="opacity-70">No courses yet.</p>
      ) : (
        <div className="grid gap-4">
          {courses.map((course) => (
            <div key={course.id} className="border rounded p-4 space-y-2">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-sm opacity-70">{course.slug}</p>
              <p className="opacity-80">
                {course.description || "No description yet."}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}