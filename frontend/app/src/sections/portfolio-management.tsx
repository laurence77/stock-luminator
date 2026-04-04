import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

export function PortfolioManagement() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="bg-white dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full min-h-[700px] relative z-10">
        {/* Left Column - Image */}
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
           className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
        >
          <div className="absolute inset-0">
            <img
              src={`${import.meta.env.BASE_URL}images/portfolio-meeting.jpg`}
              alt="Professional team meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Right Column - Purple Content Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="lg:w-1/2 bg-[#6d28d9]/95 backdrop-blur-xl text-white p-12 lg:p-[100px] flex flex-col justify-center border-l border-white/10 shadow-2xl relative z-20"
        >
          <h3 className="text-[36px] lg:text-[42px] font-extrabold text-white mb-10 leading-tight tracking-[-0.02em] uppercase">
            Institutional Portfolio Engineering
          </h3>
          
          <p className="text-[17px] text-white/95 leading-[1.8] mb-8 font-light">
            We abandon passive methodologies. Portfolio engineering at Stock Market Luminator requires algorithmic rigor and constant dynamic rebalancing. We fuse a top-down macroeconomic framework with aggressive micro-catalyst targeting to construct highly defensive, alpha-generating capital allocations.
          </p>
          
          <p className="text-[17px] text-white/95 leading-[1.8] font-light">
            This uncompromising systemic edge manages over <span className="font-bold text-[#00fbfb]">$649 Billion</span> globally across sovereign wealth entities, aggressive hedge funds, and elite family offices.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
