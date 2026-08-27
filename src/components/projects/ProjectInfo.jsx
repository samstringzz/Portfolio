"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProjectSocialLinks from "./ProjectSocialLinks";
import { fadeUp, viewportOnce } from "@/lib/motion";

const ProjectInfo = ({ project }) => {
  const reduceMotion = useReducedMotion();
  const info = project.ProjectInfo;

  const blocks = [
    {
      key: "client",
      title: info.ClientHeading,
      content: (
        <ul className="leading-loose">
          {info.CompanyInfo.map((item) => {
            const href =
              item.url ||
              (typeof item.details === "string" &&
              /^https?:\/\//.test(item.details)
                ? item.details
                : null);

            return (
              <li className="text-gray-300" key={item.id}>
                <span>{item.title}: </span>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer duration-300 hover:text-emerald-300 hover:underline"
                  >
                    {item.details}
                  </a>
                ) : (
                  <span>{item.details}</span>
                )}
              </li>
            );
          })}
        </ul>
      ),
    },
    {
      key: "objectives",
      title: info.ObjectivesHeading,
      content: <p className="text-gray-300">{info.ObjectivesDetails}</p>,
    },
    {
      key: "tech",
      title: info.Technologies[0].title,
      content: (
        <p className="text-gray-300">{info.Technologies[0].techs.join(", ")}</p>
      ),
    },
    {
      key: "social",
      title: info.SocialSharingHeading,
      content: <ProjectSocialLinks links={info.SocialSharing} />,
    },
  ];

  return (
    <div className="mt-14 block sm:flex gap-0 sm:gap-10">
      <div className="w-full sm:w-1/3 text-left">
        {blocks.map((block, index) => (
          <motion.div
            key={block.key}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={viewportOnce}
            variants={fadeUp}
            custom={index * 0.08}
            className="mb-7"
          >
            <p className="mb-2 text-2xl font-semibold text-white">{block.title}</p>
            {block.content}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
        variants={fadeUp}
        custom={0.15}
        className="mt-10 w-full text-left sm:mt-0 sm:w-2/3"
      >
        <p className="mb-7 text-2xl font-bold text-white">
          {info.ProjectDetailsHeading}
        </p>
        {info.ProjectDetails.map((details, index) => (
          <motion.p
            key={details.id}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={viewportOnce}
            variants={fadeUp}
            custom={0.2 + index * 0.06}
            className="mb-5 text-lg text-gray-300"
          >
            {details.details}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectInfo;
