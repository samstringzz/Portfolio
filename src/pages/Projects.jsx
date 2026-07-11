import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";

const Projects = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-primary-dark">
      <ProjectsProvider>
        <section className="px-4 pb-8 pt-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-semibold tracking-[-0.03em] text-gray-950 dark:text-white sm:text-5xl">
              Projects
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
              Web and mobile products I’ve shipped — case studies and live
              launches.
            </p>
          </div>
        </section>

        <div className="pb-20">
          <ProjectsGrid />
        </div>
      </ProjectsProvider>
    </div>
  );
};

export default Projects;
