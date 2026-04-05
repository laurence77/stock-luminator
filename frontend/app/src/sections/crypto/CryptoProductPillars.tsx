import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Zap, ShieldCheck, Lock } from 'lucide-react';

const pillars = [
  {
    title: "Zero-Slippage Execution",
    description: "Institutional liquidity routing utilizing atomic reverts for optimal trade settlement. Achieve best-in-class pricing across fragmented on-chain and off-chain liquidity pools.",
    icon: <Zap className="w-8 h-8 text-[#14f195]" />,
  },
  {
    title: "Advanced MEV Strategy Access",
    description: "Capitalize on on-chain inefficiencies via premium access to network block builders and Jito-style bundles. Our systematic alpha capture mitigates front-running while maximizing yield.",
    icon: <ShieldCheck className="w-8 h-8 text-[#14f195]" />,
  },
  {
    title: "Regulated Cold Storage",
    description: "Military-grade multi-sig offline custody for your long-term digital asset holdings. Insured, audited, and strictly compliant with global institutional tier-1 standards.",
    icon: <Lock className="w-8 h-8 text-[#14f195]" />,
  },
];

/**
 * Crypto Product Pillars - Cinematic feature showcase for core investment themes.
 * Uses Solana-green neon aesthetics and institutional staggered reveals.
 */
export default function CryptoProductPillars() {
  return (
    <section className="py-32 bg-[#0a0a0c] relative overflow-hidden border-t border-white/5">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="absolute inset-0 bg-line-grid [--grid-color:#14f195] [--grid-size:40px]" 
        />
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
              className="group relative p-10 bg-white/5 border border-white/10 hover:border-[#14f195]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#14f195]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-block p-4 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="text-[24px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#14f195] transition-colors">
                  {pillar.title}
                </h3>
                
                <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-full group-hover:bg-[#14f195]/50 transition-all duration-700" />
                
                <p className="text-gray-400 leading-relaxed font-light text-[15px] group-hover:text-gray-200 transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/5 group-hover:border-[#14f195]/40 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
