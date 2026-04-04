import { motion } from 'framer-motion';
import { heroContainer, fadeInUp } from '../lib/animations';
import TextType from '../components/ui/TextType';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[88px]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/images/hero-bg.jpg')]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="visible"
          className="max-w-[520px]"
        >
          <motion.div
            variants={fadeInUp}
            className="bg-black/60 backdrop-blur-sm p-8  border-brand-purple"
          >
            <motion.div
              variants={fadeInUp}
              className="text-[32px] md:text-[44px] font-bold text-white mb-4 leading-tight pb-1 min-h-[55px] md:min-h-[60px]"
            >
              <TextType
                text={["Invest with purpose.", "Build your financial legacy.", "Trade global markets seamlessly."]}
                typingSpeed={60}
                deletingSpeed={30}
                pauseDuration={2500}
                showCursor
                cursorCharacter="|"
                className="inline-block"
              />
            </motion.div>
            
            <motion.p
              variants={fadeInUp}
              className="text-[15px] text-gray-200 mb-8 leading-relaxed font-normal"
            >
              Harness institutional-grade infrastructure and AI-driven market intelligence. From expertly managed bespoke portfolios to sophisticated private market allocations, we equip visionary investors to compound generational wealth.
            </motion.p>
            
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4"
            >
              <a href="#signin"
                className="bg-[#00fbfb] hover:bg-[#6305ef] text-[#002020] hover:text-white px-8 py-3 text-[14px] font-bold tracking-[-0.04em] transition-colors inline-block text-center"
              >
                SIGN IN
              </a>
              <a href="#signup"
                className="bg-transparent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] text-white hover:bg-[#6305ef] px-8 py-3 text-[14px] font-bold tracking-[-0.04em] transition-colors inline-block text-center"
              >
                SIGN UP
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
