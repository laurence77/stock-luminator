import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Link } from 'react-router-dom';

/**
 * Digital Assets CTA - "Deploy Capital to the Future Layer."
 * Final conversion gateway for the digital asset infrastructure portal.
 */
export default function DigitalAssetsCta() {
  return (
    <section className="py-40 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Intense Solana Green Thruster Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#14f195]/10 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOptions}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-[12px] font-bold tracking-[0.4em] text-[#14f195] uppercase mb-8"
          >
            Institutional Access
          </motion.h2>
          
          <motion.h3 
            variants={fadeInUp}
            className="text-[42px] sm:text-[64px] md:text-[84px] font-black text-white uppercase leading-[0.95] tracking-[-0.05em] mb-12"
          >
            Deploy Capital to the <br />
            <span className="bg-gradient-to-r from-[#14f195] via-[#8b5cf6] to-[#14f195] bg-clip-text text-transparent">Future Layer.</span>
          </motion.h3>

          <motion.p
            variants={fadeInUp}
            className="max-w-[640px] mx-auto text-[16px] sm:text-[18px] text-gray-400 font-light leading-relaxed mb-16"
          >
            Gain institutional exposure to fragmented liquidity and machine-speed MEV strategies. Our zero-slippage infrastructure protects every atomic execution.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a
              href="#ecosystem"
              className="px-12 py-5 bg-[#14f195] text-[#0a0a0c] font-bold uppercase tracking-widest text-[14px] hover:bg-white transition-all hover:-translate-y-1 shadow-[0_0_30px_rgba(20,241,149,0.3)] w-full sm:w-auto"
            >
              Access MEV Alphas
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
        <div className="w-1.5 h-1.5 rounded-full bg-[#14f195]" />
        <span className="text-[10px] font-mono text-white/60 uppercase tracking-widest">
          NODE_SYNCHRONIZED_ACTIVE
        </span>
      </div>
    </section>
  );
}
