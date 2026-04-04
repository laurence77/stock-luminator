import { motion } from 'framer-motion';
import { BarChart2, RefreshCcw, PenTool } from 'lucide-react';

const services = [
  {
    icon: BarChart2,
    title: 'ASSET MANAGEMENT',
    description: 'We orchestrate capital growth with precision, offering bespoke quantitative strategies and deep-value asset allocation to maximize upside potential.',
    bgColor: 'bg-[#7c3aed]',
    iconColor: 'bg-[#6d28d9]',
    textColor: 'text-white'
  },
  {
    icon: RefreshCcw,
    title: 'INSTITUTIONAL STRATEGIES',
    description: 'Empowering enterprise clients and family offices with sophisticated liquidity solutions, systematic hedging, and algorithmic execution architectures.',
    bgColor: 'bg-[#27272a]',
    iconColor: 'bg-[#3f3f46]',
    textColor: 'text-white'
  },
  {
    icon: PenTool,
    title: 'PRIVATE WEALTH',
    description: 'A holistic framework for generational capital preservation. Seamlessly integrate tax-optimized structures, trust advisory, and exclusive alternative investments.',
    bgColor: 'bg-[#27272a]',
    iconColor: 'bg-[#3f3f46]',
    textColor: 'text-white'
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

export function ServicesBar() {
  return (
    <section className="w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="flex flex-col md:flex-row w-full"
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={itemVariants}
            className={`flex-1 flex px-10 py-16 gap-6 ${service.bgColor} ${
              index > 0 ? (index === 2 ? 'border-l border-zinc-700/50' : '') : ''
            }`}
          >
            <div className="flex-shrink-0">
              <div className={`w-12 h-12 flex items-center justify-center rounded ${service.iconColor}`}>
                <service.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
            </div>
            <div>
              <h3 className={`font-bold text-[15px] tracking-widest mb-3 ${service.textColor}`}>
                {service.title}
              </h3>
              <p className="text-gray-300 text-[14px] leading-relaxed">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
