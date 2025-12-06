import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";

const ProjectSingle = ({ title, category, image, externalUrl, isFeatured, slug }) => {
  return (
    <div className="h-full flex flex-col group">
      {
        isFeatured ? (
          <Link to={`/projects/${slug}`} aria-label={`View ${title}`} className="flex flex-col h-full">
            <div className="rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer bg-white dark:bg-gray-800 h-full flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2">
              <div className="relative flex-shrink-0 h-64 overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              </div>
              <div className="flex-grow text-center px-6 py-6 flex flex-col justify-between">
                <div>
                  <p className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </p>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
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
            <div className="rounded-2xl shadow-lg hover:shadow-2xl cursor-pointer bg-white dark:bg-gray-800 h-full flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-2">
              <div className="relative flex-shrink-0 h-64 overflow-hidden">
                <img
                  src={image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 p-2 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <FiExternalLink className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
              </div>
              <div className="flex-grow text-center px-6 py-6 flex flex-col justify-between">
                <div>
                  <p className="font-bold text-xl text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                  </p>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                    {category}
                  </span>
                </div>
              </div>
            </div>
          </a>
        )
      }
    </div>
  );
};

export default ProjectSingle;
