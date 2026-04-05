import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';

/**
 * RealEstateHero - "Institutional-Grade Commercial REIT Infrastructure."
 * Features a cinematic dark aesthetic with premium architectural accents.
 */
export default function RealEstateHero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1200], ['0%', '20%']);

  const fallbackImg = `${import.meta.env.BASE_URL}images/real_estate.png`;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Parallax Architectural Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 origin-top scale-110 opacity-30 saturate-0"
      >
        <img 
          src={fallbackImg}
          alt="Commercial Infrastructure"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-[#050505]" />
      </motion.div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Asset Label */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#EAB308] animate-pulse" />
            <span className="text-[10px] sm:text-[12px] font-bold tracking-[0.3em] uppercase text-white/60">
              Commercial Alpha Layer
            </span>
          </motion.div>

          {/* Primary Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-[42px] sm:text-[64px] md:text-[96px] font-black tracking-[-0.05em] uppercase leading-[0.95] mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
          >
            Institutional <br />
            <span className="text-white">REIT Infrastructure</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-[640px] text-[16px] sm:text-[18px] md:text-[20px] text-gray-400 font-light leading-relaxed mb-12"
          >
            Gain direct equity exposure to high-yield commercial real estate, global logistics hubs, and triple-net institutional leaseholds.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={fadeInUp}>
            <a
              href="#reit-allocations"
              className="px-10 py-5 bg-white text-black font-bold uppercase tracking-[0.1em] text-[14px] hover:bg-[#EAB308] hover:text-white transition-all shadow-2xl hover:-translate-y-1 active:scale-[0.98]"
            >
              Explore REIT Allocations
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 bottom-0 left-[5%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[5%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
    </section>
  );
}
