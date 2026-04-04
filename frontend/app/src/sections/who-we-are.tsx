import { motion } from 'framer-motion';
import { slideInLeft, slideInRight, viewportOptions } from '../lib/animations';
import { SectionHeader } from '../components/ui/SectionHeader';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

export function WhoWeAre() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-[100px] bg-[#fdfdfd] dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader title="Who We Are" />

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="pl-0 lg:pl-10 text-left bg-white/85 dark:bg-white/5 backdrop-blur-xl p-8 lg:p-12 border border-gray-100 dark:border-white/10 shadow-2xl relative z-20"
          >
            <h3 className="text-[24px] lg:text-[28px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-8 uppercase tracking-[-0.02em] transition-colors duration-300">
              Architects of Market Intelligence
            </h3>
            <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed mb-6 transition-colors duration-300">
              At Stock Market Luminator, we operate at the frontier of quantitative analysis and neural execution. Our mission is to illuminate the complexities of global liquidity, providing our partners with a definitive edge through proprietary architectural screening and institutional-grade risk management.
            </p>
            <p className="text-[16px] text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300 font-medium">
              We specialize in the high-fidelity integration of alternative assets—from private equity and orbital logistics to decentralised finance kernels. By identifying structural macroeconomic shifts before they manifest in benchmark indices, we deliver a top-down strategic allocation designed for generational compounding and absolute resilience.
            </p>
          </motion.div>

          {/* Right - Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="relative"
          >
            <div className="w-full h-[500px] overflow-hidden border border-gray-100 dark:border-white/10 relative">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={`${import.meta.env.BASE_URL}images/tesla/About-Us-Fun-tesla-Global.mp4`} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
