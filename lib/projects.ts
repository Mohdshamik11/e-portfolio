import { createPublicClient } from "./supabase";
import type { Project } from "./types";

export { slugify } from "./slug";

/** Columns selected from the `projects` table, in snake_case as stored. */
type ProjectRow = {
  id: string;
  slug: string;
  title: string;
  description: string;
  tech_stack: string[] | null;
  github_url: string | null;
  live_url: string | null;
  image_url: string | null;
  badge: string | null;
  date_completed: string | null;
};

function rowToProject(row: ProjectRow): Project {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    description: row.description,
    techStack: row.tech_stack ?? [],
    githubUrl: row.github_url,
    liveUrl: row.live_url,
    imageUrl: row.image_url,
    badge: row.badge,
    dateCompleted: row.date_completed,
  };
}

const COLUMNS =
  "id, slug, title, description, tech_stack, github_url, live_url, image_url, badge, date_completed";

/**
 * All projects, newest first, from the Supabase `projects` table.
 *
 * On any error (table missing, network, misconfig) it logs and returns an
 * empty list so the homepage falls back to its empty state rather than
 * failing the request or the build.
 */
export async function getProjects(): Promise<Project[]> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select(COLUMNS)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("getProjects: Supabase query failed:", error.message);
      return [];
    }
    return (data as ProjectRow[]).map(rowToProject);
  } catch (err) {
    console.error("getProjects:", err);
    return [];
  }
}

/** A single project by id, or null if it doesn't exist / on error. */
export async function getProjectById(id: string): Promise<Project | null> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("projects")
      .select(COLUMNS)
      .eq("id", id)
      .maybeSingle();

    if (error) {
      console.error("getProjectById: Supabase query failed:", error.message);
      return null;
    }
    return data ? rowToProject(data as ProjectRow) : null;
  } catch (err) {
    console.error("getProjectById:", err);
    return null;
  }
}
