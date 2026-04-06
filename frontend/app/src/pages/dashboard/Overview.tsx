import { ArrowUpRight, ArrowDownRight, TrendingUp, DollarSign, Activity } from 'lucide-react';
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export function Overview() {
  const cards = [
    { title: "Total Balance", value: "$124,592.50", change: "+14.5%", isUp: true, icon: DollarSign },
    { title: "Available Margin", value: "$42,000.00", change: "Ready", isUp: true, icon: Activity },
    { title: "Open P&L", value: "+$4,250.20", change: "+3.2%", isUp: true, icon: TrendingUp },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div key={idx} className="bg-white  p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12  bg-gray-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-purple" />
                </div>
                <div className={`flex items-center gap-1 text-sm font-semibold px-2 py-1  ${
                  card.isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                }`}>
                  {card.isUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                  {card.change}
                </div>
              </div>
              <div>
                <p className="text-gray-500 font-medium mb-1 text-sm uppercase tracking-wider">{card.title}</p>
                <h3 className="text-3xl font-bold text-gray-900">{card.value}</h3>
              </div>
            </div>
          )
        })}
      </div>

      <div className="bg-white shadow-sm p-6 flex flex-col min-h-[500px]">
        <h3 className="text-lg font-bold text-gray-900 mb-4 tracking-wide uppercase">Portfolio Performance</h3>
        <div className="flex-1 w-full  overflow-hidden border-gray-100">
          <AdvancedRealTimeChart 
            theme="light" 
            symbol="NASDAQ:AAPL" 
            allow_symbol_change={false}
            hide_side_toolbar={true}
            hide_top_toolbar={true}
            autosize 
          />
        </div>
      </div>
    </div>
  );
}
