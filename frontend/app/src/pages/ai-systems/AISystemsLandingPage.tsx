import { lazy, Suspense } from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/sections/footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

// Lazy load sections for the AI & Neural Systems Suite
const AIHero = lazy(() => import('@/sections/ai-systems/AIHero'));
const AIProductPillars = lazy(() => import('@/sections/ai-systems/AIProductPillars'));
const AIStats = lazy(() => import('@/sections/ai-systems/AIStats'));
const AIQuotes = lazy(() => import('@/sections/ai-systems/AIQuotes'));
const AITimeline = lazy(() => import('@/sections/ai-systems/AITimeline'));
const AICta = lazy(() => import('@/sections/ai-systems/AICta'));

/**
 * AI Systems Landing Page - Full institutional-grade experience suite.
 * Features terminal-black aesthetics, neural execution themes, and monospace quantitative logic.
 */
export default function AISystemsLandingPage() {
  return (
    <PageTransition>
      <div className="bg-[#000000] min-h-screen">
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingScreen />}>
            {/* Hero Section with Integrated Visualizer */}
            <AIHero />
            
            {/* Deep Learning Pillars */}
            <AIProductPillars />
            
            {/* Quantitative Stats */}
            <AIStats />
            
            {/* Institutional Quotes */}
            <AIQuotes />
            
            {/* Chronological Machine Evolution */}
            <AITimeline />
            
            {/* Closing Terminal Conversion Gateway */}
            <AICta />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
