import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import { contacts, profile } from "@/lib/content";
import type { ContactType } from "@/lib/types";

const mono = "var(--font-mono)";

function ContactIcon({ type }: { type: ContactType }) {
  const common = { size: 19, weight: "regular" as const, "aria-hidden": true };
  if (type === "email") return <EnvelopeSimple {...common} />;
  if (type === "github") return <GithubLogo {...common} />;
  return <LinkedinLogo {...common} />;
}

export function Contact() {
  return (
    <section id="contact" style={{ padding: "0 0 40px" }}>
      <div
        style={{
          background: "var(--om-field)",
          color: "#f5f6f7",
          borderRadius: "var(--radius-card)",
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
                padding: "6px 13px",
                marginBottom: 16,
                borderRadius: "var(--radius-pill)",
                border: "1px solid color-mix(in srgb, #f5f6f7 45%, transparent)",
              }}
            >
              <span
                data-om-anim="dot"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--color-accent-300)",
                  display: "block",
                }}
              />
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#f5f6f7",
                }}
              >
                Currently open to work
              </span>
            </div>
          )}
          <h2 style={{ margin: "0 0 10px", fontSize: "clamp(28px, 5cqw, 44px)", color: "#f5f6f7" }}>
            Let&rsquo;s talk.
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 17,
              lineHeight: 1.6,
              color: "color-mix(in srgb, #f5f6f7 80%, transparent)",
              maxWidth: "40ch",
            }}
          >
            Open to internships and graduate roles in AI/ML engineering or software development. The
            fastest route is email.
          </p>
          <a
            href={profile.resumeUrl}
            download
            target="_blank"
            rel="noopener"
            className="btn"
            style={{ marginTop: 22, background: "#f5f6f7", color: "var(--om-field)", borderColor: "#f5f6f7" }}
          >
            Download resume
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
                className="contact-row"
                style={{
                  display: "flex",
                  gap: 16,
                  alignItems: "center",
                  padding: "16px 12px",
                  margin: "0 -12px",
                  borderRadius: "var(--radius-md)",
                  borderTop: "1px solid color-mix(in srgb, #f5f6f7 25%, transparent)",
                  textDecoration: "none",
                  color: "#f5f6f7",
                }}
              >
                <span
                  style={{
                    width: 36,
                    height: 36,
                    flex: "none",
                    borderRadius: "50%",
                    border: "1px solid color-mix(in srgb, #f5f6f7 38%, transparent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ContactIcon type={contact.type} />
                </span>
                <span style={{ fontSize: 17, minWidth: 0, overflowWrap: "anywhere" }}>
                  {contact.value}
                </span>
                <span style={{ fontSize: 14, opacity: 0.7, marginLeft: "auto" }}>↗</span>
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
          paddingTop: 20,
          fontFamily: mono,
          fontSize: 13,
          color: "var(--color-text-muted)",
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
