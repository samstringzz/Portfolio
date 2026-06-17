import { heroData } from "../data/portfolioData";
import profileImage from "../images/profile.jpg";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="bg-white px-4 py-20 dark:bg-primary-dark sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[1fr_280px]">
        <div>
          <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
            {heroData.subtitle}
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            {heroData.title}
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {heroData.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
            >
              {heroData.cta.primary}
              <FiArrowRight size={16} />
            </a>
            <a
              href="/files/Oluwatosin%20Ayinde%20Samuel.docx.pdf"
              download="Oluwatosin Ayinde Samuel.docx.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400 dark:border-gray-600 dark:text-white dark:hover:border-gray-500"
            >
              <FiDownload size={16} />
              {heroData.cta.secondary}
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <a
              href={heroData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={22} />
            </a>
            <a
              href={heroData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="GitHub"
            >
              <FiGithub size={22} />
            </a>
            <a
              href={heroData.socialLinks.email}
              className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              aria-label="Email"
            >
              <FiMail size={22} />
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[280px] lg:mx-0">
          <img
            src={profileImage}
            alt="Oluwatosin Ayinde"
            className="w-full rounded-xl object-cover object-center shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
