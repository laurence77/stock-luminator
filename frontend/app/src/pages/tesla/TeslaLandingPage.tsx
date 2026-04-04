import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOptions } from '../../lib/animations';
import TeslaHero from '../../sections/tesla/TeslaHero';
import TeslaProductPillars from '../../sections/tesla/TeslaProductPillars';
import TeslaStats from '../../sections/tesla/TeslaStats';
import TeslaEcosystem from '../../sections/tesla/TeslaEcosystem';
import TeslaQuotes from '../../sections/tesla/TeslaQuotes';
import { Link } from 'react-router-dom';

export default function TeslaLandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Custom Progress Bar */}
      <motion.div 
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-[#00fbfb] z-[60] origin-left"
      />

      {/* Main Content */}
      <main>
        <TeslaHero />
        
        {/* Core Product Pillars (Cinematic Parallax) */}
        <TeslaProductPillars />

        {/* Financial Growth Logic */}
        <div id="stats" className="border-t border-white/5">
          <TeslaStats />
        </div>

        {/* Ecosystem Overview */}
        <div className="border-t border-white/5">
          <TeslaEcosystem />
        </div>

        {/* Analyst Validation */}
        <div className="py-24 bg-[#1b1b20] border-t border-white/5">
           <TeslaQuotes />
        </div>

        {/* Final CTA Section */}
        <section className="py-32 bg-[#131318] relative overflow-hidden border-t border-white/5">
           <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
                className="space-y-12"
              >
                <motion.h2 
                  variants={fadeInUp}
                  className="text-[40px] md:text-[60px] font-bold text-white tracking-[-0.04em]"
                >
                  Join the Next Massive <br />
                  <span className="text-[#00fbfb]">Wave of Growth.</span>
                </motion.h2>

                <motion.p 
                  variants={fadeInUp}
                  className="text-[18px] text-gray-400 max-w-[700px] mx-auto leading-relaxed"
                >
                  Tesla is on the precipice of a transformational moment in history. Execute your strategic allocation today and position your portfolio for the autonomous future.
                </motion.p>

                <motion.div 
                  variants={fadeInUp}
                  className="flex flex-col md:flex-row gap-6 justify-center items-center"
                >
                   <Link to="/signup" className="bg-[#00fbfb] hover:bg-[#6305ef] text-[#131318] hover:text-white px-12 py-5 text-[15px] font-bold tracking-[0.1em] uppercase transition-all shadow-2xl shadow-[#00fbfb]/20 inline-block text-center">
                      Invest in Tesla Now
                   </Link>
                   <Link to="/" className="text-white/60 font-bold hover:text-white text-[13px] tracking-[0.2em] uppercase transition-colors">
                      Back to All Services
                   </Link>
                </motion.div>
              </motion.div>
           </div>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <footer className="py-12 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-[12px] text-white/30 text-center leading-relaxed max-w-[1000px] mx-auto">
              Investment in concentrated equity like Tesla involves significant risk. The "Sustainable Abundance" vision and $8.5T projections are based on market capitalization milestones and visionary projections provided in the Shareholder Presentation of May 2024. Please consult with a financial advisor before executing any trade.
           </p>
        </div>
      </footer>
    </>
  );
}
