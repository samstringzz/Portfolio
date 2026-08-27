"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { aboutMeData } from "@/data/aboutMeData";
import PageContainer from "../layout/PageContainer";
import { fadeUp, scaleUp, viewportOnce } from "@/lib/motion";

const AboutMeBio = () => {
  const reduceMotion = useReducedMotion();
  const [intro, ...restBio] = aboutMeData;

  return (
    <section className="pb-12 pt-24">
      <PageContainer>
        <div className="grid gap-10 lg:grid-cols-[1fr_280px] lg:items-start">
          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h1 className="text-3xl font-bold text-white sm:text-4xl">About Me</h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-300">
              {intro?.bio}
            </p>

            <div className="mt-6 space-y-4">
              {restBio.map((bio, index) => (
                <motion.p
                  key={bio.id}
                  initial={reduceMotion ? false : "hidden"}
                  whileInView={reduceMotion ? undefined : "visible"}
                  viewport={viewportOnce}
                  variants={fadeUp}
                  custom={0.08 + index * 0.06}
                  className="leading-relaxed text-gray-300"
                >
                  {bio.bio}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "visible"}
            viewport={viewportOnce}
            variants={scaleUp}
            custom={0.1}
            className="mx-auto w-full max-w-[280px] lg:mx-0"
          >
            <div className="overflow-hidden rounded-xl ring-1 ring-white/10 transition hover:ring-emerald-400/30">
              <Image
                src="/covers/profile.jpg"
                width={280}
                height={350}
                className="h-auto w-full object-cover object-center transition duration-500 hover:scale-[1.03]"
                alt="Oluwatosin Ayinde"
              />
            </div>
          </motion.div>
        </div>
      </PageContainer>
    </section>
  );
};

export default AboutMeBio;
