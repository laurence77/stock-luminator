import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
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

function EstateStatCard({ stat }: { stat: typeof stats[0] }) {
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
      className="p-10 bg-[#050505] border border-white/5 hover:border-[#fbbf24]/20 transition-all duration-500 group relative overflow-hidden backdrop-blur-3xl rounded-2xl"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 191, 36, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="absolute top-0 left-0 w-1 h-0 bg-[#fbbf24] group-hover:h-full transition-all duration-1000" />
      
      <div className="relative z-10">
        <p className="text-[12px] font-black tracking-[0.3em] text-[#fbbf24]/50 uppercase mb-10 group-hover:text-[#fbbf24] transition-colors duration-500">
          {stat.label}
        </p>
        
        <h3 className="text-[48px] md:text-[56px] font-black mb-6 tracking-tighter bg-gradient-to-br from-[#fbbf24] via-white to-white bg-clip-text text-transparent">
          {stat.value}
        </h3>
        
        <p className="text-[15px] text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
          {stat.subtext}
        </p>

        {/* Decorative Hardware Detail */}
        <div className="mt-10 flex items-center gap-2 transform group-hover:translate-x-2 transition-transform duration-700">
          <div className="w-2 h-2 bg-[#fbbf24] rounded-full shadow-[0_0_8px_#fbbf24] group-hover:scale-125 transition-transform" />
          <div className="w-12 h-[1px] bg-white/10 group-hover:bg-[#fbbf24]/30 transition-all duration-700" />
        </div>
      </div>
    </motion.div>
  );
}

export default function RealEstateStats() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Architectural Fade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fbbf24]/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="max-w-[800px]">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOptions}
              className="text-[14px] font-black tracking-[0.5em] text-[#fbbf24] uppercase mb-6"
            >
              Institutional REIT Metrics
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOptions}
              className="text-[36px] md:text-[68px] font-black text-white leading-[0.95] tracking-tight uppercase"
            >
              STABLE YIELD. <br />
              <span className="bg-gradient-to-r from-[#fbbf24] via-zinc-400 to-white bg-clip-text text-transparent">
                 ARCHITECTURAL ALPHA.
              </span>
            </motion.p>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2 opacity-30">
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Audited_By: Tier_1_Consortium</span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Equity_Tokenization: Active</span>
          </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, idx) => (
            <EstateStatCard key={idx} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
