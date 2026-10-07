import { SealCheck } from "@phosphor-icons/react/dist/ssr";
import { certifications } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const mono = "var(--font-mono)";

export function Certifications() {
  return (
    <Section id="certifications">
      <Reveal>
        <h2 style={{ marginBottom: 24 }}>Certifications</h2>
      </Reveal>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
          gap: 20,
        }}
      >
        {certifications.map((cert, i) => (
          <Reveal key={i} delay={i * 0.05}>
            <div
              className="card"
              data-lift=""
              style={{
                padding: 24,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                height: "100%",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <span
                  aria-hidden="true"
                  style={{
                    width: 38,
                    height: 38,
                    flex: "none",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-accent-soft)",
                    color: "var(--color-accent-text)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <SealCheck size={20} weight="fill" />
                </span>
                <div>
                  <h3 style={{ margin: 0, fontSize: 19 }}>{cert.role}</h3>
                  <div style={{ fontSize: 14, color: "var(--color-text-muted)" }}>{cert.org}</div>
                </div>
              </div>

              <span className="tag tag-neutral" style={{ alignSelf: "flex-start" }}>
                {cert.kind}
              </span>

              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: "var(--color-text-muted)" }}>
                {cert.desc}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 10,
                  flexWrap: "wrap",
                  paddingTop: 10,
                  marginTop: "auto",
                  borderTop: "1px solid var(--color-divider)",
                }}
              >
                <span style={{ fontFamily: mono, fontSize: 12, color: "var(--color-text-muted)" }}>
                  {cert.dates} · {cert.duration}
                </span>
                {cert.certUrl && (
                  <a
                    href={cert.certUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: 13 }}
                  >
                    View certificate ↗
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
