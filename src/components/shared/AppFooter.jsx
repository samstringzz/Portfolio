import { FiGithub, FiTwitter, FiLinkedin, FiGlobe, FiMail, FiHeart } from "react-icons/fi";
import { motion } from "framer-motion";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://oluwatosin.vercel.app/",
    label: "Portfolio"
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/samstringzz",
    label: "GitHub"
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/ayindetosin12",
    label: "Twitter"
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/ayindeoluwatosin",
    label: "LinkedIn"
  },
];

const AppFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="pt-16 pb-8">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* About section */}
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                Oluwatosin Ayinde
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Mobile & Full Stack Developer passionate about creating exceptional digital experiences. Currently building innovative solutions at YIP Online.
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="/projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:ayindeoluwatosin09@gmail.com" 
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <FiMail />
                  <span>ayindeoluwatosin09@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col justify-center items-center mb-8 pt-8 border-t border-gray-800">
            <p className="text-2xl sm:text-3xl mb-6 font-bold">
              Connect With Me
            </p>
            <ul className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 cursor-pointer rounded-xl bg-gray-800 hover:bg-gray-700 shadow-lg p-4 duration-300 border border-gray-700 hover:scale-110 hover:-translate-y-1 transition-all"
                  aria-label={link.label}
                >
                  <i className="text-2xl">{link.icon}</i>
                </a>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
              <span>© {new Date().getFullYear()} Oluwatosin Ayinde. All rights reserved.</span>
              <span className="flex items-center gap-1">
                Made with <FiHeart className="text-red-500" /> 
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
