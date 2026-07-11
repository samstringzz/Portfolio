import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { contactData } from "../data/portfolioData";

const ContactCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#061018] px-4 py-24 text-white sm:px-6 lg:px-8">
      <div className="hero-grain absolute inset-0 opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-emerald-400">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Building something that needs a strong mobile or web interface?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/65">
            Open to frontend and mobile roles, and select freelance work. Reach
            out and I’ll respond with next steps.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300"
          >
            Start a conversation
            <FiArrowRight size={16} />
          </Link>
          <a
            href={`mailto:${contactData.email}`}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
          >
            {contactData.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
