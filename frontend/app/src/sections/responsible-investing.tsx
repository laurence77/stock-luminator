import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

export function ResponsibleInvesting() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="py-[120px] bg-white dark:bg-[#131318] transition-colors duration-300 overflow-hidden relative">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="pl-0 lg:pl-10 text-left"
          >
            <h3 className="text-[32px] md:text-[40px] font-bold text-[#7c3aed] mb-4 tracking-wide uppercase transition-colors duration-300">
              Responsible Investing
            </h3>
            <div className="w-[50px] h-1 bg-[#10b981] mb-8" />
            
            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[1.8] mb-6 transition-colors duration-300">
              At Stock Market Luminator Finance we consider environmental, social and governance 
              (ESG) issues throughout the investment decision-making process and life-cycle. We 
              believe that robust and well-implemented ESG policies and practices contribute directly 
              to the long-term success and sustainability of our portfolio companies. Implemented 
              effectively, they help us to protect and enhance reputation and financial performance 
              whilst creating stronger, more valuable companies which can create benefits for all 
              stakeholders: from employees to customers, suppliers to shareholders, and the wider 
              community at large.
            </p>
            
            <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[1.8] transition-colors duration-300">
              We review our approach to ESG regularly to ensure that it continues to reflect best practice.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="w-full h-[550px] relative z-0">
              <div className="absolute inset-0">
                <img
                  src="/images/responsible-investing.jpg"
                  alt="Sustainable corporate building"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Notification Box */}
              <div className="absolute -top-6 -right-6 lg:-right-10 bg-white dark:bg-[#131318] shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-none p-5 z-10 flex items-center gap-3 transition-colors duration-300">
                <div className="w-2 h-2  bg-[#10b981] animate-pulse" />
                <p className="text-[15px] text-gray-600 dark:text-gray-400 m-0 leading-tight transition-colors duration-300">
                  Someone from <span className="font-bold text-gray-900 dark:text-white transition-colors duration-300">South Africa</span> just invested <span className="text-[#10b981] font-bold">$1,500</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
