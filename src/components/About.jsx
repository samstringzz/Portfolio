import { aboutData } from "../data/portfolioData";
import { FiArrowRight } from "react-icons/fi";

const signals = [
  "React Native and product delivery",
  "Scalable frontend systems",
  "API integration and performance tuning",
  "UI polish with production discipline",
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f8f4ed] px-4 py-24 dark:bg-[#120f0d] sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
            About
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-100 sm:text-5xl">
            Senior-level delivery starts with clarity in both thinking and craft.
          </h2>
          <p className="mt-5 text-base leading-8 text-stone-600 dark:text-stone-300">
            This portfolio is designed to communicate not only what I can build,
            but how I approach shipping products that are useful, reliable, and
            visually considered.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {signals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-stone-300/80 px-4 py-2 text-sm text-stone-700 dark:border-white/10 dark:text-stone-200"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-stone-200/80 bg-white/85 p-8 shadow-[0_26px_90px_rgba(28,25,23,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_26px_90px_rgba(0,0,0,0.35)] sm:p-10">
          <div className="rounded-[26px] bg-[#fffaf3] p-6 dark:bg-[#171310] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500 dark:text-stone-400">
              {aboutData.title}
            </p>
            <p className="mt-5 whitespace-pre-line text-base leading-8 text-stone-700 dark:text-stone-300">
              {aboutData.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/about"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-50 transition hover:-translate-y-0.5 hover:bg-emerald-700 dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-emerald-300"
            >
              Full Story
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-stone-300/80 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-900 transition hover:-translate-y-0.5 hover:border-emerald-700 hover:text-emerald-700 dark:border-white/10 dark:text-stone-100 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
