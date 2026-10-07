import { navItems } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Sticky header: monogram, in-page section links, theme toggle, and the
 * Contact / Sign in actions.
 */
export function TopBar() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "color-mix(in srgb, var(--color-bg) 82%, transparent)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
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
            fontSize: 18,
            letterSpacing: "-0.01em",
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
            aria-hidden="true"
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: "var(--color-accent)",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "var(--font-heading)",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            MS
          </span>
          Mohamed Shamik
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
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.01em",
                color: "var(--color-text-muted)",
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
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
          <a href="/admin/login" title="Site owner sign in" className="btn btn-secondary">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
