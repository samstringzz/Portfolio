import { useState } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { motion } from "framer-motion";

const navLinkClass = ({ isActive }) =>
  `text-sm font-medium transition ${
    isActive
      ? "text-emerald-700 dark:text-emerald-400"
      : "text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
  }`;

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    setShowMenu((prev) => !prev);
  }

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-[#061018]/80"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="text-base font-semibold tracking-[-0.03em] text-gray-950 dark:text-white"
        >
          Oluwatosin Ayinde
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <button
            type="button"
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="rounded-lg p-2 text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-lg" />
            ) : (
              <FiSun className="text-lg" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={() => setTheme(activeTheme)}
            aria-label="Theme Switcher"
            className="rounded-lg p-2 text-gray-600 dark:text-gray-300"
          >
            {activeTheme === "dark" ? (
              <FiMoon className="text-lg" />
            ) : (
              <FiSun className="text-lg" />
            )}
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="rounded-lg p-2 text-gray-700 dark:text-gray-200"
            aria-label="Menu"
          >
            {showMenu ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {showMenu ? (
        <div className="border-t border-gray-200 px-4 py-4 dark:border-white/10 sm:hidden">
          <div className="flex flex-col gap-4">
            <NavLink
              to="/projects"
              className={navLinkClass}
              onClick={() => setShowMenu(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setShowMenu(false)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setShowMenu(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      ) : null}
    </motion.nav>
  );
};

export default AppHeader;
