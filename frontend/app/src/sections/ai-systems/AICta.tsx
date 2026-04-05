import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Link } from 'react-router-dom';

/**
 * AI CTA Section - Terminal conversion gateway.
 * Final institutional-grade call to action for AI-infrastructure investment.
 */
export default function AICta() {
  return (
    <section className="py-40 bg-[#000000] relative overflow-hidden border-t border-[#00ff00]/10">
      {/* Intense Green Thruster/Radical Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00ff00]/10 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOptions}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[12px] font-bold tracking-[0.4em] text-[#00ff00] uppercase mb-8 font-mono"
          >
            Terminal Access Request
          </motion.h2>
          
          <motion.h3 
            variants={fadeInUp}
            className="text-[42px] sm:text-[64px] md:text-[84px] font-black text-white uppercase leading-[0.95] tracking-[-0.05em] mb-12 font-mono"
          >
            Secure Your <br />
            <span className="text-[#00ff00]">Neural Edge.</span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="max-w-[640px] mx-auto text-[16px] sm:text-[18px] text-zinc-400 font-mono leading-relaxed mb-16"
          >
            Compute demand is scaling exponentially. Gains institutional exposure to the fundamental compute hardware and hyperscale neural networks defining the 21st century.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#allocations"
              className="px-12 py-5 bg-[#00ff00] text-black font-mono font-bold uppercase tracking-widest text-[14px] hover:bg-white transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(0,255,0,0.3)] w-full sm:w-auto"
            >
              Invest in AI Infrastructure
            </a>
            
            <Link
              to="/#services"
              className="px-12 py-5 border border-[#00ff00]/40 text-[#00ff00] font-mono font-bold uppercase tracking-widest text-[14px] hover:bg-[#00ff00]/10 transition-all w-full sm:w-auto"
            >
              Back to All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Matrix Detail */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 opacity-20">
        <div className="w-1.5 h-1.5 rounded-full bg-[#00ff00]" />
        <span className="text-[10px] font-mono text-[#00ff00] uppercase tracking-widest">
          SYSTEM STATUS: ONLINE
        </span>
      </div>
    </section>
  );
}
