import { motion } from 'framer-motion';
import { fadeInUp, heroContainer } from '../../lib/animations';

export default function TeslaHero() {
  const videoUrl = `${import.meta.env.BASE_URL}images/tesla/hero.mp4`;
  const fallbackImg = `${import.meta.env.BASE_URL}images/tesla/hero-fallback.jpg`;
  const logoUrl = `${import.meta.env.BASE_URL}images/tesla/logo.svg`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Media */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
          poster={fallbackImg}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#131318]/50 via-transparent to-[#131318]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-20">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[800px]"
        >
          <motion.div 
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00fbfb] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.1em] text-white/70 uppercase">Master Plan Part IV</span>
          </motion.div>

          <motion.h1 
            variants={fadeInUp}
            className="text-[48px] md:text-[72px] font-extrabold text-white leading-[1.1] mb-8 tracking-[-0.04em]"
          >
            Sustainable <br />
            <span className="bg-gradient-to-r from-[#00fbfb] to-[#6305ef] bg-clip-text text-transparent">
              Abundance for All
            </span>
          </motion.h1>

          <motion.div 
            variants={fadeInUp}
            className="bg-white/5 backdrop-blur-xl border-l-4 border-[#00fbfb] p-8 max-w-[600px] mb-10"
          >
            <p className="text-[17px] text-gray-300 leading-relaxed font-medium italic">
              "We believe Tesla is on the precipice of another massive wave of transformational growth. Elon is a generational leader, and under his visionary guidance, we have the potential to become the most valuable company in history."
            </p>
          </motion.div>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4"
          >
            <button className="bg-[#00fbfb] hover:bg-[#6305ef] text-[#131318] hover:text-white px-10 py-4 text-[14px] font-bold tracking-[0.05em] uppercase transition-all shadow-lg shadow-[#00fbfb]/10 group">
              Execute Investment
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </button>
            <button className="bg-transparent border border-white/20 text-white hover:bg-white/10 px-10 py-4 text-[14px] font-bold tracking-[0.05em] uppercase transition-all backdrop-blur-sm">
              View Shareholder Presentation
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator with SVG logo */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-50">
        <img src={logoUrl} alt="Tesla" className="h-4 brightness-[0] invert mb-4" />
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-[#00fbfb] to-transparent" />
        <span className="text-[10px] text-white/40 tracking-[0.4em] uppercase font-bold">Explore Future</span>
      </div>
    </section>
  );
}
