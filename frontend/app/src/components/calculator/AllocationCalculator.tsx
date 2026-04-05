import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * AllocationCalculator - Institutional-grade portfolio simulation tool.
 * Features dynamic weightings across high-growth asset classes with real-time yield/risk modeling.
 */
export function AllocationCalculator() {
  const [allocations, setAllocations] = useState({
    aerospace: 30,
    ai: 40,
    crypto: 30,
  });

  const [metrics, setMetrics] = useState({
    yield: 0,
    risk: 0,
  });

  // Dynamic simulation logic - favors AI/Crypto for yield but increases risk variance
  useEffect(() => {
    const baseYield = (allocations.aerospace * 0.15) + (allocations.ai * 0.35) + (allocations.crypto * 0.45);
    const riskFactor = (allocations.aerospace * 0.2) + (allocations.ai * 0.5) + (allocations.crypto * 0.8);
    
    setMetrics({
      yield: Math.min(baseYield, 100),
      risk: Math.min(riskFactor / 10, 10),
    });
  }, [allocations]);

  const handleSliderChange = (key: keyof typeof allocations, val: number) => {
    const others = Object.keys(allocations).filter(k => k !== key) as (keyof typeof allocations)[];
    const remaining = 100 - val;
    const currentOthersTotal = allocations[others[0]] + allocations[others[1]];
    
    // Proportional redistribution of remaining percentage
    const ratio = currentOthersTotal > 0 ? remaining / currentOthersTotal : 0.5;
    
    setAllocations({
      ...allocations,
      [key]: val,
      [others[0]]: Math.round(allocations[others[0]] * ratio),
      [others[1]]: Math.round(allocations[others[1]] * ratio),
    });
  };

  return (
    <div className="w-full max-w-[600px] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden shadow-2xl">
      {/* Decorative gradient flare */}
      <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-[#7c3aed]/10 blur-[100px] rounded-full" />
      
      <div className="relative z-10">
        <div className="mb-8">
          <h3 className="text-[20px] font-bold text-white mb-2 tracking-tight uppercase">
            Portfolio Allocation Simulator
          </h3>
          <p className="text-[14px] text-gray-400 font-light">
            Adjust weightings to simulate institutional-grade alpha generation.
          </p>
        </div>

        <div className="space-y-8 mb-10">
          {/* Aerospace Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="aerospace-slider" className="text-[12px] font-bold tracking-widest text-[#00fbfb] uppercase">Aerospace / SpaceX</label>
              <span className="text-white font-mono font-bold">{allocations.aerospace}%</span>
            </div>
            <input 
              id="aerospace-slider"
              type="range"
              min="0"
              max="100"
              value={allocations.aerospace}
              onChange={(e) => handleSliderChange('aerospace', parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#00fbfb]"
            />
          </div>

          {/* AI Infrastructure Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="ai-slider" className="text-[12px] font-bold tracking-widest text-[#8b5cf6] uppercase">AI Infrastructure</label>
              <span className="text-white font-mono font-bold">{allocations.ai}%</span>
            </div>
            <input 
              id="ai-slider"
              type="range"
              min="0"
              max="100"
              value={allocations.ai}
              onChange={(e) => handleSliderChange('ai', parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#8b5cf6]"
            />
          </div>

          {/* Digital Assets Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label htmlFor="crypto-slider" className="text-[12px] font-bold tracking-widest text-[#14f195] uppercase">Digital Assets / MEV</label>
              <span className="text-white font-mono font-bold">{allocations.crypto}%</span>
            </div>
            <input 
              id="crypto-slider"
              type="range"
              min="0"
              max="100"
              value={allocations.crypto}
              onChange={(e) => handleSliderChange('crypto', parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#14f195]"
            />
          </div>
        </div>

        {/* Dynamic Metrics Display */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-8">
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2">Projected 5Y Yield</p>
            <AnimatePresence mode="wait">
              <motion.h4 
                key={metrics.yield}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[28px] font-black text-[#14f195] tracking-tighter"
              >
                {Math.round(metrics.yield)}%
              </motion.h4>
            </AnimatePresence>
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-2">Risk Variance Score</p>
            <motion.h4 
              key={metrics.risk}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[28px] font-black text-[#f97316] tracking-tighter"
            >
              {metrics.risk.toFixed(1)}/10
            </motion.h4>
          </div>
        </div>

        <div className="mt-8">
          <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-[12px] hover:bg-brand-purple hover:text-white transition-all rounded-lg active:scale-[0.98]">
            Lock Initial Allocation
          </button>
        </div>
      </div>
    </div>
  );
}
