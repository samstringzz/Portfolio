import { notFound } from "next/navigation";
import PageContainer from "@/components/layout/PageContainer";
import ProjectBackNav from "@/components/projects/ProjectBackNav";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectInfo from "@/components/projects/ProjectInfo";
import { featuredCaseStudySlugs, getProjectBySlug } from "@/data/projects";
import { singleProjectData } from "@/data/singleProjectData";
import { siteConfig } from "@/lib/site";

export async function generateStaticParams() {
  return featuredCaseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const listing = getProjectBySlug(slug);
  const detail = singleProjectData[slug];

  if (!detail) {
    return { title: "Project Not Found" };
  }

  const title = detail.ProjectHeader?.title || listing?.title || slug;
  const description =
    listing?.summary ||
    listing?.description ||
    detail.ProjectInfo?.ObjectivesDetails?.slice(0, 160);
  const image = listing?.img || detail.ProjectImages?.[0]?.img || siteConfig.ogImage;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [typeof image === "string" ? image : siteConfig.ogImage],
    },
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = singleProjectData[slug];

  if (!project) {
    notFound();
  }

  const title = project.ProjectHeader?.title;

  return (
    <PageContainer className="pb-20">
      <ProjectBackNav title={title} />
      <ProjectHeader project={project} />
      <ProjectGallery project={project} />
      <ProjectInfo project={project} />
    </PageContainer>
  );
}
