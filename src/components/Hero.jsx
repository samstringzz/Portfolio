import { motion } from "framer-motion";
import { heroData } from "../data/portfolioData";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-secondary-light dark:bg-primary-dark py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary-dark dark:text-primary-light mb-6"
        >
          {heroData.title}
        </h1>
        
        <h2
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
        >
          {heroData.subtitle}
        </h2>
        
        <p
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
        >
          {heroData.description}
        </p>
        
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="projects"
            className="px-8 py-3 bg-primary-dark dark:bg-primary-light text-white dark:text-primary-dark rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {heroData.cta.primary}
          </a>
          <a
            href="/resume.pdf"
            className="px-8 py-3 border-2 border-primary-dark dark:border-primary-light text-primary-dark dark:text-primary-light rounded-lg font-semibold hover:bg-primary-dark hover:text-white dark:hover:bg-primary-light dark:hover:text-primary-dark transition-colors"
          >
            {heroData.cta.secondary}
          </a>
        </div>
        
        <div
          className="flex justify-center gap-6 mt-12"
        >
          <a
            href={heroData.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={heroData.socialLinks.email}
            className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
          >
            Email
          </a>
          <a
            href={heroData.socialLinks.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-primary-light transition-colors"
          >
            Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 