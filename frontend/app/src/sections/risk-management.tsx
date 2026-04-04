import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';

export function RiskManagement() {
  return (
    <section className="py-[100px] bg-[#6d28d9] relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor="rgba(255,255,255,0.15)"
          activeColor="rgba(0,251,251,0.5)"
        />
      </div>
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white/10 backdrop-blur-xl p-10 lg:p-16 border border-white/20 shadow-2xl relative z-20"
        >
          <h3 className="text-[32px] md:text-[40px] font-bold text-white mb-8 tracking-wide uppercase">
            Multidimensional risk management
          </h3>
          
          <p className="text-[17px] text-white/95 leading-[1.8] font-light">
            Capital preservation is the foundation of our entire investment framework. We engineer robust, multi-factor risk modules that stress-test portfolios against severe macroeconomic tail-events. An independent, deeply embedded risk committee continuously audits exposure limits and quantitative leverage constraints to ensure your capital remains insulated.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
