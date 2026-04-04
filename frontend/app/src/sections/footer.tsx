import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

const usefulLinks = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Team', href: '#team' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Services', href: '#services' },
  { name: 'Contact Us', href: '#contact' },
];

const serviceLinks = [
  'Stock Market',
  'Foreign Exchange',
  'Option Trading',
  'Portfolio Management',
];

export function Footer() {
  return (
    <footer className="bg-white dark:bg-[#131318] border-t border-gray-100 dark:border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-[100px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Column 1 - Brand Info */}
          <div className="lg:col-span-1">
            <h4 className="text-[20px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent tracking-[-0.02em] uppercase mb-8">
              Stock Market Luminator
            </h4>
            <div className="w-[40px] h-0.5 bg-[#60a5fa] mb-6" />
            <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-[1.8] font-light">
              We are a global multi-asset investment manager creating lasting impact for our investors and communities in which we live.
            </p>
          </div>

          {/* Column 2 - Useful Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[16px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent uppercase tracking-[-0.02em]st mb-8">Useful Links</h4>
            <ul className="space-y-4">
              {usefulLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={`${import.meta.env.BASE_URL}${link.href}`}
                    className="text-gray-500 dark:text-gray-400 text-[15px] hover:text-[#1e40af] dark:hover:text-[#60a5fa] font-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Our Services */}
          <div className="lg:col-span-1">
            <h4 className="text-[16px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent uppercase tracking-[-0.02em]st mb-8">Our Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-500 dark:text-gray-400 text-[15px] hover:text-[#1e40af] dark:hover:text-[#60a5fa] font-light transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Details */}
          <div className="lg:col-span-1">
            <h4 className="text-[16px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent uppercase tracking-[-0.02em]st mb-8">Contact Us</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#1e40af] dark:text-[#60a5fa] mt-1 shrink-0" />
                <p className="text-gray-500 dark:text-gray-400 text-[15px] leading-[1.6] font-light">
                  150 W 6th St, Austin<br />
                  TX 78701, USA
                </p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#1e40af] dark:text-[#60a5fa] mt-1 shrink-0" />
                <a href="mailto:support@stockmarketluminator.online" className="text-[#10b981] dark:text-[#34d399] font-medium text-[15px] break-all hover:underline">
                  support@stockmarketluminator.online
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-50 dark:bg-[#1b1b20] border-t border-gray-100 dark:border-white/5">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500 dark:text-gray-400 text-[14px] font-medium tracking-wide">
            © {new Date().getFullYear()} Stock Market Luminator. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
