import { motion } from 'framer-motion';
import { Umbrella, CheckCircle, Globe, Lightbulb } from 'lucide-react';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

const strategies = [
  {
    icon: Umbrella,
    description: 'We prioritize investments protected by deep economic moats and established intellectual property collateral.',
  },
  {
    icon: CheckCircle,
    description: 'We execute capital deployment exclusively into entities demonstrating robust free cash flow and tier-one executive leadership.',
  },
  {
    icon: Globe,
    description: 'Leveraging our proprietary geopolitical intelligence networks and tier-one market access across sovereign borders.',
  },
  {
    icon: Lightbulb,
    description: 'Aggressively targeting deep-value market dislocations and asymmetric risk-reward opportunities undetectable by broad-market consensus.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  },
};

export function InvestmentStrategy() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-[100px] bg-white dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 bg-white/80 dark:bg-white/5 backdrop-blur-xl p-10 lg:p-14 border border-gray-100 dark:border-white/10 shadow-2xl relative z-20 max-w-[1000px] mx-auto"
        >
          <h2 className="text-[32px] md:text-[40px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-6 tracking-[-0.02em] uppercase transition-colors duration-300">
            INVESTMENT STRATEGY
          </h2>
          <div className="flex justify-center gap-1.5 mb-10">
            <div className="w-10 h-0.5 bg-[#60a5fa]" />
            <div className="w-[50px] h-0.5 bg-[#1e40af]" />
          </div>
          <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[1.8] max-w-[800px] mx-auto transition-colors duration-300">
            Our mandate focuses on identifying institutional-grade catalysts capable of delivering non-correlated yield over extended macro cycles. This thesis has positioned us as a premier vanguard for rigorous capital allocation and dependable alpha generation.
          </p>
        </motion.div>

        {/* Strategy Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8  bg-[#f8f9fa] dark:bg-[#131318] text-[#7c3aed] transition-colors duration-300">
                <strategy.icon className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <p className="text-[#666666] dark:text-gray-400 text-[15px] leading-[1.7] transition-colors duration-300">
                {strategy.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
