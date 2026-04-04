import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layouts
import { MainLayout } from './layouts/MainLayout';
import { ServiceLayout } from './layouts/ServiceLayout';
import { DashboardLayout } from './layouts/DashboardLayout';

// Pages
import Home from './pages/Home';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Markets } from './pages/Markets';
import { ServicePage } from './pages/ServicePage';
import TeslaLandingPage from './pages/tesla/TeslaLandingPage';
import OurTeam from './pages/team/OurTeam';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
