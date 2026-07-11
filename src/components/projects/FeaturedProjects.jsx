import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { ProjectsContext } from "../../context/ProjectsContext";

const FEATURED_SLUGS = ["thryftup-tablet", "rejoyly", "visa-architect"];

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectsContext);
  const featuredProjects = FEATURED_SLUGS.map((slug) =>
    projects.find((project) => project.slug === slug)
  ).filter(Boolean);

  return (
    <section id="work" className="bg-[#f4f7f8] px-4 py-24 dark:bg-[#0a1a28] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-gray-200 pb-10 dark:border-white/10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-gray-950 dark:text-white sm:text-4xl">
              Products shipped end to end.
            </h2>
          </div>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition hover:text-emerald-700 dark:text-gray-300 dark:hover:text-emerald-300"
          >
            View all projects
            <FiArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 space-y-20 lg:space-y-28">
          {featuredProjects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.12 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                  reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group relative block overflow-hidden lg:col-span-7 lg:[direction:ltr]"
                  aria-label={`View ${project.title} case study`}
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-[#102d44]">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                </Link>

                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.category} · {project.year}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-gray-950 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    {project.summary || project.description}
                  </p>

                  {project.technologies?.length ? (
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                      {project.technologies.slice(0, 4).join(" · ")}
                    </p>
                  ) : null}

                  <Link
                    to={`/projects/${project.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                  >
                    View case study
                    <FiArrowUpRight size={16} />
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
