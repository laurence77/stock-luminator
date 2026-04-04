import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';
import { Binoculars } from 'lucide-react';
import { viewportOptions } from '../lib/animations';

export function Philosophy() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="bg-black relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-[700px] relative z-10">
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="lg:w-1/2 bg-black/95 backdrop-blur-xl text-white p-12 lg:p-[100px] flex flex-col justify-center border-r border-white/10 shadow-2xl relative z-20"
        >
          <div className="w-14 h-14 bg-white/10  flex items-center justify-center mb-8">
            <Binoculars className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-[32px] lg:text-[42px] font-extrabold text-white mb-8 leading-tight tracking-[-0.02em] uppercase">
            A philosophy rooted in alpha
          </h3>
          
          <p className="text-[17px] text-gray-300 leading-[1.8] mb-8 font-light">
            Our clients entrust us to deliver uncorrelated performance alpha that explicitly aligns with their risk parameters and institutional mandates. We believe continuous outperformance is only achieved through a highly systemic, repeatable investment architecture—grounded in quantitative macro-research, dynamic hedging, and a firm-wide culture of rigorous empirical challenge.
          </p>
          
          <p className="text-[17px] text-gray-300 leading-[1.8] font-light">
            True alpha is geographically agnostic. We deploy capital dynamically across global exchanges, dark pools, and private markets to capture the most lucrative asymmetric opportunities available worldwide.
          </p>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
           initial={{ opacity: 0, x: 30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={viewportOptions}
           transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
           className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
        >
          <div className="absolute inset-0">
            <img
              src={`${import.meta.env.BASE_URL}images/stock.jpg`}
              alt="Trading screens"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
