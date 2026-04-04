import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export function TradingTerminal() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 h-full min-h-[800px]">
      
      {/* Chart Area */}
      <div className="flex-1 bg-white  shadow-sm flex flex-col overflow-hidden">
        <div className="p-4 flex justify-between items-center bg-gray-50/50">
          <h3 className="font-bold text-gray-900 tracking-wider uppercase flex items-center gap-2">
            BTC/USD 
            <span className="text-xs font-medium px-2 py-1 bg-gray-200 text-gray-700 ">Crypto</span>
          </h3>
          <div className="text-right">
            <span className="text-xl font-bold text-green-600">64,230.00</span>
            <span className="text-sm text-green-600 ml-2 font-semibold">+2.45%</span>
          </div>
        </div>
        <div className="flex-1 w-full bg-white">
          <AdvancedRealTimeChart 
            theme="light" 
            symbol="BINANCE:BTCUSD" 
            autosize 
          />
        </div>
      </div>

      {/* Order Panel */}
      <div className="w-full lg:w-80 bg-white  shadow-sm p-6 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Order Ticket</h3>
        
        <div className="flex  overflow-hidden mb-6">
          <button className="flex-1 py-2 text-sm font-bold bg-brand-blue text-white uppercase transition-colors">
            Buy
          </button>
          <button className="flex-1 py-2 text-sm font-bold bg-white text-gray-500 hover:bg-gray-50 uppercase transition-colors">
            Sell
          </button>
        </div>

        <div className="space-y-4 mb-8">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Order Type</label>
            <select title="Order Type" className="bg-gray-100 text-gray-900 text-sm  focus:ring-blue-500 focus:block w-full p-2">
              <option>Market Order</option>
              <option>Limit Order</option>
              <option>Stop Loss</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Size (BTC)</label>
            <input title="Order Amount" placeholder="0.00" type="number" className="block w-full  border-0 py-2.5 pl-3 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6" />
          </div>
          
          <div className="pt-4 flex justify-between items-center text-sm">
            <span className="font-semibold text-gray-500 uppercase">Estimated Total</span>
            <span className="font-bold text-gray-900">$6,423.00</span>
          </div>
        </div>

        <button className="w-full py-4 mt-auto  font-bold uppercase tracking-widest text-white bg-green-500 hover:bg-green-600 transition-colors shadow-sm shadow-green-500/20">
          Place Buy Order
        </button>
      </div>

    </div>
  );
}
