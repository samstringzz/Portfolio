"use client";

import { motion, useReducedMotion } from "framer-motion";
import { experienceData } from "@/data/portfolioData";
import PageContainer from "./layout/PageContainer";
import { fadeUp, slideIn, viewportOnce } from "@/lib/motion";

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-surface py-24">
      <PageContainer>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <p className="text-sm font-medium text-emerald-400">Experience</p>
          <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            Where the work happens.
          </h2>
        </motion.div>

        <div className="mt-14 divide-y divide-white/10">
          {experienceData.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={viewportOnce}
              variants={slideIn("up")}
              custom={index * 0.08}
              whileHover={reduceMotion ? undefined : { x: 4 }}
              className="group grid gap-6 rounded-xl py-10 transition-colors hover:bg-white/[0.02] lg:grid-cols-[180px_1fr] lg:px-4 lg:-mx-4"
            >
              <p className="text-sm text-gray-400 transition group-hover:text-emerald-400/80">
                {experience.period}
              </p>

              <div className="relative border-l border-transparent pl-0 transition group-hover:border-emerald-400/30 lg:pl-6">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <span className="text-gray-400">{experience.company}</span>
                </div>

                <ul className="mt-5 max-w-3xl space-y-2">
                  {experience.achievements.slice(0, 3).map((achievement, i) => (
                    <motion.li
                      key={achievement}
                      initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                      whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.35 }}
                      className="text-sm leading-relaxed text-gray-300"
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>

                <p className="mt-5 text-sm text-gray-500">
                  {experience.technologies.slice(0, 6).join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
};

export default Experience;
