# Tesla Platform & Dashboard Upgrade - Plan

This document outlines the systematic upgrade of the Tesla investment landing page and the construction of the institutional brokerage dashboard.

## Phase 1: Architectural Foundation
- **Data Centralization**: Decoupled component logic from static data using `src/data/tesla-content.ts`.
- **Type Safety**: Implemented strict TypeScript interfaces for all interactive components.
- **Asset Logic**: Shifted to React-native SVG handling using `vite-plugin-svgr` and the `?react` pattern.

## Phase 2: Interactive Tesla Landing Page
- **TeslaAllocationCalculator**: Built a high-performance simulation tool using glassmorphism styling and massive glowing gradients.
- **Spotlight Hover UX**: Implemented high-end card interactions using Framer Motion and cursor-tracking radial gradients.
- **Performance Polish**: Integrated lazy-loading for heavy dashboard components and optimized animations.

## Phase 3: Institutional Dashboard
- **PerformanceChart**: Replicated the "fintech terminal" look with Recharts and custom Tailwind-styled tooltips.
- **TradingInterface**: Layered Radix UI components (Slider, Switch, Tabs) for accessible, interactive trade controls.
- **DashboardLayout**: Constructed a fixed-sidebar responsive layout with glassmorphism borders and mobile navigation support.

## Phase 4: Final Verification & Deployment
- **Build Audit**: Verified full bundle compatibility and zero TypeScript errors through `npm run build`.
- **Visual Verification**: Confined the "Sustainable Abundance" aesthetic matches the premium screenshots.
- **Deployment**: Coordinating push to GitHub Pages for live institutional access.
