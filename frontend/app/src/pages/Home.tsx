import { HeroSection } from '../sections/hero-section';
import { ServicesBar } from '../sections/services-bar';
import { WhatWeDo } from '../sections/what-we-do';
import { OurServices } from '../sections/our-services';
import { Infrastructure } from '../sections/infrastructure';
import { WhoWeAre } from '../sections/who-we-are';
import { InvestmentStrategy } from '../sections/investment-strategy';
import { MirrorTrading } from '../sections/mirror-trading';
import { ResponsibleInvesting } from '../sections/responsible-investing';
import { TradingChart } from '../sections/trading-chart';
import { PortfolioManagement } from '../sections/portfolio-management';
import { Philosophy } from '../sections/philosophy';
import { CurrencyTable } from '../sections/currency-table';
import { ResearchDriven } from '../sections/research-driven';
import { RiskManagement } from '../sections/risk-management';
import { PricingPlans } from '../sections/pricing-plans';
import { ClearProcesses } from '../sections/clear-processes';
import { GuideNextStep } from '../sections/guide-next-step';

export default function Home() {
  return (
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
  );
}
