import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const stats = [
  {
    value: "$50B+",
    label: "Quarterly Volume",
    subtext: "Facilitating high-frequency terminal liquidity.",
  },
  {
    value: "<5ms",
    label: "Execution Latency",
    subtext: "Sub-millisecond trade settlement window.",
  },
  {
    value: "99.99%",
    label: "Uptime SLA",
    subtext: "Institutional-grade infrastructure reliability.",
  },
  {
    value: "50+",
    label: "Global Networks",
    subtext: "Cross-chain institutional liquidity routing.",
  },
];

/**
 * Crypto Stats Section - Performance metrics for institutional traders.
 * Features neon-glitch aesthetics and high-fidelity staggered reveals.
 */
export default function CryptoStats() {
  return (
    <section className="py-32 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Network Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b5cf6]/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="text-[12px] font-bold tracking-[0.4em] text-[#14f195] uppercase mb-4"
          >
            Digital Asset Metrics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[54px] font-black text-white max-w-[900px] leading-[1.1] tracking-[-0.04em] uppercase"
          >
            EXECUTION AT THE SPEED OF <br />
            <span className="bg-gradient-to-r from-[#14f195] via-[#8b5cf6] to-[#14f195] bg-clip-text text-transparent">
               THE NETWORK CORE.
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
              className="p-10 bg-white/5 border border-white/10 hover:border-[#14f195]/30 transition-all duration-500 group relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#8b5cf6] group-hover:h-full transition-all duration-700" />
              
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
                {stat.label}
              </p>
              
              <h3 className="text-[44px] md:text-[52px] font-black mb-4 tracking-tighter bg-gradient-to-br from-[#14f195] via-white to-white bg-clip-text text-transparent">
                {stat.value}
              </h3>
              
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                {stat.subtext}
              </p>

              {/* Decorative Digital Glow */}
              <div className="mt-8 flex gap-1 transform group-hover:translate-x-1 transition-transform">
                <div className="w-1.5 h-1.5 bg-[#14f195] rounded-full animate-pulse" />
                <div className="w-8 h-1.5 bg-white/10 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
