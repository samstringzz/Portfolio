"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { projectsData } from "@/data/projects";
import ProjectSingle from "./ProjectSingle";
import ProjectsFilter from "./ProjectsFilter";
import PageContainer from "../layout/PageContainer";
import { fadeUp, viewportOnce } from "@/lib/motion";

const TYPE_TABS = ["Web", "Mobile"];

const ProjectsGrid = () => {
  const reduceMotion = useReducedMotion();
  const [searchProject, setSearchProject] = useState("");
  const [selectProject, setSelectProject] = useState("");
  const [activeType, setActiveType] = useState("Web");

  const projectCategories = useMemo(
    () => [
      ...new Set(
        projectsData.filter((p) => p.type === activeType).map((p) => p.category)
      ),
    ],
    [activeType]
  );

  const visibleProjects = useMemo(() => {
    let list = projectsData.filter((p) => p.type === activeType);

    if (selectProject) {
      list = list.filter((item) => {
        const category =
          item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectProject);
      });
    } else if (searchProject) {
      list = list.filter((item) =>
        item.title.toLowerCase().includes(searchProject.toLowerCase())
      );
    }

    return list;
  }, [activeType, searchProject, selectProject]);

  const gridKey = `${activeType}-${selectProject}-${searchProject}`;

  return (
    <section>
      <PageContainer>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex gap-1">
            {TYPE_TABS.map((tab) => (
              <motion.button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveType(tab);
                  setSelectProject("");
                  setSearchProject("");
                }}
                whileTap={reduceMotion ? undefined : { scale: 0.97 }}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  activeType === tab
                    ? "bg-white text-gray-900"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="flex items-center gap-2 rounded-lg border border-white/15 px-3 py-2 transition focus-within:border-emerald-400/40">
              <FiSearch className="h-4 w-4 text-gray-400" />
              <input
                onChange={(e) => setSearchProject(e.target.value)}
                value={searchProject}
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-gray-500 sm:w-48"
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
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={gridKey}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-8 grid gap-6 lg:gap-8 ${
              activeType === "Web"
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProjectSingle
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
                  type={project.type}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {!visibleProjects.length ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-10 text-center text-gray-400"
          >
            No projects matched that search. Try a different title or clear the
            filters.
          </motion.p>
        ) : null}
      </PageContainer>
    </section>
  );
};

export default ProjectsGrid;
