import { aboutParagraphs } from "@/lib/content";
import { SectionShell } from "./SectionShell";

export function About() {
  return (
    <SectionShell
      id="about"
      heading="01 — About me"
      padding="72px 0"
      contentStyle={{ maxWidth: "68ch" }}
    >
      {aboutParagraphs.map((text, i) => (
        <p
          key={i}
          style={{
            fontSize: 19,
            lineHeight: 1.65,
            marginBottom: i === aboutParagraphs.length - 1 ? 0 : undefined,
          }}
        >
          {text}
        </p>
      ))}
    </SectionShell>
  );
}
