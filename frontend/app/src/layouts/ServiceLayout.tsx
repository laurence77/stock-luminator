import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Footer } from '../sections/footer';

export function ServiceLayout() {
  return (
    <div className="bg-[#131318] min-h-screen selection:bg-[#00fbfb]/30 selection:text-white">
      <Navbar />
      <div className="pt-20"> {/* Navigation space for absolute header pages if needed */}
        <Outlet />
      </div>
      <Footer />
      <div id="google_translate_element" className="gt-hidden-mount" />
    </div>
  );
}
