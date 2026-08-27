import ProjectsPageHeader from "@/components/projects/ProjectsPageHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata = {
  title: "Projects",
  description:
    "Web and mobile products — case studies, live apps, and full-stack work.",
};

export default function ProjectsPage() {
  return (
    <>
      <ProjectsPageHeader />
      <div className="pb-20">
        <ProjectsGrid />
      </div>
    </>
  );
}
