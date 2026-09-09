import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

/**
 * Public, read-only Supabase client.
 *
 * Uses the publishable key, so row-level security applies: it can read the
 * `projects` table (there is a public SELECT policy) but cannot write.
 * Safe to use in server components and, if ever needed, the browser.
 *
 * Writes happen through a separate secret-key client added with the admin
 * form (build-plan step 4).
 */
export function createPublicClient() {
  if (!url || !publishableKey) {
    throw new Error(
      "Supabase env vars missing: set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in .env.local",
    );
  }
  return createClient(url, publishableKey, {
    auth: { persistSession: false },
  });
}
