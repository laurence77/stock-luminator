import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const mockTrades = [
  { id: 1, type: "LONG", asset: "TSLA", price: "$210.45", group: "AlphaFund", status: "SYNCED" },
  { id: 2, type: "SHORT", asset: "AAPL", price: "$185.30", group: "QuantDesk", status: "MIRRORED" },
  { id: 3, type: "LONG", asset: "BTC", price: "$64,200", group: "DigitalAssetLayer", status: "EXECUTED" },
  { id: 4, type: "LONG", asset: "NVDA", price: "$850.12", group: "NeuralCore", status: "SYNCED" },
  { id: 5, type: "CLOSE", asset: "SPY", price: "$510.88", group: "GlobalMacro", status: "CLOSED" },
];

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
    <div className="w-full max-w-[800px] border border-white/5 bg-[#0a0a0f]/80 backdrop-blur-3xl rounded-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)]">
      {/* Header Ledger */}
      <div className="p-6 bg-white/5 border-b border-white/5 flex justify-between items-center bg-gradient-to-r from-white/5 to-transparent">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] animate-ping absolute inset-0" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#38bdf8] relative z-10" />
          </div>
          <span className="text-[11px] font-black tracking-[0.3em] text-[#38bdf8] uppercase">Institutional Sync Ledger</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">Strategy_Node_42</span>
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Lat: 4ms</span>
        </div>
      </div>

      <div className="p-4 space-y-3 max-h-[400px] overflow-hidden relative min-h-[360px]">
        {/* Dynamic Shadow Corridor */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0a0a0f] to-transparent z-10 opacity-60 pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0a0a0f] to-transparent z-10 opacity-60 pointer-events-none" />
        
        <AnimatePresence mode="popLayout">
          {trades.map((trade) => (
            <motion.div
              key={trade.id}
              layout
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="p-5 bg-white/5 border border-white/5 rounded-xl flex items-center justify-between group hover:bg-white/10 transition-all duration-300 hover:border-[#38bdf8]/20"
            >
              <div className="flex items-center gap-6">
                <span className={`text-[10px] font-black px-3 py-1 rounded-sm tracking-widest ${
                  trade.type === 'LONG' ? 'bg-[#38bdf8]/20 text-[#38bdf8]' : 
                  trade.type === 'SHORT' ? 'bg-red-500/20 text-red-400' : 
                  'bg-white/10 text-white/40'
                }`}>
                  {trade.type}
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-[16px] font-black tracking-tight group-hover:text-[#38bdf8] transition-colors">{trade.asset}</span>
                  <span className="text-zinc-600 font-mono text-[11px] font-medium tracking-tight">Price: {trade.price}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-10">
                <div className="hidden lg:flex flex-col items-end gap-0.5">
                  <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">{trade.group}</span>
                  <span className="text-[9px] font-mono text-zinc-700 tracking-tighter">ID_SYNC_0x92f...</span>
                </div>
                <div className="flex flex-col items-end">
                   <div className="flex items-center gap-2">
                     <span className="text-[11px] font-black text-white tracking-[0.2em] uppercase">{trade.status}</span>
                     <div className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] shadow-[0_0_8px_#38bdf8]" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Footer Metadata */}
      <div className="px-8 py-5 bg-white/5 border-t border-white/5 flex justify-between items-center opacity-30">
        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.3em]">
          Ledger_Verified_AES256
        </span>
        <div className="flex gap-2">
           <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
           <div className="w-1 h-1 rounded-full bg-white animate-pulse delay-75" />
           <div className="w-1 h-1 rounded-full bg-white animate-pulse delay-150" />
        </div>
      </div>
    </div>
  );
}
