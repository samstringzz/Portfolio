"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiClock, FiTag } from "react-icons/fi";
import { fadeUp, viewportOnce } from "@/lib/motion";

const ProjectHeader = ({ project }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={fadeUp}
    >
      <p className="mb-7 mt-8 text-left text-3xl font-bold text-white sm:mt-10 sm:text-4xl">
        {project.ProjectHeader.title}
      </p>
      <div className="flex flex-wrap gap-x-10 gap-y-3">
        <div className="flex items-center">
          <FiClock className="text-lg text-gray-400" />
          <span className="ml-2 leading-none text-gray-200">
            {project.ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="text-lg text-gray-400" />
          <span className="ml-2 leading-none text-gray-200">
            {project.ProjectHeader.tags}
          </span>
        </div>
      </div>

      {project.storeLinks?.length ? (
        <div className="mt-6 flex flex-wrap gap-3">
          {project.storeLinks.map((link, index) => (
            <motion.a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              whileHover={reduceMotion ? undefined : { y: -2, scale: 1.02 }}
              className="inline-flex items-center rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-emerald-400 hover:text-emerald-300"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      ) : null}
    </motion.div>
  );
};

export default ProjectHeader;
