import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

const socialLinks = [
  {
    id: 1,
    icon: <FiGithub />,
    url: "https://github.com/samstringzz",
    label: "GitHub",
  },
  {
    id: 2,
    icon: <FiTwitter />,
    url: "https://twitter.com/ayindetosin12",
    label: "Twitter",
  },
  {
    id: 3,
    icon: <FiLinkedin />,
    url: "https://www.linkedin.com/in/oluwatosin-ayinde-41b434367",
    label: "LinkedIn",
  },
  {
    id: 4,
    icon: <FiMail />,
    url: "mailto:ayindeoluwatosin09@gmail.com",
    label: "Email",
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
    <footer className="border-t border-white/10 bg-[#061018] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold tracking-[-0.03em]">
              Oluwatosin Ayinde
            </h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Mobile and full stack developer building cross-platform apps and
              web products.
            </p>

            <div className="mt-6 flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.url.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="text-white/50 transition hover:text-emerald-300"
                  aria-label={link.label}
                >
                  <span className="text-xl">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Navigate</p>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Contact</p>
            <a
              href="mailto:ayindeoluwatosin09@gmail.com"
              className="mt-4 inline-block text-sm text-white/60 transition hover:text-emerald-300"
            >
              ayindeoluwatosin09@gmail.com
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/45">
              Open to frontend and mobile roles, and select freelance work.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/40">
          © {new Date().getFullYear()} Oluwatosin Ayinde
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
