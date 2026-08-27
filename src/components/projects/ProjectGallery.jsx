"use client";

import { motion, useReducedMotion } from "framer-motion";
import { scaleUp, viewportOnce } from "@/lib/motion";

const ProjectGallery = ({ project }) => {
  const reduceMotion = useReducedMotion();
  const isMobile = project.displayType === "Mobile";

  if (isMobile) {
    return (
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {project.ProjectImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={viewportOnce}
            variants={scaleUp}
            custom={index * 0.08}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="flex min-h-[480px] items-center justify-center rounded-xl bg-[#0a1520] p-6 ring-1 ring-white/10 transition hover:ring-emerald-400/20 sm:min-h-[540px]"
          >
            <img
              src={image.img}
              className="max-h-[85vh] w-auto max-w-full object-contain transition duration-500 hover:scale-[1.02]"
              alt={image.title}
            />
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-12 flex flex-col gap-10">
      {project.ProjectImages.map((image, index) => (
        <motion.div
          key={image.id}
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={scaleUp}
          custom={index * 0.1}
          whileHover={reduceMotion ? undefined : { y: -3 }}
          className="overflow-hidden rounded-xl bg-[#0a1520] ring-1 ring-white/10 transition hover:ring-emerald-400/20"
        >
          <img
            src={image.img}
            className="w-full object-contain transition duration-500 hover:scale-[1.01]"
            alt={image.title}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectGallery;
