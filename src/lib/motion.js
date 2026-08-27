export const easeOut = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, margin: "-80px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: easeOut },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay, ease: easeOut },
  }),
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.94, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: easeOut },
  }),
};

export const slideIn = (from = "left") => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -36 : from === "right" ? 36 : 0,
    y: from === "up" ? 24 : 0,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOut },
  }),
});

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -6,
    scale: 1.01,
    transition: { duration: 0.25, ease: easeOut },
  },
};
