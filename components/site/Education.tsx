import { education } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const mono = "var(--font-mono)";

export function Education() {
  return (
    <Section id="education">
      <Reveal>
        <h2 style={{ marginBottom: 24 }}>Education</h2>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {education.map((entry, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div
              className="card"
              data-lift=""
              style={{
                padding: 28,
                borderLeft: entry.current
                  ? "4px solid var(--color-accent)"
                  : "4px solid var(--color-divider)",
                background: entry.current ? "var(--color-accent-soft)" : "var(--color-surface)",
                display: "flex",
                flexWrap: "wrap-reverse",
                justifyContent: "space-between",
                gap: "12px 20px",
                alignItems: "flex-start",
              }}
            >
              <div style={{ flex: "1 1 min(100%, 300px)", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 8 }}>
                  <span className="tag tag-accent">{entry.badge}</span>
                  {entry.current && (
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 7,
                        fontFamily: mono,
                        fontSize: 12,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "var(--color-accent-text)",
                      }}
                    >
                      <span
                        data-om-anim="dot"
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "var(--color-accent)",
                          display: "block",
                        }}
                      />
                      Currently studying
                    </span>
                  )}
                </div>
                <h3 style={{ margin: "0 0 5px", fontSize: 24 }}>{entry.degree}</h3>
                <div style={{ fontSize: 16, color: "var(--color-text-muted)" }}>{entry.school}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                  {entry.coursework.map((course) => (
                    <span key={course} className="tag tag-neutral">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ fontFamily: mono, fontSize: 13, color: "var(--color-text-muted)", whiteSpace: "nowrap" }}>
                {entry.dates}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
