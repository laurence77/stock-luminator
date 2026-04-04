import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../../lib/animations';

const ecosystem = [
  {
    title: "V12 Full Self-Driving",
    description: "Neural network-based AI driving kernels identify predictive pattern clusters globally, moving toward Level 5 autonomy.",
    icon: "🚗",
    color: "#00fbfb",
  },
  {
    title: "Optimus Robotics",
    description: "The greatest product in the history of humanity. Autonomous bipeds designed to revolutionize the global labor economy.",
    icon: "🤖",
    color: "#6305ef",
  },
  {
    title: "Solar & Energy",
    description: "Multi-gigawatt-hour energy storage and sustainable generation frameworks securing the future of the grid.",
    icon: "☀️",
    color: "#00fbfb",
  }
];

export default function TeslaEcosystem() {
  return (
    <section className="py-32 bg-[#1b1b20] relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[44px] font-bold text-white tracking-[-0.04em]"
          >
            A Holistic Transformation <br />
            <span className="text-white/40">Beyond Automotive.</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={viewportOptions}
            className="h-1 bg-[#00fbfb] mx-auto" 
          />
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {ecosystem.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-[#131318]/50 backdrop-blur-xl border border-white/5 p-10 hover:border-[#00fbfb]/30 transition-all duration-500 group"
            >
              <div className="text-[40px] mb-8 grayscale group-hover:grayscale-0 transition-all duration-700">
                {item.icon}
              </div>
              <h3 className="text-[20px] font-bold text-white mb-4 uppercase tracking-[-0.02em]">
                {item.title}
              </h3>
              <p className="text-[16px] text-gray-400 leading-relaxed">
                {item.description}
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#00fbfb] uppercase">Institutional Grade</span>
                <div className="w-8 h-[2px] bg-white/10 group-hover:bg-[#00fbfb] transition-colors" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
