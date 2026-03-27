import { Link } from "react-router-dom";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const ProjectSingle = ({
  title,
  category,
  image,
  externalUrl,
  isFeatured,
  slug,
  summary,
  technologies,
  year,
  status,
  impact,
}) => {
  const cardContent = (
    <div className="relative h-full overflow-hidden rounded-[28px] border border-stone-200/80 bg-white/95 shadow-[0_24px_80px_rgba(28,25,23,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_28px_100px_rgba(28,25,23,0.14)] dark:border-white/10 dark:bg-stone-900/90 dark:shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent" />
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          alt={title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/25 to-transparent" />
        <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/20 bg-stone-950/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-100 backdrop-blur">
            {category}
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-stone-900 shadow-sm dark:bg-stone-900/90 dark:text-stone-100">
            {status || (isFeatured ? "Case Study" : "Live")}
          </span>
        </div>
        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-stone-200/80">
              {year || "Recent Work"}
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {title}
            </h3>
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
            {isFeatured ? <FiArrowUpRight size={18} /> : <FiExternalLink size={18} />}
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100%-16rem)] flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
          <span>{impact || "Product Delivery"}</span>
          <span>{isFeatured ? "Deep dive" : "External launch"}</span>
        </div>

        <p className="mt-4 text-sm leading-7 text-stone-600 dark:text-stone-300">
          {summary}
        </p>

        {technologies?.length ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-700 dark:bg-white/5 dark:text-stone-200"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto pt-8">
          <div className="flex items-center justify-between border-t border-stone-200 pt-4 text-sm font-medium text-stone-900 dark:border-white/10 dark:text-stone-100">
            <span>{isFeatured ? "Open case study" : "Visit live project"}</span>
            <span className="text-emerald-700 dark:text-emerald-300">
              Explore
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="group h-full">
      {isFeatured ? (
        <Link
          to={`/projects/${slug}`}
          aria-label={`View ${title}`}
          className="flex h-full flex-col"
        >
          {cardContent}
        </Link>
      ) : (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title}`}
          className="flex h-full flex-col"
        >
          {cardContent}
        </a>
      )}
    </div>
  );
};

export default ProjectSingle;
