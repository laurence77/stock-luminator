import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '@/lib/animations';
import { Zap, ShieldCheck, Lock } from 'lucide-react';

const pillars = [
  {
    title: "Zero-Slippage Execution",
    description: "Institutional liquidity routing utilizing atomic reverts for optimal trade settlement. Achieve best-in-class pricing across fragmented on-chain and off-chain liquidity pools.",
    icon: <Zap className="w-8 h-8 text-[#14f195]" />,
  },
  {
    title: "Advanced MEV Strategy Access",
    description: "Capitalize on on-chain inefficiencies via premium access to network block builders and Jito-style bundles. Our systematic alpha capture mitigates front-running while maximizing yield.",
    icon: <ShieldCheck className="w-8 h-8 text-[#14f195]" />,
  },
  {
    title: "Regulated Cold Storage",
    description: "Military-grade multi-sig offline custody for your long-term digital asset holdings. Insured, audited, and strictly compliant with global institutional tier-1 standards.",
    icon: <Lock className="w-8 h-8 text-[#14f195]" />,
  },
];

function CryptoPillarCard({ pillar }: { pillar: typeof pillars[0] }) {
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
      className="group relative p-12 bg-[#0a0a0f] border border-[#14f195]/5 hover:border-[#14f195]/20 transition-all duration-500 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(20, 241, 149, 0.08),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10">
        <div className="mb-10 inline-block p-4 bg-[#14f195]/5 border border-[#14f195]/10 rounded-2xl group-hover:scale-110 group-hover:border-[#14f195]/30 transition-all duration-700">
          {pillar.icon}
        </div>
        
        <h3 className="text-[26px] font-bold text-white mb-6 tracking-tight uppercase group-hover:text-[#14f195] transition-colors duration-500">
          {pillar.title}
        </h3>
        
        <div className="w-16 h-px bg-[#14f195]/10 mb-8 group-hover:w-full group-hover:bg-[#14f195]/30 transition-all duration-1000" />
        
        <p className="text-zinc-500 leading-relaxed font-light text-[16px] group-hover:text-zinc-300 transition-colors duration-500">
          {pillar.description}
        </p>
      </div>

      {/* Institutional Hardware Accents */}
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-t border-r border-[#14f195]/20" />
      </div>
      <div className="absolute bottom-0 left-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
        <div className="w-8 h-8 border-b border-l border-[#14f195]/20" />
      </div>
    </motion.div>
  );
}

export default function CryptoProductPillars() {
  return (
    <section className="py-32 bg-[#030306] relative overflow-hidden border-t border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#14f195]/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8b5cf6]/10 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           variants={staggerContainer}
           initial="hidden"
           whileInView="visible"
           viewport={viewportOptions}
           className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {pillars.map((pillar, index) => (
            <CryptoPillarCard key={index} pillar={pillar} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
