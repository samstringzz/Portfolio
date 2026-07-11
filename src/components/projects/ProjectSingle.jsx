import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

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
}) => {
  const cardContent = (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-ternary-dark">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          className="h-full w-full object-cover transition hover:scale-105"
          alt={title}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {category}
              {year ? ` · ${year}` : ""}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
          </div>
          {!isFeatured && (
            <span className="flex-shrink-0 text-gray-400" aria-hidden="true">
              <FiExternalLink size={18} />
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {summary}
        </p>

        {technologies?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-50 px-2.5 py-1 text-xs text-gray-600 dark:bg-primary-dark dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mt-auto pt-5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
          {isFeatured ? "View case study" : "Visit live project"}
        </p>
      </div>
    </article>
  );

  return (
    <div className="h-full">
      {isFeatured ? (
        <Link
          to={`/projects/${slug}`}
          aria-label={`View ${title}`}
          className="block h-full"
        >
          {cardContent}
        </Link>
      ) : (
        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${title}`}
          className="block h-full"
        >
          {cardContent}
        </a>
      )}
    </div>
  );
};

export default ProjectSingle;
