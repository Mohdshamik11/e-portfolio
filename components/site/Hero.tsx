import { profile } from "@/lib/content";
import { Corners } from "./Corners";

const mono = "ui-monospace, monospace";

/** Banner hero: wide placeholder image, an overlapping headshot block, and
 *  the name / tagline / actions column. */
export function Hero() {
  return (
    <section style={{ padding: "40px 0 0" }}>
      <div
        className="blueprint duotone"
        style={{
          position: "relative",
          height: 300,
          background: "var(--om-field)",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          padding: 16,
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
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "repeating-linear-gradient(135deg, color-mix(in srgb, #f2f2f3 14%, transparent) 0 7px, transparent 7px 15px)",
              }}
            />
            <span
              style={{
                position: "relative",
                fontFamily: mono,
                fontSize: 11,
                letterSpacing: "0.08em",
                color: "color-mix(in srgb, #f2f2f3 75%, transparent)",
              }}
            >
              banner image — 2400×700 · workspace / code / server rack
            </span>
          </>
        )}
        <Corners />
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px 32px",
          alignItems: "flex-start",
          marginTop: -60,
          padding: "0 8px",
        }}
      >
        <div
          className="blueprint duotone"
          style={{
            flex: "0 1 180px",
            height: 200,
            background: "var(--color-accent-200)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 10,
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
                objectPosition: "center top",
              }}
            />
          ) : (
            <>
              <div
                data-hatch=""
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "repeating-linear-gradient(135deg, color-mix(in srgb, #1d1f20 12%, transparent) 0 6px, transparent 6px 13px)",
                }}
              />
              <span
                style={{
                  position: "relative",
                  fontFamily: mono,
                  fontSize: 10,
                  lineHeight: 1.5,
                  color: "var(--color-accent-900)",
                }}
              >
                headshot
                <br />
                800×1000
              </span>
            </>
          )}
          <Corners />
        </div>

        <div style={{ flex: "1 1 min(100%, 320px)", minWidth: 0, paddingTop: 72 }}>
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
              fontSize: 22,
              maxWidth: "52ch",
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
