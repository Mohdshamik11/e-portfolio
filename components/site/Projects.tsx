import { getProjects } from "@/lib/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const mono = "var(--font-mono)";

/**
 * Projects section. Server component — it awaits getProjects(), which today
 * returns sample data and from build-plan step 3 will query Supabase. The
 * first project badged "Featured" (if any) gets a wide spotlight card above
 * the regular grid.
 */
export async function Projects() {
  const projects = await getProjects();
  const countLabel =
    projects.length === 1 ? "1 project" : `${projects.length} projects`;

  const featuredIndex = projects.findIndex((p) => p.badge === "Featured");
  const featured = featuredIndex >= 0 ? projects[featuredIndex] : null;
  const rest = featured
    ? projects.filter((_, i) => i !== featuredIndex)
    : projects;

  return (
    <Section id="projects">
      <Reveal>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          <h2 style={{ margin: 0 }}>Selected projects</h2>
          <span style={{ fontFamily: mono, fontSize: 13, color: "var(--color-text-muted)" }}>
            {countLabel} · managed from the admin dashboard
          </span>
        </div>
      </Reveal>

      {projects.length > 0 ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {featured && (
            <Reveal>
              <FeaturedProjectCard project={featured} />
            </Reveal>
          )}
          {rest.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 24,
              }}
            >
              {rest.map((project, i) => (
                <Reveal key={project.id} delay={i * 0.04}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="card" style={{ padding: 48, textAlign: "center" }}>
          <p style={{ fontFamily: mono, fontSize: 13, color: "var(--color-text-muted)", margin: 0 }}>
            No projects yet — add the first one from the admin dashboard.
          </p>
        </div>
      )}
    </Section>
  );
}

function FeaturedProjectCard({
  project,
}: {
  project: Awaited<ReturnType<typeof getProjects>>[number];
}) {
  const hasLinks = Boolean(project.githubUrl || project.liveUrl);
  return (
    <article className="featured-project card" data-lift="">
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          background: "var(--color-accent-soft)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRight: "1px solid var(--color-divider)",
        }}
      >
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element -- swapped for next/image once the Supabase host is configured (build-plan step 3/4)
          <img
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            width={1600}
            height={1000}
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ fontFamily: mono, fontSize: 12, color: "var(--color-accent-text)" }}>
            screenshot · 1600×1000
          </span>
        )}
      </div>
      <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 12 }}>
        <span className="tag tag-accent" style={{ alignSelf: "flex-start" }}>
          Featured
        </span>
        <h3 style={{ margin: 0, fontSize: 28 }}>{project.title}</h3>
        <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, color: "var(--color-text-muted)" }}>
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
          <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub ↗
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Live demo ↗
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
