"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { endSession, requireAdmin } from "@/lib/auth";
import { slugify } from "@/lib/slug";
import { createAdminClient, PROJECT_IMAGES_BUCKET } from "@/lib/supabase";

export async function logoutAction(): Promise<void> {
  await endSession();
  redirect("/admin/login");
}

export type ProjectFormState = {
  error?: string;
  fieldErrors?: Partial<Record<"title" | "description" | "slug" | "githubUrl" | "liveUrl", string>>;
  values?: Record<string, string>;
};

function cleanUrl(value: string): string | null {
  const v = value.trim();
  if (!v) return null;
  return /^https?:\/\//i.test(v) ? v : `https://${v}`;
}

/** Create a project (no id) or update an existing one (hidden id field). */
export async function saveProjectAction(
  _prev: ProjectFormState,
  formData: FormData,
): Promise<ProjectFormState> {
  await requireAdmin();

  const id = String(formData.get("id") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const techRaw = String(formData.get("techStack") ?? "");
  const githubRaw = String(formData.get("githubUrl") ?? "");
  const liveRaw = String(formData.get("liveUrl") ?? "");
  const dateCompleted = String(formData.get("dateCompleted") ?? "").trim() || null;
  const featured = formData.get("featured") != null;
  const removeImage = formData.get("removeImage") != null;
  const image = formData.get("image");

  const values: Record<string, string> = {
    title,
    description,
    slug: slugInput,
    techStack: techRaw,
    githubUrl: githubRaw,
    liveUrl: liveRaw,
    dateCompleted: dateCompleted ?? "",
  };

  const fieldErrors: ProjectFormState["fieldErrors"] = {};
  if (!title) fieldErrors.title = "Required.";
  if (!description) fieldErrors.description = "Required.";

  const slug = slugify(slugInput || title);
  if (!slug) fieldErrors.slug = "Could not build a slug — add a title or slug.";

  if (Object.keys(fieldErrors).length > 0) return { fieldErrors, values };

  const techStack = techRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  const supabase = createAdminClient();

  // Optional image: upload a new file, or clear it on edit.
  let imageUrl: string | null | undefined;
  if (image instanceof File && image.size > 0) {
    const ext = (image.name.split(".").pop() || "png").toLowerCase();
    const path = `${slug}-${Date.now()}.${ext}`;
    const { error: uploadError } = await supabase.storage
      .from(PROJECT_IMAGES_BUCKET)
      .upload(path, image, { contentType: image.type || undefined, upsert: false });
    if (uploadError) {
      return { error: `Image upload failed: ${uploadError.message}`, values };
    }
    imageUrl = supabase.storage.from(PROJECT_IMAGES_BUCKET).getPublicUrl(path)
      .data.publicUrl;
  } else if (removeImage) {
    imageUrl = null;
  }

  const row = {
    slug,
    title,
    description,
    tech_stack: techStack,
    github_url: cleanUrl(githubRaw),
    live_url: cleanUrl(liveRaw),
    badge: featured ? "Featured" : null,
    date_completed: dateCompleted,
    ...(imageUrl !== undefined ? { image_url: imageUrl } : {}),
  };

  const result = id
    ? await supabase.from("projects").update(row).eq("id", id)
    : await supabase.from("projects").insert(row);

  if (result.error) {
    if (result.error.code === "23505") {
      return {
        fieldErrors: { slug: "That slug is already used by another project." },
        values,
      };
    }
    return { error: `Save failed: ${result.error.message}`, values };
  }

  revalidatePath("/");
  revalidatePath("/admin");
  redirect("/admin");
}

export async function deleteProjectAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "").trim();
  if (!id) return;

  const supabase = createAdminClient();
  const { error } = await supabase.from("projects").delete().eq("id", id);
  if (error) throw new Error(`Delete failed: ${error.message}`);

  revalidatePath("/");
  revalidatePath("/admin");
}
