import { experienceData } from "../data/portfolioData";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

const Experience = () => {
  return (
    <section className="bg-white px-4 py-20 dark:bg-primary-dark sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Experience
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          My professional background in mobile and web development.
        </p>

        <div className="mt-10 space-y-8">
          {experienceData.map((experience) => (
            <article
              key={experience.id}
              className="rounded-xl border border-gray-200 p-6 dark:border-gray-700"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {experience.role}
                  </h3>
                  <div className="mt-1 flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <FiBriefcase size={14} />
                    <span>{experience.company}</span>
                  </div>
                </div>
                <span className="self-start rounded-md bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-ternary-dark dark:text-gray-200">
                  {experience.type}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <FiCalendar size={14} />
                  <span>{experience.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <FiMapPin size={14} />
                  <span>{experience.location}</span>
                </div>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-300">
                {experience.description}
              </p>

              <ul className="mt-4 space-y-2">
                {experience.achievements.slice(0, 4).map((achievement, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-500" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-600 dark:bg-ternary-dark dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
