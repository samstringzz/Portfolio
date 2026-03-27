import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";

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
    name: "ayindeoluwatosin09@gmail.com",
    icon: <FiMail />,
  },
  {
    id: 3,
    label: "Phone",
    name: "+234 816 088 4797",
    icon: <FiPhone />,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full lg:w-[42%]">
      <div className="rounded-[32px] border border-stone-200/80 bg-[#171310] p-6 text-stone-100 shadow-[0_26px_90px_rgba(28,25,23,0.12)] dark:border-white/10 dark:bg-[#0e0c0a] dark:shadow-[0_26px_90px_rgba(0,0,0,0.45)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#d8b35f]">
          Contact Details
        </p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-stone-50">
          Open to serious conversations and good product work.
        </h2>
        <p className="mt-4 text-base leading-8 text-stone-300">
          If you are hiring, planning a redesign, or need a frontend engineer
          who cares about product quality, this is the fastest way to reach me.
        </p>

        <div className="mt-8 space-y-4">
          {contacts.map((contact) => (
            <article
              key={contact.id}
              className="rounded-[24px] border border-white/10 bg-white/5 p-5"
            >
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg text-[#76c2b4]">
                  {contact.icon}
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-400">
                    {contact.label}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-stone-100">
                    {contact.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
