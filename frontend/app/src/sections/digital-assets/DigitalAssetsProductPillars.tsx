import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Share2, Zap, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    title: "Solana to Ares Migration Strategies",
    description: "Capitalizing on high-frequency cross-chain arbitrage and fragmented liquidity. Our proprietary migration logic identifies structural alpha across parallelized L1/L2 networks.",
    icon: <Share2 className="w-8 h-8 text-[#14f195]" />,
  },
  {
    title: "Advanced MEV Capture",
    description: "Utilizing proprietary Jito Bundles for optimized transaction sequencing and block-builder dominance. Maximize yield from structural network inefficiencies with zero slippage.",
    icon: <Zap className="w-8 h-8 text-[#14f195]" />,
  },
  {
    title: "Zero-Slippage Execution",
    description: "Leveraging Rust Atomic Reverts to ensure trades execute perfectly or not at all. Absolute protection from sandwich attacks and front-running in fragmented liquidity markets.",
    icon: <ShieldCheck className="w-8 h-8 text-[#14f195]" />,
  },
];

/**
 * DigitalAssetsProductPillars - High-fidelity feature showcase for Digital Asset strategies.
 * Pure charcoal aesthetics with vibrant Solana-green and purple accents.
 */
export default function DigitalAssetsProductPillars() {
  return (
    <section className="py-32 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Background Pulse Detail */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#14f195]/40 to-transparent z-10" />
      
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
              className="group relative p-10 bg-white/5 border border-white/10 hover:border-[#14f195]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Green Glow Detail */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#14f195]/10 via-[#8b5cf6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-block p-4 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="text-[22px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#14f195] transition-colors">
                  {pillar.title}
                </h3>
                
                <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-full group-hover:bg-[#14f195]/50 transition-all duration-700" />
                
                <p className="text-gray-400 leading-relaxed font-light text-[15px] group-hover:text-gray-200 transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom corner branding detail */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/5 group-hover:border-[#14f195]/40 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
