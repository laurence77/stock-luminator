import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Spinner } from './components/ui/spinner';

const FullPageLoader = () => (
  <div className="w-screen h-screen flex items-center justify-center bg-white dark:bg-[#09090B]">
    <div className="text-[#7c3aed]">
      <Spinner className="w-12 h-12" />
    </div>
  </div>
);

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { ServiceLayout } from './layouts/ServiceLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Pages
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn').then(module => ({ default: module.SignIn })));
const SignUp = lazy(() => import('./pages/SignUp').then(module => ({ default: module.SignUp })));
const Markets = lazy(() => import('./pages/Markets').then(module => ({ default: module.Markets })));
const ServicePage = lazy(() => import('./pages/ServicePage').then(module => ({ default: module.ServicePage })));
const TeslaLandingPage = lazy(() => import('./pages/tesla/TeslaLandingPage'));
const OurTeam = lazy(() => import('./pages/team/OurTeam'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<FullPageLoader />}>
        <Routes>
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
