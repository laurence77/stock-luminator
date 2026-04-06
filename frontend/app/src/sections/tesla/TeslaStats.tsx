import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../../lib/animations';
import { stats } from '@/data/tesla-content';
import type { TeslaStat } from '@/data/tesla-content';

function StatCard({ stat }: { stat: TeslaStat }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="bg-[#1b1b20] p-12 hover:bg-[#2a292f]/50 transition-colors duration-500 group relative overflow-hidden border border-white/5"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 251, 251, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      
      {/* Decorative side border */}
      <div className="absolute top-0 left-0 w-1 h-0 bg-[#00fbfb] group-hover:h-full transition-all duration-700" />
      
      <p className="text-[12px] font-bold tracking-[0.2em] text-white/40 uppercase mb-8 relative z-10">
        {stat.label}
      </p>
      <h3 className="text-[48px] font-extrabold text-[#00fbfb] mb-4 tracking-[-0.04em] relative z-10">
        {stat.value}
      </h3>
      <p className="text-[17px] text-gray-400 font-medium relative z-10">
        {stat.subtext}
      </p>
    </motion.div>
  );
}

export default function TeslaStats() {
  return (
    <section className="py-32 bg-[#131318] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#6305ef]/5 blur-[120px] -translate-y-1/2 translate-x-1/3 rounded-full pointer-events-none" />
      
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
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10"
        >
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
