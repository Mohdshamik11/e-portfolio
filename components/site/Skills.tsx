import { skillGroups } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

/** The specialty group gets the wide tile; the rest fill the remaining
 *  bento cells — 5 groups in, 5 cells out, no empty spots. */
const FEATURED_GROUP = "AI / ML";

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <h2 style={{ marginBottom: 24 }}>Skills</h2>
      </Reveal>
      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const featured = group.name === FEATURED_GROUP;
          return (
            <Reveal key={group.name} delay={i * 0.05}>
              <div
                className="card"
                data-lift=""
                data-span={featured ? "2" : undefined}
                style={{
                  height: "100%",
                  padding: 24,
                  gridColumn: featured ? "span 2" : undefined,
                  background: featured ? "var(--color-accent-soft)" : "var(--color-surface)",
                  borderColor: featured
                    ? "color-mix(in srgb, var(--color-accent) 30%, var(--color-divider))"
                    : undefined,
                }}
              >
                <h3 style={{ margin: "0 0 12px", fontSize: featured ? 22 : 18 }}>
                  {group.name}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="tag"
                      style={{
                        background: featured
                          ? "color-mix(in srgb, var(--color-surface) 70%, transparent)"
                          : "color-mix(in srgb, var(--color-text) 6%, transparent)",
                        color: "var(--color-text)",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
