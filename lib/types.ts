/**
 * Shape of a single portfolio project.
 *
 * These fields are what the UI renders. Step 3 of the build plan backs them
 * with a Supabase `projects` table; the column names there will map onto this
 * type (e.g. tech_stack -> techStack, github_url -> githubUrl).
 */
export type Project = {
  id: string;
  /** URL-friendly identifier, e.g. "image-classifier-enhancer". */
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  /** Public URL of the screenshot in Supabase Storage; null shows a placeholder. */
  imageUrl: string | null;
  /** Small label on the card, e.g. "Featured". */
  badge: string | null;
  /** ISO date (YYYY-MM-DD). The card shows the year. */
  dateCompleted: string | null;
};

export type ContactType = "email" | "github" | "linkedin";
