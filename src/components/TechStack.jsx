import {
  FaAndroid,
  FaApple,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techCategories = [
  {
    name: "Mobile",
    note: "Cross-platform delivery and native platform awareness.",
    technologies: [
      { name: "React Native", icon: <FaReact />, color: "text-cyan-500" },
      { name: "iOS", icon: <FaApple />, color: "text-stone-800 dark:text-white" },
      { name: "Android", icon: <FaAndroid />, color: "text-green-500" },
    ],
  },
  {
    name: "Frontend",
    note: "Modern React tooling for UI systems and responsive product work.",
    technologies: [
      { name: "React", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Next.js", icon: <SiNextdotjs />, color: "text-stone-900 dark:text-white" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
      { name: "Redux", icon: <SiRedux />, color: "text-violet-500" },
    ],
  },
  {
    name: "Backend",
    note: "APIs, service logic, and practical backend collaboration.",
    technologies: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
      { name: "PHP", icon: <FaPhp />, color: "text-indigo-600" },
      { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-500" },
    ],
  },
  {
    name: "Data and Cloud",
    note: "Databases and hosted infrastructure used in production work.",
    technologies: [
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-800" },
      { name: "Supabase", icon: <SiSupabase />, color: "text-green-500" },
      { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
    ],
  },
  {
    name: "Workflow",
    note: "Tools that support delivery discipline and collaboration.",
    technologies: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
      { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
    ],
  },
];

const TechStack = () => {
  return (
    <section className="bg-white px-4 py-24 dark:bg-[#171310] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
              Stack
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-100 sm:text-5xl">
              The technologies behind the work, grouped by real delivery use.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600 dark:text-stone-300">
              Instead of a random logo wall, this section is organized around
              how the tools actually show up in shipped projects.
            </p>
          </div>

          <a
            href="/about"
            className="inline-flex self-start rounded-full border border-stone-300/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-stone-900 transition hover:-translate-y-0.5 hover:border-emerald-700 hover:text-emerald-700 dark:border-white/10 dark:text-stone-100 dark:hover:border-emerald-300 dark:hover:text-emerald-300"
          >
            Learn More About Me
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {techCategories.map((category) => (
            <article
              key={category.name}
              className="rounded-[30px] border border-stone-200/80 bg-[#faf7f2] p-7 shadow-[0_24px_80px_rgba(28,25,23,0.06)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <h3 className="text-2xl font-semibold text-stone-950 dark:text-stone-100">
                {category.name}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600 dark:text-stone-300">
                {category.note}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="rounded-[22px] bg-white p-4 text-center shadow-sm dark:bg-[#1d1815]"
                  >
                    <div className={`text-3xl ${tech.color} mx-auto w-fit`}>
                      {tech.icon}
                    </div>
                    <p className="mt-3 text-xs font-medium uppercase tracking-[0.16em] text-stone-600 dark:text-stone-300">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
