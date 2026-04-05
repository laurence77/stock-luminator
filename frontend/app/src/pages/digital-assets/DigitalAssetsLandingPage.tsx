import { lazy, Suspense } from 'react';
import { PageTransition } from '@/components/animations/PageTransition';
import Navbar from '@/components/navbar';
import Footer from '@/sections/footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { AllocationCalculator } from '@/components/calculator/AllocationCalculator';
import { motion } from 'framer-motion';
import { fadeInUp, viewportOptions } from '@/lib/animations';

// Lazy load sections for the Digital Asset Ecosystem Suite
const DigitalAssetsHero = lazy(() => import('@/sections/digital-assets/DigitalAssetsHero'));
const DigitalAssetsProductPillars = lazy(() => import('@/sections/digital-assets/DigitalAssetsProductPillars'));
const DigitalAssetsStats = lazy(() => import('@/sections/digital-assets/DigitalAssetsStats'));
const DigitalAssetsCta = lazy(() => import('@/sections/digital-assets/DigitalAssetsCta'));

/**
 * Digital Assets Landing Page - Full institutional-grade experience suite.
 * Features machine-speed arbitrage themes, Solana-green aesthetics, and high-fidelity network logic.
 */
export default function DigitalAssetsLandingPage() {
  return (
    <PageTransition>
      <div className="bg-[#0a0a0c] min-h-screen">
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingScreen />}>
            {/* Hero Section with Network Visualizer */}
            <DigitalAssetsHero />
            
            {/* Technical Product Pillars */}
            <DigitalAssetsProductPillars />
            
            {/* Interactive Allocation Tool Section */}
            <section className="py-32 relative overflow-hidden bg-[#0a0a0c]">
              <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <div className="mb-20 text-center">
                  <motion.h2 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOptions}
                    className="text-[12px] font-bold tracking-[0.4em] text-[#14f195] uppercase mb-4"
                  >
                    Simulation Engine
                  </motion.h2>
                  <motion.p 
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={viewportOptions}
                     className="text-[32px] md:text-[54px] font-black text-white uppercase leading-tight"
                  >
                    MODEL YOUR <span className="text-[#8b5cf6]">EXPOSURE.</span>
                  </motion.p>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOptions}
                  className="w-full flex justify-center"
                >
                  <AllocationCalculator />
                </motion.div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#8b5cf6]/5 blur-[120px] pointer-events-none rounded-full" />
            </section>
            
            {/* Infrastructure Metrics */}
            <DigitalAssetsStats />
            
            {/* Digital Asset CTA */}
            <DigitalAssetsCta />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
