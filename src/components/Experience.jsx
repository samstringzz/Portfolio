import { motion } from "framer-motion";
import { experienceData } from "../data/portfolioData";

const Experience = () => {
  return (
    <section className="bg-white px-4 py-24 dark:bg-primary-dark sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
          Experience
        </p>
        <h2 className="mt-2 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-gray-950 dark:text-white sm:text-4xl">
          Where the work happens.
        </h2>

        <div className="mt-14 divide-y divide-gray-200 dark:divide-gray-700">
          {experienceData.map((experience, index) => (
            <motion.article
              key={experience.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15 + index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="grid gap-6 py-10 lg:grid-cols-[180px_1fr]"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.period}
              </p>

              <div>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
                    {experience.role}
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">
                    {experience.company}
                  </span>
                </div>

                <ul className="mt-5 max-w-3xl space-y-2">
                  {experience.achievements.slice(0, 3).map((achievement) => (
                    <li
                      key={achievement}
                      className="text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 text-sm text-gray-500 dark:text-gray-400">
                  {experience.technologies.slice(0, 6).join(" · ")}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
