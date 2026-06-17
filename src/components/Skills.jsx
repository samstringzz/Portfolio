import { skillsData } from "../data/portfolioData";

const Skills = () => {
  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-secondary-dark sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Skills
        </h2>
        <p className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300">
          Technologies I use regularly across mobile and web projects.
        </p>

        <div className="mt-10 space-y-8">
          {skillsData.categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md bg-white px-3 py-1.5 text-sm text-gray-700 ring-1 ring-gray-200 dark:bg-ternary-dark dark:text-gray-200 dark:ring-gray-700"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
