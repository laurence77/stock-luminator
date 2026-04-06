import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

const ledgerData = [
  { id: 'TX-9082', asset: 'TSLA.NAS', type: 'Institutional Buy', quantity: '500,000', price: '$242.06', status: 'Settled', change: '+2.41%' },
  { id: 'TX-9083', asset: 'X.CORP', type: 'Private Equity', quantity: '1,200', price: '$44.10', status: 'Pending', change: '-0.15%' },
  { id: 'TX-9084', asset: 'ORBIT.LOG', type: 'Orbital Logistics', quantity: '85,000', price: '$12.90', status: 'Settled', change: '+12.8%' },
  { id: 'TX-9085', asset: 'BTCOIN.ETF', type: 'Digital Reserve', quantity: '42.5', price: '$98,405', status: 'Processing', change: '+1.05%' },
  { id: 'TX-9086', asset: 'SOL.NWK', type: 'DePIN Infra', quantity: '12,000', price: '$185.22', status: 'Settled', change: '-2.34%' },
];

export default function InstitutionalLedger() {
  return (
    <motion.div 
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      className="bg-[#131318] border border-white/5 rounded-3xl overflow-hidden shadow-2xl overflow-x-auto"
    >
      <div className="p-8 border-b border-white/5 flex justify-between items-center bg-[#1b1b20]/50">
        <h3 className="text-white text-[18px] font-bold tracking-tight">Institutional Ledger</h3>
        <button className="text-[11px] font-black text-white/40 hover:text-white uppercase tracking-widest transition-colors duration-300 px-4 py-2 border border-white/5 rounded-lg">
          Export Data
        </button>
      </div>

      <table className="w-full text-left border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-[#1b1b20]/80">
            <th className="px-8 py-5 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">Transaction ID</th>
            <th className="px-8 py-5 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">Asset Index</th>
            <th className="px-8 py-5 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">Allocation Type</th>
            <th className="px-8 py-5 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">Quantity</th>
            <th className="px-8 py-5 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">Unit Price</th>
            <th className="px-8 py-5 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">Status</th>
            <th className="px-8 py-5 text-[11px] font-black text-white/30 uppercase tracking-[0.2em]">24H Yield</th>
          </tr>
        </thead>
        <tbody>
          {ledgerData.map((row, idx) => (
            <tr 
              key={idx} 
              className="group hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
            >
              <td className="px-8 py-6 text-[14px] font-mono font-bold text-white/60 group-hover:text-[#00fbfb] transition-colors">{row.id}</td>
              <td className="px-8 py-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/40">
                    {row.asset.charAt(0)}
                  </div>
                  <span className="text-[14px] font-bold text-white">{row.asset}</span>
                </div>
              </td>
              <td className="px-8 py-6 text-[14px] text-white/50">{row.type}</td>
              <td className="px-8 py-6 text-[14px] font-bold text-white/80">{row.quantity}</td>
              <td className="px-8 py-6 text-[14px] font-mono font-bold text-white">{row.price}</td>
              <td className="px-8 py-6">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                  row.status === 'Settled' ? 'bg-[#00fbfb]/10 text-[#00fbfb] border-[#00fbfb]/20' : 
                  row.status === 'Pending' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 
                  'bg-white/5 text-white/40 border-white/10'
                }`}>
                  {row.status === 'Settled' && <span className="w-1.5 h-1.5 rounded-full bg-[#00fbfb]" />}
                  {row.status}
                </div>
              </td>
              <td className={`px-8 py-6 text-[14px] font-black ${
                row.change.startsWith('+') ? 'text-[#00fbfb]' : 'text-rose-500'
              }`}>
                {row.change}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}
