import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import './RealEstateHero.css';

export default function RealEstateHero() {
  const { scrollY } = useScroll();
  
  // High-fidelity parallax for architectural depth
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 150]);
  const contentY = useTransform(scrollY, [0, 1000], [0, 80]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const fallbackImg = `${import.meta.env.BASE_URL}images/real_estate.png`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background Architectural Grid and Parallax */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        <div className="absolute inset-0 reit-grid opacity-[0.03]" />
        <img 
          src={fallbackImg}
          alt="Institutional Infrastructure"
          className="absolute inset-0 w-full h-full object-cover grayscale opacity-[0.15] scale-110 saturate-0"
        />
        {/* Cinematic atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-x-0 bottom-0 h-[600px] bg-gradient-to-t from-[#050505] to-transparent" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          style={{ y: contentY, opacity: textOpacity }}
          className="flex flex-col items-center"
        >
          {/* Institutional Label */}
          <motion.div
            variants={fadeInUp}
            className="mb-12 px-6 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-3xl inline-flex items-center gap-3"
          >
            <div className="relative">
              <div className="w-2 h-2 rounded-full bg-[#fbbf24] animate-ping absolute inset-0" />
              <div className="w-2 h-2 rounded-full bg-[#fbbf24] relative z-10" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.5em] uppercase text-white/40">
              Commercial Alpha Layer
            </span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-[48px] sm:text-[76px] md:text-[108px] font-black tracking-[-0.05em] uppercase leading-[0.82] mb-12"
          >
            <span className="text-white">Institutional</span> <br />
            <span className="bg-gradient-to-r from-[#fbbf24] via-white to-[#fbbf24] bg-clip-text text-transparent">REIT Infrastructure</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-[720px] text-[18px] sm:text-[22px] text-zinc-500 font-light leading-relaxed mb-16 tracking-tight"
          >
            Gain direct equity exposure to high-yield commercial real estate, global logistics hubs, and triple-net institutional leaseholds with fractionalized liquidity.
          </motion.p>

          {/* CTA Hub */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-8">
            <a
              href="#reit-allocations"
              className="px-14 py-6 bg-white text-[#050505] font-black uppercase tracking-[0.2em] text-[13px] hover:bg-[#fbbf24] hover:text-white transition-all transform hover:-translate-y-1 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] active:scale-95"
            >
              Explore REIT Allocations
            </a>
            <a
              href="#documentation"
              className="px-14 py-6 border border-white/10 bg-white/5 backdrop-blur-md text-white/30 font-bold uppercase tracking-[0.15em] text-[13px] hover:text-white hover:border-white/30 transition-all"
            >
              Equity Prospectus
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Modern architectural framing */}
      <div className="absolute top-0 bottom-0 left-[4%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />
      <div className="absolute top-0 bottom-0 right-[4%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent hidden md:block" />
      
      {/* Scroll indicator overlay */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-20 pointer-events-none">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#fbbf24] to-transparent" />
      </div>
    </section>
  );
}
