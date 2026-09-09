import { experience } from "@/lib/content";
import { SectionShell } from "./SectionShell";

const mono = "ui-monospace, monospace";

export function Experience() {
  return (
    <SectionShell
      id="experience"
      heading="04 — Experience"
      contentStyle={{ display: "flex", flexDirection: "column" }}
    >
      {experience.map((role, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "6px 20px",
            padding: "18px 12px",
            margin: "0 -12px",
            borderTop: "1px solid var(--color-divider)",
          }}
        >
          <div style={{ flex: "0 1 150px", paddingTop: 4 }}>
            <div
              style={{
                fontFamily: mono,
                fontSize: 13,
                letterSpacing: "0.06em",
                opacity: 0.8,
              }}
            >
              {role.dates}
            </div>
            <div
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: "0.06em",
                color: "var(--color-accent-700)",
                marginTop: 3,
              }}
            >
              {role.duration}
            </div>
          </div>
          <div style={{ flex: "1 1 min(100%, 320px)", minWidth: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <h4 style={{ margin: 0, fontSize: 22 }}>{role.role}</h4>
              <span className="tag tag-accent">{role.kind}</span>
            </div>
            <div style={{ fontSize: 16, opacity: 0.75, marginTop: 2 }}>
              {role.org}
            </div>
            <p
              style={{
                margin: "8px 0 0",
                fontSize: 16,
                lineHeight: 1.55,
                opacity: 0.85,
                maxWidth: "62ch",
              }}
            >
              {role.desc}
            </p>
          </div>
        </div>
      ))}
    </SectionShell>
  );
}
