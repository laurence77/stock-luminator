import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Warehouse, Building2, Landmark } from 'lucide-react';

const pillars = [
  {
    title: "Global Logistics REITs",
    description: "Position your portfolio in the e-commerce backbone. High-yield logistics infrastructure, fulfillment centers, and port assets with institutional NNN lease terms.",
    icon: <Warehouse className="w-8 h-8 text-[#fbbf24]" />,
  },
  {
    title: "Multi-Family Infrastructure",
    description: "Stable, recession-resistant yield through strategic multi-family housing developments and institutional-grade residential clusters in high-growth urban corridors.",
    icon: <Building2 className="w-8 h-8 text-[#fbbf24]" />,
  },
  {
    title: "NNN Institutional Leasehold",
    description: "Absolute triple-net leases with investment-grade corporate tenants. Long-term structural income with inflation-protected annual base rent escalators.",
    icon: <Landmark className="w-8 h-8 text-[#fbbf24]" />,
  },
];

function EstatePillarCard({ pillar }: { pillar: typeof pillars[0] }) {
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
      className="group relative p-12 bg-[#050505] border border-white/5 hover:border-[#fbbf24]/20 transition-all duration-500 overflow-hidden backdrop-blur-xl rounded-2xl"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(251, 191, 36, 0.06),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-10 inline-block p-4 bg-[#fbbf24]/5 border border-[#fbbf24]/10 rounded-2xl group-hover:scale-110 group-hover:border-[#fbbf24]/30 transition-all duration-700">
          {pillar.icon}
        </div>
        
        <h3 className="text-[26px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#fbbf24] transition-colors duration-500">
          {pillar.title}
        </h3>
        
        <div className="w-16 h-px bg-[#fbbf24]/10 mb-8 group-hover:w-full group-hover:bg-[#fbbf24]/30 transition-all duration-1000" />
        
        <p className="text-zinc-500 leading-relaxed font-light text-[16px] group-hover:text-zinc-300 transition-colors duration-500">
          {pillar.description}
        </p>
      </div>

      {/* Institutional Hardware Accents */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-t border-r border-[#fbbf24]/20" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-b border-l border-[#fbbf24]/20" />
      </div>
    </motion.div>
  );
}

export default function RealEstateProductPillars() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Architecture Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#fbbf24]/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOptions}
           className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {pillars.map((pillar, index) => (
            <EstatePillarCard key={index} pillar={pillar} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
