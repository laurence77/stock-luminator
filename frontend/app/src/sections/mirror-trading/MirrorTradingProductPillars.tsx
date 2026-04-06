import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { UserCheck, RefreshCw, Sliders } from 'lucide-react';

const pillars = [
  {
    title: "Top-Tier Alpha Creators",
    description: "Mirror the exact trades of verified, regulated hedge fund managers and quantitative desks. Access exclusive institutional alpha with full transparency.",
    icon: <UserCheck className="w-8 h-8 text-[#38bdf8]" />,
  },
  {
    title: "Real-Time Ledger Sync",
    description: "Millisecond-precision portfolio replication ensuring your entry and exit prices match the master account. Eliminate slippage and timing risk with atomic replication.",
    icon: <RefreshCw className="w-8 h-8 text-[#38bdf8]" />,
  },
  {
    title: "Granular Risk Controls",
    description: "Set strict drawdown limits, asset allocation caps, and leverage controls independently of the copied trader. Retain absolute sovereignty over your capital.",
    icon: <Sliders className="w-8 h-8 text-[#38bdf8]" />,
  },
];

function MirrorPillarCard({ pillar }: { pillar: typeof pillars[0] }) {
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
      className="group relative p-12 bg-[#0a0a0f] border border-white/5 hover:border-[#38bdf8]/20 transition-all duration-500 overflow-hidden backdrop-blur-xl rounded-2xl"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(56, 189, 248, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-10 inline-block p-4 bg-[#38bdf8]/5 border border-[#38bdf8]/10 rounded-2xl group-hover:scale-110 group-hover:border-[#38bdf8]/30 transition-all duration-700">
          {pillar.icon}
        </div>
        
        <h3 className="text-[26px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#38bdf8] transition-colors duration-500">
          {pillar.title}
        </h3>
        
        <div className="w-16 h-px bg-[#38bdf8]/10 mb-8 group-hover:w-full group-hover:bg-[#38bdf8]/30 transition-all duration-1000" />
        
        <p className="text-zinc-500 leading-relaxed font-light text-[16px] group-hover:text-zinc-300 transition-colors duration-500">
          {pillar.description}
        </p>
      </div>

      {/* Institutional Hardware Accents */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-t border-r border-[#38bdf8]/20" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-b border-l border-[#38bdf8]/20" />
      </div>
    </motion.div>
  );
}

export default function MirrorTradingProductPillars() {
  return (
    <section className="py-32 bg-[#02040a] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Sync Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#38bdf8]/10 to-transparent" />
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
            <MirrorPillarCard key={index} pillar={pillar} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
