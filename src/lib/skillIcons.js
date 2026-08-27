import {
  FaAndroid,
  FaApple,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import {
  SiFirebase,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import {
  FiCode,
  FiCpu,
  FiGitBranch,
  FiGlobe,
  FiLayout,
  FiServer,
  FiSmartphone,
  FiTool,
  FiUsers,
  FiZap,
} from "react-icons/fi";

const SKILL_ICON_MAP = {
  "React Native": { Icon: FaReact, color: "text-cyan-400" },
  "iOS Development": { Icon: FaApple, color: "text-gray-200" },
  "Android Development": { Icon: FaAndroid, color: "text-green-400" },
  "Mobile UI/UX": { Icon: FiSmartphone, color: "text-emerald-400" },
  "App Performance": { Icon: FiZap, color: "text-amber-400" },
  "Native Modules": { Icon: FiCpu, color: "text-sky-400" },
  "React.js": { Icon: FaReact, color: "text-cyan-400" },
  "Next.js": { Icon: SiNextdotjs, color: "text-white" },
  TypeScript: { Icon: SiTypescript, color: "text-blue-400" },
  "JavaScript (ES6+)": { Icon: SiJavascript, color: "text-yellow-400" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "text-cyan-300" },
  "Redux/State Management": { Icon: SiRedux, color: "text-violet-400" },
  "Node.js": { Icon: FaNodeJs, color: "text-green-500" },
  PHP: { Icon: FaPhp, color: "text-indigo-400" },
  "RESTful APIs": { Icon: FiGlobe, color: "text-sky-300" },
  GraphQL: { Icon: SiGraphql, color: "text-pink-400" },
  MySQL: { Icon: SiMysql, color: "text-blue-500" },
  Supabase: { Icon: SiSupabase, color: "text-emerald-400" },
  "Git & GitHub": { Icon: FaGithub, color: "text-gray-200" },
  Firebase: { Icon: SiFirebase, color: "text-orange-400" },
  "CI/CD Pipelines": { Icon: FiGitBranch, color: "text-purple-400" },
  Docker: { Icon: FaDocker, color: "text-blue-400" },
  "Jest/Testing": { Icon: SiJest, color: "text-red-400" },
  "Agile/Scrum": { Icon: FiUsers, color: "text-teal-400" },
};

const CATEGORY_ICON_MAP = {
  "Mobile Development": { Icon: FiSmartphone, color: "text-emerald-400" },
  "Frontend Development": { Icon: FiLayout, color: "text-cyan-400" },
  "Backend Development": { Icon: FiServer, color: "text-indigo-400" },
  "Tools & Technologies": { Icon: FiTool, color: "text-amber-400" },
};

export function getSkillIcon(name) {
  return SKILL_ICON_MAP[name] || { Icon: FiCode, color: "text-gray-400" };
}

export function getCategoryIcon(title) {
  return CATEGORY_ICON_MAP[title] || { Icon: FaGitAlt, color: "text-gray-400" };
}
