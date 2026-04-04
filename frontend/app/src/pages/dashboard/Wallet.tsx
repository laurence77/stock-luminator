import { ArrowDownToLine, ArrowUpFromLine, Clock } from 'lucide-react';

export function WalletView() {
  const transactions = [
    { id: '1', type: 'Deposit', amount: '+$5,000.00', status: 'Completed', date: 'Today, 10:23 AM', icon: ArrowDownToLine, color: 'text-green-600', bg: 'bg-green-50' },
    { id: '2', type: 'Withdrawal', amount: '-$1,200.00', status: 'Processing', date: 'Yesterday, 14:05 PM', icon: ArrowUpFromLine, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: '3', type: 'Deposit', amount: '+$10,000.00', status: 'Completed', date: 'Oct 12, 09:12 AM', icon: ArrowDownToLine, color: 'text-green-600', bg: 'bg-green-50' },
  ];

  return (
    <div className="space-y-6 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Balances */}
        <div className="bg-brand-dark  p-8 shadow-lg text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple  blur-3xl opacity-20 -mr-10 -mt-10 pointer-events-none"></div>
          <p className="text-white/60 font-medium mb-2 uppercase tracking-widest text-sm">Total Available Balance</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">$124,592.50</h2>
          
          <div className="flex gap-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-brand-blue hover:bg-brand-blue-mid transition-colors  font-bold uppercase tracking-wide text-sm">
              <ArrowDownToLine className="w-4 h-4" /> Deposit
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 transition-colors  font-bold uppercase tracking-wide text-sm">
              <ArrowUpFromLine className="w-4 h-4" /> Withdraw
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white  p-8 shadow-sm flex flex-col justify-center">
          <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Linked Accounts</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 ">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100  flex items-center justify-center font-bold text-gray-500">
                  Bank
                </div>
                <div>
                  <p className="font-bold text-gray-900">Chase Checking</p>
                  <p className="text-xs text-gray-500">**** 4567</p>
                </div>
              </div>
              <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1  uppercase">Active</span>
            </div>
            <button className="w-full py-4 border-2 border-dashed text-gray-500 font-bold  hover:bg-gray-50 hover:text-brand-purple hover:border-brand-purple transition-all uppercase tracking-wide text-sm">
              + Link New Account
            </button>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white  shadow-sm overflow-hidden">
        <div className="p-6 flex justify-between items-center bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wide flex items-center gap-2">
            <Clock className="w-5 h-5 text-brand-purple" /> Recent Transactions
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {transactions.map((tx) => {
            const Icon = tx.icon;
            return (
              <div key={tx.id} className="p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12  flex items-center justify-center ${tx.bg}`}>
                    <Icon className={`w-6 h-6 ${tx.color}`} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{tx.type}</p>
                    <p className="text-sm text-gray-500">{tx.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-lg ${tx.color}`}>{tx.amount}</p>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{tx.status}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
