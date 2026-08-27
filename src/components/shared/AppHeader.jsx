"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { pageLayoutClass } from "../layout/PageContainer";

const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function navClass(isActive) {
  return `text-sm font-medium transition ${
    isActive
      ? "text-emerald-400"
      : "text-gray-300 hover:text-white"
  }`;
}

const AppHeader = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sticky top-0 z-50 border-b border-white/10 bg-[#061018]/85 backdrop-blur-md"
    >
      <div className={`flex items-center justify-between py-4 ${pageLayoutClass}`}>
        <Link
          href="/"
          className="text-base font-semibold tracking-[-0.03em] text-white"
        >
          Oluwatosin Ayinde
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={navClass(pathname.startsWith(item.href))}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setShowMenu((prev) => !prev)}
          type="button"
          className="rounded-lg p-2 text-gray-200 sm:hidden"
          aria-label="Menu"
        >
          {showMenu ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {showMenu ? (
        <div
          className={`border-t border-white/10 py-4 sm:hidden ${pageLayoutClass}`}
        >
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={navClass(pathname.startsWith(item.href))}
                onClick={() => setShowMenu(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </motion.nav>
  );
};

export default AppHeader;
