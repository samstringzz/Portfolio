import { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectSingle from "./ProjectSingle";

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectsContext);

  // Filter for featured projects
  const featuredProjects = projects.filter(project => project.isFeatured);

  return (
    <section className="py-5 sm:py-10 mt-10 sm:mt-14 container mx-auto">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Featured Projects
        </p>
        <p className="font-general-regular text-lg text-gray-500 dark:text-gray-200">
          Take a look at some of my highlighted work.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-6 sm:gap-10 max-w-6xl mx-auto">
        {featuredProjects.map((project) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.7,
              delay: 0.15,
            }}
            key={project.id}
            className="flex flex-col rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark h-[30rem] w-full max-w-sm mx-auto"
          >
            <Link to={`/projects/${project.slug}`} aria-label={`View ${project.title}`} className="flex flex-col h-full">
              <div className="flex-shrink-0 h-64 overflow-hidden">
                <img
                  src={project.img}
                  className="w-full h-full object-cover rounded-t-xl border-none"
                  alt="Project Thumbnail"
                />
              </div>
              <div className="flex-grow text-left px-6 py-4 flex flex-col justify-start">
                <div>
                  <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-1">
                    {project.title}
                  </p>
                  <span className="text-sm text-ternary-dark dark:text-ternary-light">
                    {project.category}
                  </span>
                </div>
                <p className="font-general-regular text-sm text-gray-500 dark:text-gray-400 mt-2 line-clamp-5 leading-normal">
                  {project.description}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 sm:mt-14 flex justify-center">
        <Link
          to="/projects"
          className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 text-white text-lg sm:text-xl duration-300"
          aria-label="View All Projects"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects; 