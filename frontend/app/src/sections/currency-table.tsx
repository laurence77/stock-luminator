import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

// Base static structure containing names and emojis
const initialCurrencies = [
  { code: 'EUR', name: 'Euro', rate: '...', flag: '🇪🇺' },
  { code: 'USD', name: 'US Dollar', rate: '1.00', flag: '🇺🇸' },
  { code: 'JPY', name: 'Japanese Yen', rate: '...', flag: '🇯🇵' },
  { code: 'GBP', name: 'British Pound', rate: '...', flag: '🇬🇧' },
  { code: 'CHF', name: 'Swiss Franc', rate: '...', flag: '🇨🇭' },
  { code: 'AUD', name: 'Australian Dollar', rate: '...', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', rate: '...', flag: '🇨🇦' },
  { code: 'NZD', name: 'New Zealand Dollar', rate: '...', flag: '🇳🇿' },
  { code: 'CNY', name: 'Chinese Yuan', rate: '...', flag: '🇨🇳' },
];

export function CurrencyTable() {
  const [currencies, setCurrencies] = useState(initialCurrencies);
  const [lastUpdated, setLastUpdated] = useState<string>('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    // Fetch live data from a free open exchange API
    const fetchRates = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        
        if (data && data.rates) {
          const liveRates = data.rates;
          
          setCurrencies(prev => prev.map(currency => ({
            ...currency,
            rate: liveRates[currency.code] ? liveRates[currency.code].toFixed(2) : currency.rate
          })));

          // Format last updated date
          const date = new Date(data.time_last_updated * 1000);
          setLastUpdated(date.toLocaleDateString() + ' ' + date.toLocaleTimeString());
        }
      } catch (error) {
        console.error("Failed to fetch live currency rates", error);
      }
    };

    fetchRates();
    // Optional: Refresh rates every minute
    const interval = setInterval(fetchRates, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-[100px] bg-white dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: '-100px' }}
           transition={{ duration: 0.5 }}
           className="text-center mb-16"
        >
          <h2 className="text-[32px] md:text-[40px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-6 tracking-[-0.02em] uppercase transition-colors duration-300">
            Global Currency Exchange
          </h2>
          <div className="flex justify-center gap-1.5 mb-6">
            <div className="w-10 h-0.5 bg-[#60a5fa]" />
            <div className="w-[50px] h-0.5 bg-[#1e40af]" />
          </div>
          {lastUpdated && (
            <p className="text-[13px] text-gray-400 font-medium tracking-wide uppercase">
              Live Rates &bull; Last Updated: {lastUpdated}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white dark:bg-[#131318]  shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none overflow-hidden transition-colors duration-300"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#f8f9fa] dark:bg-[#1b1b20] transition-colors duration-300">
                  <th className="px-8 py-5 text-left text-[13px] font-bold text-gray-500 dark:text-gray-400 tracking-[-0.04em] uppercase transition-colors duration-300">Currency</th>
                  <th className="px-8 py-5 text-left text-[13px] font-bold text-gray-500 dark:text-gray-400 tracking-[-0.04em] uppercase transition-colors duration-300">Name</th>
                  <th className="px-8 py-5 text-right text-[13px] font-bold text-gray-500 dark:text-gray-400 tracking-[-0.04em] uppercase transition-colors duration-300">Rate / USD</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 dark:divide-white/5 transition-colors duration-300">
                {currencies.map((currency) => (
                  <tr key={currency.code} className="hover:bg-gray-50 dark:hover:bg-[#1e1e24] transition-colors duration-150">
                    <td className="px-8 py-5 text-[15px]">
                      <div className="flex items-center gap-4">
                        <span className="text-xl shadow-sm  overflow-hidden">{currency.flag}</span>
                        <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">{currency.code}</span>
                      </div>
                    </td>
                    <td className="px-8 py-5 text-[15px] font-medium tracking-tight text-gray-600 dark:text-gray-300 transition-colors duration-300">{currency.name}</td>
                    <td className="px-8 py-5 tabular-nums text-[15px] text-right font-bold tracking-[-0.04em] text-gray-900 dark:text-white transition-colors duration-300">
                      {currency.rate === '...' ? (
                        <span className="flex justify-end pr-2">
                           <span className="animate-pulse bg-gray-200 dark:bg-white/20 h-4 w-12 rounded inline-block transition-colors duration-300"></span>
                        </span>
                      ) : (
                        currency.rate
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
