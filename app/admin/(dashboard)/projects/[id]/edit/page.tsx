import { notFound } from "next/navigation";
import { BackToProjects } from "@/components/admin/BackToProjects";
import { ProjectForm } from "@/components/admin/ProjectForm";
import { getProjectById } from "@/lib/projects";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProjectById(id);
  if (!project) notFound();

  return (
    <div style={{ paddingTop: 32 }}>
      <BackToProjects />
      <h1 style={{ margin: "0 0 24px", fontSize: 27 }}>
        Edit — <span style={{ opacity: 0.6 }}>{project.title}</span>
      </h1>
      <ProjectForm project={project} />
    </div>
  );
}
