import "server-only";
import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
const secretKey = process.env.SUPABASE_SECRET_KEY;

/**
 * Public, read-only Supabase client (publishable key).
 *
 * Row-level security applies: it can read the `projects` table via the public
 * SELECT policy but cannot write. Used by the homepage.
 */
export function createPublicClient() {
  if (!url || !publishableKey) {
    throw new Error(
      "Supabase env vars missing: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY",
    );
  }
  return createClient(url, publishableKey, {
    auth: { persistSession: false },
  });
}

/**
 * Full-access Supabase client (secret key) — bypasses row-level security.
 *
 * Only ever call this from server-side admin code that has already checked
 * the admin session. `import "server-only"` above makes a client-side import
 * of this module a build error.
 */
export function createAdminClient() {
  if (!url || !secretKey) {
    throw new Error(
      "Supabase env vars missing: set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SECRET_KEY",
    );
  }
  return createClient(url, secretKey, {
    auth: { persistSession: false },
  });
}

/**
 * Supabase Storage bucket for project screenshots. Override with the
 * SUPABASE_STORAGE_BUCKET env var if your bucket has a different name.
 */
export const PROJECT_IMAGES_BUCKET =
  process.env.SUPABASE_STORAGE_BUCKET || "project-images";
