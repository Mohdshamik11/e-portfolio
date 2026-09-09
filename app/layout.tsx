import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

// Body text. Exposed as the CSS variable --font-barlow, which globals.css
// feeds into the design system's --font-body token.
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-barlow",
  display: "swap",
});

// Headings — the condensed companion, --font-barlow-condensed -> --font-heading.
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Shamik — IT ePortfolio",
  description:
    "AI/ML and deep-learning focused software engineer. Undergraduate at the Singapore Institute of Technology.",
};

// Runs before first paint so a previously chosen theme doesn't flash the
// default light palette. Kept tiny and inline on purpose.
const themeInitScript = `
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t === "dark" || t === "light") {
      document.documentElement.setAttribute("data-theme", t);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
