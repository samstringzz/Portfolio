"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  as = "div",
  variant = fadeUp,
}) => {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  if (reduceMotion) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variant}
      custom={delay}
      className={className}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;
