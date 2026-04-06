import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import './CryptoHero.css';

export default function CryptoHero() {
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
        className="absolute inset-0 z-0 select-none pointer-events-none crypto-grid"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#050508] via-transparent to-[#050508]" />
      </motion.div>

      {/* Atmospheric Glow Meshes */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#8b5cf6]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-[#14f195]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col items-center text-center"
      >
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Sub-label reveal */}
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

          {/* Primary Headline with premium tech-forward typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-[48px] sm:text-[72px] md:text-[110px] font-black tracking-[-0.05em] uppercase leading-[0.85] mb-10"
          >
            <span className="text-white">Institutional</span> <br />
            <span className="bg-gradient-to-r from-[#14f195] via-[#8b5cf6] to-[#14f195] bg-clip-text text-transparent">Digital Assets</span>
          </motion.h1>

          {/* Core Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-[700px] text-[17px] sm:text-[20px] text-zinc-400 font-light leading-relaxed mb-16 tracking-tight"
          >
            Execute with absolute precision. Access high-frequency arbitrage opportunities, advanced MEV strategies, and secure multi-sig institutional custody.
          </motion.p>

          {/* Futuristic CTA Suite */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
            <a
              href="#allocations"
              className="relative group px-12 py-6 overflow-hidden bg-[#8b5cf6] transition-all hover:bg-[#8b5cf6]/90"
            >
              <span className="relative z-10 text-white font-black uppercase tracking-[0.2em] text-[13px]">
                Deploy Institutional Capital
              </span>
            </a>
            <a
              href="#whitepaper"
              className="px-12 py-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm hover:border-[#14f195]/50 transition-all"
            >
              <span className="text-white/40 font-bold uppercase tracking-[0.15em] text-[13px] hover:text-[#14f195] transition-colors">
                Asset Manifest
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Live Node Detail Visually Striking Placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-20 left-[8%] z-10 hidden lg:block"
      >
        <div className="flex items-center gap-6 opacity-30 group">
          <div className="w-16 h-px bg-[#14f195]" />
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black uppercase tracking-[0.2em] font-mono text-[#14f195]">Validated Node: #0492</span>
            <span className="text-[8px] font-mono opacity-50 uppercase text-white">Luminator Mainnet Status: Optimal</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative vertical institutional lines */}
      <div className="absolute top-0 bottom-0 left-[6%] w-[1px] bg-gradient-to-b from-transparent via-[#14f195]/5 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[6%] w-[1px] bg-gradient-to-b from-transparent via-[#8b5cf6]/5 to-transparent" />
    </section>
  );
}
