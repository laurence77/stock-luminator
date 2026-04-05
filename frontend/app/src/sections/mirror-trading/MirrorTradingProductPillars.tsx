import { motion } from 'framer-motion';
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

/**
 * MirrorTradingProductPillars - High-fidelity feature showcase for Mirror Trading.
 * Features dark glassmorphism and premium Navy/Slate accents.
 */
export default function MirrorTradingProductPillars() {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden border-t border-white/5">
      {/* Background Glass Blur Detail */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#38bdf8]/40 to-transparent" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOptions}
           className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative p-10 bg-white/5 border border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500 overflow-hidden backdrop-blur-xl rounded-2xl"
            >
              <div className="relative z-10">
                <div className="mb-8 inline-block p-4 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="text-[22px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#38bdf8] transition-colors">
                  {pillar.title}
                </h3>
                
                <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-full group-hover:bg-[#38bdf8]/50 transition-all duration-700" />
                
                <p className="text-zinc-400 leading-relaxed font-light text-[15px] group-hover:text-zinc-200 transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom corner detail */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/5 group-hover:border-[#38bdf8]/40 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
