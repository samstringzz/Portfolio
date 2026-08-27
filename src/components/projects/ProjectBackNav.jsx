import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

const ProjectBackNav = ({ title }) => {
  return (
    <nav
      aria-label="Project navigation"
      className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-8 text-sm sm:pt-10"
    >
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-medium text-gray-200 transition hover:border-emerald-400/40 hover:text-emerald-300"
      >
        <FiArrowLeft size={16} aria-hidden="true" />
        Back to projects
      </Link>
      {title ? (
        <>
          <span className="hidden text-gray-600 sm:inline" aria-hidden="true">
            /
          </span>
          <span className="hidden truncate text-gray-400 sm:inline">{title}</span>
        </>
      ) : null}
    </nav>
  );
};

export default ProjectBackNav;
