import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const milestones = [
  {
    year: "2008",
    title: "Falcon 1 Reaches Orbit",
    description: "First privately funded liquid-fueled rocket to reach orbit, saving the company from bankruptcy.",
  },
  {
    year: "2015",
    title: "The First Landing",
    description: "Falcon 9 successfully lands an orbital-class booster, proving reusability is viable.",
  },
  {
    year: "2020",
    title: "Commercial Crew",
    description: "SpaceX safely delivers NASA astronauts to the ISS, restoring American human spaceflight.",
  },
  {
    year: "Present",
    title: "Starlink & Starship",
    description: "Deploying the global broadband network while actively flight-testing the largest vehicle in human history.",
  },
  {
    year: "Future",
    title: "Multiplanetary Species",
    description: "Establishing a self-sustaining city on Mars and unlocking the asteroid mining economy.",
  },
];

/**
 * SpaceX Timeline Section - History of execution and future projections.
 * Features a high-fidelity vertical spine with glowing "Antigravity" physics.
 */
export default function SpaceXTimeline() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            className="text-[12px] font-bold tracking-[0.4em] text-white/40 uppercase mb-4"
          >
            Chronicle of Execution
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[32px] md:text-[54px] font-black text-white uppercase leading-tight tracking-tighter"
          >
            HISTORY OF THE <span className="bg-gradient-to-r from-[#00fbfb] to-[#f97316] bg-clip-text text-transparent">FUTURE.</span>
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Vertical Spine - Floating Gradient */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00fbfb] via-[#f97316] to-[#00fbfb]/20 hidden md:block" />
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-20 relative"
          >
            {milestones.map((milestone, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Milestone Node Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#050505] border-2 border-[#f97316] rounded-full z-20 hidden md:block shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                
                {/* Content Card */}
                <div className="w-full md:w-[45%] group">
                  <div className="p-8 md:p-10 bg-white/5 border border-white/10 hover:border-[#00fbfb]/30 transition-all duration-500 rounded-2xl relative overflow-hidden backdrop-blur-sm">
                    {/* Glowing highlight */}
                    <div className={`absolute top-0 bottom-0 w-1 ${idx % 2 === 0 ? 'right-0' : 'left-0'} bg-[#00fbfb] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <span className="text-[12px] font-bold tracking-[0.2em] text-[#f97316] uppercase mb-4 block">
                        {milestone.year}
                      </span>
                      <h3 className="text-[24px] md:text-[28px] font-bold text-white mb-4 tracking-tight uppercase">
                        {milestone.title}
                      </h3>
                      <p className="text-[15px] text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-full md:w-[45%] hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative orbital flare background */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#00fbfb]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f97316]/5 blur-[160px] rounded-full pointer-events-none" />
    </section>
  );
}
