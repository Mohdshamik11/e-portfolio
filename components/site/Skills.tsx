import { skillGroups } from "@/lib/content";
import { SectionShell } from "./SectionShell";

export function Skills() {
  return (
    <SectionShell
      id="skills"
      heading="02 — Skills"
      contentStyle={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: 24,
      }}
    >
      {skillGroups.map((group) => (
        <div
          key={group.name}
          data-rise=""
          style={{
            borderTop: "2px solid var(--color-text)",
            paddingTop: 12,
            transition: "border-color 200ms ease",
          }}
        >
          <h4 style={{ margin: "0 0 10px", fontSize: 20 }}>{group.name}</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {group.items.map((item) => (
              <span key={item} className="tag tag-accent">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </SectionShell>
  );
}
