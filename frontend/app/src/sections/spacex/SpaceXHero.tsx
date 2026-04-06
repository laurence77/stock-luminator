import { motion, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, heroContainer } from '@/lib/animations';
import './SpaceXHero.css';

// Generate static star data outside component to maintain render purity
const STATIC_STARS = Array.from({ length: 150 }).map((_, i) => ({
  id: i,
  cx: `${Math.random() * 100}%`,
  cy: `${Math.random() * 100}%`,
  r: Math.random() * 1.2,
  delay: `${Math.random() * 5}s`,
  opacity: Math.random() * 0.5 + 0.1
}));

export default function SpaceXHero() {
  const { scrollY } = useScroll();
  
  // Parallax transforms for high-fidelity immersion
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '15%']);
  const contentY = useTransform(scrollY, [0, 1000], [0, 100]);
  const starOpacity = useTransform(scrollY, [0, 500], [0.8, 0.2]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020205]">
      {/* Cinematic Starfield Background Layer 1 */}
      <motion.div 
        style={{ y: backgroundY, opacity: starOpacity }}
        className="spacex-parallax-layer"
      >
        <svg width="100%" height="100%" className="star-container">
          <defs>
            <radialGradient id="star-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          {STATIC_STARS.map((star) => (
            <circle
              key={star.id}
              cx={star.cx}
              cy={star.cy}
              r={star.r}
              fill="white"
              className="animate-pulse"
              style={{ animationDelay: star.delay, opacity: star.opacity } as React.CSSProperties}
            />
          ))}
        </svg>
      </motion.div>

      {/* Deep Space Atmosphere Glare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#00fbfb]/5 blur-[160px] opacity-30 rounded-full pointer-events-none" />

      {/* Main Content Container */}
      <motion.div 
        style={{ y: contentY }}
        className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center"
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
              <div className="w-2 h-2 rounded-full bg-[#00fbfb] animate-ping absolute inset-0" />
              <div className="w-2 h-2 rounded-full bg-[#00fbfb] relative z-10" />
            </div>
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.4em] uppercase text-white/50 group-hover:text-white transition-colors duration-500">
              Orbital Economy Deployment
            </span>
          </motion.div>

          {/* Primary Headline with premium tech-forward typography */}
          <motion.h1
            variants={fadeInUp}
            className="text-[48px] sm:text-[72px] md:text-[110px] font-black tracking-[-0.06em] uppercase leading-[0.85] mb-10"
          >
            <span className="text-white">Make Humanity</span> <br />
            <span className="bg-gradient-to-b from-[#00fbfb] via-[#00fbfb]/80 to-white/10 bg-clip-text text-transparent">Multiplanetary</span>
          </motion.h1>

          {/* Core Description */}
          <motion.p
            variants={fadeInUp}
            className="max-w-[700px] text-[17px] sm:text-[20px] text-zinc-400 font-light leading-relaxed mb-16 tracking-tight"
          >
            The frontier of human civilization is no longer earthbound. SpaceX is constructing the nervous system of the stars. Secure institutional-grade access to the next trillion-dollar market.
          </motion.p>

          {/* Futuristic CTA Suite */}
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-6">
            <a
              href="#allocations"
              className="relative group px-12 py-6 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transition-transform duration-500 group-hover:scale-105" />
              <span className="relative z-10 text-black font-black uppercase tracking-[0.2em] text-[13px]">
                Explore Pre-IPO Access
              </span>
            </a>
            <a
              href="#manifest"
              className="px-12 py-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm hover:border-[#00fbfb]/50 transition-all"
            >
              <span className="text-white/40 font-bold uppercase tracking-[0.15em] text-[13px] hover:text-[#00fbfb] transition-colors">
                Mission Manifest
              </span>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Institutional Hardware Visual Detail */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-20 left-[10%] z-10 hidden lg:block"
      >
        <div className="flex items-center gap-6 opacity-30 group">
          <div className="w-16 h-px bg-gradient-to-r from-white to-transparent" />
          <div className="flex flex-col gap-1">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] font-mono">Telemetry: Active</span>
            <span className="text-[8px] font-mono opacity-50 uppercase">Lat: 0.0001 Long: 0.0001</span>
          </div>
        </div>
      </motion.div>

      {/* Decorative vertical institutional lines */}
      <div className="absolute top-0 bottom-0 left-[8%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      <div className="absolute top-0 bottom-0 right-[8%] w-px bg-gradient-to-b from-transparent via-white/5 to-transparent" />
    </section>
  );
}
