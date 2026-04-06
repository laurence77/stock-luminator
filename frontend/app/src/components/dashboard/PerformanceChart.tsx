import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis, 
  CartesianGrid 
} from 'recharts';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const data = [
  { time: '00:00', value: 2400 },
  { time: '04:00', value: 1398 },
  { time: '08:00', value: 9800 },
  { time: '12:00', value: 3908 },
  { time: '16:00', value: 4800 },
  { time: '20:00', value: 3800 },
  { time: '23:59', value: 4300 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1b1b20]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl">
        <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-1">{label}</p>
        <p className="text-[18px] font-black text-[#00fbfb]">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

export default function PerformanceChart() {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      className="w-full h-[400px] bg-[#131318] border border-white/5 rounded-3xl p-8 relative overflow-hidden group"
    >
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div>
          <h3 className="text-white text-[18px] font-bold tracking-tight">Institutional Performance</h3>
          <p className="text-white/40 text-[13px]">Real-time algorithm execution metrics</p>
        </div>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-[#00fbfb]/10 border border-[#00fbfb]/20 rounded-full text-[10px] font-bold text-[#00fbfb] uppercase tracking-widest">
            Live
          </div>
          <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-white/40 uppercase tracking-widest">
            24H
          </div>
        </div>
      </div>

      <div className="h-[280px] w-full relative z-10">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00fbfb" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00fbfb" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid 
              vertical={false} 
              strokeDasharray="3 3" 
              stroke="rgba(255,255,255,0.05)" 
            />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(0, 251, 251, 0.2)', strokeWidth: 1 }} />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#00fbfb" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Decorative background aura */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#00fbfb]/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#00fbfb]/10 transition-colors duration-700" />
    </motion.div>
  );
}
