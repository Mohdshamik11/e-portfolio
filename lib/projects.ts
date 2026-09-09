import type { Project } from "./types";

/**
 * TEMPORARY sample projects, mirroring the design export so the grid renders
 * with realistic content.
 *
 * Build-plan step 3 replaces the body of `getProjects()` with a Supabase
 * query against the `projects` table. Nothing else in the UI should need to
 * change: components already consume `Project[]` and handle the empty state.
 */
const SAMPLE_PROJECTS: Project[] = [
  {
    id: "sample-1",
    slug: "image-classifier-enhancer",
    title: "Image Classifier & Enhancer",
    description:
      "A CNN that multi-label classifies photo defects — blur, exposure, noise, contrast — paired with a U-Net that restores the ones it flags. Wrapped in a Streamlit app you can drop an image into.",
    techStack: ["PyTorch", "CNN", "U-Net", "Streamlit"],
    githubUrl: "https://github.com/Mohdshamik11",
    liveUrl: null,
    imageUrl: null,
    badge: "Featured",
    dateCompleted: "2026-06-01",
  },
  {
    id: "sample-2",
    slug: "project-two",
    title: "Project two",
    description:
      "Placeholder card so the grid reads correctly. Real content comes from the projects table once you add an entry in the admin dashboard.",
    techStack: ["Tech", "Tech", "Tech"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
    badge: "Sample row",
    dateCompleted: null,
  },
  {
    id: "sample-3",
    slug: "project-three",
    title: "Project three",
    description:
      "Placeholder card so the grid reads correctly. Real content comes from the projects table once you add an entry in the admin dashboard.",
    techStack: ["Tech", "Tech"],
    githubUrl: null,
    liveUrl: null,
    imageUrl: null,
    badge: "Sample row",
    dateCompleted: null,
  },
];

export async function getProjects(): Promise<Project[]> {
  return SAMPLE_PROJECTS;
}
