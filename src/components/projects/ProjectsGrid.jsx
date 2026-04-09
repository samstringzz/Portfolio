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
    selectProject,
    setSelectProject,
    activeType,
    setActiveType,
    visibleProjects,
  } = useContext(ProjectsContext);

  const projectCategories = [...new Set(projects.map((p) => p.category))];

  return (
    <section className="pb-8 pt-4 sm:pb-12 sm:pt-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-[32px] border border-stone-200/70 bg-white/80 p-6 shadow-[0_30px_90px_rgba(28,25,23,0.08)] backdrop-blur dark:border-white/10 dark:bg-stone-900/75 dark:shadow-[0_30px_90px_rgba(0,0,0,0.35)] sm:p-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
                Project Library
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-stone-900 dark:text-stone-100 sm:text-4xl">
                Stronger delivery stories, not just screenshots.
              </h3>
              <p className="mt-4 text-base leading-8 text-stone-600 dark:text-stone-300">
                Browse recent work across marketing sites, internal products,
                education platforms, and deeper product case studies. Each card
                is designed to communicate problem-space, execution quality, and
                technology choices faster.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-stone-900 px-4 py-2 text-stone-50 dark:bg-stone-100 dark:text-stone-900">
                {visibleProjects.length} projects visible
              </span>
              <span className="rounded-full border border-stone-300 px-4 py-2 text-stone-700 dark:border-white/10 dark:text-stone-200">
                {projectCategories.length} categories
              </span>
            </div>
          </div>

          {/* Type tabs */}
          <div className="mt-8 flex gap-2">
            {TYPE_TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveType(tab);
                  setSelectProject("");
                  setSearchProject("");
                }}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                  activeType === tab
                    ? "bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900"
                    : "border border-stone-300 text-stone-600 hover:border-stone-500 dark:border-white/10 dark:text-stone-300 dark:hover:border-white/30"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-center">
            <label className="flex flex-1 items-center gap-3 rounded-full border border-stone-300/80 bg-stone-50/80 px-4 py-3 shadow-[0_12px_30px_rgba(28,25,23,0.05)] transition focus-within:border-emerald-600 dark:border-white/10 dark:bg-white/5">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-emerald-700 shadow-sm dark:bg-stone-950 dark:text-emerald-300">
                <FiSearch className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                  Search by title
                </p>
                <input
                  onChange={(e) => setSearchProject(e.target.value)}
                  value={searchProject}
                  className="mt-1 w-full bg-transparent text-sm text-stone-900 outline-none placeholder:text-stone-400 dark:text-stone-100"
                  id="name"
                  name="name"
                  type="search"
                  placeholder="Try AlutaMarket, classroom, landing page..."
                  aria-label="Search Projects"
                />
              </div>
            </label>

            <ProjectsFilter
              options={projectCategories}
              setSelectProject={setSelectProject}
            />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() =>
                  setSelectProject(selectProject === category ? "" : category)
                }
                className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                  selectProject === category
                    ? "bg-emerald-700 text-white dark:bg-emerald-400 dark:text-stone-950"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 dark:bg-white/5 dark:text-stone-300 dark:hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-7 px-4 md:grid-cols-2 xl:grid-cols-3">
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
        <div className="mx-auto mt-8 max-w-3xl px-4">
          <div className="rounded-[28px] border border-dashed border-stone-300 bg-white/70 px-6 py-10 text-center text-stone-600 dark:border-white/10 dark:bg-white/5 dark:text-stone-300">
            No projects matched that search yet. Try a different title or clear
            the selected category.
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ProjectsGrid;
