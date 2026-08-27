"use client";

import { FiGithub, FiLinkedin } from "react-icons/fi";

const iconMap = {
  linkedin: FiLinkedin,
  github: FiGithub,
};

const ProjectSocialLinks = ({ links = [] }) => {
  if (!links.length) return null;

  return (
    <div className="flex items-center gap-3 mt-5">
      {links.map((social) => {
        const Icon = iconMap[social.icon];
        if (!Icon) return null;

        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="rounded-lg bg-white/5 p-2 text-gray-400 transition duration-500 hover:text-emerald-300"
          >
            <Icon className="text-lg lg:text-2xl" />
          </a>
        );
      })}
    </div>
  );
};

export default ProjectSocialLinks;
