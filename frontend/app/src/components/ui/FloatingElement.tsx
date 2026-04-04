import { motion } from 'framer-motion';
import { floatingAnimation } from '../../lib/animations';
import type { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FloatingElement({ children, delay = 0, duration = 6, className = "" }: FloatingElementProps) {
  return (
    <motion.div
      custom={{ delay, duration }}
      variants={floatingAnimation}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
}
