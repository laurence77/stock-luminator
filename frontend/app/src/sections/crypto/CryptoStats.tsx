import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
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

function CryptoStatCard({ stat }: { stat: typeof stats[0] }) {
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
      className="p-12 bg-[#0a0a0f] border border-white/5 hover:border-[#14f195]/20 transition-all duration-500 group relative overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(20, 241, 149, 0.08),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="absolute top-0 left-0 w-1 h-0 bg-[#8b5cf6] group-hover:h-8 transition-all duration-700" />
        
        <p className="text-[12px] font-black tracking-[0.3em] text-zinc-500 uppercase mb-10 group-hover:text-zinc-300 transition-colors">
          {stat.label}
        </p>
        
        <h3 className="text-[52px] md:text-[64px] font-black mb-6 tracking-tighter bg-gradient-to-br from-[#14f195] via-white to-zinc-400 bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-500 origin-left">
          {stat.value}
        </h3>
        
        <p className="text-[15px] text-zinc-500 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
          {stat.subtext}
        </p>

        {/* Decorative Hardware Detail */}
        <div className="mt-10 flex items-center gap-3 opacity-20 group-hover:opacity-50 transition-all duration-700">
          <div className="w-2 h-2 rounded-full bg-[#14f195] animate-pulse" />
          <div className="flex-1 h-px bg-gradient-to-r from-[#14f195] to-transparent" />
          <span className="text-[9px] font-mono text-white/50 tracking-widest uppercase">Verified</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function CryptoStats() {
  return (
    <section className="py-32 bg-[#020205] relative overflow-hidden border-t border-white/5">
      {/* Network Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#8b5cf6]/5 blur-[200px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="text-[14px] font-black tracking-[0.5em] text-[#14f195] uppercase mb-6"
          >
            Institutional Benchmarks
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[36px] md:text-[64px] font-black text-white max-w-[1000px] leading-[1] tracking-[-0.05em] uppercase"
          >
            EXECUTION AT THE SPEED OF <br />
            <span className="bg-gradient-to-r from-[#14f195] via-[#8b5cf6] to-[#14f195] bg-clip-text text-transparent">
               THE DECENTRALIZED CORE.
            </span>
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {stats.map((stat, idx) => (
            <CryptoStatCard key={idx} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
