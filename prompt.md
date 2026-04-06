# Tesla Platform Upgrade - Prompt Manifest

This file contains the core requirements and prompts used to build the enhanced Tesla investment experience and institutional dashboard.

## 1. Interactive Allocation Calculator (`TeslaAllocationCalculator.tsx`)
Create an interactive component in `src/sections/tesla/` with a premium, dark glassmorphism aesthetic (`bg-[#1b1b20]/80 backdrop-blur-xl border border-white/10`).
- **Sliders**: Include two styled HTML range inputs (accent: `#00fbfb`).
  - "Projected Cybercab Fleet Deployment (2025-2030)"
  - "Optimus Gen-2 Enterprise Adoption Rate"
- **Dynamic Calculation**: A glowing gradient "Projected Portfolio Yield" number that updates in real-time.
- **Animations**: Use Framer Motion `fadeInUp` for elegant entry.

## 2. Architecture Cleanup (`src/data/tesla-content.ts`)
Decoupled data from components for better maintainability.
- Extracted `pillars`, `stats`, and `ecosystem` arrays to a central TypeScript data file.
- Implemented proper TS interfaces/types.
- Updated `TeslaProductPillars.tsx`, `TeslaStats.tsx`, and `TeslaEcosystem.tsx` to utilize the new centralized store.

## 3. Asset & SVG Optimization
Upgraded rendering to match premium screenshots.
- Configured `vite-plugin-svgr` and used `?react` suffix for SVG components.
- Replaced `img` tags (using `invert`) with true SVG React components supporting Tailwind classes.
- Updated Optimus Robotics asset with a high-resolution cinematic placeholder.

## 4. Spotlight Hover UX
Implemented "Spotlight" hover effects for `TeslaStats.tsx` and `TeslaEcosystem.tsx`.
- Utilized Framer Motion (`useMotionValue`, `useMotionTemplate`, `onMouseMove`).
- Created a `#00fbfb` radial gradient glow that tracks the cursor strictly inside card boundaries.
- Refined `overflow-hidden` and hover entry/exit states.

## 5. Performance Charting (`PerformanceChart.tsx`)
Built an advanced analytics chart using `recharts`.
- **Aesthetic**: Dark mode (`#131318`), electric cyan (`#00fbfb`) data lines, deep gradient fills.
- **Styling**: strictly Tailwind CSS with custom Tooltip and Axis components.

## 6. Trading Interface (`TradingInterface.tsx`)
Replicated an interactive control panel using Radix UI components (`@radix-ui/react-slider`, `@radix-ui/react-switch`, `@radix-ui/react-tabs`).
- **Styling**: focus rings in accent color, deep charcoal backgrounds for inactive states.
- **Interactivity**: Used `useState` to make controls visually interactive in-browser.

## 7. Institutional Dashboard (`DashboardLayout.tsx`)
Constructed a full-screen layout for analytical components.
- **Layout**: Fixed sidebar navigation with scrollable main area.
- **Styling**: Proportional layout matching reference screenshots, glassmorphism borders (`border-r border-white/10`).
- **Responsiveness**: Implemented hamburger menu fallback for mobile.
