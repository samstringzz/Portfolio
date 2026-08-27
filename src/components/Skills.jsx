"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillsData } from "@/data/portfolioData";
import { getCategoryIcon, getSkillIcon } from "@/lib/skillIcons";
import PageContainer from "./layout/PageContainer";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-surface-raised py-20">
      <PageContainer>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills</h2>
          <p className="mt-3 max-w-2xl text-gray-300">
            Technologies I use regularly across mobile and web projects.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={staggerContainer}
          className="mt-10 space-y-8"
        >
          {skillsData.categories.map((category, categoryIndex) => {
            const { Icon: CategoryIcon, color: categoryColor } = getCategoryIcon(
              category.title
            );

            return (
              <motion.div
                key={category.title}
                variants={fadeUp}
                custom={categoryIndex * 0.05}
              >
                <div className="flex items-center gap-2">
                  <CategoryIcon
                    className={`h-4 w-4 ${categoryColor}`}
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => {
                    const { Icon, color } = getSkillIcon(skill.name);

                    return (
                      <motion.span
                        key={skill.name}
                        initial={
                          reduceMotion ? false : { opacity: 0, scale: 0.9 }
                        }
                        whileInView={
                          reduceMotion ? undefined : { opacity: 1, scale: 1 }
                        }
                        viewport={viewportOnce}
                        transition={{
                          delay: skillIndex * 0.03,
                          duration: 0.3,
                        }}
                        whileHover={
                          reduceMotion ? undefined : { y: -2, scale: 1.04 }
                        }
                        className="inline-flex items-center gap-2 rounded-md bg-white/5 px-3 py-1.5 text-sm text-gray-200 ring-1 ring-white/10 transition hover:bg-emerald-400/10 hover:ring-emerald-400/25"
                      >
                        <Icon
                          className={`h-4 w-4 flex-shrink-0 ${color}`}
                          aria-hidden="true"
                        />
                        {skill.name}
                      </motion.span>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </PageContainer>
    </section>
  );
};

export default Skills;
