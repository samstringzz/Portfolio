import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { skillsData } from "../data/portfolioData";

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical <span className="bg-gradient-to-r from-blue-700 to-cyan-600 text-transparent bg-clip-text">Skills</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-cyan-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillsData.categories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills list with progress bars */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    {/* Skill name and percentage */}
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 dark:text-gray-200 font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar container */}
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      {/* Animated progress bar */}
                      <div
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
                      >
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Figma", "Postman", "VS Code", "Xcode", "Android Studio", "Jira", "Slack", "Notion"].map((tool, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium shadow-sm hover:shadow-md transition-all hover:scale-110"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

