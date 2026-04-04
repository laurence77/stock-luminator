import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";
import { ArrowLeft } from "lucide-react";

export function Markets() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <div className="h-14 flex items-center px-4 shadow-sm shrink-0">
        <button 
          onClick={() => window.location.hash = ''} 
          className="flex items-center gap-2 text-gray-600 hover:text-blue-700 shrink-0 font-medium transition-colors"
          aria-label="Back to home"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </button>
        <div className="flex-1 text-center font-bold text-gray-900 tracking-tight uppercase mr-24 hidden sm:block">
          Global Market Screener
        </div>
      </div>
      <div className="flex-1 w-full bg-white relative">
        <AdvancedRealTimeChart 
            theme="light" 
            symbol="NASDAQ:AAPL" 
            autosize
            allow_symbol_change={true}
            hide_side_toolbar={false}
            hide_top_toolbar={false}
            save_image={false}
            enable_publishing={false}
        />
      </div>
    </div>
  );
}
