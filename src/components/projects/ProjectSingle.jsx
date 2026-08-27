"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import ProjectCoverImage from "./ProjectCoverImage";
import { cardHover } from "@/lib/motion";

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
  type = "Web",
  status,
}) => {
  const reduceMotion = useReducedMotion();

  const cardContent = (
    <motion.article
      variants={reduceMotion ? undefined : cardHover}
      initial="rest"
      whileHover="hover"
      className="flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-surface-card transition-shadow duration-300 hover:border-emerald-400/20 hover:shadow-lg hover:shadow-emerald-500/5"
    >
      <ProjectCoverImage
        src={image}
        alt={title}
        type={type}
        variant={type === "Web" ? "card" : "default"}
        imgClassName="transition duration-500 group-hover:scale-[1.03]"
        className="group-hover:bg-[#0d1a26]"
      />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs text-gray-400">
              {category}
              {year ? ` · ${year}` : ""}
              {status === "Live" || status === "In Development"
                ? ` · ${status}`
                : ""}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white transition group-hover:text-emerald-50">
              {title}
            </h3>
          </div>
          {!isFeatured && (
            <span className="flex-shrink-0 text-gray-500 transition group-hover:text-emerald-400" aria-hidden="true">
              <FiExternalLink size={18} />
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-gray-300">{summary}</p>

        {technologies?.length ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        ) : null}

        <p className="mt-auto pt-5 text-sm font-medium text-emerald-400 transition group-hover:text-emerald-300">
          {isFeatured ? "View case study" : "Visit live project"}
        </p>
      </div>
    </motion.article>
  );

  return (
    <div className="group h-full">
      {isFeatured ? (
        <Link
          href={`/projects/${slug}`}
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
