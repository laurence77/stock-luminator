import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOptions } from '../lib/animations';
import ElectricBorder from '../components/ui/ElectricBorder';
import ShapeGrid from '../components/ui/ShapeGrid';
import { useTheme } from '../components/theme-provider';

const services = [
  {
    image: '/images/forex.jpg',
    title: 'FOREIGN EXCHANGE',
    slug: 'forex',
    description: 'Access deep liquidity and seamless execution across 80+ currency pairs. Our institutional-grade FX platform provides ultra-low latency trading, advanced charting, and competitive spreads.',
  },
  {
    image: '/images/research-building.jpg',
    title: 'REAL ESTATE',
    slug: 'real-estate',
    description: "Diversify your portfolio with premium, income-generating properties. Gain access to private real estate funds and global REITs targeting high-yield commercial and residential markets.",
  },
  {
    image: '/images/infrastructure.jpg',
    title: 'INFRASTRUCTURE',
    slug: 'infrastructure',
    description: "Invest in the backbone of global commerce. We offer targeted exposure to critical infrastructure assets, including renewable energy grids, transport logistics, and telecommunications networks.",
  },
  {
    image: '/images/fixed-income.jpg',
    title: 'FIXED INCOME',
    slug: 'fixed-income',
    description: "Secure stable, long-term returns with our comprehensive fixed-income solutions. From sovereign wealth bonds to high-yield corporate debt, our expert market intelligence guides capital preservation.",
  },
  {
    image: '/images/stock.jpg',
    title: 'STOCK',
    slug: 'stock',
    description: 'Trade high-conviction equities across all major global exchanges. Leverage our AI-powered sentiment analysis and institutional-grade order routing to capitalize on market volatility.',
  },
  {
    image: '/images/options-copy.jpg',
    title: 'OPTIONS COPY TRADING',
    slug: 'options-copy-trading',
    description: 'Mirror the exact strategies of elite, verified options traders. Bypass pattern day trader (PDT) restrictions and automate your options portfolio with our proprietary low-latency copy engine.',
  },
  {
    image: '/images/tesla.png',
    title: 'TESLA',
    slug: 'tesla',
    description: 'Invest in the future of sustainable energy and autonomous robotics. Our managed Tesla portfolios offer high-growth exposure to the undisputed leader in the electric vehicle revolution.',
  },
  {
    image: '/images/spacex.png',
    title: 'SPACE X',
    slug: 'spacex',
    description: 'Access exclusive private commercial spaceflight opportunities. We provide institutional clients with fractional investment vehicles targeting SpaceX and the exponentially growing orbital economy.',
  },
  {
    image: '/images/gold.png',
    title: 'GOLD',
    slug: 'gold',
    description: 'Hedge against inflation and macroeconomic volatility. We offer both physical bullion custody and liquid gold-backed securities as a time-tested safe haven for portfolio diversification.',
  },
  {
    image: '/images/agriculture.png',
    title: 'AGRICULTURE',
    slug: 'agriculture',
    description: 'Capitalize on the growing global demand for food security. Invest strategically in advanced ag-tech innovations, arable farmland, and sustainable sovereign supply chains.',
  },
  {
    image: '/images/crypto.png',
    title: 'CRYPTO ASSETS',
    slug: 'crypto',
    description: 'Enter the decentralized economy with absolute confidence. We offer fully regulated digital asset trading, cold-storage custody, and diversified blockchain index funds.',
  },
  {
    image: '/images/ai.png',
    title: 'AI INFRASTRUCTURE',
    slug: 'ai-infrastructure',
    description: 'Gain direct exposure to the computing revolution. Our AI fund targets the physical layer—data centres, semiconductor foundries, and high-performance networking powering next-gen AI.',
  },
];

export function OurServices() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="services" className="py-[120px] bg-white dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* ShapeGrid Background */}
      <div className="absolute inset-0 z-0">
        <ShapeGrid
          direction="down"
          speed={0.2}
          squareSize={60}
          borderColor={isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'}
          hoverFillColor={isDark ? 'rgba(124, 58, 237, 0.1)' : 'rgba(124, 58, 237, 0.05)'}
          shape="circle"
          hoverTrailAmount={0}
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            <h2 className="text-[32px] md:text-[44px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-6 tracking-[-0.02em] uppercase transition-colors duration-300 select-none">
              OUR SERVICES
            </h2>
            <div className="flex justify-center gap-1.5 mb-10">
              <div className="w-10 h-[3px] bg-[#1e40af]" />
              <div className="w-[50px] h-[3px] bg-[#7c3aed]" />
            </div>
            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[1.8] max-w-[800px] mx-auto transition-colors duration-300">
              Precision execution across global asset classes. We leverage proprietary models and deep market liquidity to deliver superior risk-adjusted returns.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="h-full"
            >
              <ElectricBorder
                color="#7c3aed"
                speed={1}
                chaos={0.12}
                
                className="bg-[#fcfcfc] dark:bg-[#1b1b20] overflow-hidden group h-full flex flex-col"
              >
                <div className={`overflow-hidden h-[240px] relative shrink-0 transform-gpu ${service.title === 'TESLA' ? 'bg-[#fcfcfc] dark:bg-[#1b1b20] flex items-center justify-center p-8' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className={`w-full h-full ${service.title === 'TESLA' ? 'object-contain' : 'object-cover'}`}
                  />
                  <div className="absolute inset-0 bg-white/10 dark:bg-black/30 group-hover:bg-transparent dark:group-hover:bg-transparent transition-colors duration-500 " />
                </div>
                <div className="pt-8 pb-10 px-6 flex flex-col flex-grow text-center">
                  <h3 className="text-[16px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-6 uppercase tracking-[-0.02em]st transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#666666] dark:text-gray-400 text-[15px] leading-relaxed mb-6 dark:pb-6 text-left flex-grow transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="w-full mt-auto">
                    <a
                      href={`#service-${service.slug}`}
                      aria-label={`Explore ${service.title}`}
                      className="inline-block w-full py-3 px-4 bg-brand-purple text-white text-[14px] font-bold tracking-wider text-center uppercase rounded hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-[1px]"
                    >
                      Explore Service
                    </a>
                  </div>
                </div>
              </ElectricBorder>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

