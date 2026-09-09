import type { Metadata } from "next";
import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/auth";
import { logoutAction } from "@/app/admin/actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  await requireAdmin();

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)", color: "var(--color-text)" }}>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          background: "color-mix(in srgb, var(--color-bg) 92%, transparent)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            padding: "14px clamp(16px, 4vw, 40px)",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-heading)",
              fontSize: 17,
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                width: 26,
                height: 26,
                flex: "none",
                border: "1px solid var(--color-accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                color: "var(--color-accent-700)",
              }}
            >
              M
            </span>
            Admin
          </span>
          <span style={{ flex: 1 }} />
          <a
            className="btn btn-secondary"
            href="/"
            target="_blank"
            rel="noopener"
            style={{ fontSize: 15, textDecoration: "none" }}
          >
            View site ↗
          </a>
          <form action={logoutAction}>
            <button type="submit" className="btn btn-ghost" style={{ fontSize: 15 }}>
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="admin-shell">{children}</div>
    </div>
  );
}
