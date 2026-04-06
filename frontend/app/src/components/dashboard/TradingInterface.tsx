import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import * as Slider from '@radix-ui/react-slider';
import * as Switch from '@radix-ui/react-switch';
import { fadeInUp } from '@/lib/animations';
import { Zap, Shield, HelpCircle, Activity } from 'lucide-react';
import { useLiveMarketData } from '@/hooks/useLiveMarketData';

export default function TradingInterface() {
  const [allocation, setAllocation] = useState([25]);
  const [isEmergency, setIsEmergency] = useState(false);
  const { data, isConnected } = useLiveMarketData(['TSLA']);
  
  const currentPrice = data['TSLA']?.price || 240.42;

  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      className="bg-[#1b1b20] border border-white/5 rounded-3xl p-8 shadow-2xl h-full flex flex-col group"
    >
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#00fbfb]/10 border border-[#00fbfb]/20 flex items-center justify-center text-[#00fbfb]">
            <Zap size={20} />
          </div>
          <div>
            <h3 className="text-white text-[18px] font-bold tracking-tight">Execution Engine</h3>
            <p className="text-white/40 text-[12px]">HFT Optimized Proxy (TSLA)</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-col items-end mr-4">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Live Quote</span>
            <span className="text-[18px] font-black text-white font-mono">${currentPrice.toFixed(2)}</span>
          </div>
          <HelpCircle size={18} className="text-white/20 hover:text-white cursor-help transition-colors" />
        </div>
      </div>

      <Tabs.Root defaultValue="market" className="flex flex-col gap-8 flex-1">
        <Tabs.List className="flex gap-2 p-1.5 bg-[#131318] rounded-xl border border-white/5">
          {['Market', 'Limit', 'Algorithm'].map((tab) => (
            <Tabs.Trigger 
              key={tab.toLowerCase()}
              value={tab.toLowerCase()}
              className="px-6 py-2 rounded-lg text-[13px] font-bold text-white/40 hover:text-white transition-all duration-300 data-[state=active]:bg-white/10 data-[state=active]:text-[#00fbfb] data-[state=active]:shadow-lg"
            >
              {tab}
            </Tabs.Trigger>
          ))}
        </Tabs.List>

        <Tabs.Content value="market" className="flex flex-col gap-8 flex-1">
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-[13px] font-bold text-white/40 uppercase tracking-widest">Allocation Weight</label>
              <span className="text-[20px] font-black text-[#00fbfb] font-mono">{allocation}%</span>
            </div>
            
            <Slider.Root 
              className="relative flex items-center select-none touch-none w-full h-5"
              defaultValue={[25]}
              max={100}
              step={1}
              onValueChange={setAllocation}
              disabled={!isConnected}
            >
              <Slider.Track className="bg-white/5 relative grow rounded-full h-1.5 border border-white/5 overflow-hidden">
                <Slider.Range className="absolute bg-[#00fbfb] h-full" />
              </Slider.Track>
              <Slider.Thumb 
                className="block w-6 h-6 bg-white border-2 border-[#00fbfb] shadow-2xl rounded-full hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#00fbfb]/20 transition-all cursor-grab active:cursor-grabbing disabled:cursor-not-allowed" 
                aria-label="Allocation Weight"
              />
            </Slider.Root>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest px-2">Order Side</label>
              <button 
                disabled={!isConnected || isEmergency}
                className="w-full bg-[#00fbfb] hover:bg-[#6305ef] text-[#131318] hover:text-white disabled:bg-white/5 disabled:text-white/20 disabled:cursor-not-allowed py-4 rounded-xl text-[14px] font-black uppercase tracking-widest transition-all duration-500 shadow-xl shadow-[#00fbfb]/10 group overflow-hidden relative"
              >
                <span className="relative z-10">Buy TSLA</span>
                {isConnected && !isEmergency && (
                  <div className="absolute inset-0 bg-[#6305ef] -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                )}
              </button>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-bold text-white/40 uppercase tracking-widest px-2">Liquidity</label>
              <button 
                disabled={!isConnected || isEmergency}
                className="w-full bg-white/5 border border-white/10 hover:bg-rose-500/10 hover:border-rose-500/30 text-white/60 hover:text-rose-500 disabled:opacity-20 disabled:cursor-not-allowed py-4 rounded-xl text-[14px] font-black uppercase tracking-widest transition-all duration-500"
              >
                Sell TSLA
              </button>
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield size={16} className={isEmergency ? 'text-rose-500' : 'text-[#00fbfb]'} />
              <div className="flex flex-col">
                <span className="text-[12px] font-bold text-white">Emergency Stop</span>
                <span className="text-[10px] text-white/30 lowercase">Automated liquidation trigger</span>
              </div>
            </div>
            <Switch.Root 
              checked={isEmergency}
              onCheckedChange={setIsEmergency}
              className="w-11 h-6 bg-[#131318] border border-white/5 rounded-full relative shadow-inner data-[state=checked]:bg-rose-500/20 data-[state=checked]:border-rose-500/30 transition-all"
            >
              <Switch.Thumb className="block w-4 h-4 bg-white/10 border border-white/20 rounded-full transition-transform duration-300 translate-x-1 data-[state=checked]:translate-x-6 data-[state=checked]:bg-rose-500 data-[state=checked]:border-white/20" />
            </Switch.Root>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <Activity size={12} className={isConnected ? 'text-[#00fbfb] animate-pulse' : 'text-rose-500'} />
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isConnected ? 'text-white/20' : 'text-rose-500'}`}>
              {isConnected ? 'Bridge Synchronized' : 'Bridge Terminated'}
            </span>
          </div>
        </Tabs.Content>
      </Tabs.Root>

      {/* Decorative pulse element */}
      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00fbfb] animate-ping opacity-20" />
    </motion.div>
  );
}
