import ProjectsGrid from "../components/projects/ProjectsGrid";
import { ProjectsProvider } from "../context/ProjectsContext";

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#f8f4ed] dark:bg-[#120f0d]">
      <ProjectsProvider>
        <section className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 lg:px-8">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#f08b62]/20 blur-3xl dark:bg-[#f08b62]/10" />
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#1f7a6b]/15 blur-3xl dark:bg-[#1f7a6b]/10" />
            <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_top_left,#292524_1px,transparent_1px)] [background-size:32px_32px]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
                  Projects
                </p>
                <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-stone-950 dark:text-stone-100 sm:text-6xl">
                  A portfolio built to read like shipped product work.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 dark:text-stone-300">
                  This page is structured to feel closer to a curated product
                  archive than a template gallery. The focus is on credibility:
                  scope, execution quality, delivery signal, and the kind of
                  interface thinking expected at senior level.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-[28px] border border-stone-200/80 bg-white/80 p-5 shadow-[0_20px_70px_rgba(28,25,23,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                    Coverage
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-stone-900 dark:text-stone-100">
                    Mobile, web, education, and commerce
                  </p>
                </div>
                <div className="rounded-[28px] border border-stone-200/80 bg-[#fffaf3] p-5 shadow-[0_20px_70px_rgba(28,25,23,0.08)] dark:border-white/10 dark:bg-[#171310] dark:shadow-[0_20px_70px_rgba(0,0,0,0.35)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-500 dark:text-stone-400">
                    Signal
                  </p>
                  <p className="mt-3 text-2xl font-semibold text-stone-900 dark:text-stone-100">
                    Live launches plus deeper case studies
                  </p>
                </div>
                <div className="rounded-[28px] border border-stone-200/80 bg-stone-950 p-5 text-stone-50 shadow-[0_20px_70px_rgba(28,25,23,0.12)] dark:border-white/10 dark:bg-stone-100 dark:text-stone-950">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-stone-400 dark:text-stone-500">
                    Goal
                  </p>
                  <p className="mt-3 text-2xl font-semibold">
                    Make quality obvious in under a minute
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="pb-20">
          <ProjectsGrid />
        </div>
      </ProjectsProvider>
    </div>
  );
};

export default Projects;
