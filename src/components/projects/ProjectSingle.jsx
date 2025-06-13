import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, externalUrl, isFeatured, slug }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
      className="h-96 flex flex-col"
    >
      {
        isFeatured ? (
          <Link to={`/projects/${slug}`} aria-label={`View ${title}`} className="flex flex-col h-full">
            <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark h-full flex flex-col">
              <div className="flex-shrink-0 h-56 overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover rounded-t-xl border-none"
                  alt="Project Thumbnail"
                />
              </div>
              <div className="flex-grow text-center px-4 py-6 flex flex-col justify-between">
                <div>
                  <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {title}
                  </p>
                  <span className="text-lg text-ternary-dark dark:text-ternary-light">
                    {category}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ) : (
          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Project External Link"
            className="flex flex-col h-full"
          >
            <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark h-full flex flex-col">
              <div className="flex-shrink-0 h-56 overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover rounded-t-xl border-none"
                  alt="Project Thumbnail"
                />
              </div>
              <div className="flex-grow text-center px-4 py-6 flex flex-col justify-between">
                <div>
                  <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
                    {title}
                  </p>
                  <span className="text-lg text-ternary-dark dark:text-ternary-light">
                    {category}
                  </span>
                </div>
              </div>
            </div>
          </a>
        )
      }
    </motion.div>
  );
};

export default ProjectSingle;
