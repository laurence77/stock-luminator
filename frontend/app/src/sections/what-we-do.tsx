import { motion } from 'framer-motion';
import DotGrid from '../components/ui/DotGrid';
import { useTheme } from '../components/theme-provider';

export function WhatWeDo() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <section className="py-[120px] bg-[#f8f9fa] dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* DotGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DotGrid 
          baseColor={isDark ? '#271E37' : '#c8c8d4'}
          activeColor={isDark ? '#7c3aed' : '#7c3aed'}
        />
      </div>
      {/* Decorative background circle/watermark could go here if needed */}
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="bg-white/85 dark:bg-white/5 backdrop-blur-xl p-10 lg:p-14 border border-gray-100 dark:border-white/10 shadow-2xl relative z-20 max-w-[900px] mx-auto"
        >
          <h2 className="text-[32px] md:text-[40px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-6 tracking-[-0.02em] uppercase transition-colors duration-300">
            WHAT WE DO
          </h2>
          <div className="flex justify-center gap-1.5 mb-10">
            <div className="w-10 h-0.5 bg-[#60a5fa]" />
            <div className="w-[50px] h-0.5 bg-[#1e40af]" />
          </div>
          
          <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[1.8] mb-12 max-w-[700px] mx-auto transition-colors duration-300">
            In an era of unprecedented market complexity, structured foresight is your greatest asset. Our institutional-grade wealth planning framework delivers absolute clarity, transforming capital preservation strategies into aggressive growth mechanisms designed to secure your financial sovereignty.
          </p>
          
          <div className="mb-14">
            <a href="#certificate"
              className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-10 py-4 text-[15px] font-bold tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl inline-block uppercase"
            >
              View Certificate of Incorporation
            </a>
          </div>
          
          <p className="text-[13px] font-bold text-gray-400 tracking-[0.2em] uppercase">
            ESTABLISHED FINANCIAL PLANNING AUTHORITY
          </p>
        </motion.div>
      </div>
    </section>
  );
}
