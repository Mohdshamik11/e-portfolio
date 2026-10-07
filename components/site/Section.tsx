import type { CSSProperties, ReactNode } from "react";

/**
 * Thin vertical-rhythm wrapper shared by every content section. Unlike the
 * old SectionShell, it does not prescribe a heading layout — each section
 * composes its own heading/eyebrow/content so the page doesn't read as one
 * repeated shell seven times in a row.
 */
export function Section({
  id,
  padding = "0 0 96px",
  style,
  children,
}: {
  id: string;
  padding?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section id={id} style={{ padding, ...style }}>
      {children}
    </section>
  );
}
