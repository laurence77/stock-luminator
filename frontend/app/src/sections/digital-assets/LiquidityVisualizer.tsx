import { motion } from 'framer-motion';
import { useState } from 'react';

/**
 * LiquidityVisualizer - Interactive network visualization for Digital Assets.
 * Uses CSS grids and Framer Motion to simulate glowing data packets moving between network nodes.
 * Represents high-frequency arbitrage and MEV transaction flows.
 */
export default function LiquidityVisualizer() {
  // Nodes representation
  const nodes = [
    { x: '10%', y: '20%' }, { x: '80%', y: '15%' },
    { x: '15%', y: '75%' }, { x: '85%', y: '80%' },
    { x: '50%', y: '45%' },
  ];

  const paths = [
    [0, 4], [4, 1], [3, 4], [4, 2], [0, 2], [1, 3]
  ];

  // Stable random values for animation purity
  const [animationParams] = useState(() => 
    [...Array(8)].map(() => ({
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 2
    }))
  );

  return (
    <div className="w-full h-[400px] bg-white/5 border border-white/10 rounded-2xl relative overflow-hidden backdrop-blur-sm shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 liquidity-grid" />
      </div>

      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {paths.map(([from, to], idx) => (
          <motion.line
            key={idx}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke="#14f195"
            strokeWidth="0.5"
            strokeOpacity="0.2"
          />
        ))}
      </svg>

      {nodes.map((node, idx) => (
        <motion.div
          key={idx}
          className="absolute w-2 h-2 bg-[#14f195] rounded-full z-10 shadow-[0_0_10px_#14f195]"
          initial={{ left: node.x, top: node.y, x: "-50%", y: "-50%" }}
        >
          <div className="absolute inset-0 animate-ping bg-[#14f195] opacity-20 rounded-full" />
        </motion.div>
      ))}

      {[...Array(8)].map((_, idx) => {
        const pathIdx = idx % paths.length;
        const [from, to] = paths[pathIdx];
        const { duration, delay } = animationParams[idx];
        return (
          <motion.div
            key={idx}
            initial={{ left: nodes[from].x, top: nodes[from].y, x: "-50%", y: "-50%" }}
            animate={{ left: nodes[to].x, top: nodes[to].y, x: "-50%", y: "-50%" }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "linear",
              delay
            }}
            className="absolute w-1.5 h-1.5 bg-[#8b5cf6] rounded-full z-20 shadow-[0_0_8px_#8b5cf6]"
          />
        );
      })}

      <div className="absolute bottom-4 left-4 font-mono text-[9px] text-[#14f195]/60 uppercase tracking-widest">
        MEV_TRANSACTION_FLOW_V1
      </div>
    </div>
  );
}
