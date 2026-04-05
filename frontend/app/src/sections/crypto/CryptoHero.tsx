import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer, floatingAnimation } from '@/lib/animations';

/**
 * Crypto Hero Section - Visual centerpiece of the Crypto Assets portal.
 * Features high-speed network aesthetics, neon-purple/Solana-green accents, and premium typography.
 */
export default function CryptoHero() {
  const { scrollY } = useScroll();
  
  // High-fidelity slow parallax: shifts y-position by 20% over 1200px scroll
  const backgroundY = useTransform(scrollY, [0, 1200], ['0%', '20%']);
  const overlayOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  const fallbackImg = `${import.meta.env.BASE_URL}images/crypto.png`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c]">
      {/* Parallax Network Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 origin-top scale-110"
      >
        <img 
          src={fallbackImg}
          alt="Crypto Network Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 saturate-50"
        />
        {/* Deep charcoal gradient overlay */}
        <motion.div 
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#0a0a0c]" 
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Sub-label reveal */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 px-4 py-1.5 rounded-full border border-[#14f195]/20 bg-[#14f195]/5 backdrop-blur-md inline-flex items-center gap-2"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#14f195] animate-pulse" />
            <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.3em] uppercase text-[#14f195]/80">
              Institutional Asset Layer
            </span>
          </motion.div>

          {/* Primary Headline with premium tech-forward typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-[42px] sm:text-[64px] md:text-[84px] font-black tracking-[-0.05em] uppercase leading-[0.95] mb-8 bg-gradient-to-b from-white via-white to-white/20 bg-clip-text text-transparent"
          >
            Institutional <br />
            <span className="bg-gradient-to-r from-[#14f195] via-[#8b5cf6] to-[#14f195] bg-clip-text text-transparent">Digital Assets</span>
          </motion.h1>

          {/* Core Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-[640px] text-[16px] sm:text-[18px] md:text-[20px] text-gray-400 font-light leading-relaxed mb-12"
          >
            Execute with absolute precision. Access high-frequency arbitrage opportunities, advanced MEV strategies, and secure cold-storage custody.
          </motion.p>

          {/* Futuristic CTA */}
          <motion.div variants={fadeInUp}>
            <a
              href="#allocations"
              className="px-10 py-5 bg-[#8b5cf6] text-white font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-[#14f195] hover:text-[#0a0a0c] transition-all hover:-translate-y-1 shadow-2xl hover:shadow-[#14f195]/40"
            >
              Deploy Capital to Digital Assets
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Visually striking floating placeholder for Ledger/Node */}
      <motion.div
        className="absolute bottom-20 right-[10%] z-10 hidden lg:block"
        custom={{ duration: 8, delay: 0.5 }}
        variants={floatingAnimation}
        initial="hidden"
        animate="visible"
      >
        <div className="relative group">
          <div className="absolute inset-0 bg-[#8b5cf6]/20 blur-[60px] group-hover:bg-[#14f195]/40 transition-all duration-700" />
          <div className="w-24 h-40 border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center p-4 relative overflow-hidden">
            <div className="w-full h-full border-t border-l border-[#14f195]/20" />
            <span className="absolute text-[10px] font-mono tracking-widest uppercase text-white/30 rotate-90">
              Validated Node #0492
            </span>
          </div>
          {/* Subtle tech detail */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#8b5cf6]/60" />
        </div>
      </motion.div>

      {/* Decorative vertical lines / border detail */}
      <div className="absolute top-0 bottom-0 left-[5%] w-px bg-gradient-to-b from-transparent via-[#14f195]/10 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[5%] w-px bg-gradient-to-b from-transparent via-[#14f195]/10 to-transparent" />
    </section>
  );
}
