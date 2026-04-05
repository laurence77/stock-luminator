import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';

const milestones = [
  {
    year: "1997",
    title: "Deep Blue: The Grandmaster",
    description: "IBM's Deep Blue defeats Garry Kasparov, proving machine superiority in limited-state strategic computation.",
  },
  {
    year: "2017",
    title: "The Transformer Revolution",
    description: "'Attention Is All You Need' paper introduces transformer architecture, the foundation for all modern LLMs.",
  },
  {
    year: "2023",
    title: "Generative AI Mainstream",
    description: "Massive scale deployment of generative models transformer global productivity and creative markets.",
  },
  {
    year: "Present",
    title: "Neural Financial Logic",
    description: "Machine-speed autonomous agents and predictive terminal execution dominate institutional alpha generation.",
  },
  {
    year: "Future",
    title: "Self-Sustaining AGI",
    description: "Deployment of autonomous infrastructure capable of recursive self-improvement and cross-continent compute sync.",
  },
];

/**
 * AI Timeline Section - Chronicle of machine intelligence evolution.
 * Features a glowing terminal-style corridor with monospace years.
 */
export default function AITimeline() {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden border-t border-[#00ff00]/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewportOptions}
            className="text-[12px] font-bold tracking-[0.4em] text-[#00ff00]/60 uppercase mb-4 font-mono"
          >
            Chronicle of Intelligence
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={viewportOptions}
             className="text-[32px] md:text-[54px] font-bold text-white uppercase leading-tight font-mono"
          >
            HISTORY OF THE <span className="text-[#00ff00]">NEURAL CORE.</span>
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Vertical Spine - Floating Monospace Terminal Green */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff00] via-cyan-500 to-[#00ff00]/20 hidden md:block" />
          
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
                {/* Milestone Node Dot - Monospace pulse */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-[#00ff00] rounded-none z-20 hidden md:block shadow-[0_0_15px_rgba(0,255,0,0.5)]" />
                
                {/* Content Card */}
                <div className="w-full md:w-[45%] group">
                  <div className="p-8 md:p-10 bg-[#00ff00]/5 border border-[#00ff00]/20 hover:border-[#00ff00]/60 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
                    {/* Glowing highlight */}
                    <div className={`absolute top-0 bottom-0 w-1 ${idx % 2 === 0 ? 'right-0' : 'left-0'} bg-[#00ff00] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <span className="text-[12px] font-bold tracking-[0.2em] text-[#00ff00] uppercase mb-4 block font-mono">
                        {milestone.year}
                      </span>
                      <h3 className="text-[20px] md:text-[24px] font-bold text-white mb-4 tracking-tight uppercase font-mono group-hover:text-[#00ff00] transition-colors">
                        {milestone.title}
                      </h3>
                      <p className="text-[14px] text-zinc-500 font-mono leading-relaxed group-hover:text-zinc-300 transition-colors">
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
    </section>
  );
}
