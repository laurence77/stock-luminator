import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../../lib/animations';

const quotes = [
  {
    text: "Elon is a generational leader, and under his visionary leadership, we have the potential to become the most valuable company in history, creating unprecedented value for our shareholders.",
    author: "Morgan Stanley Research",
    detail: "Adam Jonas, Managing Director",
  },
  {
    text: "Optimus is, I think, going to be the greatest product in the history of humanity. We believe Tesla is on the precipice of another massive wave of transformational growth.",
    author: "Jason Calacanis",
    detail: "Co-host of the All-In Podcast",
  },
  {
    text: "The 2025 CEO Performance Award is the most honest attempt at pay-for-performance by any company out there. It signals that Elon is here to stay and win.",
    author: "The New York Times",
    detail: "DealBook Editorial",
  }
];

export default function TeslaQuotes() {
  return (
    <section className="py-32 bg-[#131318] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6305ef]/5 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[44px] font-bold text-white tracking-[-0.04em]"
          >
            In the Words of Industry Luminaries.
          </motion.h2>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {quotes.map((quote, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="relative space-y-10"
            >
              <div className="text-[#00fbfb] text-[60px] font-serif leading-none absolute -top-8 -left-4 opacity-30 select-none">“</div>
              <p className="text-[18px] text-gray-300 leading-relaxed font-medium relative z-10">
                {quote.text}
              </p>
              <div>
                <p className="text-[14px] font-bold text-white uppercase tracking-[0.1em]">{quote.author}</p>
                <p className="text-[12px] text-gray-500 uppercase tracking-[0.1em] mt-1">{quote.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
