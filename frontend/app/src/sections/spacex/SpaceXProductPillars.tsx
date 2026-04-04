import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Satellite, Rocket, Globe } from 'lucide-react';

const pillars = [
  {
    title: "Starlink: The Global Network",
    description: "Capitalize on the world's most advanced broadband satellite internet system. Starlink is rapidly capturing the multi-trillion dollar global telecommunications market with unparalleled low-latency coverage.",
    icon: <Satellite className="w-8 h-8 text-[#00fbfb]" />,
  },
  {
    title: "Launch Monopoly",
    description: "SpaceX has revolutionized orbital mechanics with fully reusable rocket architecture. By drastically lowering the cost to orbit, they have secured a de facto monopoly on global commercial and government launch contracts.",
    icon: <Rocket className="w-8 h-8 text-[#00fbfb]" />,
  },
  {
    title: "The Starship Economy",
    description: "Position your portfolio for the next frontier. Starship is the most powerful launch vehicle ever developed, designed to establish a permanent human presence on Mars and unlock the deep space asteroid mining economy.",
    icon: <Globe className="w-8 h-8 text-[#00fbfb]" />,
  },
];

/**
 * SpaceX Product Pillars - Cinematic feature showcase for core investment themes.
 * Uses high-contrast dark aesthetics and institutional staggered reveals.
 */
export default function SpaceXProductPillars() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)' }} 
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
              className="group relative p-10 bg-white/5 border border-white/10 hover:border-[#00fbfb]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#00fbfb]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-block p-4 bg-white/5 border border-white/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="text-[24px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#00fbfb] transition-colors">
                  {pillar.title}
                </h3>
                
                <div className="w-12 h-px bg-white/20 mb-6 group-hover:w-full group-hover:bg-[#00fbfb]/50 transition-all duration-700" />
                
                <p className="text-gray-400 leading-relaxed font-light text-[15px] group-hover:text-gray-200 transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-white/5 group-hover:border-[#00fbfb]/40 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
