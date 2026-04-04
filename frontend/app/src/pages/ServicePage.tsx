import { ArrowLeft } from 'lucide-react';

const services: Record<string, { title: string; image: string; description: string; details: string[] }> = {
  forex: {
    title: 'Foreign Exchange',
    image: '/images/forex.jpg',
    description: 'Stock Market Luminator finance offers a broad array of professional services and access to the global foreign exchange markets for commercial and institutional clients.',
    details: [
      'Access to major, minor and exotic currency pairs',
      'Tight spreads with institutional-grade liquidity',
      'Real-time execution with no requotes',
      'Advanced charting and analysis tools',
      'Dedicated FX desk for institutional clients',
    ],
  },
  'real-estate': {
    title: 'Real Estate',
    image: '/images/research-building.jpg',
    description: "As one of the world's largest investors in real estate, we own and operate iconic properties in the world's most dynamic markets.",
    details: [
      'Exposure to commercial and residential property',
      'Diversified global REIT portfolio strategies',
      'Direct real estate fund participation',
      'Monthly income distributions',
      'Transparent reporting and valuation',
    ],
  },
  infrastructure: {
    title: 'Infrastructure',
    image: '/images/infrastructure.jpg',
    description: "We are one of the world's largest infrastructure investors, owning and operating assets across the utilities, transport and energy sectors.",
    details: [
      'Investment in toll roads, airports and utilities',
      'Long-duration, inflation-linked cash flows',
      'Exposure to renewable energy infrastructure',
      'Low correlation to traditional asset classes',
      'Institutional co-investment opportunities',
    ],
  },
  'fixed-income': {
    title: 'Fixed Income',
    image: '/images/fixed-income.jpg',
    description: "We meet our investor's needs by offering a broad fixed income solution set and targeted global market intelligence.",
    details: [
      'Government and corporate bond portfolios',
      'High-yield and investment-grade strategies',
      'Custom liability-driven investment solutions',
      'Active duration and credit risk management',
      'Global multi-sector bond fund access',
    ],
  },
  stock: {
    title: 'Stock',
    image: '/images/stock.jpg',
    description: 'Stock trading involves buying and selling shares in companies in an effort to make money on daily changes in price.',
    details: [
      'Access to 50+ global stock exchanges',
      'Fractional share investing available',
      'Real-time level 2 order book data',
      'Dividend reinvestment programmes',
      'Managed equity portfolios by sector',
    ],
  },
  'options-copy-trading': {
    title: 'Options Copy Trading',
    image: '/images/options-copy.jpg',
    description: 'With over 500+ registered and regulated traders on Stock Market Luminator, you get the liberty to beat the PDT rule and day trading requirements.',
    details: [
      'Copy top-performing options traders automatically',
      'View full track record before copying',
      'Control allocation and risk per trade',
      'No minimum $25k PDT requirement',
      'Real-time performance analytics dashboard',
    ],
  },
  tesla: {
    title: 'Tesla Investment',
    image: '/images/tesla.png',
    description: 'Invest in the future of sustainable energy and autonomous transportation. Our managed Tesla portfolios offer high-growth exposure to the leading force in the electric vehicle revolution.',
    details: [
      'Direct and indirect Tesla equity exposure',
      'EV sector ETF allocation strategies',
      'Autonomous driving technology plays',
      'Energy storage and solar subsidiary access',
      'Quarterly rebalanced growth portfolio',
    ],
  },
  spacex: {
    title: 'Space X',
    image: '/images/spacex.png',
    description: 'Access exclusive private equity opportunities in the aerospace industry targeting SpaceX and the broader space economy.',
    details: [
      'Private equity access to pre-IPO SpaceX exposure',
      'Aerospace sector fund participation',
      'Satellite communications investment themes',
      'Launch services and space tourism plays',
      'Institutional-only allocation available',
    ],
  },
  gold: {
    title: 'Gold',
    image: '/images/gold.png',
    description: 'Hedge against inflation and market volatility with physical gold and gold-backed securities. A time-tested safe haven asset.',
    details: [
      'Allocated and unallocated physical gold',
      'Gold-backed ETF and ETC strategies',
      'Gold mining equity exposure',
      'Vaulted storage in secured facilities',
      'Inflation hedge and portfolio diversifier',
    ],
  },
  agriculture: {
    title: 'Agriculture',
    image: '/images/agriculture.png',
    description: 'Capitalize on the growing global demand for food security. We offer strategic investments in advanced agricultural technologies and farmland.',
    details: [
      'Global farmland and timberland investment',
      'AgriTech and precision farming fund access',
      'Soft commodity futures strategies',
      'Food supply chain infrastructure plays',
      'ESG-aligned sustainable agriculture focus',
    ],
  },
  crypto: {
    title: 'Crypto Assets',
    image: '/images/crypto.png',
    description: 'Enter the digital asset economy with confidence. We offer fully regulated cryptocurrency trading, secure cold-storage custody and diversified blockchain index funds.',
    details: [
      'Regulated spot trading for BTC, ETH and 50+ alts',
      'Institutional cold-storage custody solution',
      'Diversified crypto index fund strategies',
      'DeFi and staking yield products',
      'Real-time on-chain analytics and reporting',
    ],
  },
  'ai-infrastructure': {
    title: 'AI Infrastructure',
    image: '/images/ai.png',
    description: 'Gain exposure to the backbone of the AI revolution — data centres, cloud computing, semiconductor fabs, and high-performance networking.',
    details: [
      'Data centre REIT and operator exposure',
      'GPU and semiconductor supply chain plays',
      'Hyperscaler cloud platform investment',
      'High-performance networking infrastructure',
      'AI chip design and manufacturing equity baskets',
    ],
  },
};

export function ServicePage() {
  const hash = window.location.hash.toLowerCase().replace('#service-', '');
  const service = services[hash];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500 text-lg mb-4">Service not found.</p>
        <button onClick={() => { window.location.hash = ''; }} className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="h-14 flex items-center px-6 shadow-sm sticky top-0 bg-white z-50">
        <button
          onClick={() => { window.location.hash = '#services'; window.history.back(); window.location.hash = '#services'; }}
          className="flex items-center gap-2 text-gray-600 hover:text-purple-700 font-medium transition-colors text-sm"
          aria-label="Back to services"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </button>
      </div>

      {/* Hero image */}
      <div className="w-full h-[340px] overflow-hidden relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h1 className="absolute bottom-8 left-8 text-white text-[36px] font-bold tracking-widest uppercase">
          {service.title}
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-16">
        <p className="text-gray-600 text-[17px] leading-relaxed mb-12 pl-5">
          {service.description}
        </p>

        <h2 className="text-[13px] font-bold tracking-widest text-gray-400 uppercase mb-6">Key Features</h2>
        <ul className="space-y-4 mb-16">
          {service.details.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
              <span className="mt-1 w-2 h-2  bg-purple-600 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <a
          href="#signup"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 font-bold tracking-wider text-[14px] uppercase transition-colors "
        >
          Get Started
        </a>
      </div>
    </div>
  );
}
