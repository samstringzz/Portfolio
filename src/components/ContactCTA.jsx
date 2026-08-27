"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import { contactData } from "@/data/portfolioData";
import PageContainer from "./layout/PageContainer";
import { fadeUp, viewportOnce } from "@/lib/motion";

const ContactCTA = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface-raised py-24 text-white">
      <div className="hero-grain absolute inset-0 opacity-20" />
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-500/15 blur-[100px]"
      />

      <PageContainer>
        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#061018]/80 p-8 backdrop-blur-sm sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.08),transparent_55%)]"
          />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-emerald-400">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl lg:text-5xl">
                Building something that needs a strong mobile or web interface?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-400">
                Open to frontend and mobile roles, and select freelance work. Reach
                out and I&apos;ll respond with next steps.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-[260px]">
              <motion.div
                whileHover={reduceMotion ? undefined : { scale: 1.02, y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300 sm:w-auto"
                >
                  Start a conversation
                  <FiArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.a
                href={`mailto:${contactData.email}`}
                whileHover={reduceMotion ? undefined : { scale: 1.02, y: -1 }}
                whileTap={reduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-medium text-white transition hover:border-emerald-400/40 hover:bg-white/[0.08] sm:w-auto"
              >
                <FiMail size={16} className="flex-shrink-0 text-emerald-400" />
                <span className="truncate">Email me</span>
              </motion.a>

              <p className="break-all px-1 text-center text-xs text-gray-500 sm:text-left">
                {contactData.email}
              </p>
            </div>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
};

export default ContactCTA;
