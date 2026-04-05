import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import LiveSyncFeed from './LiveSyncFeed';

/**
 * Mirror Trading Hero - "Institutional-Grade Portfolio Synchronization."
 * Features dark glassmorphism against Navy/Slate backgrounds for a premium feel.
 */
export default function MirrorTradingHero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%']);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Deep Navy/Slate Parallax Fade */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 origin-top opacity-30"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b]/20 to-transparent blur-[160px]" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Sync Label */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 shadow-2xl"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.3em] uppercase text-white/60">
                Institutional Portfolio Sync
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-[48px] sm:text-[68px] md:text-[84px] font-black tracking-[-0.05em] uppercase leading-[0.95] mb-8 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent"
            >
              Institutional-Grade <br />
              <span className="bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">Synchronization.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-[560px] text-[16px] sm:text-[18px] text-zinc-400 font-light leading-relaxed mb-12"
            >
              Mirror the exact trades of verified hedge fund managers and quantitative desks with millisecond-precision ledger replication and granular risk controls.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <a
                href="#mirror-feed"
                className="px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-[#38bdf8] hover:text-white transition-all shadow-2xl hover:-translate-y-1 active:scale-[0.98]"
              >
                Access Alpha Creators
              </a>
            </motion.div>
          </motion.div>

          {/* Integrated Live Feed Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <LiveSyncFeed />
            
            {/* Institutional metadata deco */}
            <div className="absolute -bottom-10 -right-4 flex flex-col items-end opacity-40">
              <span className="text-[10px] font-mono text-[#38bdf8] uppercase tracking-widest">
                Mirroring_Synchronization: Active
              </span>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                Ledger_Sync // Latency_4ms
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[5%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
    </section>
  );
}
