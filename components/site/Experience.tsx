import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <h2 style={{ marginBottom: 28 }}>Experience</h2>
      </Reveal>

      <div style={{ position: "relative" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: 5,
            top: 8,
            bottom: 8,
            width: 1,
            background: "var(--color-divider)",
          }}
        />
        {experience.map((role, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div
              style={{
                position: "relative",
                paddingLeft: 32,
                paddingBottom: i === experience.length - 1 ? 0 : 32,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 7,
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: "var(--color-accent)",
                  border: "2px solid var(--color-bg)",
                  boxShadow: "0 0 0 1px var(--color-divider)",
                }}
              />
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  letterSpacing: "0.04em",
                  color: "var(--color-accent-text)",
                  marginBottom: 6,
                }}
              >
                {role.dates} · {role.duration}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  flexWrap: "wrap",
                  marginBottom: 4,
                }}
              >
                <h3 style={{ margin: 0, fontSize: 22 }}>{role.role}</h3>
                <span className="tag tag-accent">{role.kind}</span>
              </div>
              <div style={{ fontSize: 16, color: "var(--color-text-muted)", marginBottom: 8 }}>
                {role.org}
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--color-text-muted)",
                  maxWidth: "62ch",
                }}
              >
                {role.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
