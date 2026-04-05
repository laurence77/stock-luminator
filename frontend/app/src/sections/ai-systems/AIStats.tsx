import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const stats = [
  {
    value: "$12B+",
    label: "AUM Modelled",
    subtext: "Systematic neural-alpha tracking.",
  },
  {
    value: "PBs",
    label: "Data Ingestion",
    subtext: "Alternative data petabytes daily.",
  },
  {
    value: "<1ms",
    label: "Execution Speed",
    subtext: "Zero-latency trade routing.",
  },
  {
    value: "99.9%",
    label: "Prediction Uptime",
    subtext: "Neural model uptime reliability.",
  },
];

/**
 * AI Stats Section - High-performance quantitative metrics.
 * Features monospace terminal aesthetics and intense green accents.
 */
export default function AIStats() {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden border-t border-[#00ff00]/10">
      {/* Terminal Grid Logic Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff00]/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="text-[12px] font-bold tracking-[0.4em] text-[#00ff00] uppercase mb-4 font-mono"
          >
            Neural Efficiency Metrics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[54px] font-bold text-white max-w-[900px] leading-[1.1] tracking-[-0.04em] uppercase font-mono"
          >
            COMPUTE POWERED BY <br />
            <span className="text-[#00ff00]">
               PREDICTIVE INTELLIGENCE.
            </span>
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="p-10 bg-[#00ff00]/5 border border-[#00ff00]/20 hover:border-[#00ff00]/50 transition-all duration-500 group relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#00ff00] group-hover:h-full transition-all duration-700" />
              
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#00ff00]/40 uppercase mb-8 font-mono">
                {stat.label}
              </p>
              
              <h3 className="text-[44px] md:text-[52px] font-bold mb-4 tracking-tighter text-white font-mono group-hover:text-[#00ff00] transition-colors">
                {stat.value}
              </h3>
              
              <p className="text-[14px] text-zinc-500 font-mono leading-relaxed group-hover:text-zinc-300 transition-colors">
                {stat.subtext}
              </p>

              {/* Decorative Tech Data Detail */}
              <div className="mt-8 flex gap-1 transform group-hover:translate-x-1 transition-transform">
                <div className="w-1.5 h-1.5 bg-[#00ff00] rounded-full animate-pulse" />
                <div className="w-8 h-1.5 bg-[#00ff00]/10 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
