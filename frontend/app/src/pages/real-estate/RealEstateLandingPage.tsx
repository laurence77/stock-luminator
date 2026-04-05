import { lazy, Suspense } from 'react';
import { PageTransition } from '@/components/layout/PageTransition';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/sections/footer';
import { LoadingScreen } from '@/components/ui/LoadingScreen';

// Lazy load sections for the Real Estate Suite
const RealEstateHero = lazy(() => import('@/sections/real-estate/RealEstateHero'));
const RealEstateProductPillars = lazy(() => import('@/sections/real-estate/RealEstateProductPillars'));
const RealEstateStats = lazy(() => import('@/sections/real-estate/RealEstateStats'));

/**
 * Real Estate Landing Page - Full institutional-grade experience suite.
 * Features cinematic dark aesthetics and commercial REIT infrastructure themes.
 */
export default function RealEstateLandingPage() {
  return (
    <PageTransition>
      <div className="bg-[#050505] min-h-screen">
        <Navbar />
        
        <main>
          <Suspense fallback={<LoadingScreen />}>
            {/* Hero Section with Architectural Parallax */}
            <RealEstateHero />
            
            {/* Commercial Infrastructure Pillars */}
            <RealEstateProductPillars />
            
            {/* Portfolio Metrics */}
            <RealEstateStats />
            
            {/* Using the standard footer/cta for this suite to maintain institutional feel */}
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
}
