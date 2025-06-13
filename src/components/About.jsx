import { motion } from "framer-motion";
import { aboutData } from "../data/portfolioData";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-primary-dark px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mb-6 text-gray-900 dark:text-white">
            {aboutData.title}
          </h2>
          <div className="w-24 h-1 bg-primary-dark dark:bg-primary-light mx-auto mb-8"></div>
        </div>

        <div
          className="prose prose-lg dark:prose-invert mx-auto"
        >
          <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line text-gray-800 dark:text-gray-100">
            {aboutData.description}
          </p>
        </div>

        <div
          className="mt-12 text-center"
        >
          <a
            href="about"
            className="inline-block px-8 py-3 bg-primary-dark dark:bg-primary-light text-white dark:text-primary-dark rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            More About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About; 