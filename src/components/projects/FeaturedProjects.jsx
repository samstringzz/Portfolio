import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectsContext } from "../../context/ProjectsContext";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectsContext);
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section className="bg-[#f2ece2] px-4 py-24 dark:bg-[#171310] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
              Selected Work
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-stone-900 dark:text-stone-100 sm:text-5xl">
              Featured case studies with stronger product context.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-300">
              These are the projects worth opening first if you want to see how
              I think about workflow design, frontend systems, and real user
              outcomes beyond a nice screenshot.
            </p>
          </div>

          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-stone-300/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-stone-900 transition hover:-translate-y-0.5 hover:border-emerald-700 hover:text-emerald-700 dark:border-white/10 dark:text-stone-100 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
            aria-label="View All Projects"
          >
            View All Projects
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.title}`}
              className="group"
            >
              <article className="overflow-hidden rounded-[32px] border border-stone-200/80 bg-white/90 shadow-[0_26px_90px_rgba(28,25,23,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_32px_100px_rgba(28,25,23,0.14)] dark:border-white/10 dark:bg-stone-900/80 dark:shadow-[0_26px_90px_rgba(0,0,0,0.35)]">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={project.img}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-stone-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.26em] text-stone-100 backdrop-blur">
                      {project.category}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <FiArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-300">
                      {project.year} • {project.impact}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-base leading-8 text-stone-600 dark:text-stone-300">
                    {project.summary || project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-white/5 dark:text-stone-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
