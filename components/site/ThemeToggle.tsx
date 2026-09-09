"use client";

/**
 * Light/dark switch. It only touches the DOM: `data-theme` on <html> drives
 * every colour token in globals.css, and the choice is saved to localStorage.
 * app/layout.tsx has an inline script that re-applies the saved value before
 * first paint, so there's no flash and this component needs no React state.
 *
 * The glyph (☾ / ☀) is chosen in CSS from the current `data-theme`, so it
 * stays correct on the server-rendered HTML too.
 */
export function ThemeToggle() {
  function toggle() {
    const el = document.documentElement;
    const next = el.getAttribute("data-theme") === "dark" ? "light" : "dark";
    el.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // private mode / storage disabled — the toggle still works for this visit
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="btn btn-secondary btn-icon"
      title="Toggle theme"
      aria-label="Toggle colour theme"
      style={{ fontSize: 15 }}
    >
      <span aria-hidden="true" className="theme-toggle-glyph" />
    </button>
  );
}
