"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const techPills = ["React Native", "Next.js", "TypeScript", "Node.js"];

const HeroVisual = () => {
  const reduceMotion = useReducedMotion();

  const float = (duration, yRange, rotateRange = 0) =>
    reduceMotion
      ? {}
      : {
          y: yRange,
          rotate: rotateRange ? rotateRange : undefined,
          transition: {
            duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          },
        };

  return (
    <div className="relative mx-auto hidden h-[540px] w-full max-w-[560px] lg:block">
      <motion.div
        aria-hidden="true"
        animate={reduceMotion ? undefined : { scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-4 top-20 h-52 w-52 rounded-full bg-sky-400/12 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-4 rounded-[2rem] border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-transparent"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[5] h-full w-full text-emerald-400/20"
        viewBox="0 0 560 540"
        fill="none"
      >
        <motion.path
          d="M 120 180 Q 280 120 420 280"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.path
          d="M 200 420 Q 320 360 460 400"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>

      <motion.div
        animate={float(5, [-10, 10], [-2, 2])}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        className="absolute left-0 top-10 z-20 w-[215px] overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a1520] p-2 shadow-2xl shadow-black/50 ring-1 ring-emerald-400/10"
      >
        <div className="overflow-hidden rounded-[1.5rem] bg-[#061018]">
          <Image
            src="/projects/apps/eMigr81.webp"
            alt="eMigr8 Companion app"
            width={390}
            height={844}
            className="h-auto w-full object-cover object-top"
            priority
          />
        </div>
      </motion.div>

      <motion.div
        animate={float(6.5, [12, -12])}
        whileHover={reduceMotion ? undefined : { scale: 1.02 }}
        className="absolute bottom-8 right-0 z-10 w-[290px] overflow-hidden rounded-xl border border-white/10 bg-[#0d1a26] shadow-2xl shadow-black/50"
      >
        <div className="border-b border-white/5 bg-[#0a1520] px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
        </div>
        <Image
          src="/projects/apps/eMigr8-admin1.png"
          alt="eMigr8 Companion admin dashboard"
          width={1280}
          height={720}
          className="h-auto w-full object-cover"
          priority
        />
      </motion.div>

      <motion.div
        animate={float(4.5, [-8, 8], [1.5, -1.5])}
        className="absolute bottom-28 left-20 z-30 w-[128px] overflow-hidden rounded-[1.35rem] border border-white/15 bg-[#0a1520] p-1.5 shadow-xl shadow-black/40"
      >
        <div className="overflow-hidden rounded-[1rem] bg-[#061018]">
          <Image
            src="/projects/apps/eMigr82.webp"
            alt="eMigr8 Companion screen"
            width={390}
            height={844}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </motion.div>

      <div className="absolute left-1/2 top-2 z-40 flex -translate-x-1/2 flex-wrap justify-center gap-2">
        {techPills.map((pill, index) => (
          <motion.span
            key={pill}
            initial={{ opacity: 0, y: 14, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35 + index * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduceMotion ? undefined : { y: -2, scale: 1.05 }}
            className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm"
          >
            {pill}
          </motion.span>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-2 left-2 z-40 rounded-xl border border-white/10 bg-[#061018]/90 px-4 py-3 backdrop-blur-md"
      >
        <p className="text-[10px] uppercase tracking-wider text-gray-400">
          Currently shipping
        </p>
        <p className="text-sm font-medium text-white">Live on App Store & Play</p>
      </motion.div>
    </div>
  );
};

export default HeroVisual;
