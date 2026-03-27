import { experienceData } from "../data/portfolioData";
import {
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiMapPin,
} from "react-icons/fi";

const Experience = () => {
  return (
    <section className="bg-white px-4 py-24 dark:bg-[#171310] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
              Experience
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-100 sm:text-5xl">
              A track record shaped by shipping, not just studying.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-stone-600 dark:text-stone-300">
              The strongest signal for a portfolio is evidence of real delivery.
              These roles show product ownership, engineering range, and the
              ability to move work from requirement to release.
            </p>
          </div>

          <div className="space-y-6">
            {experienceData.map((experience) => (
              <article
                key={experience.id}
                className="rounded-[32px] border border-stone-200/80 bg-[#faf7f2] p-8 shadow-[0_24px_80px_rgba(28,25,23,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="flex flex-col gap-4 border-b border-stone-200 pb-6 dark:border-white/10 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                      Role
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold text-stone-950 dark:text-stone-100">
                      {experience.role}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-base font-medium text-emerald-700 dark:text-emerald-300">
                      <FiBriefcase />
                      <span>{experience.company}</span>
                    </div>
                  </div>

                  <span className="self-start rounded-full bg-stone-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-50 dark:bg-stone-100 dark:text-stone-950">
                    {experience.type}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-4 text-sm text-stone-600 dark:text-stone-300">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 dark:bg-[#1d1815]">
                    <FiCalendar className="text-emerald-700 dark:text-emerald-300" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 dark:bg-[#1d1815]">
                    <FiMapPin className="text-emerald-700 dark:text-emerald-300" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className="mt-6 text-base leading-8 text-stone-700 dark:text-stone-300">
                  {experience.description}
                </p>

                <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                      Key Achievements
                    </p>
                    <ul className="mt-4 space-y-3">
                      {experience.achievements.slice(0, 4).map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm leading-7 text-stone-700 dark:text-stone-300"
                        >
                          <FiCheckCircle className="mt-1 flex-shrink-0 text-emerald-600 dark:text-emerald-300" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                      Technologies
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {experience.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-full bg-white px-3 py-1 text-xs font-medium text-stone-700 dark:bg-[#1d1815] dark:text-stone-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
