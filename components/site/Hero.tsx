import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

const mono = "var(--font-mono)";

/** Asymmetric split hero: headline/CTAs on the left, portrait on the right. */
export function Hero() {
  return (
    <section className="hero-grid" style={{ padding: "64px 0 24px" }}>
      <Reveal>
        <div>
          {profile.openToWork && (
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "7px 14px",
                marginBottom: 20,
                borderRadius: "var(--radius-pill)",
                background: "var(--color-accent-soft)",
              }}
            >
              <span
                data-om-anim="dot"
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  display: "block",
                }}
              />
              <span
                style={{
                  fontFamily: mono,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-text)",
                }}
              >
                {profile.openToWorkText}
              </span>
            </div>
          )}

          <h1
            style={{
              fontSize: "clamp(36px, 5.6vw, 64px)",
              margin: "0 0 10px",
            }}
          >
            {profile.name}
          </h1>
          <div
            style={{
              fontFamily: mono,
              fontSize: 13,
              letterSpacing: "0.06em",
              color: "var(--color-text-muted)",
              marginBottom: 20,
            }}
          >
            {profile.kicker}
          </div>
          <p
            style={{
              fontSize: 19,
              maxWidth: "52ch",
              lineHeight: 1.55,
              color: "var(--color-text-muted)",
              margin: "0 0 28px",
            }}
          >
            {profile.tagline}
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a
              href={profile.resumeUrl}
              download
              target="_blank"
              rel="noopener"
              className="btn btn-secondary"
            >
              Download resume
            </a>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.12}>
        <div
          style={{
            position: "relative",
            aspectRatio: "4 / 5",
            maxWidth: 360,
            marginInline: "auto",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: "-10%",
              background:
                "radial-gradient(circle at 70% 25%, color-mix(in srgb, var(--color-accent) 30%, transparent), transparent 62%)",
              filter: "blur(6px)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              height: "100%",
              borderRadius: "var(--radius-card)",
              overflow: "hidden",
              border: "1px solid var(--color-divider)",
              boxShadow: "var(--shadow-lg)",
              background: "var(--color-surface)",
            }}
          >
            {profile.headshotUrl ? (
              // eslint-disable-next-line @next/next/no-img-element -- static asset in public/
              <img
                src={profile.headshotUrl}
                alt={profile.name}
                width={720}
                height={900}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 18%",
                }}
              />
            ) : (
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: mono,
                  fontSize: 12,
                  color: "var(--color-text-muted)",
                }}
              >
                headshot · 720×900
              </span>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
