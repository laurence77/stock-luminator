import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft } from 'lucide-react';

/**
 * SpaceX CTA Section - Final conversion point for institutional aerospace allocations.
 * Features a high-fidelity "Thruster Glow" aesthetic and weighted physics.
 */
export default function SpaceXCta() {
  return (
    <section className="py-40 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Cinematic Thruster Glow / Earth Horizon */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[30vh]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#f97316]/20 via-[#f97316]/5 to-transparent blur-[120px] translate-y-1/2" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center space-y-12"
        >
          {/* Section Indicator */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center"
          >
            <div className="px-4 py-1.5 rounded-full border border-[#f97316]/30 bg-[#f97316]/5 backdrop-blur-sm">
              <span className="text-[11px] font-bold tracking-[0.4em] text-[#f97316] uppercase">
                Final Allocation Window
              </span>
            </div>
          </motion.div>

          {/* Aggressive Institutional Headline */}
          <motion.h2 
            variants={fadeInUp}
            className="text-[40px] md:text-[72px] font-black text-white tracking-tighter leading-[0.95] uppercase max-w-[900px] mx-auto"
          >
            Secure Your Position in the <br />
            <span className="text-[#f97316]">Aerospace Revolution.</span>
          </motion.h2>

          {/* Convergence Subtext */}
          <motion.p 
            variants={fadeInUp}
            className="text-[18px] md:text-[22px] text-gray-400 font-light max-w-[800px] mx-auto leading-relaxed"
          >
            Institutional-grade access to the SpaceX ecosystem is highly restricted. Apply for allocation today to participate in the multiplanetary economy.
          </motion.p>

          {/* Strategic CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col md:flex-row gap-6 justify-center items-center pt-8"
          >
            <Link 
              to="/signup" 
              className="group relative px-12 py-5 bg-[#f97316] hover:bg-white text-black font-bold uppercase tracking-[0.1em] text-[15px] transition-all overflow-hidden"
            >
              <div className="relative z-10 flex items-center gap-2">
                Apply for Allocation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>

            <Link 
              to="/" 
              className="flex items-center gap-2 text-white/40 hover:text-white font-bold tracking-[0.2em] uppercase text-[13px] transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to All Services
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Corporate Metadata Overlay */}
      <div className="absolute bottom-12 left-12 opacity-20 pointer-events-none hidden lg:block">
        <p className="text-[10px] font-mono text-white tracking-widest uppercase">
          Ref: ALLOCATION_GATE_2025_B
        </p>
      </div>
    </section>
  );
}
