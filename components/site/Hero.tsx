import { profile } from "@/lib/content";
import { Corners } from "./Corners";

const mono = "ui-monospace, monospace";

/** LinkedIn-style hero: a wide cover banner with a circular headshot
 *  overlapping its lower-left, then the name / tagline / actions column. */
export function Hero() {
  return (
    <section style={{ padding: "40px 0 0" }}>
      {/* Cover banner — shown at the image's true 4:1 proportions. */}
      <div
        style={{
          position: "relative",
          aspectRatio: "1584 / 396",
          borderRadius: 8,
          overflow: "hidden",
          border: "1px solid var(--color-divider)",
          background: "var(--om-field)",
        }}
      >
        {profile.bannerUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- static asset in public/
          <img
            src={profile.bannerUrl}
            alt=""
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
              padding: 16,
              background:
                "repeating-linear-gradient(135deg, color-mix(in srgb, #f2f2f3 14%, transparent) 0 7px, transparent 7px 15px)",
            }}
          >
            <span
              style={{
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: "0.08em",
                color: "color-mix(in srgb, #f2f2f3 75%, transparent)",
              }}
            >
              banner image — 1584×396
            </span>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px 32px",
          alignItems: "flex-start",
          padding: "0 8px",
        }}
      >
        {/* Circular headshot — only this pulls up to overlap the banner. */}
        <div
          style={{
            position: "relative",
            width: 156,
            height: 156,
            flex: "none",
            marginTop: -56,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid var(--color-bg)",
            background: "var(--color-accent-200)",
          }}
        >
          {profile.headshotUrl ? (
            // eslint-disable-next-line @next/next/no-img-element -- static asset in public/
            <img
              src={profile.headshotUrl}
              alt={profile.name}
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
                fontSize: 10,
                color: "var(--color-accent-900)",
              }}
            >
              headshot
            </span>
          )}
        </div>

        <div style={{ flex: "1 1 min(100%, 320px)", minWidth: 0, paddingTop: 16 }}>
          {profile.openToWork && (
            <div
              className="blueprint"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "7px 12px",
                marginBottom: 14,
                background: "var(--color-accent-100)",
              }}
            >
              <span
                data-om-anim="dot"
                style={{
                  width: 7,
                  height: 7,
                  background: "var(--color-accent-700)",
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
                  color: "var(--color-accent-900)",
                }}
              >
                {profile.openToWorkText}
              </span>
              <Corners />
            </div>
          )}

          <div
            style={{
              fontFamily: mono,
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-accent-700)",
              marginBottom: 10,
            }}
          >
            {profile.kicker}
          </div>
          <h1
            style={{
              fontSize: "clamp(34px, 6.4cqw, 68px)",
              margin: "0 0 12px",
              letterSpacing: "-0.02em",
            }}
          >
            {profile.name.toUpperCase()}
          </h1>
          <p
            style={{
              fontSize: 21,
              maxWidth: "58ch",
              lineHeight: 1.5,
              margin: "0 0 20px",
            }}
          >
            {profile.tagline}
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-primary blueprint">
              View projects
              <Corners />
            </a>
            <a
              href={profile.resumeUrl}
              download
              target="_blank"
              rel="noopener"
              className="btn btn-secondary"
            >
              Download résumé (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
