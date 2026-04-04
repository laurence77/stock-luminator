# Stock Market Luminator - Technical Specification

## 1. Tech Stack Overview

| Category | Technology |
|----------|------------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | shadcn/ui |
| Animation | Framer Motion |
| Icons | Lucide React |
| Charts | Lightweight Charts (TradingView) |

## 2. Tailwind Configuration Guide

### Colors Extension
```javascript
colors: {
  primary: {
    DEFAULT: '#7C3AED',
    dark: '#6D28D9',
    light: '#A78BFA',
  },
  secondary: {
    DEFAULT: '#1E3A5F',
    dark: '#0F172A',
  },
  accent: {
    blue: '#1E40AF',
    green: '#10B981',
    gold: '#D4AF37',
  },
}
```

### Font Extension
```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
}
```

## 3. Component Inventory

### Shadcn/UI Components (Pre-installed)
- Button
- Card
- Dialog
- Dropdown Menu
- Navigation Menu
- Sheet (mobile menu)
- Tabs

### Custom Components

| Component | Props | Description |
|-----------|-------|-------------|
| Navbar | - | Fixed navigation with scroll effect |
| HeroSection | - | Full-width hero with overlay |
| ServicesBar | - | 3-column dark bar |
| SectionHeading | title, subtitle?, centered? | Reusable section header |
| ServiceCard | image, title, description | Service grid card |
| PricingCard | plan, pips, min, max, commission | Pricing plan card |
| FeatureIcon | icon, title, description | Icon feature block |
| Footer | - | Multi-column footer |
| TradingChart | - | Chart widget section |
| CurrencyTable | - | Currency converter table |

## 4. Animation Implementation Plan

| Interaction Name | Tech Choice | Implementation Logic |
|------------------|-------------|---------------------|
| Page Load | Framer Motion | `staggerChildren` on main container, children fade + translateY |
| Navbar Scroll | React State + CSS | `useScroll` hook toggles `scrolled` class for bg change |
| Section Reveal | Framer Motion | `whileInView` with `fadeInUp` variant |
| Card Hover | Tailwind + FM | `whileHover={{ y: -4, scale: 1.02 }}` |
| Button Hover | Tailwind | `hover:scale-102 hover:shadow-lg transition-all` |
| Image Zoom | CSS | `group-hover:scale-105 transition-transform duration-400` |
| Dropdown | Framer Motion | `AnimatePresence` with fade + slideDown |
| Mobile Menu | Framer Motion | Sheet slides in from right |
| Counter Animation | Framer Motion | `useMotionValue` + `useTransform` for number counting |

### Animation Variants
```typescript
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const scaleOnHover = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2 } }
};
```

## 5. Project File Structure

```
src/
├── components/
│   ├── ui/                    # shadcn components
│   ├── navbar.tsx
│   ├── mobile-menu.tsx
│   ├── section-heading.tsx
│   ├── service-card.tsx
│   ├── pricing-card.tsx
│   ├── feature-icon.tsx
│   └── footer.tsx
├── sections/
│   ├── hero-section.tsx
│   ├── services-bar.tsx
│   ├── what-we-do.tsx
│   ├── our-services.tsx
│   ├── infrastructure.tsx
│   ├── who-we-are.tsx
│   ├── investment-strategy.tsx
│   ├── mirror-trading.tsx
│   ├── responsible-investing.tsx
│   ├── trading-chart.tsx
│   ├── portfolio-management.tsx
│   ├── philosophy.tsx
│   ├── research-driven.tsx
│   ├── risk-management.tsx
│   ├── pricing-plans.tsx
│   ├── clear-processes.tsx
│   └── guide-next-step.tsx
├── hooks/
│   └── use-scroll.ts
├── lib/
│   ├── utils.ts
│   └── animations.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## 6. Package Installation List

```bash
# Animation library
npm install framer-motion

# Icons
npm install lucide-react

# Charts (if needed for custom chart)
npm install lightweight-charts

# Class utilities
npm install clsx tailwind-merge
```

## 7. Responsive Breakpoints

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | < 640px | Single column, hamburger menu |
| Tablet | 640-1024px | 2-column grids |
| Desktop | > 1024px | Full layout, 3-4 column grids |

## 8. Performance Considerations

1. **Images**: Use WebP format with fallbacks
2. **Lazy Loading**: Images below fold use `loading="lazy"`
3. **Animation**: Use `transform` and `opacity` only
4. **Bundle**: Code split by sections if needed
5. **Fonts**: Preload Inter font

## 9. Accessibility Requirements

1. All images have descriptive alt text
2. Color contrast ratio > 4.5:1
3. Focus states visible on all interactive elements
4. Keyboard navigation support
5. `prefers-reduced-motion` respected
