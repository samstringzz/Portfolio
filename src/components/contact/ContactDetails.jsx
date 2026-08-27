import Link from "next/link";
import { FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { contactData } from "@/data/portfolioData";

const contacts = [
  {
    id: 1,
    label: "Location",
    value: "Alimosho, Lagos, Nigeria",
    icon: FiMapPin,
    href: null,
  },
  {
    id: 2,
    label: "Email",
    value: contactData.email,
    icon: FiMail,
    href: `mailto:${contactData.email}`,
  },
  {
    id: 3,
    label: "Phone",
    value: contactData.phone,
    icon: FiPhone,
    href: `tel:${contactData.phone.replace(/\s/g, "")}`,
  },
  {
    id: 4,
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    icon: FiLinkedin,
    href: contactData.linkedin,
  },
];

const ContactDetails = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-surface-card p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">
          {contactData.title}
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-gray-400">
          {contactData.description}
        </p>

        <ul className="mt-8 space-y-4">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            const content = (
              <>
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-emerald-400">
                  <Icon size={18} aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                    {contact.label}
                  </p>
                  <p className="mt-1 break-words text-sm text-white">
                    {contact.value}
                  </p>
                </div>
              </>
            );

            return (
              <li key={contact.id}>
                {contact.href ? (
                  <a
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      contact.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-start gap-3 rounded-lg p-2 -mx-2 transition hover:bg-white/[0.03]"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="flex items-start gap-3 p-2 -mx-2">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-6">
        <p className="text-sm font-medium text-emerald-300">Response time</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-300">
          I usually reply within 1–2 business days. For urgent inquiries, email
          or call directly.
        </p>
        <Link
          href={`mailto:${contactData.email}`}
          className="mt-4 inline-flex text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
        >
          {contactData.email}
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
