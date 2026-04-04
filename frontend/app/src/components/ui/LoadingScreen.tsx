import { motion } from 'framer-motion';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#131318] overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative w-24 h-24 flex items-center justify-center rounded-full bg-[#131318] shadow-[0_0_40px_rgba(124,58,237,0.3)] ring-1 ring-white/10"
      >
         <span className="w-12 h-12 border-t-2 border-r-2 border-[#7c3aed] rounded-full animate-spin" />
      </motion.div>
    </div>
  );
}
