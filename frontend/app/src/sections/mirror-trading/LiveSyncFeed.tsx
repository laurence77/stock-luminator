import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const mockTrades = [
  { id: 1, type: "LONG", asset: "TSLA", price: "$210.45", group: "AlphaFund", status: "SYNCED" },
  { id: 2, type: "SHORT", asset: "AAPL", price: "$185.30", group: "QuantDesk", status: "MIRRORED" },
  { id: 3, type: "LONG", asset: "BTC", price: "$64,200", group: "DigitalAssetLayer", status: "EXECUTED" },
  { id: 4, type: "LONG", asset: "NVDA", price: "$850.12", group: "NeuralCore", status: "SYNCED" },
  { id: 5, type: "CLOSE", asset: "SPY", price: "$510.88", group: "GlobalMacro", status: "CLOSED" },
];

/**
 * LiveSyncFeed - Real-time portfolio synchronization ticker.
 * Simulates institutional copy trading with millisecond-precision ledger replication.
 */
export default function LiveSyncFeed() {
  const [trades, setTrades] = useState(mockTrades);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrades(prev => {
        const next = [...prev];
        const removed = next.shift();
        if (removed) next.push({ ...removed, id: Date.now() });
        return next;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-[800px] border border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden shadow-2xl">
      <div className="p-4 bg-white/10 border-b border-white/10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#14f195] animate-pulse" />
          <span className="text-[10px] font-bold tracking-widest text-[#14f195] uppercase">Institutional Sync Feed</span>
        </div>
        <span className="text-[10px] font-mono text-white/40 uppercase">Latency: 4ms</span>
      </div>

      <div className="p-2 space-y-2 max-h-[320px] overflow-hidden relative">
        {/* Mirroring Corridor Gradient */}
        <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[#0a0a0c] to-transparent z-10 opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10 opacity-50" />
        
        <AnimatePresence mode="popLayout">
          {trades.map((trade) => (
            <motion.div
              key={trade.id}
              layout
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-white/5 border border-white/5 flex items-center justify-between hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${trade.type === 'LONG' ? 'bg-[#14f195]/20 text-[#14f195]' : trade.type === 'SHORT' ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white/60'}`}>
                  {trade.type}
                </span>
                <span className="text-white font-bold tracking-tight">{trade.asset}</span>
                <span className="text-white/40 font-mono text-[12px]">@ {trade.price}</span>
              </div>
              
              <div className="flex items-center gap-6">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">{trade.group}</span>
                <span className="text-[10px] font-bold text-[#00fbfb] uppercase tracking-widest">{trade.status}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="p-4 bg-white/5 border-t border-white/10 text-center">
        <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
          End-to-End Encryption Enabled // AES-256
        </span>
      </div>
    </div>
  );
}
