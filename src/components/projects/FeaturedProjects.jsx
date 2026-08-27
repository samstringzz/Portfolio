"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { projectsData } from "@/data/projects";
import ProjectCoverImage from "./ProjectCoverImage";
import PageContainer from "../layout/PageContainer";
import { fadeUp, scaleUp, slideIn, viewportOnce } from "@/lib/motion";

const FEATURED_SLUGS = [
  "emigr8-companion",
  "emigr8-companion-admin",
  "makermantech",
];

const FeaturedProjects = () => {
  const reduceMotion = useReducedMotion();
  const featuredProjects = FEATURED_SLUGS.map((slug) =>
    projectsData.find((project) => project.slug === slug)
  ).filter(Boolean);

  return (
    <section id="work" className="bg-surface-raised py-24">
      <PageContainer>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col gap-4 border-b border-white/10 pb-10 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-sm font-medium text-emerald-400">Selected work</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              Products shipped end to end.
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 transition hover:text-emerald-300"
          >
            View all projects
            <FiArrowRight size={16} />
          </Link>
        </motion.div>

        <div className="mt-14 space-y-20 lg:space-y-28">
          {featuredProjects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={`grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                  reverse ? "lg:[direction:rtl]" : ""
                }`}
              >
                <motion.div
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={viewportOnce}
                  variants={scaleUp}
                  custom={index * 0.05}
                  className="lg:col-span-7 lg:[direction:ltr]"
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group relative block overflow-hidden rounded-2xl"
                    aria-label={`View ${project.title} case study`}
                  >
                    <div className="absolute inset-0 z-10 rounded-2xl ring-1 ring-inset ring-white/10 transition group-hover:ring-emerald-400/30" />
                    <ProjectCoverImage
                      src={project.img}
                      alt={project.title}
                      type={project.type}
                      imgClassName="transition duration-500 group-hover:scale-[1.03]"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={viewportOnce}
                  variants={slideIn(reverse ? "right" : "left")}
                  custom={0.08 + index * 0.05}
                  className="lg:col-span-5 lg:[direction:ltr]"
                >
                  <p className="text-sm text-gray-400">
                    {project.category} · {project.year}
                    {project.status === "Live" || project.status === "In Development"
                      ? ` · ${project.status}`
                      : ""}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-300">
                    {project.summary || project.description}
                  </p>

                  {project.technologies?.length ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                          viewport={viewportOnce}
                          transition={{ delay: 0.2 + techIndex * 0.05, duration: 0.35 }}
                          className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-400 ring-1 ring-white/10"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  ) : null}

                  <motion.div whileHover={{ x: 4 }} className="mt-8 inline-block">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                    >
                      View case study
                      <FiArrowUpRight size={16} />
                    </Link>
                  </motion.div>
                </motion.div>
              </article>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
};

export default FeaturedProjects;
