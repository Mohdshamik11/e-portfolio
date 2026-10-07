import { aboutParagraphs } from "@/lib/content";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" padding="8px 0 96px">
      <Reveal>
        <h2 style={{ marginBottom: 24 }}>About</h2>
        <div style={{ maxWidth: "62ch" }}>
          {aboutParagraphs.map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: i === 0 ? 22 : 18,
                lineHeight: 1.6,
                color: i === 0 ? "var(--color-text)" : "var(--color-text-muted)",
                marginBottom: i === aboutParagraphs.length - 1 ? 0 : 16,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
