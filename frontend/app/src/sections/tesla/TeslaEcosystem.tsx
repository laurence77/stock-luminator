import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../../lib/animations';
import { ecosystem } from '@/data/tesla-content';
import type { TeslaEcosystemItem } from '@/data/tesla-content';
import TeslaLogo from '../../../public/images/tesla/logo.svg?react';
import SpaceXLogo from '../../../public/images/tesla/spacex.svg?react';

function EcosystemCard({ item }: { item: TeslaEcosystemItem }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const isTesla = item.title.includes("Tesla") || item.title.includes("Network");

  return (
    <motion.div 
      variants={fadeInUp}
      onMouseMove={handleMouseMove}
      className="bg-[#131318]/50 backdrop-blur-xl border border-white/5 p-10 hover:border-[#00fbfb]/30 transition-all duration-500 group relative overflow-hidden"
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
      
      <div className="h-[200px] flex items-center justify-center mb-8 relative z-10 overflow-hidden rounded-xl border border-white/5 bg-black/20">
        {item.isLogo ? (
          <div className="flex items-center justify-center p-12">
            {isTesla ? (
              <TeslaLogo className="h-12 w-auto fill-white opacity-40 group-hover:opacity-100 transition-all duration-500" />
            ) : (
              <SpaceXLogo className="h-10 w-auto fill-white opacity-40 group-hover:opacity-100 transition-all duration-500" />
            )}
          </div>
        ) : (
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100" 
          />
        )}
      </div>

      <h3 className="text-[20px] font-bold text-white mb-4 uppercase tracking-[-0.02em] relative z-10">
        {item.title}
      </h3>
      <p className="text-[16px] text-gray-400 leading-relaxed relative z-10">
        {item.description}
      </p>
      
      <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
        <span className="text-[11px] font-bold tracking-[0.2em] text-[#00fbfb] uppercase">Institutional Grade</span>
        <div className="w-8 h-[2px] bg-white/10 group-hover:bg-[#00fbfb] transition-colors" />
      </div>
    </motion.div>
  );
}

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
            <EcosystemCard key={idx} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
