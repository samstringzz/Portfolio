"use client";

import { motion, useReducedMotion } from "framer-motion";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import PageContainer from "@/components/layout/PageContainer";
import { fadeUp, scaleUp, viewportOnce } from "@/lib/motion";

const ContactPageContent = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="overflow-x-hidden">
      <section className="border-b border-white/10 pb-10 pt-24">
        <PageContainer>
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <p className="text-sm font-medium text-emerald-400">Contact</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Get in touch
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-gray-400">
              Roles, freelance work, or product collaboration — send a message and
              I&apos;ll get back to you.
            </p>
          </motion.div>
        </PageContainer>
      </section>

      <section className="py-12 sm:py-16">
        <PageContainer>
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start lg:gap-10">
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <ContactForm />
            </motion.div>
            <motion.div
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={viewportOnce}
              variants={scaleUp}
              custom={0.1}
              className="lg:sticky lg:top-24"
            >
              <ContactDetails />
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
};

export default ContactPageContent;
