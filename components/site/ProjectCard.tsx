import type { Project } from "@/lib/types";
import { Corners } from "./Corners";

const mono = "ui-monospace, monospace";

function yearOf(dateCompleted: string | null): string {
  if (!dateCompleted) return "—";
  const year = new Date(dateCompleted).getFullYear();
  return Number.isNaN(year) ? "—" : String(year);
}

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <article
      className="blueprint"
      data-lift=""
      data-rise=""
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "16 / 10",
          background: "var(--color-accent-200)",
          display: "flex",
          alignItems: "flex-end",
          padding: 10,
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        <div
          data-hatch=""
          style={{
            position: "absolute",
            inset: 0,
            background:
              "repeating-linear-gradient(135deg, color-mix(in srgb, #1d1f20 11%, transparent) 0 6px, transparent 6px 13px)",
          }}
        />
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- swapped for next/image once the Supabase host is configured (build-plan step 3/4)
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span
            style={{
              position: "relative",
              fontFamily: mono,
              fontSize: 10,
              color: "var(--color-accent-900)",
            }}
          >
            screenshot — 1600×1000
          </span>
        )}
      </div>

      <div
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="tag tag-outline">{project.badge ?? "Project"}</span>
          <span style={{ fontFamily: mono, fontSize: 10, opacity: 0.55 }}>
            {yearOf(project.dateCompleted)}
          </span>
        </div>
        <h3 style={{ margin: 0, fontSize: 25 }}>{project.title}</h3>
        <p
          style={{
            margin: 0,
            fontSize: 16,
            lineHeight: 1.55,
            opacity: 0.8,
            flex: 1,
          }}
        >
          {project.description}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {project.techStack.map((tech, i) => (
            <span key={`${tech}-${i}`} className="tag tag-neutral">
              {tech}
            </span>
          ))}
        </div>

        {hasLinks && (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 8,
              paddingTop: 8,
              borderTop: "1px solid var(--color-divider)",
              marginTop: 4,
            }}
          >
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ fontSize: 15 }}
              >
                GitHub ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                style={{ fontSize: 15 }}
              >
                Demo ↗
              </a>
            )}
          </div>
        )}
      </div>
      <Corners />
    </article>
  );
}
