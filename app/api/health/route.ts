import { NextResponse } from "next/server";
import { createPublicClient } from "@/lib/supabase";

/**
 * Pinged daily by the Vercel Cron Job defined in vercel.json. A real query
 * against Supabase counts as activity, which keeps the free-tier project
 * from auto-pausing after 7 days of inactivity.
 */
export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const supabase = createPublicClient();
    const { error } = await supabase.from("projects").select("id").limit(1);
    if (error) throw error;
    return NextResponse.json({ ok: true, pingedAt: new Date().toISOString() });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
