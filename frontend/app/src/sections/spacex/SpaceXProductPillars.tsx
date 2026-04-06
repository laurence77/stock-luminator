import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
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

function PillarCard({ pillar }: { pillar: typeof pillars[0] }) {
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
      className="group relative p-12 bg-[#0a0a0f] border border-white/5 hover:border-[#00fbfb]/20 transition-all duration-500 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(0, 251, 251, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-10 inline-block p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:scale-110 group-hover:border-[#00fbfb]/30 transition-all duration-700">
          {pillar.icon}
        </div>
        
        <h3 className="text-[26px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#00fbfb] transition-colors duration-500">
          {pillar.title}
        </h3>
        
        <div className="w-16 h-px bg-white/10 mb-8 group-hover:w-full group-hover:bg-[#00fbfb]/30 transition-all duration-1000" />
        
        <p className="text-zinc-500 leading-relaxed font-light text-[16px] group-hover:text-zinc-300 transition-colors duration-500">
          {pillar.description}
        </p>
      </div>

      {/* Institutional Hardware Accents */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-t border-r border-white/20" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-b border-l border-white/20" />
      </div>
    </motion.div>
  );
}

export default function SpaceXProductPillars() {
  return (
    <section className="py-32 bg-[#020205] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Cosmic Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00fbfb]/20 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00fbfb]/20 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOptions}
           className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {pillars.map((pillar, index) => (
            <PillarCard key={index} pillar={pillar} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
