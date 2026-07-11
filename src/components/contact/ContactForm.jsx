import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";

const ContactForm = () => {
  return (
    <div className="w-full lg:w-[58%]">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
          Get in touch
        </h2>
        <p className="mt-3 max-w-xl text-gray-600 dark:text-gray-300">
          Roles, freelance work, or product collaboration — send a message and
          I’ll get back to you.
        </p>
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
            className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="mt-2 min-h-[160px] w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-emerald-600 dark:border-gray-600 dark:bg-ternary-dark dark:text-white dark:focus:border-emerald-400"
            id="message"
            name="message"
            rows="6"
            aria-label="Message"
            placeholder="A bit of context, timeline, and what you need."
            required
          />
        </div>

        <div className="mt-6">
          <Button title="Send Message" type="submit" ariaLabel="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
