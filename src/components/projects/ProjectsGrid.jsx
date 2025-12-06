import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    searchProjectsByTitle,
    selectProject,
    setSelectProject,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  return (
    <section className="py-5 sm:py-10">
      <div className="mt-10 sm:mt-16 max-w-4xl mx-auto px-4">
        <h3 className="font-general-regular text-center text-gray-700 dark:text-gray-300 text-md sm:text-lg mb-6">
          Search projects by title or filter by category
        </h3>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <span className="bg-white dark:bg-gray-800 p-3 shadow-lg rounded-xl">
              <FiSearch className="text-blue-600 dark:text-blue-400 w-5 h-5" />
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl text-sm sm:text-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex-1 sm:w-80 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-colors shadow-sm"
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects..."
              aria-label="Search Projects"
            />
          </div>
          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {selectProject
          ? selectProjectsByCategory.map((project) => (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
              >
                <ProjectSingle
                  title={project.title}
                  category={project.category}
                  image={project.img}
                  isFeatured={project.isFeatured}
                  slug={project.slug}
                />
              </a>
            ))
          : searchProject
          ? searchProjectsByTitle.map((project) => (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
              >
                <ProjectSingle
                  title={project.title}
                  category={project.category}
                  image={project.img}
                  isFeatured={project.isFeatured}
                  slug={project.slug}
                />
              </a>
            ))
          : projects.map((project) => (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
              >
                <ProjectSingle
                  title={project.title}
                  category={project.category}
                  image={project.img}
                  isFeatured={project.isFeatured}
                  slug={project.slug}
                />
              </a>
            ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
