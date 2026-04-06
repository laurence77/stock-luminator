import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const stats = [
  {
    value: "$210B+",
    label: "Estimated Private Valuation",
    subtext: "Highest valued private U.S. company.",
  },
  {
    value: "80%+",
    label: "Commercial Launch Share",
    subtext: "Dominating global payload to orbit.",
  },
  {
    value: "6,000+",
    label: "Starlink Satellites",
    subtext: "Active nodes in the low-Earth orbit constellation.",
  },
  {
    value: "150 Tons",
    label: "Starship Payload",
    subtext: "To Low Earth Orbit (fully reusable).",
  },
];

function SpaceXStatCard({ stat }: { stat: typeof stats[0] }) {
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
      className="p-10 bg-white/5 border border-white/10 transition-colors duration-500 group relative overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(249, 115, 22, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="absolute top-0 left-0 w-1 h-0 bg-[#f97316] group-hover:h-full transition-all duration-700" />
      
      <p className="text-[11px] font-bold tracking-[0.2em] text-white/40 uppercase mb-8 relative z-10">
        {stat.label}
      </p>
      
      <h3 className="text-[44px] md:text-[52px] font-black mb-4 tracking-tighter bg-gradient-to-br from-[#f97316] via-white to-white bg-clip-text text-transparent relative z-10">
        {stat.value}
      </h3>
      
      <p className="text-[14px] text-gray-500 font-medium leading-relaxed group-hover:text-gray-300 transition-colors relative z-10">
        {stat.subtext}
      </p>

      {/* Decorative Tech Detail */}
      <div className="mt-8 flex gap-1 transform group-hover:translate-x-1 transition-transform relative z-10">
        <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full animate-pulse" />
        <div className="w-8 h-1.5 bg-white/10 rounded-full" />
      </div>
    </motion.div>
  );
}

export default function SpaceXStats() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f97316]/5 blur-[160px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="text-[12px] font-bold tracking-[0.4em] text-[#f97316] uppercase mb-4"
          >
            Institutional Metrics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[54px] font-black text-white max-w-[900px] leading-[1.1] tracking-[-0.04em] uppercase"
          >
            SECURE YOUR ALLOCATION IN THE <br />
            <span className="bg-gradient-to-r from-[#f97316] to-white bg-clip-text text-transparent">
               ORBITAL ECONOMY.
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
            <SpaceXStatCard key={idx} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
