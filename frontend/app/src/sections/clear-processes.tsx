import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

const processes = [
  {
    title: 'Clear investment processes',
    description: 'Our transparent investment processes detail how each investment team identifies and implements investment opportunities.',
  },
  {
    title: 'ESG integration',
    description: 'As a signatory of the United Nations-supported Principles for Responsible Investment, we are committed to integrating ESG considerations into our investment process.',
  },
  {
    title: 'Robust oversight',
    description: 'Portfolio risk management is supplemented by our independent risk and quantitative analytics team, which provides ongoing feedback to our investment teams.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export function ClearProcesses() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="py-20 bg-gray-50 dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {processes.map((process) => (
            <motion.div
              key={process.title}
              variants={itemVariants}
              className="text-center"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                {process.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed transition-colors duration-300">
                {process.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
