import { supabaseServer } from "@/lib/supabaseServer";

export async function listPublishedCourses() {
  const supabase = await supabaseServer();

  const { data, error } = await supabase
    .from("courses")
    .select("id, title, slug, description, is_published, created_at")
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data ?? [];
}

export async function createCourse(input: {
  title: string;
  description: string;
}) {
  const supabase = await supabaseServer();

  const slug = input.title
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const { data, error } = await supabase
    .from("courses")
    .insert({
      title: input.title,
      description: input.description,
      slug,
      is_published: true,
    })
    .select("id, title, slug, description, is_published, created_at")
    .single();

  if (error) throw error;
  return data;
}