import { motion } from "framer-motion";
import { heroData } from "../data/portfolioData";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

const trustPoints = [
  "Cross-platform mobile delivery",
  "Product-minded frontend execution",
  "Scalable web and API integration",
];

const proofStats = [
  { value: "15+", label: "Shipped projects" },
  { value: "4.8/5", label: "App experience focus" },
  { value: "99.5%", label: "Crash-free target" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f6f1e8] px-4 py-24 text-stone-950 dark:bg-[#120f0d] dark:text-stone-100 sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#f08b62]/20 blur-3xl dark:bg-[#f08b62]/10" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#1f7a6b]/15 blur-3xl dark:bg-[#1f7a6b]/10" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#d8b35f]/15 blur-3xl dark:bg-[#d8b35f]/10" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,#292524_1px,transparent_1px),linear-gradient(to_bottom,#292524_1px,transparent_1px)] [background-size:72px_72px]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-stone-300/80 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-stone-700 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-stone-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for senior frontend and mobile roles
          </div>

          <h1 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Building digital products that feel
            <span className="block text-[#1f7a6b] dark:text-[#76c2b4]">
              refined, fast, and production-ready.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300 sm:text-xl">
            {heroData.description} I focus on interfaces that are credible under
            scrutiny, scalable in code, and clear enough to win trust quickly.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {trustPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-stone-300/80 px-4 py-2 text-sm text-stone-700 dark:border-white/10 dark:text-stone-200"
              >
                {point}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-50 transition hover:-translate-y-0.5 hover:bg-[#1f7a6b] dark:bg-stone-100 dark:text-stone-950 dark:hover:bg-[#76c2b4]"
            >
              {heroData.cta.primary}
              <FiArrowRight className="transition group-hover:translate-x-1" />
            </a>
            <a
              href="/files/Oluwatosin%20Ayinde%20Samuel.docx.pdf"
              download="Oluwatosin Ayinde Samuel.docx.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300/80 bg-white/80 px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-stone-900 transition hover:-translate-y-0.5 hover:border-[#1f7a6b] hover:text-[#1f7a6b] dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:hover:border-[#76c2b4] dark:hover:text-[#76c2b4]"
            >
              <FiDownload />
              {heroData.cta.secondary}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={heroData.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-300/80 bg-white/70 text-stone-700 transition hover:-translate-y-0.5 hover:border-[#1f7a6b] hover:text-[#1f7a6b] dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:border-[#76c2b4] dark:hover:text-[#76c2b4]"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href={heroData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-300/80 bg-white/70 text-stone-700 transition hover:-translate-y-0.5 hover:border-[#1f7a6b] hover:text-[#1f7a6b] dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:border-[#76c2b4] dark:hover:text-[#76c2b4]"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={heroData.socialLinks.email}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-stone-300/80 bg-white/70 text-stone-700 transition hover:-translate-y-0.5 hover:border-[#1f7a6b] hover:text-[#1f7a6b] dark:border-white/10 dark:bg-white/5 dark:text-stone-200 dark:hover:border-[#76c2b4] dark:hover:text-[#76c2b4]"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute -left-6 top-14 hidden h-28 w-28 rounded-[2rem] bg-[#f08b62]/20 blur-2xl lg:block dark:bg-[#f08b62]/10" />
          <div className="absolute -right-8 bottom-10 hidden h-36 w-36 rounded-full bg-[#1f7a6b]/20 blur-3xl lg:block dark:bg-[#1f7a6b]/10" />

          <div className="relative rounded-[32px] border border-stone-300/70 bg-white/80 p-6 shadow-[0_32px_90px_rgba(28,25,23,0.12)] backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-[0_32px_90px_rgba(0,0,0,0.45)]">
            <div className="rounded-[28px] bg-stone-950 p-6 text-stone-50 dark:bg-[#1b1714]">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-stone-400">
                <span>Senior-ready portfolio signal</span>
                <span>{heroData.subtitle}</span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {proofStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[22px] border border-white/10 bg-white/5 p-4"
                  >
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm leading-6 text-stone-300">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[24px] border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#d8b35f]">
                  Current focus
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Shipping interfaces that look considered and perform under real
                  product pressure.
                </h2>
                <p className="mt-3 text-sm leading-7 text-stone-300">
                  React Native, React, Tailwind CSS, API integrations, and the
                  kind of UI polish that makes a portfolio feel senior instead
                  of generic.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-stone-200 bg-[#fffaf3] p-5 dark:border-white/10 dark:bg-[#171310]">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                  What recruiters should notice
                </p>
                <p className="mt-3 text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Clear thinking, visual taste, and implementation discipline.
                </p>
              </div>
              <div className="rounded-[24px] border border-stone-200 bg-white p-5 dark:border-white/10 dark:bg-[#171310]">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                  Based on
                </p>
                <p className="mt-3 text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {heroData.title.replace("👋", "")}
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-600 dark:text-stone-300">
                  Frontend and mobile engineer with product delivery across web,
                  education platforms, marketplaces, and user-facing mobile apps.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
