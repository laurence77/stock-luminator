// ─────────────────────────────────────────────────
//  Centralized Framer Motion Animation Variants
//  Used across all section components for consistency
// ─────────────────────────────────────────────────

import type { Variants } from 'framer-motion';

/** Fade in + slide up — primary animation for most items */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

/** Fade in + slide up — subtle variant for section headers */
export const fadeInUpSoft: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

/** Stagger container — wraps lists of animated children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/** Slower stagger for hero/large reveal sequences */
export const heroContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/** Slide in from right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

/** Viewport trigger options shared across all in-view sections */
export const viewportOptions = { once: true, margin: '-100px' };

/** Antigravity Floating Animation */
export const floatingAnimation: Variants = {
  hidden: { y: 0 },
  visible: (custom = { duration: 6, delay: 0 }) => ({
    y: ['-3%', '3%', '-3%'],
    transition: {
      duration: custom.duration,
      delay: custom.delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }),
};

