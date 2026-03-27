import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";

const quickPrompts = [
  "Senior frontend opportunities",
  "React Native product work",
  "Portfolio or product redesign",
];

const ContactForm = () => {
  return (
    <div className="w-full lg:w-[58%]">
      <div className="rounded-[32px] border border-stone-200/80 bg-white/90 p-6 shadow-[0_26px_90px_rgba(28,25,23,0.08)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_26px_90px_rgba(0,0,0,0.35)] sm:p-8">
        <div className="flex flex-col gap-6 border-b border-stone-200 pb-6 dark:border-white/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-emerald-700 dark:text-emerald-300">
              Contact Form
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-stone-950 dark:text-stone-100">
              Let’s talk about what you’re building.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600 dark:text-stone-300">
              Use the form to reach out about roles, freelance work, product
              collaboration, or interface improvements. Clear messages get the
              fastest responses.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((prompt) => (
              <span
                key={prompt}
                className="rounded-full border border-stone-300/80 px-4 py-2 text-sm text-stone-700 dark:border-white/10 dark:text-stone-200"
              >
                {prompt}
              </span>
            ))}
          </div>
        </div>

        <form
          action="https://formspree.io/f/myzyyakr"
          method="POST"
          className="mt-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormInput
              inputLabel="Full Name"
              labelFor="name"
              inputType="text"
              inputId="name"
              inputName="name"
              placeholderText="Your full name"
              ariaLabelName="Name"
            />
            <FormInput
              inputLabel="Email"
              labelFor="email"
              inputType="email"
              inputId="email"
              inputName="email"
              placeholderText="you@example.com"
              ariaLabelName="Email"
            />
          </div>

          <div className="mt-5">
            <FormInput
              inputLabel="Subject"
              labelFor="subject"
              inputType="text"
              inputId="subject"
              inputName="subject"
              placeholderText="What would you like to discuss?"
              ariaLabelName="Subject"
            />
          </div>

          <div className="mt-5">
            <label
              className="block text-sm font-semibold uppercase tracking-[0.22em] text-stone-700 dark:text-stone-200"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="mt-3 min-h-[180px] w-full rounded-[24px] border border-stone-300/80 bg-[#fffaf3] px-5 py-4 text-base text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-emerald-700 dark:border-white/10 dark:bg-[#171310] dark:text-stone-100 dark:focus:border-emerald-300"
              id="message"
              name="message"
              rows="7"
              aria-label="Message"
              placeholder="Share a little context, timeline, and what success looks like."
              required
            />
          </div>

          <div className="mt-8 flex flex-col gap-5 border-t border-stone-200 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-300">
              <FiCheckCircle className="mt-1 flex-shrink-0 text-emerald-700 dark:text-emerald-300" />
              <p className="max-w-md leading-7">
                This form goes directly to my inbox through Formspree. Include
                enough detail so I can respond usefully.
              </p>
            </div>

            <Button
              title="Send Message"
              type="submit"
              aria-label="Send Message"
              icon={<FiArrowUpRight />}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
