import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import LiveSyncFeed from './LiveSyncFeed';
import './MirrorTradingHero.css';

export default function MirrorTradingHero() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for high-fidelity immersion
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%']);
  const contentY = useTransform(scrollY, [0, 1000], [0, 80]);
  const starOpacity = useTransform(scrollY, [0, 500], [0.8, 0.2]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#02040a]">
      {/* Background Matrix/Network Grid */}
      <motion.div 
        style={{ y: backgroundY, opacity: starOpacity }}
        className="absolute inset-0 z-0 select-none pointer-events-none mirror-grid"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#02040a] via-transparent to-[#02040a]" />
      </motion.div>

      {/* Atmospheric scanlines */}
      <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mirror-scanline" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            style={{ y: contentY }}
            className="flex flex-col items-start"
          >
            {/* Sync Label */}
            <motion.div
              variants={fadeInUp}
              className="mb-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl inline-flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping absolute inset-0" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] relative z-10" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                Institutional Sync Layer
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-[48px] sm:text-[72px] md:text-[100px] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-10"
            >
              <span className="text-white">Institutional-Grade</span> <br />
              <span className="bg-gradient-to-r from-[#38bdf8] via-white to-[#38bdf8] bg-clip-text text-transparent">Synchronization.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-[560px] text-[17px] sm:text-[20px] text-zinc-400 font-light leading-relaxed mb-16 tracking-tight"
            >
              Mirror the exact trades of verified hedge fund managers and quantitative desks with millisecond-precision ledger replication and granular risk controls.
            </motion.p>

            {/* CTA Button Suite */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <a
                href="#mirror-feed"
                className="relative group px-12 py-6 overflow-hidden bg-white transition-all hover:bg-[#38bdf8]"
              >
                <span className="relative z-10 text-[#02040a] group-hover:text-white font-black uppercase tracking-[0.2em] text-[13px] transition-colors">
                  Access Alpha Creators
                </span>
              </a>
              <a
                href="#docs"
                className="px-12 py-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm hover:border-[#38bdf8]/50 transition-all"
              >
                <span className="text-white/40 font-bold uppercase tracking-[0.15em] text-[13px] hover:text-[#38bdf8] transition-colors">
                  Strategy Ledger
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Integrated Live Feed Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-br from-[#38bdf8]/20 to-transparent blur-[100px] opacity-10 pointer-events-none" />
            <LiveSyncFeed />
            
            {/* Institutional metadata deco */}
            <div className="absolute -bottom-12 -right-6 flex flex-col items-end opacity-20 group">
              <span className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.3em] font-mono">
                Sync_Status: Optimized
              </span>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                Ledger_Synchronization // Sub-4ms
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
