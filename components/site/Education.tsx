import { education } from "@/lib/content";
import { Corners } from "./Corners";
import { SectionShell } from "./SectionShell";

const mono = "ui-monospace, monospace";

export function Education() {
  return (
    <SectionShell
      id="education"
      heading="06 — Education"
      contentStyle={{ display: "flex", flexDirection: "column", gap: 18 }}
    >
      {education.map((entry, i) => {
        const frame = entry.current
          ? "var(--color-accent)"
          : "var(--color-divider)";
        const fill = entry.current
          ? "color-mix(in srgb, var(--color-accent) 8%, transparent)"
          : "transparent";

        return (
          <div
            key={i}
            className="blueprint"
            data-lift=""
            style={{
              padding: 24,
              border: `1px solid ${frame}`,
              borderLeft: `4px solid ${frame}`,
              background: fill,
              display: "flex",
              flexWrap: "wrap-reverse",
              justifyContent: "space-between",
              gap: "12px 20px",
              alignItems: "flex-start",
            }}
          >
            <div style={{ flex: "1 1 min(100%, 300px)", minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 8,
                }}
              >
                <span className="tag tag-accent">{entry.badge}</span>
                {entry.current && (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      fontFamily: mono,
                      fontSize: 12,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-accent-700)",
                    }}
                  >
                    <span
                      data-om-anim="dot"
                      style={{
                        width: 6,
                        height: 6,
                        background: "var(--color-accent)",
                        display: "block",
                        animation: "om-pulse 2.4s ease-in-out infinite",
                      }}
                    />
                    Currently studying
                  </span>
                )}
              </div>
              <h3 style={{ margin: "0 0 5px", fontSize: 28 }}>{entry.degree}</h3>
              <div style={{ fontSize: 17, opacity: 0.78 }}>{entry.school}</div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 14,
                }}
              >
                {entry.coursework.map((course) => (
                  <span key={course} className="tag tag-outline">
                    {course}
                  </span>
                ))}
              </div>
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 13,
                letterSpacing: "0.06em",
                opacity: 0.75,
                whiteSpace: "nowrap",
              }}
            >
              {entry.dates}
            </div>
            <Corners />
          </div>
        );
      })}
    </SectionShell>
  );
}
