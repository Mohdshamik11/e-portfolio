import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Body text. Exposed as --font-plex-sans, which globals.css feeds into the
// design system's --font-body token.
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

// Headings — a geometric display face, --font-space-grotesk -> --font-heading.
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Labels, dates, eyebrow text — --font-plex-mono -> --font-mono.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Shamik · IT ePortfolio",
  description:
    "AI/ML and deep-learning focused software engineer. Undergraduate at the Singapore Institute of Technology.",
};

export const viewport: Viewport = {
  themeColor: "#fafafa",
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
      className={`${plexSans.variable} ${spaceGrotesk.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
