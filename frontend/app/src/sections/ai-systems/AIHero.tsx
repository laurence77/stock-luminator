import { motion } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import AITerminalVisualizer from './AITerminalVisualizer';

/**
 * AI Hero Section - "Predictive Alpha. Neural Execution."
 * Pure terminal black theme with monospace hacker-green aesthetics.
 * Features the AITerminalVisualizer for high-fidelity quant simulation.
 */
export default function AIHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Background Matrix-style Grid Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div 
          className="absolute inset-0 bg-dot-grid [--grid-color:#00ff00] [--grid-size:30px]" 
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Terminal Header reveal */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 px-4 py-1 border border-[#00ff00]/40 bg-[#00ff00]/5 flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-[#00ff00] animate-ping" />
              <span className="text-[11px] font-mono font-bold tracking-[0.2em] uppercase text-[#00ff00]">
                QUARK-ALPHA ENGINE: V.4.0
              </span>
            </motion.div>

            {/* Primary Headline with Monospace typography */}
            <motion.h1
              variants={fadeInUp}
              className="text-[48px] sm:text-[68px] md:text-[80px] font-black tracking-[-0.04em] uppercase leading-[0.9] mb-8 text-white font-mono"
            >
              Predictive Alpha. <br />
              <span className="text-[#00ff00]">Neural Execution.</span>
            </motion.h1>

            {/* Core Description */}
            <motion.p
              variants={fadeInUp}
              className="max-w-[560px] text-[16px] sm:text-[18px] text-zinc-400 font-mono leading-relaxed mb-12"
            >
              Harness machine-speed arbitrage and deep-learning data pipelines identifying structural market inefficiencies before they manifest.
            </motion.p>

            {/* Terminal Button */}
            <motion.div variants={fadeInUp}>
              <a
                href="#terminal-access"
                className="px-10 py-5 bg-[#00ff00]/10 border border-[#00ff00]/60 text-[#00ff00] font-mono font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-[#00ff00] hover:text-[#000000] focus:ring-2 focus:ring-[#00ff00]/50 transition-all active:scale-[0.98]"
              >
                Access Prediction Logic
              </a>
            </motion.div>
          </motion.div>

          {/* Integrated Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block relative"
          >
            <AITerminalVisualizer />
            
            {/* Floating Hardware Detail Decor */}
            <div className="absolute -top-10 -right-10 w-24 h-24 border border-[#00ff00]/20 flex items-center justify-center p-3">
              <div className="w-full h-full border-t border-l border-[#00ff00]/40 opacity-50" />
              <span className="absolute text-[9px] font-mono text-[#00ff00]/40 rotate-90 truncate">
                GPU_CLUSTER_ID_08
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines / border detail */}
      <div className="absolute top-0 bottom-0 left-[5%] w-px bg-gradient-to-b from-transparent via-[#00ff00]/10 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[5%] w-px bg-gradient-to-b from-transparent via-[#00ff00]/10 to-transparent" />
    </section>
  );
}
