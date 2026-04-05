import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Link } from 'react-router-dom';

/**
 * MirrorTradingCta - Institutional-grade conversion gateway for portfolio synchronization.
 * Features premium Sky/Navy glows and glassmorphism UI.
 */
export default function MirrorTradingCta() {
  return (
    <section className="py-40 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Intense Sky Blue/Navy Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#38bdf8]/10 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOptions}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[12px] font-bold tracking-[0.4em] text-[#38bdf8] uppercase mb-8"
          >
            Terminal Sync Request
          </motion.h2>
          
          <motion.h3 
            variants={fadeInUp}
            className="text-[42px] sm:text-[64px] md:text-[84px] font-black text-white uppercase leading-[0.95] tracking-[-0.05em] mb-12"
          >
            Sync Your <br />
            <span className="bg-gradient-to-r from-[#38bdf8] to-white bg-clip-text text-transparent">Primary Ledger.</span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="max-w-[640px] mx-auto text-[16px] sm:text-[18px] text-zinc-400 leading-relaxed mb-16"
          >
            Gain institutional-grade access to exclusive hedge fund strategies and quantitative alpha. Synchronize your portfolio with millisecond-precision replication technology.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#sync-portal"
              className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-[14px] hover:bg-[#38bdf8] hover:text-white transition-all shadow-[0_0_30px_rgba(56,189,248,0.3)] w-full sm:w-auto"
            >
              Sync Primary Account
            </a>
            
            <Link
              to="/#services"
              className="px-12 py-5 border border-white/10 text-white font-bold uppercase tracking-widest text-[14px] hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Back to All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Network Detail */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20">
        <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8]" />
        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
          LEDGER_SYNC_ENCRYPTION: ACTIVE
        </span>
      </div>
    </section>
  );
}
