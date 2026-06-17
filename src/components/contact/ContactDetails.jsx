import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { contactData } from "../../data/portfolioData";

const contacts = [
  {
    id: 1,
    label: "Location",
    name: "Alimosho, Lagos, Nigeria",
    icon: <FiMapPin />,
  },
  {
    id: 2,
    label: "Email",
    name: contactData.email,
    icon: <FiMail />,
  },
  {
    id: 3,
    label: "Phone",
    name: contactData.phone,
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-[42%]">
      <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-secondary-dark sm:p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {contactData.title}
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {contactData.description}
        </p>

        <div className="mt-8 space-y-4">
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-start gap-3">
              <span className="mt-0.5 text-gray-500 dark:text-gray-400">
                {contact.icon}
              </span>
              <div>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {contact.label}
                </p>
                <p className="mt-1 text-sm text-gray-900 dark:text-white">
                  {contact.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
