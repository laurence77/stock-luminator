import { useState, useEffect } from 'react';
import { Navbar } from './components/navbar';
import { HeroSection } from './sections/hero-section';
import { ServicesBar } from './sections/services-bar';
import { WhatWeDo } from './sections/what-we-do';
import { OurServices } from './sections/our-services';
import { Infrastructure } from './sections/infrastructure';
import { WhoWeAre } from './sections/who-we-are';
import { InvestmentStrategy } from './sections/investment-strategy';
import { MirrorTrading } from './sections/mirror-trading';
import { ResponsibleInvesting } from './sections/responsible-investing';
import { TradingChart } from './sections/trading-chart';
import { PortfolioManagement } from './sections/portfolio-management';
import { Philosophy } from './sections/philosophy';
import { CurrencyTable } from './sections/currency-table';
import { ResearchDriven } from './sections/research-driven';
import { RiskManagement } from './sections/risk-management';
import { PricingPlans } from './sections/pricing-plans';
import { ClearProcesses } from './sections/clear-processes';
import { GuideNextStep } from './sections/guide-next-step';
import { Footer } from './sections/footer';

// Pages
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { DashboardLayout } from './layouts/DashboardLayout';
import { Markets } from './pages/Markets';
import { ServicePage } from './pages/ServicePage';
import TeslaLandingPage from './pages/tesla/TeslaLandingPage';
import OurTeam from './pages/team/OurTeam';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash.toLowerCase());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash.toLowerCase());
    };
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Hash Router
  if (currentHash === '#signin') {
    return <SignIn />;
  }

  if (currentHash === '#signup' || currentHash === '#get-started') {
    return <SignUp />;
  }

  if (currentHash === '#dashboard') {
    return <DashboardLayout />;
  }

  if (currentHash === '#markets') {
    return <Markets />;
  }

  if (currentHash === '#team') {
    return <OurTeam />;
  }

  if (currentHash === '#service-tesla') {
    return <TeslaLandingPage />;
  }

  if (currentHash.startsWith('#service-')) {
    return <ServicePage />;
  }

  // Default Landing Page
  return (
    <div className="min-h-screen bg-white dark:bg-[#131318]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesBar />
        <WhatWeDo />
        <OurServices />
        <Infrastructure />
        <WhoWeAre />
        <InvestmentStrategy />
        <MirrorTrading />
        <ResponsibleInvesting />
        <TradingChart />
        <PortfolioManagement />
        <Philosophy />
        <CurrencyTable />
        <ResearchDriven />
        <RiskManagement />
        <PricingPlans />
        <ClearProcesses />
        <GuideNextStep />
      </main>
      <Footer />
      {/* Google Translate mount point - must be in DOM but visually hidden */}
      <div id="google_translate_element" className="gt-hidden-mount" />
    </div>
  );
}

export default App;
