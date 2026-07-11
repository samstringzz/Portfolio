import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

const TYPE_TABS = ["All", "Web", "Mobile"];

const ProjectsGrid = () => {
  const {
    projects,
    searchProject,
    setSearchProject,
    setSelectProject,
    activeType,
    setActiveType,
    visibleProjects,
  } = useContext(ProjectsContext);

  const projectCategories = [...new Set(projects.map((p) => p.category))];

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 dark:border-gray-700 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex gap-1">
            {TYPE_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveType(tab);
                  setSelectProject("");
                  setSearchProject("");
                }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  activeType === tab
                    ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-secondary-dark dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2 dark:border-gray-600">
              <FiSearch className="h-4 w-4 text-gray-400" />
              <input
                onChange={(e) => setSearchProject(e.target.value)}
                value={searchProject}
                className="w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400 dark:text-white sm:w-48"
                id="name"
                name="name"
                type="search"
                placeholder="Search projects..."
                aria-label="Search Projects"
              />
            </label>

            <ProjectsFilter
              options={projectCategories}
              setSelectProject={setSelectProject}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <ProjectSingle
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.img}
              externalUrl={project.externalUrl}
              isFeatured={project.isFeatured}
              slug={project.slug}
              summary={project.summary || project.description}
              technologies={project.technologies}
              year={project.year}
              status={project.status}
              impact={project.impact}
            />
          ))}
        </div>

        {!visibleProjects.length ? (
          <p className="mt-10 text-center text-gray-600 dark:text-gray-300">
            No projects matched that search. Try a different title or clear the
            filters.
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default ProjectsGrid;
