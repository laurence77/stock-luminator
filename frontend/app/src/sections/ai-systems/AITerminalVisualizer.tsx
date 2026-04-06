import { useState, useEffect, useRef } from 'react';
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

export default function AITerminalVisualizer() {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (index < codeLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, codeLines[index]]);
        setIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      const reset = setTimeout(() => {
        setVisibleLines([]);
        setIndex(0);
      }, 6000);
      return () => clearTimeout(reset);
    }
  }, [index]);

  return (
    <div 
      ref={containerRef}
      className="w-full h-[450px] bg-[#050510] border border-[#00ff00]/20 rounded-2xl p-8 font-mono text-[13px] text-[#00ff00] relative overflow-hidden shadow-[0_0_80px_rgba(0,255,0,0.05)] group"
    >
      {/* Dynamic Binary Matrix Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden content-none after:content-['01101010010111101010101010111010101010011110101010101011101010101001111010101010101110101010100111101010101010111010'] after:block after:whitespace-nowrap after:animate-pulse after:text-[10px]" />
      
      {/* High-Fidelity CRT Scanlines */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-20 mix-blend-overlay">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,.06),rgba(0,255,0,.02),rgba(0,0,255,.06))] bg-[length:100%_4px,3px_100%]" />
      </div>

      {/* Terminal Glow */}
      <div className="absolute inset-0 bg-radial-at-c from-[#00ff00]/5 to-transparent opacity-50 pointer-events-none" />

      <div className="relative z-10 space-y-2">
        <div className="flex items-center justify-between border-b border-[#00ff00]/10 pb-4 mb-6">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
          </div>
          <span className="text-[10px] font-bold tracking-[0.2em] opacity-40 uppercase">Root@Luminator-OS</span>
        </div>

        <div className="h-[300px] overflow-hidden">
          <AnimatePresence mode="popLayout">
            {visibleLines.map((line, idx) => (
              <motion.div
                key={line + idx}
                initial={{ opacity: 0, x: -10, y: 5 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mb-1.5 flex items-start gap-3"
              >
                <span className="opacity-20 text-[10px] py-0.5">{idx.toString().padStart(3, '0')}</span>
                <span className={`${line.includes('SYMBOL') ? 'text-cyan-400 font-black' : line.includes('EXECUTING') ? 'text-white' : 'text-[#00ff00]'} drop-shadow-[0_0_5px_rgba(0,255,0,0.3)]`}>
                  {line}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block w-2.5 h-4 bg-[#00ff00] ml-2 align-middle shadow-[0_0_8px_#00ff00]"
          />
        </div>
      </div>

      {/* Footer System Stats */}
      <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between border-t border-[#00ff00]/10 pt-4 text-[10px] font-bold tracking-widest opacity-40 uppercase">
        <div className="flex gap-6">
          <span>Speed: &lt;1ms</span>
          <span>Buffer: 1048kb</span>
        </div>
        <div className="flex gap-2 items-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00ff00] animate-pulse" />
          <span>Sync: Real-Time</span>
        </div>
      </div>
    </div>
  );
}
