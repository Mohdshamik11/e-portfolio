import "server-only";
import { createHash, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

/**
 * Single-owner admin gate. There is no user table: one password lives in the
 * ADMIN_PASSWORD env var. A successful login sets an httpOnly cookie holding
 * sha256(ADMIN_PASSWORD) — never the password itself — and every admin page /
 * action re-checks it.
 */
const SESSION_COOKIE = "admin_session";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

function sha256(value: string): Buffer {
  return createHash("sha256").update(value, "utf8").digest();
}

/** Hex digest of the configured password, or null if none is set. */
function expectedToken(): string | null {
  const pw = process.env.ADMIN_PASSWORD;
  return pw ? sha256(pw).toString("hex") : null;
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a);
  const bb = Buffer.from(b);
  return ab.length === bb.length && timingSafeEqual(ab, bb);
}

/** True if the submitted password matches ADMIN_PASSWORD. */
export function verifyPassword(candidate: string): boolean {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) return false;
  // Both digests are 32 bytes, so this compare is constant-time.
  return timingSafeEqual(sha256(candidate), sha256(pw));
}

/** True if the current request carries a valid admin session cookie. */
export async function isAuthed(): Promise<boolean> {
  const expected = expectedToken();
  if (!expected) return false;
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return Boolean(token) && safeEqual(token as string, expected);
}

/** Redirect to the login page unless the request is an authenticated admin. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAuthed())) redirect("/admin/login");
}

export async function startSession(): Promise<void> {
  const expected = expectedToken();
  if (!expected) throw new Error("ADMIN_PASSWORD is not set");
  (await cookies()).set(SESSION_COOKIE, expected, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: THIRTY_DAYS,
  });
}

export async function endSession(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
}
