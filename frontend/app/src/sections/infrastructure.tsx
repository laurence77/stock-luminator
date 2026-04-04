import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

const steps = [
  {
    title: 'Define Strategic Parameters',
    description: 'Establish rigorous allocations targeting non-correlated alpha, strict capital preservation, or aggressive quantitative expansion.',
  },
  {
    title: 'Audit Trading Infrastructure',
    description: 'Integrate low-latency execution capabilities, algorithmic order-routing, and dark-pool liquidity access.',
  },
  {
    title: 'Liquidity & Capital Validation',
    description: 'Stress-test institutional margin requirements, collateralized leverage limits, and total executable net worth.',
  },
  {
    title: 'Deploy Complex Derivatives',
    description: 'Utilize synthetic multi-leg options spreads, algorithmic volatility hedging, and deep out-of-the-money macro plays.',
  },
];

export function Infrastructure() {
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
      <div className="flex flex-col lg:flex-row w-full min-h-[600px] relative z-10">
        {/* Left Column - Text content with Gradient */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="lg:w-1/2 bg-gradient-to-br from-[#1e40af] via-[#312e81] to-[#7c3aed] text-white p-12 lg:p-20 flex flex-col justify-center"
        >
          <h3 className="text-[28px] lg:text-[44px] font-extrabold mb-8 leading-tight tracking-[-0.02em] uppercase select-none">
            Infrastructure Trading
          </h3>
          <ul className="space-y-6">
            {steps.map((step) => (
              <li key={step.title} className="text-[15px] leading-relaxed text-gray-200">
                <span className="font-bold text-white">* {step.title}</span>
                {' '}— {step.description}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="lg:w-1/2 relative min-h-[400px] lg:min-h-full"
        >
          <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-black transition-colors duration-300">
            <img
              src="/images/infrastructure.jpg"
              alt="Infrastructure Trading"
              className="w-full h-full object-cover opacity-90 dark:opacity-75 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <h3 className="text-[32px] md:text-[44px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-8 text-center tracking-[-0.02em] uppercase transition-colors duration-300 select-none">
          Network Architecture
        </h3>
        <div className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed max-w-[900px] mx-auto space-y-6 transition-colors duration-300">
          <p>
            Superior execution requires superior infrastructure. Stock Market Luminator operates an ultra-low latency architecture directly matching primary exchange execution engines, driving the absolute vanguard of high-frequency and systemic trading.
          </p>
          <p>
            Our core processing facility is built exclusively on advanced algorithmic frameworks and private dark-fiber networks ensuring that institutional order flow is handled with zero slippage and absolute maximum efficiency.
          </p>
          <p>
            By leveraging redundant, military-grade data silos and predictive routing pathways, our platform ensures impenetrable security while seamlessly matching highly complex multi-leg derivative transactions in microseconds.
          </p>
          <p>
            This fundamental backbone is what allows our sovereign, enterprise, and high-net-worth operators to innovate their strategies relentlessly, operating at speeds where the broader retail market cannot even perceive the data.
          </p>
        </div>
      </div>
    </section>
  );
}
