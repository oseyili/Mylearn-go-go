import { NextResponse } from "next/server";
import { createCourse, listPublishedCourses } from "@/lib/courses";

export async function GET() {
  try {
    const courses = await listPublishedCourses();
    return NextResponse.json(courses);
  } catch (error) {
    console.error("[GET /api/courses]", error);
    return NextResponse.json({ error: "Failed to load courses" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const title = String(body.title ?? "").trim();
    const description = String(body.description ?? "").trim();

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const course = await createCourse({ title, description });
    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error("[POST /api/courses]", error);
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}