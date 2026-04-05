import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Cpu, Database, Activity } from 'lucide-react';

const pillars = [
  {
    title: "Deep Learning Alpha Generation",
    description: "Proprietary LLMs and quantitative models predicting market inefficiencies before they manifest. Our neural execution engines target non-correlated alpha vectors across global asset classes.",
    icon: <Cpu className="w-8 h-8 text-[#00ff00]" />,
  },
  {
    title: "High-Frequency Data Pipelines",
    description: "Ingesting petabytes of alternative data, satellite imagery, and sentiment analysis in real-time. Transform raw unstructured data into actionable predictive signals at machine-speed.",
    icon: <Database className="w-8 h-8 text-[#00ff00]" />,
  },
  {
    title: "Autonomous Execution Agents",
    description: "Machine-speed trade routing with zero human latency. Our autonomous workforce software ensures low-latency execution and dynamic portfolio rebalancing in high-volatility environments.",
    icon: <Activity className="w-8 h-8 text-[#00ff00]" />,
  },
];

/**
 * AI Product Pillars - Technical feature showcase for neural strategies.
 * Pure black terminal aesthetics with monospace typography.
 */
export default function AIProductPillars() {
  return (
    <section className="py-32 bg-[#000000] relative overflow-hidden border-t border-[#00ff00]/10">
      {/* Terminal Grid Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div 
          className="absolute inset-0 bg-line-grid [--grid-color:#00ff00] [--grid-size:40px]" 
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
              className="group relative p-10 bg-[#00ff00]/5 border border-[#00ff00]/20 hover:border-[#00ff00]/60 transition-all duration-500 overflow-hidden"
            >
              {/* Card Green Glow Detail */}
              <div className="absolute -inset-px bg-gradient-to-br from-[#00ff00]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="mb-8 inline-block p-4 border border-[#00ff00]/30 rounded group-hover:scale-105 transition-transform duration-500">
                  {pillar.icon}
                </div>
                
                <h3 className="text-[20px] font-bold text-white mb-6 tracking-tight uppercase font-mono group-hover:text-[#00ff00] transition-colors">
                  {pillar.title}
                </h3>
                
                <div className="w-12 h-px bg-[#00ff00]/20 mb-6 group-hover:w-full group-hover:bg-[#00ff00]/50 transition-all duration-700" />
                
                <p className="text-zinc-500 leading-relaxed font-mono text-[14px] group-hover:text-zinc-300 transition-colors">
                  {pillar.description}
                </p>
              </div>

              {/* Bottom corner hardware accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#00ff00]/20 group-hover:border-[#00ff00]/40 transition-colors" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
