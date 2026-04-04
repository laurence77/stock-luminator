import { ArrowLeft } from 'lucide-react';

import { useParams, Link } from 'react-router-dom';
import { services } from '../data/servicesData';

export function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services[serviceId?.toLowerCase().replace('service-', '') || ''];

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <p className="text-gray-500 text-lg mb-4">Service not found.</p>
        <Link to="/" className="text-blue-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top bar */}
      <div className="h-14 flex items-center px-6 shadow-sm sticky top-0 bg-white z-50">
        <Link
          to="/#services"
          className="flex items-center gap-2 text-gray-600 hover:text-purple-700 font-medium transition-colors text-sm"
          aria-label="Back to services"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Services
        </Link>
      </div>

      {/* Hero image */}
      <div 
        className="w-full h-[340px] relative"
        style={{ 
          backgroundImage: `url('${service.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <h1 className="absolute bottom-8 left-8 text-white text-[36px] font-bold tracking-widest uppercase">
          {service.title}
        </h1>
      </div>

      {/* Content */}
      <div className="max-w-[860px] mx-auto px-6 py-16">
        <p className="text-gray-600 text-[17px] leading-relaxed mb-12 pl-5">
          {service.description}
        </p>

        <h2 className="text-[13px] font-bold tracking-widest text-gray-400 uppercase mb-6">Key Features</h2>
        <ul className="space-y-4 mb-16">
          {service.details.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 text-[15px]">
              <span className="mt-1 w-2 h-2  bg-purple-600 shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <Link
          to="/signup"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-10 py-4 font-bold tracking-wider text-[14px] uppercase transition-colors "
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
