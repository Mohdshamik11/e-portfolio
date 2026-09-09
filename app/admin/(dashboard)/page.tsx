import Link from "next/link";
import { DeleteProjectButton } from "@/components/admin/DeleteProjectButton";
import { Corners } from "@/components/site/Corners";
import { getProjects } from "@/lib/projects";

const mono = "ui-monospace, monospace";

export default async function AdminProjectsPage() {
  const projects = await getProjects();

  return (
    <div style={{ paddingTop: 32 }}>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 16,
          flexWrap: "wrap",
          borderBottom: "2px solid var(--color-text)",
          paddingBottom: 12,
          marginBottom: 24,
        }}
      >
        <div>
          <h1 style={{ margin: 0, fontSize: 27 }}>Projects</h1>
          <p style={{ margin: "4px 0 0", fontSize: 14, fontFamily: mono, opacity: 0.6 }}>
            {projects.length} {projects.length === 1 ? "entry" : "entries"} · shown on the homepage grid
          </p>
        </div>
        <Link
          href="/admin/new"
          className="btn btn-primary blueprint"
          style={{
            position: "relative",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            padding: "11px 18px",
          }}
        >
          <Corners />
          New project
        </Link>
      </div>

      {projects.length === 0 ? (
        <div
          style={{
            border: "1px dashed var(--color-divider)",
            borderRadius: 6,
            padding: 54,
            textAlign: "center",
          }}
        >
          <p style={{ margin: "0 0 6px", fontSize: 22, fontFamily: "var(--font-heading)" }}>
            No projects yet
          </p>
          <p style={{ margin: 0, fontSize: 16, opacity: 0.6 }}>
            Add the first one and it appears on the site straight away.
          </p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                border: "1px solid var(--color-divider)",
                borderRadius: 6,
                padding: "14px 16px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  width: 66,
                  height: 46,
                  flex: "none",
                  border: "1px solid var(--color-divider)",
                  borderRadius: 4,
                  background: project.imageUrl
                    ? `center / cover no-repeat url(${JSON.stringify(project.imageUrl)})`
                    : "repeating-linear-gradient(135deg, color-mix(in srgb, var(--color-accent) 16%, transparent) 0 6px, transparent 6px 13px)",
                }}
              />
              <span style={{ flex: 1, minWidth: 180 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <span style={{ fontFamily: "var(--font-heading)", fontSize: 21 }}>
                    {project.title}
                  </span>
                  <span style={{ fontSize: 13, opacity: 0.5 }}>/{project.slug}</span>
                  {project.badge === "Featured" && (
                    <span className="tag tag-accent" style={{ fontSize: 12 }}>
                      Featured
                    </span>
                  )}
                </span>
                {project.techStack.length > 0 && (
                  <span
                    style={{
                      display: "block",
                      marginTop: 6,
                      fontSize: 13,
                      opacity: 0.6,
                    }}
                  >
                    {project.techStack.join(" · ")}
                  </span>
                )}
              </span>
              <Link
                href={`/admin/projects/${project.id}/edit`}
                className="btn btn-secondary"
                style={{ fontSize: 15, padding: "8px 14px" }}
              >
                Edit
              </Link>
              <DeleteProjectButton id={project.id} title={project.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
