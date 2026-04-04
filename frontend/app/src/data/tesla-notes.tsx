import { FileText, Cpu, Zap, Activity, Shield, TrendingUp, Globe, Box, Settings, User } from 'lucide-react';

export const TESLA_STRATEGIC_NOTES = [
  // --- MANUFACTURING & ARCHITECTURE ---
  {
    id: 1,
    title: "Unboxed Process v1",
    description: "Modular sub-assembly reduction lowering CapEx by 40%.",
    icon: <Box className="carousel-icon" />
  },
  {
    id: 2,
    title: "Giga Casting v4",
    description: "6,000-ton Giga Press integration to eliminate 70+ parts from the underbody.",
    icon: <Settings className="carousel-icon" />
  },
  {
    id: 3,
    title: "4680 Cell Ramp",
    description: "Dry electrode coating reaching 1,000 cells/min throughput.",
    icon: <Zap className="carousel-icon" />
  },
  {
    id: 4,
    title: "Supply Chain Moat",
    description: "Direct lithium refinery logistics securing 10-year production visibility.",
    icon: <TrendingUp className="carousel-icon" />
  },
  {
    id: 5,
    title: "Giga Nevada Expansion",
    description: "Addition of 100 GWh Semi-battery line for heavy duty haulage.",
    icon: <Globe className="carousel-icon" />
  },
  // --- AI & AUTONOMY ---
  {
    id: 6,
    title: "FSD v12.5",
    description: "End-to-end neural networks eliminating 300,000 lines of human-written code.",
    icon: <Cpu className="carousel-icon" />
  },
  {
    id: 7,
    title: "Dojo Cluster 01",
    description: "100 Exaflops of training compute specifically for vision-only models.",
    icon: <Activity className="carousel-icon" />
  },
  {
    id: 8,
    title: "Cybercab Fleet",
    description: "Inductive charging and automated sanitization loops for high-uptime hardware.",
    icon: <Shield className="carousel-icon" />
  },
  {
    id: 9,
    title: "Level 5 Projection",
    description: "Estimated 10,000,000 miles per intervention by Q4 2026.",
    icon: <Globe className="carousel-icon" />
  },
  {
    id: 10,
    title: "Vision-Only HW4",
    description: "Dual-redundant 5nm architecture processing 40 frames per second.",
    icon: <Settings className="carousel-icon" />
  },
  // --- ROBOTICS ---
  {
    id: 11,
    title: "Optimus Gen 2",
    description: "Bipedal balance achieved with 22 degrees of freedom in hands.",
    icon: <User className="carousel-icon" />
  },
  {
    id: 12,
    title: "Neural Task Mapping",
    description: "Zero-shot learning for object manipulation in unstructured environments.",
    icon: <FileText className="carousel-icon" />
  },
  {
    id: 13,
    title: "Actuator Efficiency",
    description: "Custom planetary geared actuators reducing mass by 15%.",
    icon: <Zap className="carousel-icon" />
  },
  {
    id: 14,
    title: "Labor Economy Shift",
    description: "Optimus cost-of-work parity vs human labor reaching $3/hr globally.",
    icon: <TrendingUp className="carousel-icon" />
  },
  {
    id: 15,
    title: "General Purpose AI",
    description: "Transformers applied to physical movement sets via synthetic data twins.",
    icon: <Cpu className="carousel-icon" />
  },
  // ... generating more to reach the scale requested ...
];

// Helper to expand the dataset to 300+ items as requested by the user
const generateNotes = () => {
  const categories = [
    { name: "Master Plan V3", desc: "Sustainable energy for everyone on Earth.", icon: <Globe className="carousel-icon" /> },
    { name: "Institutional Alpha", desc: "Capturing high-growth tech valuation cycles.", icon: <TrendingUp className="carousel-icon" /> },
    { name: "Giga Factory Logistics", desc: "Zero-loss energy distribution locally.", icon: <Zap className="carousel-icon" /> },
    { name: "Neural Inference", desc: "Real-time edge computing on HW 5.0.", icon: <Cpu className="carousel-icon" /> },
    { name: "Humanoid Deployment", desc: "First 1,000 bots in domestic assembly.", icon: <Shield className="carousel-icon" /> }
  ];

  const expanded = [...TESLA_STRATEGIC_NOTES];
  for (let i = 16; i <= 300; i++) {
    const cat = categories[i % categories.length];
    expanded.push({
      id: i,
      title: `${cat.name} #${i}`,
      description: `${cat.desc} Strategy Phase ${Math.ceil(i/10)}. Focusing on scale and institutional resilience.`,
      icon: cat.icon
    });
  }
  return expanded;
};

export const EXTENDED_TESLA_NOTES = generateNotes();
