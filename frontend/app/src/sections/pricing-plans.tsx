import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Target } from 'lucide-react';
import { viewportOptions } from '../lib/animations';
import ShapeGrid from '../components/ui/ShapeGrid';
import { useTheme } from '../components/theme-provider';

type Plan = {
  name: string;
  pips: string;
  minimum: string;
  maximum: string;
  duration: string;
  popular?: boolean;
};

const planData: Record<string, Plan[]> = {
  Standard: [
    { name: 'SILVER PLAN', pips: '10% - 15%', minimum: '$200', maximum: '$2,000', duration: 'Daily for Life' },
    { name: 'GOLD PLAN', pips: '15% - 20%', minimum: '$2,000', maximum: '$5,000', duration: 'Daily for Life', popular: true },
    { name: 'STANDARD PLAN', pips: '20% - 25%', minimum: '$10,000', maximum: '$20,000', duration: 'Daily for Life' },
  ],
  Advanced: [
    { name: 'ADVANCED PRO', pips: '25% - 30%', minimum: '$20,000', maximum: '$50,000', duration: 'Daily for Life' },
    { name: 'ADVANCED EXPERT', pips: '30% - 35%', minimum: '$50,000', maximum: '$100,000', duration: 'Daily for Life', popular: true },
    { name: 'ADVANCED VIP', pips: '35% - 40%', minimum: '$100,000', maximum: 'Unlimited', duration: 'Daily for Life' },
  ],
  NFP: [
    { name: 'NFP STARTER', pips: '40% - 50%', minimum: '$5,000', maximum: '$15,000', duration: 'Weekly Term' },
    { name: 'NFP PRO', pips: '50% - 60%', minimum: '$15,000', maximum: '$50,000', duration: 'Weekly Term', popular: true },
    { name: 'NFP MASTER', pips: '60% - 80%', minimum: '$50,000', maximum: 'Unlimited', duration: 'Weekly Term' },
  ],
  BTC: [
    { name: 'BTC STARTER', pips: '8% - 12%', minimum: '$500', maximum: '$5,000', duration: 'Daily for Life' },
    { name: 'BTC TRADER', pips: '12% - 18%', minimum: '$5,000', maximum: '$20,000', duration: 'Daily for Life', popular: true },
    { name: 'BTC WHALE', pips: '18% - 25%', minimum: '$20,000', maximum: 'Unlimited', duration: 'Daily for Life' },
  ],
};

const tabs = ['Standard', 'Advanced', 'NFP', 'BTC'];

export function PricingPlans() {
  const [activeTab, setActiveTab] = useState('Standard');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-[120px] bg-white dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* ShapeGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShapeGrid
          direction="diagonal"
          speed={0.5}
          squareSize={45}
          borderColor={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'}
          hoverFillColor={isDark ? 'rgba(124, 58, 237, 0.15)' : 'rgba(124, 58, 237, 0.08)'}
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed]/5  blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#6305ef]/5  blur-[80px] pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={viewportOptions}
           className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-white/5  mb-6 transition-colors duration-300">
            <Target className="w-4 h-4 text-[#7c3aed]" />
            <span className="text-gray-700 dark:text-white/80 text-[12px] font-bold tracking-widest uppercase transition-colors duration-300">Yield Generation</span>
          </div>
          <h2 className="text-[32px] md:text-[48px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-6 tracking-[-0.02em] uppercase transition-colors duration-300">
            Institutional Plans
          </h2>
          <p className="text-[16px] text-gray-600 dark:text-white/60 max-w-[600px] mx-auto transition-colors duration-300">
            Deploy capital into our algorithmic frameworks. Select your asset class and target yield.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOptions}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              aria-pressed={activeTab === tab}
              className={`px-8 py-3 text-[14px] font-bold tracking-wider uppercase transition-all duration-300 relative  ${
                activeTab === tab
                  ? 'bg-gray-50 dark:bg-[#1b1b20] text-[#7c3aed] border-[#7c3aed] shadow-[0_0_20px_rgba(124,58,237,0.15)]'
                  : 'bg-transparent text-gray-500 dark:text-white/50 hover:text-gray-900 dark:hover:text-white hover:dark:hover:border-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          <AnimatePresence mode="popLayout">
            {planData[activeTab].map((plan, index) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-[#1b1b20] ${
                  plan.popular ? 'border-[#7c3aed]' : 'dark:border-white/10'
                } flex flex-col group transition-all duration-300 hover:bg-gray-50 dark:hover:bg-[#2a292f]`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7c3aed] text-white text-[11px] font-bold px-4 py-1 uppercase tracking-widest">
                    Most Selected
                  </div>
                )}

                {/* Header */}
                <div className="p-8 pb-6 text-center transition-colors duration-300">
                  <h3 className="text-gray-800 dark:text-white/80 font-bold text-[14px] tracking-[0.2em] mb-4 uppercase transition-colors duration-300">{plan.name}</h3>
                  <p className="text-gray-900 dark:text-white text-[42px] font-bold tracking-tight leading-none mb-2 transition-colors duration-300">{plan.pips}</p>
                  <p className="text-[#7c3aed] text-[12px] uppercase tracking-widest font-bold">PIPS Yield</p>
                </div>

                {/* Details */}
                <div className="flex-1 p-8 space-y-6">
                  <div className="flex justify-between items-end pb-2 transition-colors duration-300">
                    <p className="text-[12px] text-gray-500 dark:text-white/40 uppercase font-bold tracking-widest transition-colors duration-300">Minimum</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-[18px] transition-colors duration-300">{plan.minimum}</p>
                  </div>
                  <div className="flex justify-between items-end pb-2 transition-colors duration-300">
                    <p className="text-[12px] text-gray-500 dark:text-white/40 uppercase font-bold tracking-widest transition-colors duration-300">Maximum</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-[18px] transition-colors duration-300">{plan.maximum}</p>
                  </div>
                  <div className="flex justify-between items-end pb-2">
                    <p className="text-[12px] text-gray-500 dark:text-white/40 uppercase font-bold tracking-widest transition-colors duration-300">Duration</p>
                    <p className="font-semibold text-gray-900 dark:text-white text-[16px] transition-colors duration-300">{plan.duration}</p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-8 pb-8">
                  <a 
                    href="#get-started"
                    className={`block w-full text-center font-bold uppercase tracking-widest py-4 transition-all duration-300 text-[13px] ${
                      plan.popular
                        ? 'bg-[#7c3aed] hover:bg-[#6d28d9] text-white'
                        : 'bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 text-gray-900 dark:text-white hover:dark:hover:border-white/30'
                    }`}
                  >
                    Execute Plan
                  </a>
                  <div className="flex items-center justify-center gap-2 text-[12px] text-gray-500 dark:text-white/40 transition-colors duration-300 mt-4 uppercase tracking-wider font-semibold">
                    <Check className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span>24/7 Algorithmic Support</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
