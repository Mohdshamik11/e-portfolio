import type { Project } from "@/lib/types";

const mono = "var(--font-mono)";

function yearOf(dateCompleted: string | null): string {
  if (!dateCompleted) return "—";
  const year = new Date(dateCompleted).getFullYear();
  return Number.isNaN(year) ? "—" : String(year);
}

export function ProjectCard({ project }: { project: Project }) {
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);

  return (
    <article
      className="card"
      data-lift=""
      style={{
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          aspectRatio: "16 / 10",
          background: "var(--color-accent-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderBottom: "1px solid var(--color-divider)",
        }}
      >
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- swapped for next/image once the Supabase host is configured (build-plan step 3/4)
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            width={1600}
            height={1000}
            loading="lazy"
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
              fontFamily: mono,
              fontSize: 11,
              color: "var(--color-accent-text)",
            }}
          >
            screenshot · 1600×1000
          </span>
        )}
      </div>

      <div
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          flex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="tag tag-accent">{project.badge ?? "Project"}</span>
          <span style={{ fontFamily: mono, fontSize: 11, color: "var(--color-text-muted)" }}>
            {yearOf(project.dateCompleted)}
          </span>
        </div>
        <h3 style={{ margin: 0, fontSize: 22 }}>{project.title}</h3>
        <p
          style={{
            margin: 0,
            fontSize: 15,
            lineHeight: 1.55,
            color: "var(--color-text-muted)",
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
              gap: 4,
              paddingTop: 10,
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
                style={{ fontSize: 14 }}
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
                style={{ fontSize: 14 }}
              >
                Demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
