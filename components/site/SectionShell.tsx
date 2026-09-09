import type { CSSProperties, ReactNode } from "react";

/**
 * The recurring two-column section layout from the design: a numbered
 * uppercase heading in a narrow left rail, content on the right.
 */
export function SectionShell({
  id,
  heading,
  padding = "0 0 72px",
  contentStyle,
  children,
}: {
  id: string;
  heading: string;
  padding?: string;
  contentStyle?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      style={{
        padding,
        display: "flex",
        flexWrap: "wrap",
        gap: "20px 32px",
        alignItems: "flex-start",
      }}
    >
      <h2
        style={{
          margin: 0,
          flex: "0 1 220px",
          minWidth: 0,
          fontSize: 17,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          paddingTop: 6,
        }}
      >
        {heading}
      </h2>
      <div
        style={{ flex: "1 1 min(100%, 420px)", minWidth: 0, ...contentStyle }}
      >
        {children}
      </div>
    </section>
  );
}
