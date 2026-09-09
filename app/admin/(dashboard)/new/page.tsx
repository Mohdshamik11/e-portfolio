import { BackToProjects } from "@/components/admin/BackToProjects";
import { ProjectForm } from "@/components/admin/ProjectForm";

export default function NewProjectPage() {
  return (
    <div style={{ paddingTop: 32 }}>
      <BackToProjects />
      <h1 style={{ margin: "0 0 24px", fontSize: 27 }}>New project</h1>
      <ProjectForm />
    </div>
  );
}
