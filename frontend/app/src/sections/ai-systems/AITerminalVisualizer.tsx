import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const codeLines = [
  "> INITIALIZING NEURAL ENGINE...",
  "> LOADING HISTORICAL DATA (1997-2024)...",
  "> ANALYZING ALTERNATIVE DATA PETABYTES...",
  "> PREDICTIVE MODEL: CALIBRATED (99.9% CONF)",
  "> ALIGNING QUARK-ALPHA VECTORS...",
  "> TARGET ACQUIRED: SYMBOL: NVDA | PRICE: UNSTABLE",
  "> EXECUTING ATOM-SWAP...",
  "> STATUS: POSITION SECURED (<1MS)",
  "> ---------------------------------------",
  "> SYNCING LLM WEIGHTS ACROSS HYPERSCALE...",
  "> SYSTEM ONLINE: AGI-READY DATA PIPELINE",
];

/**
 * AITerminalVisualizer - Monospace terminal simulation for AI-systems landing page.
 * Uses a typing effect to visualize live trade logic and data ingestion.
 */
export default function AITerminalVisualizer() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < codeLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, codeLines[index]]);
        setIndex((prev) => prev + 1);
      }, 1200);
      return () => clearTimeout(timeout);
    } else {
      // Loop after completion
      const reset = setTimeout(() => {
        setVisibleLines([]);
        setIndex(0);
      }, 5000);
      return () => clearTimeout(reset);
    }
  }, [index]);

  return (
    <div className="w-full h-[400px] bg-black border border-[#00ff00]/30 rounded-lg p-6 font-mono text-[13px] text-[#00ff00] relative overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.1)]">
      {/* Terminal Scanline Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
      
      <div className="relative z-0">
        <AnimatePresence>
          {visibleLines.map((line, idx) => (
            <motion.div
              key={line + idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-1.5 flex items-start gap-2"
            >
              <span className="opacity-40">{idx.toString().padStart(2, '0')}</span>
              <span className={line.startsWith('>') ? 'text-[#00ff00]' : 'text-cyan-400'}>
                {line}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Blinking Cursor */}
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2.5 h-4 bg-[#00ff00] ml-2"
        />
      </div>

      {/* Decorative terminal header detail */}
      <div className="absolute top-2 right-4 flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full border border-[#00ff00]/20" />
        <div className="w-2.5 h-2.5 rounded-full border border-[#00ff00]/20" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#00ff00]/40" />
      </div>
    </div>
  );
}
