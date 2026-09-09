import { contacts, profile } from "@/lib/content";
import type { ContactType } from "@/lib/types";
import { Corners } from "./Corners";

const mono = "ui-monospace, monospace";

function ContactIcon({ type }: { type: ContactType }) {
  const common = {
    width: 19,
    height: 19,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (type === "email") {
    return (
      <svg {...common}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  }
  if (type === "github") {
    return (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" style={{ padding: "0 0 40px" }}>
      <div
        style={{
          background: "var(--om-field)",
          color: "#f2f2f3",
          padding: "48px 40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
          gap: 40,
          alignItems: "center",
        }}
      >
        <div>
          {profile.openToWork && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "6px 11px",
                marginBottom: 16,
                border: "1px solid color-mix(in srgb, #f2f2f3 55%, transparent)",
              }}
            >
              <span
                data-om-anim="dot"
                style={{
                  width: 7,
                  height: 7,
                  background: "#b5d9fd",
                  display: "block",
                  animation: "om-pulse 2.4s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 13,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#f2f2f3",
                }}
              >
                Currently open to work
              </span>
            </div>
          )}
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "clamp(28px, 5cqw, 46px)",
              color: "#f2f2f3",
            }}
          >
            Let&apos;s talk.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              lineHeight: 1.6,
              color: "color-mix(in srgb, #f2f2f3 82%, transparent)",
              maxWidth: "40ch",
            }}
          >
            Open to internships and graduate roles in ML engineering, cloud and
            full-stack. The fastest route is email.
          </p>
          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noopener"
            className="btn blueprint"
            style={{ marginTop: 22, background: "#f2f2f3", color: "#1d2d3d" }}
          >
            Download résumé (PDF)
            <Corners />
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {contacts.map((contact) => {
            const isMail = contact.type === "email";
            return (
              <a
                key={contact.type}
                href={contact.href}
                target={isMail ? undefined : "_blank"}
                rel={isMail ? undefined : "noopener noreferrer"}
                aria-label={contact.label}
                title={contact.label}
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  padding: "16px 0",
                  borderTop:
                    "1px solid color-mix(in srgb, #f2f2f3 28%, transparent)",
                  textDecoration: "none",
                  color: "#f2f2f3",
                }}
              >
                <span
                  style={{
                    width: 34,
                    height: 34,
                    flex: "none",
                    border:
                      "1px solid color-mix(in srgb, #f2f2f3 40%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ContactIcon type={contact.type} />
                </span>
                <span
                  style={{
                    fontSize: 18,
                    minWidth: 0,
                    overflowWrap: "anywhere",
                  }}
                >
                  {contact.value}
                </span>
                <span
                  style={{ fontSize: 14, opacity: 0.7, marginLeft: "auto" }}
                >
                  ↗
                </span>
              </a>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          paddingTop: 16,
          fontFamily: mono,
          fontSize: 13,
          opacity: 0.55,
        }}
      >
        <span>© {new Date().getFullYear()} Mohamed Shamik</span>
        <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
          Built with Next.js · Supabase
          <a href="/admin/login" style={{ color: "inherit" }}>
            Admin sign in →
          </a>
        </span>
      </div>
    </section>
  );
}
