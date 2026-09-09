import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/admin/LoginForm";
import { isAuthed } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Sign in — Admin",
  robots: { index: false, follow: false },
};

const mono = "ui-monospace, monospace";

export default async function AdminLoginPage() {
  if (await isAuthed()) redirect("/admin");

  return (
    <div className="login-grid" style={{ background: "var(--color-bg)", color: "var(--color-text)" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "40px clamp(28px, 5vw, 76px)",
          backgroundImage:
            "radial-gradient(color-mix(in srgb, var(--color-accent) 26%, transparent) 0.8px, transparent 0.8px)",
          backgroundSize: "30px 30px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              width: 30,
              height: 30,
              border: "1px solid var(--color-accent)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-heading)",
              fontSize: 16,
              color: "var(--color-accent-700)",
            }}
          >
            M
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: 14,
              color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
            }}
          >
            Portfolio&nbsp;·&nbsp;Admin
          </span>
        </div>

        <div style={{ width: "100%", maxWidth: 430, margin: "48px 0" }}>
          <p
            style={{
              margin: "0 0 10px",
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
            }}
          >
            Restricted&nbsp;/&nbsp;01
          </p>
          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(38px, 4.6vw, 56px)",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            Sign in
          </h1>
          <p
            style={{
              margin: "0 0 30px",
              fontSize: 17,
              lineHeight: 1.55,
              color: "color-mix(in srgb, var(--color-text) 68%, transparent)",
            }}
          >
            Add and edit projects. Public visitors never see this screen.
          </p>

          <LoginForm />

          <p
            style={{
              margin: "26px 0 0",
              fontSize: 15,
              color: "color-mix(in srgb, var(--color-text) 60%, transparent)",
            }}
          >
            Not the owner? <Link href="/">Return to the portfolio</Link>.
          </p>
        </div>

        <div
          style={{
            fontSize: 13,
            color: "color-mix(in srgb, var(--color-text) 48%, transparent)",
          }}
        >
          © {new Date().getFullYear()} Mohamed Shamik
        </div>
      </div>

      <div
        className="login-panel"
        aria-hidden="true"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "#1d2d3d",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 44,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(color-mix(in srgb, #f2f2f3 9%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, #f2f2f3 9%, transparent) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 68% 26%, color-mix(in srgb, #5980a6 55%, transparent), transparent 62%)",
          }}
        />
        <div style={{ position: "relative" }}>
          <p
            style={{
              margin: "0 0 12px",
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "color-mix(in srgb, #f2f2f3 58%, transparent)",
            }}
          >
            Content management
          </p>
          <p
            style={{
              margin: 0,
              maxWidth: "15ch",
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(34px, 3.6vw, 52px)",
              lineHeight: 0.98,
              color: "#f2f2f3",
              fontWeight: 600,
            }}
          >
            One place to keep the portfolio true.
          </p>
        </div>
      </div>
    </div>
  );
}
