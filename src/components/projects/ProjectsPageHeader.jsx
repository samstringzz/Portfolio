"use client";

import { motion, useReducedMotion } from "framer-motion";
import PageContainer from "../layout/PageContainer";
import { fadeUp, viewportOnce } from "@/lib/motion";

const ProjectsPageHeader = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="pb-8 pt-24">
      <PageContainer>
        <motion.h1
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
        >
          Projects
        </motion.h1>
        <motion.p
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={fadeUp}
          custom={0.1}
          className="mt-4 max-w-2xl text-lg text-gray-400"
        >
          Browse web and mobile work separately — web projects in a two-column
          grid, mobile screenshots at full height.
        </motion.p>
      </PageContainer>
    </section>
  );
};

export default ProjectsPageHeader;
