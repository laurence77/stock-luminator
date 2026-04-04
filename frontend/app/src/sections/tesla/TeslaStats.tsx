import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../../lib/animations';

const stats = [
  {
    label: "Projected Market Cap",
    value: "$8.5T",
    subtext: "Master Plan IV Target",
  },
  {
    label: "2025 Milestone",
    value: "Inflection Point",
    subtext: "Autonomous Driving Wave",
  },
  {
    label: "Institutional Holders",
    value: "Overwhelmingly Approved",
    subtext: "2025 CEO Performance Award",
  }
];

export default function TeslaStats() {
  return (
    <section className="py-32 bg-[#131318] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6305ef]/5 blur-[120px] -translate-y-1/2 translate-x-1/3 rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOptions}
            className="text-[12px] font-bold tracking-[0.4em] text-[#00fbfb] uppercase"
          >
            The Calculus of Growth
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[44px] font-bold text-white max-w-[800px] leading-tight tracking-[-0.04em]"
          >
            Tesla is currently on the precipice of its most significant transformational wave to date.
          </motion.p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/10"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              variants={fadeInUp}
              className="bg-[#1b1b20] p-12 hover:bg-[#2a292f] transition-colors duration-500 group relative overflow-hidden"
            >
              {/* Hover highlight */}
              <div className="absolute top-0 left-0 w-1 h-0 bg-[#00fbfb] group-hover:h-full transition-all duration-700" />
              
              <p className="text-[12px] font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
                {stat.label}
              </p>
              <h3 className="text-[48px] font-extrabold text-[#00fbfb] mb-4 tracking-[-0.04em]">
                {stat.value}
              </h3>
              <p className="text-[17px] text-gray-400 font-medium">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
