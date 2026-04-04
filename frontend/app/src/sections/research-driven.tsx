import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOptions } from '../lib/animations';
import { SectionHeader } from '../components/ui/SectionHeader';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

const values = [
  {
    title: 'Absolute Return Mandates',
    description: 'We hardcode stringent downside-protection into every quantitative strategy. Our primary directive is the consistent compounding of real value across major macroeconomic inflection points.',
  },
  {
    title: 'Asymmetric Information Edge',
    description: "We deploy aggressive, proprietary data methodologies to source material mispricings across illiquid and public markets. We construct incredibly focused, high-conviction portfolios insulated from structural risks.",
  },
  {
    title: 'Tier-One Institutional Acumen',
    description: 'Alpha is purely a function of talent. Our algorithmic models and asset allocation frameworks are supervised by deeply entrenched quantitative analysts who have aggressively traded through every major volatility event of the past two decades.',
  },
];

export function ResearchDriven() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-[120px] bg-white dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="Strategic Core Values" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeInUp}
              className="bg-white/85 dark:bg-white/5 backdrop-blur-xl p-8 lg:p-10 border border-gray-100 dark:border-white/10 shadow-xl relative z-20 transition-all duration-300 hover:border-[#7c3aed]/50 dark:hover:border-[#7c3aed]/50 group"
            >
              <div className="w-12 h-1 bg-[#7c3aed] mb-6 transition-all duration-500 group-hover:w-20" />
              <h4 className="text-[20px] lg:text-[22px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-4 leading-tight uppercase tracking-[-0.02em]">
                {value.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-[16px] leading-[1.8] font-light transition-colors duration-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
