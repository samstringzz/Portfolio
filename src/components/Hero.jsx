"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import { heroData } from "@/data/portfolioData";
import DotField from "./DotField";
import HeroVisual from "./HeroVisual";
import { pageLayoutClass } from "./layout/PageContainer";

const stats = [
  { value: "15+", label: "Projects shipped" },
  { value: "Live", label: "App Store & Play" },
  { value: "Full stack", label: "Mobile to backend" },
];

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#061018] text-white">
      <div className="absolute inset-0 z-0">
        <DotField
          className="h-full w-full"
          dotRadius={1.8}
          dotSpacing={16}
          cursorRadius={520}
          bulgeStrength={80}
          glowRadius={180}
          sparkle
          waveAmplitude={2.5}
          gradientFrom="rgba(52, 211, 153, 0.55)"
          gradientTo="rgba(125, 211, 252, 0.35)"
          glowColor="#0a2e28"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_70%_40%,rgba(52,211,153,0.08),transparent)]"
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#061018]/90 via-[#061018]/50 to-[#061018]/20" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#061018]/95 via-transparent to-[#061018]/30" />
      <div
        aria-hidden="true"
        className="hero-grain pointer-events-none absolute inset-0 z-[1] opacity-[0.03]"
      />

      <div
        className={`relative z-10 flex min-h-[92vh] flex-col justify-center py-28 lg:py-32 ${pageLayoutClass}`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-sm font-medium tracking-wide text-emerald-400">
              {heroData.subtitle}
            </p>

            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {heroData.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl">
              {heroData.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300"
              >
                {heroData.cta.primary}
                <FiArrowDownRight size={16} />
              </motion.a>
              <motion.div whileHover={{ scale: 1.02, y: -1 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
                >
                  Get in touch
                  <FiArrowRight size={16} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.08, duration: 0.45 }}
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
