import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  BarChart3, 
  Wallet, 
  Activity, 
  Settings, 
  User, 
  LogOut, 
  Menu, 
  X, 
  Bell,
  Search,
  PieChart
} from 'lucide-react';
import { Link, useLocation, Outlet } from 'react-router-dom';

export default function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: BarChart3, label: 'Performance', path: '/dashboard/performance' },
    { icon: PieChart, label: 'Allocations', path: '/dashboard/allocations' },
    { icon: Wallet, label: 'Portfolio', path: '/dashboard/portfolio' },
    { icon: Activity, label: 'Activity', path: '/dashboard/activity' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex flex-col w-[280px] bg-[#131318] border-r border-white/5 h-screen sticky top-0">
        <div className="p-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00fbfb] to-[#6305ef] rounded-xl flex items-center justify-center shadow-lg shadow-[#00fbfb]/20">
              <span className="text-[20px] font-black text-[#131318]">L</span>
            </div>
            <span className="text-[20px] font-bold tracking-tight">Luminator<span className="text-[#00fbfb]">.</span></span>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path || (item.path === '/dashboard' && location.pathname === '/tesla-dashboard');
              return (
                <Link 
                  key={item.label} 
                  to={item.path}
                  className={`flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
                    isActive 
                    ? 'bg-[#00fbfb]/10 text-[#00fbfb] border border-[#00fbfb]/20 shadow-lg shadow-[#00fbfb]/5' 
                    : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <item.icon size={20} className={`${isActive ? 'text-[#00fbfb]' : 'text-white/40 group-hover:text-white'} transition-colors`} />
                  <span className="text-[14px] font-bold tracking-tight">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-white/5 flex flex-col gap-4">
          <div className="flex items-center gap-4 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-rose-500/20 to-amber-500/20 border border-white/10 flex items-center justify-center">
              <User size={18} className="text-white/60" />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-bold leading-none mb-1">Institutional User</span>
              <span className="text-[10px] text-white/40 font-mono">tier: high-net-worth</span>
            </div>
          </div>
          <button 
            title="Terminate Session"
            aria-label="Terminate Session"
            className="flex items-center gap-4 px-4 py-3 rounded-xl text-white/40 hover:text-rose-500 hover:bg-rose-500/10 transition-all duration-300"
          >
            <LogOut size={18} />
            <span className="text-[13px] font-bold">Terminate Session</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen overflow-y-auto bg-gradient-to-b from-[#131318] to-[#09090b]">
        {/* Top Header */}
        <header className="h-20 bg-[#131318]/50 backdrop-blur-xl border-b border-white/5 px-8 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-8 flex-1">
            <button 
              title="Open Mobile Menu"
              aria-label="Open Mobile Menu"
              className="lg:hidden w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-white/60 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
            
            <div className="hidden md:flex items-center gap-3 px-4 py-2.5 bg-[#09090b] rounded-xl border border-white/10 w-full max-w-[400px] focus-within:border-[#00fbfb]/50 transition-all">
              <Search size={18} className="text-white/20" />
              <input 
                type="text" 
                placeholder="Search assets, sectors, or reports..." 
                className="bg-transparent border-none outline-none text-[13px] text-white/80 placeholder:text-white/20 w-full"
              />
              <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded text-[9px] font-black text-white/30 tracking-[0.1em] uppercase">⌘K</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex flex-col items-end mr-4">
              <span className="text-[13px] font-bold text-[#00fbfb]">$242,098.42</span>
              <span className="text-[10px] text-white/30 font-black uppercase tracking-widest">+12.4% Capital Yield</span>
            </div>
            <button 
              title="View Notifications"
              aria-label="View Notifications"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center relative transition-all group"
            >
              <Bell size={18} className="text-white/40 group-hover:text-[#00fbfb] transition-colors" />
              <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 rounded-full bg-[#00fbfb] shadow-[0_0_10px_rgba(0,251,251,0.5)]" />
            </button>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-8 lg:p-12 relative">
          <Outlet />
        </div>
      </main>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[50] lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[300px] bg-[#131318] z-[60] lg:hidden p-8 flex flex-col border-r border-white/10"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#00fbfb] rounded-lg flex items-center justify-center">
                    <span className="text-[16px] font-black text-[#131318]">L</span>
                  </div>
                  <span className="text-[18px] font-bold tracking-tight">Luminator</span>
                </div>
                <button 
                  title="Close Mobile Menu"
                  aria-label="Close Mobile Menu"
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="space-y-3">
                {navItems.map((item) => {
                   const isActive = location.pathname === item.path;
                   return (
                    <Link 
                      key={item.label} 
                      to={item.path}
                      className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 ${
                        isActive 
                        ? 'bg-[#00fbfb]/10 text-[#00fbfb] border border-[#00fbfb]/20 shadow-lg' 
                        : 'text-white/40 hover:bg-white/5 border border-transparent'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon size={20} />
                      <span className="text-[15px] font-bold tracking-tight">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pt-8 border-t border-white/5">
                <button 
                  title="Terminate Session"
                  aria-label="Terminate Session"
                  className="flex items-center gap-4 w-full px-4 py-4 rounded-xl text-rose-500 bg-rose-500/5 transition-all duration-300 font-bold text-[14px]"
                >
                  <LogOut size={20} />
                  Terminate Session
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
