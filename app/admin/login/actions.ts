"use server";

import { redirect } from "next/navigation";
import { startSession, verifyPassword } from "@/lib/auth";

export type LoginState = { error?: string };

export async function loginAction(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = String(formData.get("password") ?? "");

  if (!password) return { error: "Enter the password." };
  if (!process.env.ADMIN_PASSWORD) {
    return { error: "ADMIN_PASSWORD is not set on the server." };
  }
  if (!verifyPassword(password)) {
    return { error: "Incorrect password." };
  }

  await startSession();
  redirect("/admin");
}
