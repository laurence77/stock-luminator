import { motion } from 'framer-motion';
import { staggerContainer, fadeInUp, viewportOptions } from '@/lib/animations';
import PerformanceChart from '@/components/dashboard/PerformanceChart';
import InstitutionalLedger from '@/components/dashboard/InstitutionalLedger';
import TradingInterface from '@/components/dashboard/TradingInterface';
import { 
  TrendingUp, 
  Users, 
  Cpu, 
  Globe, 
  ArrowUpRight, 
  MoreHorizontal 
} from 'lucide-react';

const stats = [
  { label: 'Total Portfolio Value', value: '$852,409.12', change: '+12.5%', icon: TrendingUp, color: '#00fbfb' },
  { label: 'Active Allocations', value: '14 Assets', change: '8 sectors', icon: Globe, color: '#6305ef' },
  { label: 'AI Execution Rate', value: '98.2%', change: 'Low Latency', icon: Cpu, color: '#00fbfb' },
  { label: 'Institutional Sync', value: 'Verified', change: 'Tier-1', icon: Users, color: '#6305ef' },
];

export default function TeslaDashboard() {
  return (
    <div className="space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <h1 className="text-[32px] md:text-[40px] font-black tracking-tight text-white">
            Command <span className="text-[#00fbfb]">Center.</span>
          </h1>
          <p className="text-white/40 text-[15px] font-medium">Real-time institutional asset management and execution.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-3"
        >
          <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[13px] font-bold hover:bg-white/10 transition-all">
            Generate Report
          </button>
          <button className="px-6 py-3 bg-[#00fbfb] text-[#131318] rounded-xl text-[13px] font-black uppercase tracking-widest hover:bg-[#6305ef] hover:text-white transition-all shadow-lg shadow-[#00fbfb]/10">
            Open Terminal
          </button>
        </motion.div>
      </div>

      {/* Quick Stats Grid */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            variants={fadeInUp}
            className="bg-[#1b1b20] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-[#00fbfb]/30 transition-all duration-500"
          >
            <div className="flex justify-between items-start mb-4">
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-white/5"
                style={{ backgroundColor: `${stat.color}10`, color: stat.color }}
              >
                <stat.icon size={20} />
              </div>
              <ArrowUpRight size={16} className="text-white/20 group-hover:text-white transition-colors" />
            </div>
            
            <div className="space-y-1">
              <p className="text-[11px] font-black text-white/30 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-[24px] font-black text-white">{stat.value}</h3>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-[#00fbfb]">{stat.change}</span>
                <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">vs last week</span>
              </div>
            </div>

            {/* Background decorative element */}
            <div 
              className="absolute -bottom-4 -right-4 w-20 h-20 opacity-5 blur-2xl rounded-full"
              style={{ backgroundColor: stat.color }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Main Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <PerformanceChart />
          <InstitutionalLedger />
        </div>
        <div className="space-y-8">
          <TradingInterface />
          
          {/* Market Pulse Card */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            className="bg-[#131318] border border-white/5 rounded-3xl p-8 space-y-6 relative overflow-hidden"
          >
            <div className="flex justify-between items-center">
              <h4 className="text-white font-bold tracking-tight">Active Analytics</h4>
              <MoreHorizontal size={18} className="text-white/20" />
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'Neural Link Processing', value: 85, color: '#00fbfb' },
                { label: 'FSD V13 Training Load', value: 42, color: '#6305ef' },
                { label: 'Institutional Buy Wall', value: 94, color: '#00fbfb' }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
                    <span className="text-white/40">{item.label}</span>
                    <span className="text-white/80">{item.value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
             <div className="absolute inset-0 bg-gradient-to-t from-[#00fbfb]/5 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
