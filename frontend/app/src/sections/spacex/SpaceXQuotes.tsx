import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "SpaceX is the apex predator of the space industry. Their reusable architecture has effectively ended the legacy launch market.",
    author: "Morgan Stanley Space Desk",
  },
  {
    text: "Starlink alone represents a telecommunications monopoly in the making. A spin-off IPO could command a valuation exceeding $100 Billion.",
    author: "Global Aerospace Capital",
  },
  {
    text: "With Starship, SpaceX isn't just building a rocket; they are building the fundamental infrastructure for the multi-trillion dollar deep space economy.",
    author: "Ark Invest",
  },
];

/**
 * SpaceX Quotes Section - Institutional validation for allocation strategies.
 * High-end glassmorphism and weighted staggered reveals.
 */
export default function SpaceXQuotes() {
  return (
    <section className="py-32 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            className="inline-block p-3 bg-white/5 border border-white/10 rounded-full mb-6"
          >
            <Quote className="w-6 h-6 text-[#f97316]" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[48px] font-black text-white tracking-tight uppercase leading-tight"
          >
            Institutional <span className="text-[#f97316]">Validation</span>.
          </motion.h2>
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
              className="p-10 bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#f97316]/30 transition-all duration-500 rounded-2xl relative group"
            >
              {/* Institutional quote mark overlay */}
              <div className="absolute top-6 right-8 text-[80px] font-serif text-white/5 group-hover:text-[#f97316]/10 transition-colors pointer-events-none">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-[18px] md:text-[20px] text-gray-200 font-light leading-relaxed mb-10 italic">
                  "{quote.text}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#f97316]" />
                  <p className="text-[14px] font-bold tracking-[0.2em] text-white/60 uppercase">
                    {quote.author}
                  </p>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#f97316] group-hover:w-1/2 transition-all duration-700" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOptions}
          className="mt-20 text-center"
        >
          <p className="text-[12px] text-white/20 tracking-[0.4em] uppercase font-bold">
            Private Market Intelligence / 2025 Orbital Outlook
          </p>
        </motion.div>
      </div>
      
      {/* Background radial accent */}
      <div className="absolute -bottom-24 -right-24 w-[600px] h-[600px] bg-[#f97316]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
