"use client";

import { Moon, Sun } from "@phosphor-icons/react/dist/ssr";

/**
 * Light/dark switch. It only touches the DOM: `data-theme` on <html> drives
 * every colour token in globals.css, and the choice is saved to localStorage.
 * app/layout.tsx has an inline script that re-applies the saved value before
 * first paint, so there's no flash and this component needs no React state.
 *
 * Both icons render on the server; CSS (.theme-toggle-glyph) picks which one
 * shows based on the current `data-theme`, so it's correct pre-hydration too.
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
    >
      <span className="theme-toggle-glyph" aria-hidden="true">
        <Sun className="sun" size={17} weight="bold" />
        <Moon className="moon" size={17} weight="bold" />
      </span>
    </button>
  );
}
