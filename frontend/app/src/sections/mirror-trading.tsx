import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

export function MirrorTrading() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section id="mirror-trades" className="relative py-[140px] overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>
      {/* Background image layer above grid, below content */}
      {/* Background image layer with dynamic pathing */}
      <div 
        className="absolute inset-0 z-[1] bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/mirror-trading-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[1px]" />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-[32px] md:text-[44px] font-bold text-white mb-8 tracking-wide">
            MIRROR YOUR DESIRED EXPERT
          </h2>
          
          <p className="text-[17px] text-gray-300 leading-[1.8] mb-12">
            Stock Market Luminator offers automated Mirror trading services across all sectors. 
            Find your desired expert, get your account linked to their services and mirror the 
            trades, learn as well through the trades, across various Market and sectors, Options, 
            derivatives, currency pairs, Swings/ Scalp trading, Crypto currencies, Forex and Index. 
            With over 90% protection on trading capital with stop loss softwares and indicators. 
            At Stock Market Luminator, Clients capital security is always our major Concern.
          </p>

          <a href="#mirror-started"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-10 py-4 text-[15px] font-bold tracking-wider transition-colors duration-300 inline-block uppercase"
          >
            Get started Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}
