import { navItems } from "@/lib/content";
import { Corners } from "./Corners";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Sticky header: brand, in-page section links, theme toggle, and the
 * Contact / Sign in actions. Matches the "sticky-spy" nav variant of the
 * design (without the scroll-position highlight, which can come later).
 */
export function TopBar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in srgb, var(--color-bg) 88%, transparent)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "16px 28px",
          padding: "12px 24px",
        }}
      >
        <a
          href="#top"
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 19,
            letterSpacing: "0.02em",
            textDecoration: "none",
            color: "var(--color-text)",
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifySelf: "start",
            minWidth: "max-content",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              border: "1px solid var(--color-accent)",
              display: "block",
            }}
          />
          MOHAMED SHAMIK
        </a>

        <nav
          style={{
            display: "flex",
            gap: "10px 22px",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
            justifySelf: "center",
          }}
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              style={{
                textDecoration: "none",
                fontFamily: "var(--font-heading)",
                fontSize: 15,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "var(--color-text)",
                paddingBottom: 2,
                borderBottom: "1px solid transparent",
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div
          style={{
            display: "flex",
            gap: 8,
            alignItems: "center",
            justifySelf: "end",
            justifyContent: "flex-end",
            flexWrap: "nowrap",
            minWidth: "max-content",
          }}
        >
          <ThemeToggle />
          <a href="#contact" className="btn btn-primary blueprint">
            Contact
            <Corners />
          </a>
          <a
            href="/admin/login"
            title="Site owner sign in"
            className="btn blueprint"
            style={{ background: "var(--color-accent)", color: "#f2f2f3" }}
          >
            Sign in
            <Corners />
          </a>
        </div>
      </div>
    </div>
  );
}
