import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import LiquidityVisualizer from './LiquidityVisualizer';
import './DigitalAssetsHero.css';

export default function DigitalAssetsHero() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for high-fidelity immersion
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%']);
  const contentY = useTransform(scrollY, [0, 1000], [0, 80]);
  const networkOpacity = useTransform(scrollY, [0, 500], [0.8, 0.2]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050508]">
      {/* Background Matrix/Network Grid */}
      <motion.div 
        style={{ y: backgroundY, opacity: networkOpacity }}
        className="absolute inset-0 z-0 select-none pointer-events-none digital-assets-grid"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
      </motion.div>

      {/* Atmospheric terminal scanlines */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none terminal-scanline" />

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
            {/* Network Label */}
            <motion.div
              variants={fadeInUp}
              className="mb-10 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl inline-flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="w-2.5 h-2.5 rounded-full bg-[#14f195] animate-ping absolute inset-0" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#14f195] relative z-10" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] uppercase text-white/50 group-hover:text-white transition-colors duration-500">
                Institutional Asset Layer
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-[48px] sm:text-[72px] md:text-[100px] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-10"
            >
              <span className="text-white">Machine-Speed</span> <br />
              <span className="bg-gradient-to-r from-[#14f195] via-[#8b5cf6] to-[#14f195] bg-clip-text text-transparent">MEV Dominance.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-[560px] text-[17px] sm:text-[20px] text-zinc-400 font-light leading-relaxed mb-16 tracking-tight"
            >
              Capitalize on fragmented liquidity and high-frequency arbitrage opportunities using proprietary Jito-optimized bundles and Rust-based atomic execution.
            </motion.p>

            {/* CTA Button Suite */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-6">
              <a
                href="#ecosystem"
                className="relative group px-12 py-6 overflow-hidden bg-[#14f195] transition-all hover:bg-white"
              >
                <span className="relative z-10 text-[#050508] font-black uppercase tracking-[0.2em] text-[13px]">
                  Access MEV Alphas
                </span>
              </a>
              <a
                href="#docs"
                className="px-12 py-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm hover:border-[#14f195]/50 transition-all"
              >
                <span className="text-white/40 font-bold uppercase tracking-[0.15em] text-[13px] hover:text-[#14f195] transition-colors">
                  API Documentation
                </span>
              </a>
            </motion.div>
          </motion.div>

          {/* Integrated Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-10 bg-gradient-to-br from-[#14f195]/20 to-[#8b5cf6]/20 blur-[100px] opacity-10 pointer-events-none" />
            <LiquidityVisualizer />
            
            {/* Institutional metadata deco */}
            <div className="absolute -bottom-12 -right-6 flex flex-col items-end opacity-20 group">
              <span className="text-[10px] font-black text-[#14f195] uppercase tracking-[0.3em] font-mono">
                Telemetry: Optimizing
              </span>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                Epoch_492 // Slot_291034
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
