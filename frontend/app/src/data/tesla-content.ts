export interface TeslaStat {
  label: string;
  value: string;
  subtext: string;
}

export interface TeslaPillar {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  cta: string;
  stats: { label: string; value: string }[];
}

export interface TeslaEcosystemItem {
  title: string;
  description: string;
  image: string;
  color: string;
  isLogo?: boolean;
}

export const pillars: TeslaPillar[] = [
  {
    title: "Intelligent Mobility",
    subtitle: "The AI Autonomy Wave",
    description: "Cybercab represents the first-mover advantage in the multi-trillion dollar autonomous transport logistics network.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Cybercab-Hero-Desktop-Global.jpg",
    cta: "View Autonomy Whitepaper",
    stats: [
      { label: "Level 5", value: "Autonomy" },
      { label: "$10T+", value: "Addressable Market" }
    ]
  },
  {
    title: "General Purpose Robotics",
    subtitle: "Labor Economy Transformation",
    description: "Optimus Gen 2 is designed to scale beyond automotive, addressing the global labor shortage through general-purpose bipedal AI.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Optimus-Hero-Desktop-Global.jpg",
    cta: "Explore Robotic Synergy",
    stats: [
      { label: "10B+", value: "Global Workforce" },
      { label: "2030", value: "Mass Deployment" }
    ]
  },
  {
    title: "Electrified Performance",
    subtitle: "Beyond Peak Performance",
    description: "Model S Plaid is the foundation of high-performance electric propulsion, delivering institutional-grade velocity and range.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-Global.jpg",
    cta: "View Performance Metrics",
    stats: [
      { label: "1.99s", value: "0-60 MPH" },
      { label: "1,020", value: "Peak Horsepower" }
    ]
  }
];

export const stats: TeslaStat[] = [
  {
    label: "Projected Market Cap",
    value: "$8.5T",
    subtext: "Master Plan IV Target",
  },
  {
    label: "2025 Milestone",
    value: "Inflection Point",
    subtext: "Autonomous Driving Wave",
  },
  {
    label: "Institutional Holders",
    value: "Overwhelmingly Approved",
    subtext: "2025 CEO Performance Award",
  }
];

export const ecosystem: TeslaEcosystemItem[] = [
  {
    title: "Network Fleet (Cybercab)",
    description: "High-margin autonomous ride-hailing services leveraging the existing global Tesla fleet for massive logistical dominance.",
    image: "/stock-luminator/images/tesla/logo.svg",
    color: "#00fbfb",
    isLogo: true,
  },
  {
    title: "Optimus Robotics",
    description: "The greatest product in the history of humanity. Autonomous bipeds designed to revolutionize the global labor economy.",
    image: "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Optimus-Update-Hero-Mobile.jpg", // High-res Optimus
    color: "#6305ef",
  },
  {
    title: "SpaceX & Orbital Synergy",
    description: "Multi-orbital logistics and heavy-lift rocket frameworks securing the first-mover advantage in the space economy.",
    image: "/stock-luminator/images/tesla/spacex.svg",
    color: "#00fbfb",
    isLogo: true,
  }
];
