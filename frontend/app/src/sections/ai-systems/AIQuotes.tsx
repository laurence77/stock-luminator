import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const quotes = [
  {
    text: "AI infrastructure is the most important commodity of the 21st century. It is the fundamental base layer of all future economic value.",
    author: "Morgan Stanley Tech Desk",
    position: "Chief Equity Strategist"
  },
  {
    text: "With predictive neural execution, the traditional concept of 'alpha' is being rewritten. We are moving from human intuition to machine-speed deterministic outcomes.",
    author: "Global Quantitative Capital",
    position: "Managing Director"
  },
  {
    text: "The democratization of hedge-fund grade AI strategies effectively ends the era of retail disadvantage. Infrastructure is the new edge.",
    author: "Aerospace & AI Research Group",
    position: "Principal Analyst"
  }
];

/**
 * AI Quotes Section - Institutional validation for AI as a base commodity.
 * Features glassy terminal cards with intense green accents.
 */
export default function AIQuotes() {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden border-t border-[#00ff00]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[12px] font-bold tracking-[0.4em] text-[#00ff00] uppercase mb-4 font-mono"
          >
            Institutional Validation
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[32px] md:text-[54px] font-bold text-white uppercase leading-tight font-mono"
          >
            THE NEW COMMODITY <span className="text-[#00ff00]">IS COMPUTE.</span>
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
              className="p-10 bg-[#00ff00]/5 border border-[#00ff00]/20 hover:border-[#00ff00]/60 transition-all duration-500 relative flex flex-col group"
            >
              {/* Terminal Corner Detail */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[#00ff00]/20 group-hover:border-[#00ff00]/60 transition-colors" />
              
              <p className="text-[17px] text-zinc-300 leading-relaxed font-mono mb-12 italic group-hover:text-white transition-colors">
                "{quote.text}"
              </p>
              
              <div className="mt-auto">
                <p className="text-[14px] font-bold text-[#00ff00] font-mono tracking-widest uppercase">
                  {quote.author}
                </p>
                <p className="text-[11px] text-zinc-500 font-mono uppercase tracking-widest">
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
