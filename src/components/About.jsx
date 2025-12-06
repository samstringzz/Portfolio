import { motion } from "framer-motion";
import { aboutData } from "../data/portfolioData";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 dark:from-primary-dark dark:via-gray-900 dark:to-primary-dark px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {aboutData.title.split(' ')[0]} <span className="bg-gradient-to-r from-blue-700 to-cyan-600 text-transparent bg-clip-text">{aboutData.title.split(' ')[1]}</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-cyan-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="prose prose-lg dark:prose-invert mx-auto max-w-none">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed text-lg">
              {aboutData.description}
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              Full Story
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl font-semibold backdrop-blur-sm transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Floating badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {["Mobile Developer", "Cross-Platform Expert", "API Integration", "Performance Optimization"].map((badge, index) => (
            <span
              key={index}
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full font-medium shadow-lg border border-gray-200 dark:border-gray-700"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About; 