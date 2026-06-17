import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectsContext";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectsContext);
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-secondary-dark sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
              Featured Projects
            </h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              A selection of recent web and mobile work.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            aria-label="View All Projects"
          >
            View all projects
            <FiArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-ternary-dark"
            >
              <Link to={`/projects/${project.slug}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.img}
                    className="h-full w-full object-cover transition hover:scale-105"
                    alt={project.title}
                  />
                </div>
              </Link>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-gray-400 transition hover:text-gray-700 dark:hover:text-white"
                      aria-label={`Visit ${project.title}`}
                    >
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>

                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.summary || project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-600 dark:bg-primary-dark dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
