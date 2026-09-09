import { certifications } from "@/lib/content";
import { Corners } from "./Corners";
import { SectionShell } from "./SectionShell";

const mono = "ui-monospace, monospace";

export function Certifications() {
  return (
    <SectionShell
      id="certifications"
      heading="05 — Certifications"
      contentStyle={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
        gap: 20,
      }}
    >
      {certifications.map((cert, i) => (
        <div
          key={i}
          className="blueprint"
          data-lift=""
          style={{
            padding: 18,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            border: "1px solid var(--color-divider)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <span className="tag tag-accent">{cert.kind}</span>
            <span
              style={{
                fontFamily: mono,
                fontSize: 12,
                letterSpacing: "0.06em",
                opacity: 0.65,
              }}
            >
              {cert.dates}
            </span>
          </div>
          <h4 style={{ margin: 0, fontSize: 22 }}>{cert.role}</h4>
          <div style={{ fontSize: 15, opacity: 0.75 }}>{cert.org}</div>
          <p
            style={{
              margin: 0,
              fontSize: 15,
              lineHeight: 1.55,
              opacity: 0.8,
            }}
          >
            {cert.desc}
          </p>
          <div
            style={{
              fontFamily: mono,
              fontSize: 12,
              letterSpacing: "0.06em",
              color: "var(--color-accent-700)",
              paddingTop: 4,
              borderTop: "1px solid var(--color-divider)",
            }}
          >
            {cert.duration}
          </div>
          <Corners />
        </div>
      ))}
    </SectionShell>
  );
}
