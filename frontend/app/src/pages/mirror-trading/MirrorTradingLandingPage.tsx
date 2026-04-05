import { lazy, Suspense } from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/sections/footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

// Lazy load sections for the Mirror Trading Suite
const MirrorTradingHero = lazy(() => import('@/sections/mirror-trading/MirrorTradingHero'));
const MirrorTradingProductPillars = lazy(() => import('@/sections/mirror-trading/MirrorTradingProductPillars'));
const MirrorTradingQuotes = lazy(() => import('@/sections/mirror-trading/MirrorTradingQuotes'));
const MirrorTradingCta = lazy(() => import('@/sections/mirror-trading/MirrorTradingCta'));

/**
 * Mirror Trading Landing Page - Full institutional-grade experience suite.
 * Features dark glassmorphism, portfolio synchronization themes, and real-time ledger replication logic.
 */
export default function MirrorTradingLandingPage() {
  return (
    <PageTransition>
      <div className="bg-[#020617] min-h-screen">
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingScreen />}>
            {/* Hero Section with Live Sync Feed */}
            <MirrorTradingHero />
            
            {/* Mirror Strategy Pillars */}
            <MirrorTradingProductPillars />
            
            {/* Institutional Quotes for Copy Trading */}
            <MirrorTradingQuotes />
            
            {/* Sync Feed / Timeline replacement was integrated into Hero for this suite, 
                or could be a standalone section. For this cinematic suite, it's hero-centric. */}
            
            {/* Closing Conversion Gateway */}
            <MirrorTradingCta />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
