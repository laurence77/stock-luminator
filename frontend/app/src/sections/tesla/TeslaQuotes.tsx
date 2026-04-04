import { motion } from 'framer-motion';
import { viewportOptions } from '../../lib/animations';
import Carousel from '../../components/ui/Carousel';
import { EXTENDED_TESLA_NOTES } from '../../data/tesla-notes';

export default function TeslaQuotes() {
  return (
    <section className="py-32 bg-[#131318] relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#6305ef]/5 blur-[100px] translate-y-1/2 -translate-x-1/2 rounded-full" />
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOptions}
            className="text-[32px] md:text-[44px] font-bold text-white tracking-[-0.04em]"
          >
            Master Plan V4 Strategic Library.
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={viewportOptions}
            className="h-1 bg-[#00fbfb] mx-auto" 
          />
        </div>

        <div className="flex justify-center items-center py-10 min-h-[600px]">
           <Carousel 
             items={EXTENDED_TESLA_NOTES}
             baseWidth={400}
             autoplay={true}
             autoplayDelay={4000}
             pauseOnHover={true}
             loop={true}
           />
        </div>

        <div className="mt-20 text-center">
           <p className="text-[12px] text-white/30 tracking-[0.4em] uppercase font-bold">
              Navigate the Shift in Global Labor and Energy Economics.
           </p>
        </div>
      </div>
    </section>
  );
}
