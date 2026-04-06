import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
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

function MirrorQuoteCard({ quote }: { quote: typeof quotes[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="p-12 bg-[#0a0a0f] border border-white/5 hover:border-[#38bdf8]/30 transition-all duration-500 relative flex flex-col group backdrop-blur-xl rounded-2xl overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-[#38bdf8]/10 group-hover:border-[#38bdf8]/40 transition-colors duration-500" />
      
      <div className="relative z-10 flex flex-col h-full">
        <p className="text-[19px] text-zinc-400 leading-relaxed mb-16 italic group-hover:text-zinc-200 transition-colors duration-500 font-light">
          "{quote.text}"
        </p>
        
        <div className="mt-auto">
          <p className="text-[14px] font-black text-[#38bdf8] uppercase tracking-[0.2em] mb-1">
            {quote.author}
          </p>
          <p className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-bold">
            {quote.position}
          </p>
        </div>

        {/* Decorative sync pulse */}
        <div className="absolute bottom-12 right-12 w-2 h-2 rounded-full bg-[#38bdf8] opacity-0 group-hover:opacity-40 animate-ping transition-opacity duration-700" />
      </div>
    </motion.div>
  );
}

export default function MirrorTradingQuotes() {
  return (
    <section className="py-32 bg-[#02040a] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <motion.h2 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[14px] font-black tracking-[0.5em] text-[#38bdf8] uppercase mb-6"
          >
            Institutional Validation
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[36px] md:text-[64px] font-black text-white uppercase leading-[1] tracking-tighter"
          >
            DEMOCRATIZING <br />
            <span className="bg-gradient-to-r from-[#38bdf8] via-white to-[#38bdf8] bg-clip-text text-transparent">
              HEDGE-FUND ALPHA.
            </span>
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {quotes.map((quote, idx) => (
            <MirrorQuoteCard key={idx} quote={quote} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
