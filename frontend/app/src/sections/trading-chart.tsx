import { useState, memo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import Waves from '../components/Waves';
import { useTheme } from '../components/theme-provider';

const tabs = ['Gold', 'Apple', 'Google', 'Microsoft', 'Tesla', 'Netflix'];

const symbolMap: Record<string, string> = {
  'Gold': 'TVC:GOLD',
  'Apple': 'NASDAQ:AAPL',
  'Google': 'NASDAQ:GOOGL',
  'Microsoft': 'NASDAQ:MSFT',
  'Tesla': 'NASDAQ:TSLA',
  'Netflix': 'NASDAQ:NFLX',
};

const flashVariant = {
  initial: { color: 'inherit' },
  up: { color: '#10B981', textShadow: '0 0 15px rgba(16,185,129,0.5)' },
  down: { color: '#EF4444', textShadow: '0 0 15px rgba(239,68,68,0.5)' }
};

const PriceTicker = memo(({ symbol }: { symbol: string }) => {
  const [price, setPrice] = useState(() => (Math.random() * 1000 + 100).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  const [status, setStatus] = useState<'initial' | 'up' | 'down'>('initial');
  const priceRef = useRef(parseFloat(price.replace(/,/g, '')));

  useEffect(() => {
    const interval = setInterval(() => {
      const delta = (Math.random() - 0.5) * 8;
      const newPrice = Math.max(0.1, priceRef.current + delta);
      
      setStatus(delta > 0 ? 'up' : 'down');
      setPrice(newPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
      priceRef.current = newPrice;
      
      // Reset layout flash
      setTimeout(() => setStatus('initial'), 600);
    }, 2000 + Math.random() * 3000); 

    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white/50 dark:bg-[#1b1b20]/50 backdrop-blur-md rounded-xl ring-1 ring-gray-200 dark:ring-white/10 mb-8 max-w-[280px] mx-auto">
      <span className="text-gray-500 dark:text-gray-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{symbol} LIVE INDEX</span>
      <motion.div
        variants={flashVariant}
        initial="initial"
        animate={status}
        transition={{ duration: 0.4 }}
        className="text-[32px] font-black tracking-tighter"
      >
        ${price}
      </motion.div>
    </div>
  );
});

export function TradingChart() {
  const [activeTab, setActiveTab] = useState('Gold');
  const { theme } = useTheme();

  return (
    <section id="insight" className="relative py-[120px] bg-[#f8f9fa] dark:bg-[#131318] text-gray-900 dark:text-white overflow-hidden border-y transition-colors duration-300">
      
      {/* Background Animated Waves - Light Theme Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Waves
          lineColor={theme === 'dark' ? "rgba(124, 58, 237, 0.15)" : "rgba(37, 99, 235, 0.12)"}
          backgroundColor="transparent"
          waveSpeedX={0.0125}
          waveSpeedY={0.01}
          waveAmpX={40}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={12}
          yGap={36}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Tabs */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.5 }}
           className="flex flex-wrap justify-center gap-2 mb-12 backdrop-blur-sm"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3  text-[15px] font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-[#7c3aed] text-white shadow-md'
                  : 'bg-white dark:bg-[#131318] text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#1e1e24] shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Dynamic High Frame-Rate Ticker */}
        <PriceTicker symbol={activeTab} />

        {/* Chart Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative bg-white/70 dark:bg-black/50 backdrop-blur-xl  shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border-white p-2 lg:p-4 mb-10 overflow-hidden transition-colors duration-300"
        >

          {/* TradingView Widget */}
          <div className="relative z-10 h-[550px] w-full  overflow-hidden ring-1 ring-gray-100 dark:ring-white/10 shadow-sm bg-white dark:bg-[#131318] transition-colors duration-300">
             <AdvancedRealTimeChart 
                theme={theme === 'dark' ? "dark" : "light"} 
                style="3" // Area chart
                symbol={symbolMap[activeTab]} 
                height={550}
                width="100%" 
                hide_side_toolbar={true}
                hide_top_toolbar={true}
                allow_symbol_change={false}
                save_image={false}
                enable_publishing={false}
                backgroundColor={theme === 'dark' ? "rgba(19, 19, 24, 1)" : "rgba(255,255,255,1)"}
                container_id={`tradingview_widget_${activeTab.toLowerCase()}`}
             />
          </div>
        </motion.div>
        
        {/* Call to Action Button */}
        <div className="text-center mt-4 relative z-10">
          <a 
            href="#markets" 
            className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-10 py-4  text-[15px] font-bold tracking-wider transition-all shadow-md hover:shadow-lg hover:-translate-y-1 uppercase"
          >
            Track All Markets
          </a>
        </div>
      </div>
    </section>
  );
}
