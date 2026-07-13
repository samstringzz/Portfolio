import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import { heroData } from "../data/portfolioData";
import DotField from "./DotField";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-[#061018] text-white">
      {/* Explicit-size wrapper required by DotField (see reactbits.dev) */}
      <div
        className="absolute inset-0 z-0"
        style={{ width: "100%", height: "100%", position: "absolute" }}
      >
        <DotField
          className="h-full w-full"
          dotRadius={1.8}
          dotSpacing={16}
          cursorRadius={520}
          bulgeStrength={80}
          glowRadius={180}
          sparkle={false}
          waveAmplitude={2.5}
          gradientFrom="rgba(52, 211, 153, 0.55)"
          gradientTo="rgba(125, 211, 252, 0.35)"
          glowColor="#0a2e28"
        />
      </div>

      {/* Soft veil for text contrast — kept light so the field stays visible */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#061018]/80 via-[#061018]/35 to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#061018]/90 via-transparent to-[#061018]/40" />

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20">
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
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-medium text-[#061018] transition hover:bg-emerald-300"
            >
              {heroData.cta.primary}
              <FiArrowDownRight size={16} />
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Get in touch
              <FiArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
