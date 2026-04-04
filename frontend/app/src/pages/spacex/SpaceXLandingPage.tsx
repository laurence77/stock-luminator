import { PageTransition } from '@/components/layout/PageTransition';
import SpaceXHero from '@/sections/spacex/SpaceXHero';
import SpaceXProductPillars from '@/sections/spacex/SpaceXProductPillars';
import SpaceXStats from '@/sections/spacex/SpaceXStats';
import SpaceXQuotes from '@/sections/spacex/SpaceXQuotes';
import SpaceXTimeline from '@/sections/spacex/SpaceXTimeline';
import SpaceXCta from '@/sections/spacex/SpaceXCta';

export default function SpaceXLandingPage() {
  return (
    <PageTransition>
      <div className="bg-[#050505] min-h-screen">
        <SpaceXHero />
        <SpaceXProductPillars />
        <SpaceXStats />
        <SpaceXQuotes />
        <SpaceXTimeline />
        <SpaceXCta />

        {/* Institutional Footer Disclaimer */}
        <footer className="py-12 bg-black border-t border-white/5">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
             <p className="text-[12px] text-white/30 text-center font-light leading-relaxed max-w-[1000px] mx-auto">
                Investment in SpaceX involves significant risk and capital concentration. $210B+ valuations and "multiplanetary city" visions are based on private market evaluations and institutional projections provided as part of the 2024-2025 Aerospace Outlook. Please consult with your strategic advisor before executing any allocation.
             </p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}
