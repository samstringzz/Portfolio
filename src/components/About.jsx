import { aboutData, contactData } from "../data/portfolioData";
import { FiArrowRight } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white px-4 py-20 dark:bg-primary-dark sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          {aboutData.title}
        </h2>

        <p className="mt-5 max-w-3xl whitespace-pre-line text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {aboutData.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            More About Me
            <FiArrowRight size={16} />
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-900 transition hover:border-gray-400 dark:border-gray-600 dark:text-white dark:hover:border-gray-500"
          >
            {contactData.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
