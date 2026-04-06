# Stock Market Luminator - Technical Specification

## 1. Tech Stack Overview (Updated)

| Category | Technology |
| :--- | :--- |
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS 3.4 |
| UI Components | Radix UI + shadcn/ui |
| Animation | Framer Motion |
| Security | Zod + React Hook Form + input-otp |
| Real-time Data | WebSocket (Native Gateway) |

## 2. Core Infrastructure Modules

### Institutional Authentication

- **Forms**: `SignInForm.tsx`, `SignUpForm.tsx` (Zod validation).
- **MFA**: `MfaVerification.tsx` (6-digit cryptographic handshake).
- **Session**: `AuthContext.tsx` with JWT-persist logic (MFA awareness).
- **Routing**: `ProtectedRoute.tsx` enforcing session + MFA + KYC status.

### Real-time Market Data (WebSocket)

- **Hook**: `useLiveMarketData.ts` (Auto-reconnect, Exponential Backoff).
- **Feed**: Institutional grade JSON stream for `TSLA` price action.
- **Buffer**: 15-point sliding window for live charting.

### KYC & Onboarding

- **Flow**: `KycStepper.tsx` (3-Phase Regulatory Compliance).
- **Step 1**: Identity Verification.
- **Step 2**: Document Submission.
- **Step 3**: Investor Profiling & Accreditation.

## 3. Tailwind & Design Tokens

- **Theme**: Premium Dark Glassmorphism.
- **Primary Color**: `#00fbfb` (Electric Cyan).
- **Secondary Color**: `#6305ef` (Deep Royal).
- **Background**: `#09090b` (Charcoal) with `#1b1b20` (Surface layers).

## 4. Final Implementation Status

All core architectural goals and roadmap items from the initial specification have been implemented, verified, and deployed. The platform currently maintains 100% feature parity with institutional-grade standards.

*Note: All core architectural goals from the initial spec have been implemented and verified in the production build.*
