import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, viewportOptions } from '../../lib/animations';
import { pillars } from '@/data/tesla-content';
import type { TeslaPillar } from '@/data/tesla-content';

function PillarSection({ pillar }: { pillar: TeslaPillar }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center overflow-hidden border-b border-white/5">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={pillar.image} 
          alt={pillar.title} 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131318] via-[#131318]/40 to-transparent" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          style={{ opacity }}
          className="max-w-[600px]"
        >
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="space-y-6"
          >
            <span className="text-[12px] font-bold tracking-[0.4em] text-[#00fbfb] uppercase">
              {pillar.subtitle}
            </span>
            <h2 className="text-[48px] md:text-[64px] font-bold text-white tracking-[-0.04em] leading-[1.1]">
              {pillar.title}
            </h2>
            <p className="text-[18px] text-gray-400 leading-relaxed max-w-[500px]">
              {pillar.description}
            </p>

            <div className="flex gap-12 pt-8">
              {pillar.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-[24px] font-bold text-white tracking-tight">{stat.label}</div>
                  <div className="text-[11px] font-bold tracking-[0.2em] text-[#00fbfb] uppercase">{stat.value}</div>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <a 
                href={pillar.title === "Intelligent Mobility" ? "https://www.tesla.com/AI" : pillar.title === "General Purpose Robotics" ? "https://www.tesla.com/optimus" : "https://www.tesla.com/models"} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/5 hover:bg-[#00fbfb] text-white hover:text-[#131318] border border-white/10 px-8 py-4 text-[13px] font-bold tracking-[0.1em] uppercase transition-all backdrop-blur-xl inline-block text-center"
              >
                {pillar.cta}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function TeslaProductPillars() {
  return (
    <section>
      {pillars.map((pillar, idx) => (
        <PillarSection key={idx} pillar={pillar} />
      ))}
    </section>
  );
}
