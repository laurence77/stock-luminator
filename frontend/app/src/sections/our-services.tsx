import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { staggerContainer, fadeInUp, viewportOptions } from '../lib/animations';
import ElectricBorder from '../components/ui/ElectricBorder';
import ShapeGrid from '../components/ui/ShapeGrid';
import { useTheme } from '../components/theme-provider';
import { FloatingElement } from '../components/ui/FloatingElement';

const services = [
  {
    title: 'Precision FX Strategies',
    description: 'Capitalize on intraday liquidity cycles and non-correlated currency volatility with our institutional FX-alpha frameworks.',
    image: `${import.meta.env.BASE_URL}images/forex.jpg`,
    category: 'TRADING',
    slug: 'forex'
  },
  {
    title: 'Research & Global Macro',
    description: 'Proprietary intelligence identifying structural macroeconomic shifts before they manifest in benchmark indices.',
    image: `${import.meta.env.BASE_URL}images/research-building.jpg`,
    category: 'ANALYSIS',
    slug: 'real-estate'
  },
  {
    title: 'Algorithmic Infrastructure',
    description: 'Low-latency execution engines designed to eliminate slippage and maximize capture of arbitrage catalysts.',
    image: `${import.meta.env.BASE_URL}images/infrastructure.jpg`,
    category: 'TECHNOLOGY',
    slug: 'infrastructure'
  },
  {
    title: 'Fixed Income & Bond Markets',
    description: 'Diversified yield-optimization through global sovereign debt and high-grade corporate credit obligations.',
    image: `${import.meta.env.BASE_URL}images/fixed-income.jpg`,
    category: 'STABILITY',
    slug: 'fixed-income'
  },
  {
    title: 'Bespoke Stock Selection',
    description: 'Aggressive equity portfolios constructed from high-conviction catalysts and structural market inefficiencies.',
    image: `${import.meta.env.BASE_URL}images/stock.jpg`,
    category: 'GROWTH',
    slug: 'stock'
  },
  {
    title: 'Options & Complex Derivatives',
    description: 'Strategic volatility hedging and asymmetric payoff structures engineered for sophisticated net worth protection.',
    image: `${import.meta.env.BASE_URL}images/options-copy.jpg`,
    category: 'HEDGING',
    slug: 'options-copy-trading'
  },
  {
    title: 'Tesla Ecosystem',
    description: 'Strategic allocation into the world’s most advanced AI and energy infrastructure. Capture the multi-trillion dollar shift toward autonomous transport and sustainable robotics.',
    image: `${import.meta.env.BASE_URL}images/tesla.png`,
    category: 'ALPHAGROWTH',
    slug: 'tesla'
  },
  {
    title: 'Satellite & Space Assets',
    description: 'First-mover exposure to orbital economies, launch logistics, and terrestrial-to-satellite high-frequency networks.',
    image: `${import.meta.env.BASE_URL}images/tesla/spacex.svg`,
    category: 'FRONTIER',
    slug: 'spacex'
  },
  {
    title: 'Physical Gold & Bullion',
    description: 'Institutional-grade custody of allocated physical reserves, serving as the ultimate hedge against monetary debasement.',
    image: `${import.meta.env.BASE_URL}images/gold.png`,
    category: 'RESERVE',
    slug: 'gold'
  },
  {
    title: 'Strategic Commodities',
    description: 'Dynamic exposure to soft agriculture, energy catalysts, and industrial metals via multi-leg derivative vehicles.',
    image: `${import.meta.env.BASE_URL}images/agriculture.png`,
    category: 'TANGIBLE',
    slug: 'agriculture'
  },
  {
    title: 'Digital Asset Ecosystems',
    description: 'Institutional access to decentralised liquidity, non-custodial yield pools, and high-frequency crypto-alpha.',
    image: `${import.meta.env.BASE_URL}images/crypto.png`,
    category: 'DIGITAL',
    slug: 'crypto'
  },
  {
    title: 'AI & Neural Systems',
    description: 'Algorithmic trading kernels driven by real-time neural networks identifying predictive pattern clusters globally.',
    image: `${import.meta.env.BASE_URL}images/ai.png`,
    category: 'QUANT',
    slug: 'ai-infrastructure'
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
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat transition-opacity duration-700 mirrored-bg"
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
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
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="h-full"
            >
              <FloatingElement duration={5 + (index % 3)} delay={index * 0.15} className="h-full">
              <ElectricBorder
                color="#7c3aed"
                speed={1}
                chaos={0.12}
                
                className="bg-[#fcfcfc] dark:bg-[#1b1b20] overflow-hidden group h-full flex flex-col"
              >
                <div className={`overflow-hidden h-[240px] relative shrink-0 transform-gpu ${service.slug === 'tesla' ? 'bg-[#fcfcfc] dark:bg-[#1b1b20] flex items-center justify-center p-16' : ''}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className={`w-full h-full ${service.slug === 'tesla' ? 'object-contain max-h-[100px]' : 'object-cover'}`}
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
                    <Link
                      to={`/services/${service.slug}`}
                      aria-label={`Explore ${service.title}`}
                      className="inline-block w-full py-3 px-4 bg-brand-purple text-white text-[14px] font-bold tracking-wider text-center uppercase rounded hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-[1px]"
                    >
                      Explore Service
                    </Link>
                  </div>
                </div>
              </ElectricBorder>
              </FloatingElement>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

