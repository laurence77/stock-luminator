import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const stats = [
  {
    value: "$25B+",
    label: "AUM Managed",
    subtext: "Global institutional commercial assets.",
  },
  {
    value: "15%",
    label: "Avg Annual Return",
    subtext: "Inflation-adjusted net yield.",
  },
  {
    value: "98.5%",
    label: "Portfolio Occupancy",
    subtext: "Investment-grade corporate tenants.",
  },
  {
    value: "12M+",
    label: "Sq Ft Managed",
    subtext: "High-yield logistics & multi-family.",
  },
];

/**
 * RealEstateStats - High-visibility architecture metrics for REIT investors.
 * Features cinematic dark aesthetics with premium gold accents.
 */
export default function RealEstateStats() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Architectural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#EAB308]/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="text-[12px] font-bold tracking-[0.4em] text-[#EAB308] uppercase mb-4"
          >
            Institutional REIT Metrics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[54px] font-black text-white max-w-[900px] leading-[1.1] tracking-[-0.04em] uppercase"
          >
            STABLE YIELD. <br />
            <span className="bg-gradient-to-r from-[#EAB308] to-white bg-clip-text text-transparent">
               ARCHITECTURAL ALPHA.
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
              className="p-10 bg-white/5 border border-white/10 hover:border-[#EAB308]/30 transition-all duration-500 group relative"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#EAB308] group-hover:h-full transition-all duration-700" />
              
              <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
                {stat.label}
              </p>
              
              <h3 className="text-[44px] md:text-[52px] font-black mb-4 tracking-tighter bg-gradient-to-br from-[#EAB308] via-white to-white bg-clip-text text-transparent">
                {stat.value}
              </h3>
              
              <p className="text-[14px] text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                {stat.subtext}
              </p>

              {/* Decorative Tech Detail */}
              <div className="mt-8 flex gap-1 transform group-hover:translate-x-1 transition-transform">
                <div className="w-1.5 h-1.5 bg-[#EAB308] rounded-full animate-pulse" />
                <div className="w-8 h-1.5 bg-white/10 rounded-full" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
