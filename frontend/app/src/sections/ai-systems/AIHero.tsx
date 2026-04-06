import { motion } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import AITerminalVisualizer from './AITerminalVisualizer';
import './AIHero.css';

export default function AIHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020205]">
      {/* Dynamic Background Matrix-style Grid Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none opacity-[0.07]">
        <div className="absolute inset-0 bg-[#131318] ai-hero-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020205] via-transparent to-[#020205]" />
      </div>

      {/* Hero Glares */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00ff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#00ff00]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Terminal Header reveal */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-5 py-2 border border-[#00ff00]/30 bg-[#00ff00]/5 backdrop-blur-md rounded-full flex items-center gap-4 group"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff00] animate-ping absolute inset-0" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#00ff00] relative z-10" />
              </div>
              <span className="text-[10px] font-mono font-black tracking-[0.3em] uppercase text-[#00ff00]">
                QUARK-ALPHA ENGINE: V.4.2
              </span>
            </motion.div>

            {/* Primary Headline with Monospace typography */}
            <motion.h1
              variants={fadeInUp}
              className="text-[52px] sm:text-[72px] md:text-[92px] font-black tracking-[-0.05em] leading-[0.85] mb-10 text-white font-mono uppercase"
            >
              Predictive <br />
              <span className="bg-gradient-to-r from-[#00ff00] via-[#00ff00]/60 to-white bg-clip-text text-transparent">
                Alpha.
              </span>
            </motion.h1>

            {/* Core Description */}
            <motion.p
              variants={fadeInUp}
              className="max-w-[520px] text-[16px] sm:text-[19px] text-[#00ff00]/40 font-mono leading-relaxed mb-14 tracking-tight"
            >
              Systematic machine-speed execution and deep-learning data pipelines identifying structural market inefficiencies in milliseconds.
            </motion.p>

            {/* Terminal Actions */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <a
                href="#terminal-access"
                className="group relative px-10 py-5 overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#00ff00] transition-transform duration-300 group-hover:scale-x-105" />
                <span className="relative z-10 font-mono font-black uppercase tracking-[0.2em] text-[13px] text-black">
                  Access Neural Data
                </span>
              </a>
              <a
                href="#whitepaper"
                className="px-10 py-5 border border-white/10 hover:border-[#00ff00]/50 transition-colors bg-white/5 backdrop-blur-sm rounded-sm"
              >
                <span className="font-mono font-bold uppercase tracking-[0.15em] text-[13px] text-white/50 hover:text-[#00ff00] transition-colors">
                  View Specs
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Integrated Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotateY: 10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
            className="hidden lg:block relative perspective-1000"
          >
            <div className="relative group">
              {/* Outer Decorative Borders */}
              <div className="absolute -inset-4 border border-[#00ff00]/10 rounded-3xl pointer-events-none group-hover:border-[#00ff00]/20 transition-colors duration-700" />
              <AITerminalVisualizer />
              
              {/* Floating Hardware Detail Decor */}
              <div className="absolute -bottom-10 -left-10 px-4 py-3 bg-[#00ff00]/5 border border-[#00ff00]/20 backdrop-blur-xl rounded-lg">
                <span className="text-[9px] font-mono text-[#00ff00] font-black uppercase tracking-tighter">
                  CPU_NODE_77 [VERIFIED]
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-px bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[8%] w-px bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent" />
    </section>
  );
}
