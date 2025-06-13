import { motion } from "framer-motion";
import { achievementsData } from "../data/portfolioData";

const Achievements = () => {
  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-6 text-gray-900 dark:text-white">
            Key Achievements
          </h2>
          <div className="w-24 h-1 bg-primary-dark dark:bg-primary-light mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary-dark dark:text-primary-light mb-4 text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-gray-800 dark:text-gray-100">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 