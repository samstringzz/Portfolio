import { useState, useEffect, useRef } from "react";
import { skillsData } from "../data/portfolioData";

const extraTools = [
  "Figma",
  "Postman",
  "VS Code",
  "Xcode",
  "Android Studio",
  "Jira",
  "Slack",
  "Notion",
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f2ece2] px-4 py-24 dark:bg-[#120f0d] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
              Skills
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-100 sm:text-5xl">
              Breadth across the stack, with depth where product quality matters.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600 dark:text-stone-300">
              The emphasis here is not claiming everything. It is showing strong
              working competency in the technologies that repeatedly appear in
              shipped mobile and web products.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {extraTools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-stone-300/80 px-4 py-2 text-sm text-stone-700 dark:border-white/10 dark:text-stone-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {skillsData.categories.map((category, categoryIndex) => (
              <article
                key={categoryIndex}
                className="rounded-[30px] border border-stone-200/80 bg-white/85 p-7 shadow-[0_24px_80px_rgba(28,25,23,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-2xl font-semibold text-stone-950 dark:text-stone-100">
                    {category.title}
                  </h3>
                </div>

                <div className="mt-8 space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <span className="text-sm font-medium text-stone-800 dark:text-stone-200">
                          {skill.name}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500 dark:text-stone-400">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-stone-200 dark:bg-white/10">
                        <div
                          style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                          className="h-full rounded-full bg-gradient-to-r from-[#1f7a6b] via-[#2e9b89] to-[#d8b35f] transition-all duration-1000 ease-out"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
