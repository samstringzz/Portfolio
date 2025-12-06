import { motion } from "framer-motion";
import { heroData } from "../data/portfolioData";
import { FiGithub, FiLinkedin, FiMail, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary-light dark:bg-primary-dark py-20 px-4 sm:px-6 lg:px-8">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            👋 Available for new opportunities
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="block">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-400 text-transparent bg-clip-text">
            Oluwatosin Ayinde
          </span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-8">
          {heroData.subtitle}
        </h2>
        
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          {heroData.description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="projects"
            className="group px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
          >
            {heroData.cta.primary}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/files/Stoman-Resume.pdf"
            download
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-primary-dark dark:text-primary-light rounded-xl font-semibold hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 backdrop-blur-sm"
          >
            {heroData.cta.secondary}
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a
            href={heroData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transform hover:-translate-y-1 duration-200"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href={heroData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transform hover:-translate-y-1 duration-200"
            aria-label="GitHub"
          >
            <FiGithub size={24} />
          </a>
          <a
            href={heroData.socialLinks.email}
            className="p-3 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors bg-white dark:bg-gray-800 rounded-lg hover:shadow-lg transform hover:-translate-y-1 duration-200"
            aria-label="Email"
          >
            <FiMail size={24} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-600 dark:bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 