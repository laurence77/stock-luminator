import { useState, useEffect } from 'react';
import { Home, LineChart, Wallet, LogOut, Menu, X, ArrowLeftRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock components for different views
import { Overview } from '../pages/dashboard/Overview';
import { TradingTerminal } from '../pages/dashboard/TradingTerminal';
import { WalletView } from '../pages/dashboard/Wallet';

type ViewType = 'overview' | 'trading' | 'wallet';

export function DashboardLayout() {
  const [activeView, setActiveView] = useState<ViewType>(() => {
    const hash = window.location.hash.toLowerCase();
    if (hash === '#dashboard-trading') return 'trading';
    if (hash === '#dashboard-wallet') return 'wallet';
    return 'overview';
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);



  const handleLogout = () => {
    window.location.hash = ''; // Go back to landing page
  };

  const navItems = [
    { id: 'overview', label: 'Overview', icon: Home, view: 'overview' as ViewType },
    { id: 'trading', label: 'Trading', icon: LineChart, view: 'trading' as ViewType },
    { id: 'wallet', label: 'Wallet', icon: Wallet, view: 'wallet' as ViewType },
  ];

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200">
        <div className="h-16 flex items-center px-6 border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8  bg-brand-purple flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-gray-900 tracking-tight uppercase">SML Broker</span>
          </div>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.view;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.view)}
                className={`w-full flex items-center gap-3 px-4 py-3  transition-all font-medium ${
                  isActive 
                    ? 'bg-brand-purple text-white shadow-md shadow-brand-purple/20' 
                    : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3  transition-all text-red-500 hover:bg-red-50 font-medium"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* Topbar */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 md:px-8 bg-white shadow-sm z-10">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 -ml-2 mr-2 text-gray-500 hover:bg-gray-100 "
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900 capitalize tracking-wide">{activeView}</h1>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setActiveView('wallet')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700  font-semibold transition-colors text-sm"
            >
              <ArrowLeftRight className="w-4 h-4" />
              Deposit
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-gray-900 leading-tight">John Doe</p>
                <p className="text-xs text-gray-500 lowercase">Verified Account</p>
              </div>
              <div className="w-10 h-10  bg-brand-blue text-white flex items-center justify-center font-bold shadow-sm">
                JD
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Content View */}
        <main className="flex-1 overflow-auto bg-gray-50/50 relative">
          <div className="p-4 sm:p-6 md:p-8 max-w-[1600px] mx-auto h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="h-full"
              >
                {activeView === 'overview' && <Overview />}
                {activeView === 'trading' && <TradingTerminal />}
                {activeView === 'wallet' && <WalletView />}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div 
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm" 
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl flex flex-col"
          >
            <div className="h-16 flex items-center justify-between px-6 border-gray-200">
              <span className="font-bold text-gray-900 tracking-tight uppercase">SML Broker</span>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="p-2 text-gray-500">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeView === item.view;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveView(item.view);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3  transition-all font-medium ${
                      isActive ? 'bg-brand-purple text-white' : 'text-gray-500'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                )
              })}
            </nav>
          </motion.div>
        </div>
      )}
    </div>
  );
}
