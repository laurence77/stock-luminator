import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import LiquidityVisualizer from './LiquidityVisualizer';

/**
 * Digital Assets Hero - "Machine-Speed Arbitrage & MEV Dominance."
 * Features vibrant Solana-green and purple accents in a high-fidelity dashboard aesthetic.
 */
export default function DigitalAssetsHero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '20%']);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
      {/* Dynamic Background Flare */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40"
      >
        <div className="w-[800px] h-[800px] bg-gradient-to-br from-[#14f195]/10 via-[#8b5cf6]/5 to-transparent blur-[160px] rounded-full" />
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
            {/* Network Label */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 px-4 py-1.5 rounded-full border border-[#14f195]/20 bg-[#14f195]/5 backdrop-blur-md flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#14f195] animate-pulse" />
              <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.3em] uppercase text-[#14f195]/80">
                Luminator Digital Asset Layer
              </span>
            </motion.div>

            {/* Primary Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-[48px] sm:text-[68px] md:text-[84px] font-black tracking-[-0.05em] uppercase leading-[0.95] mb-8 bg-gradient-to-br from-white via-white to-white/30 bg-clip-text text-transparent"
            >
              Machine-Speed <br />
              <span className="bg-gradient-to-r from-[#14f195] via-[#8b5cf6] to-[#14f195] bg-clip-text text-transparent">MEV Dominance.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="max-w-[560px] text-[16px] sm:text-[18px] text-gray-400 font-light leading-relaxed mb-12"
            >
              Capitalize on fragmented liquidity and high-frequency arbitrage opportunities using proprietary Jito bundles and Rust atomic execution.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={fadeInUp}>
              <a
                href="#ecosystem"
                className="px-10 py-5 bg-[#14f195] text-[#0a0a0c] font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-white transition-all shadow-[0_0_40px_rgba(20,241,149,0.3)] hover:-translate-y-1 active:scale-[0.98]"
              >
                Access MEV Alphas
              </a>
            </motion.div>
          </motion.div>

          {/* Integrated Visualizer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#14f195]/20 to-[#8b5cf6]/20 blur-[60px] opacity-20" />
            <LiquidityVisualizer />
            
            {/* Institutional metadata deco */}
            <div className="absolute -bottom-10 -right-4 flex flex-col items-end opacity-40">
              <span className="text-[10px] font-mono text-[#14f195] uppercase tracking-widest">
                Node_Synchronization: Stable
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
