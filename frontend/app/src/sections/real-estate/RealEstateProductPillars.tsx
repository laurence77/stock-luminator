import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Warehouse, Building2, Landmark } from 'lucide-react';

const pillars = [
  {
    title: "Global Logistics REITs",
    description: "Position your portfolio in the e-commerce backbone. High-yield logistics infrastructure, fulfillment centers, and port assets with institutional NNN lease terms.",
    icon: <Warehouse className="w-8 h-8 text-[#EAB308]" />,
  },
  {
    title: "Multi-Family Infrastructure",
    description: "Stable, recession-resistant yield through strategic multi-family housing developments and institutional-grade residential clusters in high-growth urban corridors.",
    icon: <Building2 className="w-8 h-8 text-[#EAB308]" />,
  },
  {
    title: "NNN Institutional Leasehold",
    description: "Absolute triple-net leases with investment-grade corporate tenants. Long-term structural income with inflation-protected annual base rent escalators.",
    icon: <Landmark className="w-8 h-8 text-[#EAB308]" />,
  },
];

/**
 * RealEstateProductPillars - High-fidelity feature showcase for Commercial Infrastructure.
 * Features cinematic dark aesthetics with gold architectural highlights.
 */
export default function RealEstateProductPillars() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
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
              className="group relative p-10 bg-white/5 border border-white/10 hover:border-[#EAB308]/30 transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                <div className="mb-8 inline-block p-4 bg-white/5 border border-white/10 rounded-xl group-hover:scale-105 transition-transform duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="text-[22px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#EAB308] transition-colors">
                  {pillar.title}
                </h3>
                
                <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-full group-hover:bg-[#EAB308]/50 transition-all duration-700" />
                
                <p className="text-gray-400 leading-relaxed font-light text-[15px] group-hover:text-gray-200 transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom corner detail */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/5 group-hover:border-[#EAB308]/40 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
