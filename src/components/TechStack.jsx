import { motion } from "framer-motion";
import { 
  FaReact, 
  FaNodeJs, 
  FaPhp, 
  FaDatabase, 
  FaGitAlt, 
  FaDocker,
  FaApple,
  FaAndroid
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiJavascript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiRedux,
  SiGraphql,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiSupabase
} from "react-icons/si";

const TechStack = () => {
  const techCategories = [
    {
      name: "Mobile",
      color: "from-blue-500 to-cyan-500",
      technologies: [
        { name: "React Native", icon: <FaReact />, color: "text-cyan-500" },
        { name: "iOS", icon: <FaApple />, color: "text-gray-800 dark:text-white" },
        { name: "Android", icon: <FaAndroid />, color: "text-green-500" },
      ]
    },
    {
      name: "Frontend",
      color: "from-blue-600 to-cyan-600",
      technologies: [
        { name: "React", icon: <FaReact />, color: "text-cyan-500" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-black dark:text-white" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-400" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-600" },
      ]
    },
    {
      name: "Backend",
      color: "from-green-500 to-emerald-500",
      technologies: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
        { name: "PHP", icon: <FaPhp />, color: "text-indigo-600" },
        { name: "GraphQL", icon: <SiGraphql />, color: "text-pink-600" },
      ]
    },
    {
      name: "Database & Cloud",
      color: "from-orange-500 to-red-500",
      technologies: [
        { name: "MySQL", icon: <SiMysql />, color: "text-blue-700" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-800" },
        { name: "Supabase", icon: <SiSupabase />, color: "text-green-500" },
        { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
      ]
    },
    {
      name: "Tools",
      color: "from-gray-600 to-gray-800",
      technologies: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-primary-dark px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technology <span className="bg-gradient-to-r from-blue-700 to-cyan-600 text-transparent bg-clip-text">Stack</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-700 to-cyan-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Modern technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="relative group hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                {/* Gradient header bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${category.color}`}></div>

                {/* Category name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 mt-2">
                  {category.name}
                </h3>

                {/* Technologies grid */}
                <div className="grid grid-cols-3 gap-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex flex-col items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all group/tech cursor-pointer hover:scale-110 hover:rotate-2"
                    >
                      {/* Icon */}
                      <div className={`text-4xl ${tech.color} group-hover/tech:scale-110 transition-transform`}>
                        {tech.icon}
                      </div>

                      {/* Name */}
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative gradient blob */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br ${category.color} rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Always learning and exploring new technologies to stay ahead of the curve
          </p>
          <a
            href="/about"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 hover:from-blue-800 hover:to-cyan-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Learn More About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

