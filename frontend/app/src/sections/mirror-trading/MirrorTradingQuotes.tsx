import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const quotes = [
  {
    text: "The democratization of hedge-fund strategies represents the final frontier of retail finance. Institutional-grade alpha is no longer restricted to the few.",
    author: "Global Wealth Analysts",
    position: "Senior Portfolio Strategist"
  },
  {
    text: "Millisecond-precision portfolio replication is the gold standard for institutional copy trading. It eliminates the traditional latency disadvantage of the retail mirroring model.",
    author: "Quant Trading Weekly",
    position: "Lead Infrastructure Researcher"
  },
  {
    text: "Luminator's mirror trading architecture allows institutional-grade risk management for the individual. It's the most sophisticated sync engine I've tested.",
    author: "Financial Systems Review",
    position: "Chief Technical Editor"
  }
];

/**
 * MirrorTradingQuotes - Institutional validation for portfolio synchronization.
 * Features glassy Navy/Slate cards with premium typography.
 */
export default function MirrorTradingQuotes() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[12px] font-bold tracking-[0.4em] text-[#38bdf8] uppercase mb-4"
          >
            Institutional Validation
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[32px] md:text-[54px] font-black text-white uppercase leading-tight"
          >
            DEMOCRATIZING <span className="text-[#38bdf8]">HEDGE-FUND ALPHA.</span>
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {quotes.map((quote, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="p-10 bg-white/5 border border-white/10 hover:border-[#38bdf8]/60 transition-all duration-500 relative flex flex-col group backdrop-blur-xl rounded-2xl"
            >
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/10 group-hover:border-[#38bdf8]/60 transition-colors" />
              
              <p className="text-[17px] text-zinc-300 leading-relaxed mb-12 italic group-hover:text-white transition-colors">
                "{quote.text}"
              </p>
              
              <div className="mt-auto">
                <p className="text-[14px] font-bold text-[#38bdf8] uppercase tracking-widest">
                  {quote.author}
                </p>
                <p className="text-[11px] text-zinc-500 uppercase tracking-widest">
                  {quote.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
