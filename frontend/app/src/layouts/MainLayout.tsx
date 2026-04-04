import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar';
import { Footer } from '../sections/footer';

export function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#131318]">
      <Navbar />
      <Outlet />
      <Footer />
      {/* Google Translate mount point - must be in DOM but visually hidden */}
      <div id="google_translate_element" className="gt-hidden-mount" />
    </div>
  );
}
