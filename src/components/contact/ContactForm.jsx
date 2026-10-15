"use client";

import { FiSend, FiCheckCircle } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import Button from "../reusable/Button";
import FormInput from "../reusable/FormInput";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("myzyyakr");

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-surface-raised p-8 text-center sm:p-12">
        <FiCheckCircle className="text-5xl text-emerald-400" aria-hidden="true" />
        <h2 className="mt-5 text-xl font-semibold text-white sm:text-2xl">
          Message sent
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-400">
          Thanks for reaching out. I'll get back to you as soon as I can.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-surface-raised p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-white sm:text-2xl">
        Send a message
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-gray-400">
        Share a bit of context — what you&apos;re building, timeline, and how I
        can help.
      </p>

      <form onSubmit={handleSubmit} className="mt-8">
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
            className="block text-sm font-medium text-gray-200"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="mt-2 min-h-[180px] w-full resize-y rounded-lg border border-white/15 bg-[#061018] px-4 py-3 text-base text-white shadow-sm outline-none ring-0 transition placeholder:text-gray-500 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/30"
            id="message"
            name="message"
            rows="6"
            aria-label="Message"
            placeholder="A bit of context, timeline, and what you need."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="mt-1 text-sm text-red-400"
          />
        </div>

        <ValidationError
          errors={state.errors}
          className="mt-4 text-sm text-red-400"
        />

        <div className="mt-8">
          <Button
            title={state.submitting ? "Sending..." : "Send Message"}
            type="submit"
            ariaLabel="Send Message"
            disabled={state.submitting}
            icon={<FiSend size={16} />}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
