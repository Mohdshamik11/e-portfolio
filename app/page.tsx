import { About } from "@/components/site/About";
import { Certifications } from "@/components/site/Certifications";
import { Contact } from "@/components/site/Contact";
import { Education } from "@/components/site/Education";
import { Experience } from "@/components/site/Experience";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Ticker } from "@/components/site/Ticker";
import { TopBar } from "@/components/site/TopBar";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        paddingBottom: 60,
        position: "relative",
      }}
    >
      {/* Ambient dotted texture, fading into the background near the foot. */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(color-mix(in srgb, var(--color-accent) 42%, transparent) 0.9px, transparent 0.9px)",
            backgroundSize: "26px 26px",
            opacity: 0.35,
            maskImage:
              "radial-gradient(120% 90% at 50% 8%, #000 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(120% 90% at 50% 8%, #000 0%, transparent 72%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 55%, var(--color-bg) 100%)",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <TopBar />

        <div
          id="top"
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            padding: "0 24px",
            containerType: "inline-size",
          }}
        >
          <Hero />
          <Ticker />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Education />
          <Contact />
        </div>
      </div>
    </div>
  );
}
