import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from '@/components/ui/LoadingScreen';
import { CustomCursor } from '@/components/ui/CustomCursor';

// Layouts
import { MainLayout } from '@/layouts/MainLayout';
import { ServiceLayout } from '@/layouts/ServiceLayout';
import { DashboardLayout } from '@/layouts/DashboardLayout';

// Pages (lazy loaded for code splitting)
const Home = lazy(() => import('@/pages/Home'));
const SignIn = lazy(() => import('@/pages/SignIn').then(m => ({ default: m.SignIn })));
const SignUp = lazy(() => import('@/pages/SignUp').then(m => ({ default: m.SignUp })));
const Markets = lazy(() => import('@/pages/Markets').then(m => ({ default: m.Markets })));
const ServicePage = lazy(() => import('@/pages/ServicePage').then(m => ({ default: m.ServicePage })));
const TeslaLandingPage = lazy(() => import('@/pages/tesla/TeslaLandingPage'));
const OurTeam = lazy(() => import('@/pages/team/OurTeam'));

// AnimatePresence requires location from inside BrowserRouter
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core Site Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/markets" element={<Markets />} />
          <Route path="/team" element={<OurTeam />} />
        </Route>

        {/* Independent Pages */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-started" element={<SignUp />} />

        {/* Deep Dive Services Layout */}
        <Route path="/services" element={<ServiceLayout />}>
          <Route path="tesla" element={<TeslaLandingPage />} />
          <Route path=":serviceId" element={<ServicePage />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/dashboard/*" element={<DashboardLayout />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CustomCursor />
      <Suspense fallback={<LoadingScreen />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
