import { getProjects } from "@/lib/projects";
import { Corners } from "./Corners";
import { ProjectCard } from "./ProjectCard";

const mono = "ui-monospace, monospace";

/**
 * Projects section. Server component — it awaits getProjects(), which today
 * returns sample data and from build-plan step 3 will query Supabase.
 */
export async function Projects() {
  const projects = await getProjects();
  const countLabel =
    projects.length === 1 ? "1 entry" : `${projects.length} entries`;

  return (
    <section id="projects" style={{ padding: "0 0 72px" }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 20,
          flexWrap: "wrap",
          borderBottom: "2px solid var(--color-text)",
          paddingBottom: 12,
          marginBottom: 28,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 17,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
          }}
        >
          03 — Projects
        </h2>
        <span style={{ fontFamily: mono, fontSize: 13, opacity: 0.6 }}>
          {countLabel} · managed from the admin dashboard
        </span>
      </div>

      {projects.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 28,
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="blueprint" style={{ padding: 48, textAlign: "center" }}>
          <p style={{ fontFamily: mono, fontSize: 12, opacity: 0.6, margin: 0 }}>
            No projects yet — add the first one from the admin dashboard.
          </p>
          <Corners />
        </div>
      )}
    </section>
  );
}
