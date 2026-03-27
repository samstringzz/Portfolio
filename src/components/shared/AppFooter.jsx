import { FiGithub, FiLinkedin, FiMail, FiGlobe, FiTwitter } from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGlobe />,
    url: "https://oluwatosin.vercel.app/",
    label: "Portfolio",
  },
  {
    id: 2,
    icon: <FiGithub />,
    url: "https://github.com/samstringzz",
    label: "GitHub",
  },
  {
    id: 3,
    icon: <FiTwitter />,
    url: "https://twitter.com/ayindetosin12",
    label: "Twitter",
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/ayindeoluwatosin",
    label: "LinkedIn",
  },
];

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const AppFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-[#171310] px-4 py-20 text-stone-100 dark:bg-[#0e0c0a] sm:px-6 lg:px-8">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-[#f08b62]/10 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-[#1f7a6b]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur sm:p-10 lg:grid-cols-[1.1fr_0.7fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b35f]">
              Footer
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-stone-50">
              Oluwatosin Ayinde
            </h3>
            <p className="mt-4 max-w-md text-sm leading-8 text-stone-300">
              Mobile and full stack developer focused on shipping thoughtful,
              production-ready interfaces for products that need to feel credible
              from the first interaction.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 transition hover:-translate-y-1 hover:border-[#76c2b4] hover:text-[#76c2b4]"
                  aria-label={link.label}
                >
                  <span className="text-lg">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
              Navigate
            </p>
            <ul className="mt-5 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-stone-300 transition hover:text-[#76c2b4]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-400">
              Contact
            </p>
            <a
              href="mailto:ayindeoluwatosin09@gmail.com"
              className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-200 transition hover:border-[#76c2b4] hover:text-[#76c2b4]"
            >
              <FiMail />
              <span>ayindeoluwatosin09@gmail.com</span>
            </a>

            <div className="mt-6 rounded-[24px] border border-white/10 bg-stone-950/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-stone-400">
                Current focus
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-300">
                Senior frontend and mobile opportunities, product-driven teams,
                and roles where implementation quality is expected to be visible.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-stone-400">
          © {new Date().getFullYear()} Oluwatosin Ayinde. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
