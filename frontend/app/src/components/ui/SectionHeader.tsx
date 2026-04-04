import { motion } from 'framer-motion';
import { fadeInUpSoft, viewportOptions } from '../../lib/animations';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** Override text colour — defaults to gradient purple→dark */
  titleColor?: string;
  /** Reverse the underline accent colours */
  accentReversed?: boolean;
  /** Use light gradient (for dark backgrounds) */
  light?: boolean;
}

/**
 * Reusable section header with dual-coloured animated underline.
 * Usage: <SectionHeader title="Our Services" />
 */
export function SectionHeader({
  title,
  subtitle,
  titleColor,
  accentReversed = false,
  light = false,
}: SectionHeaderProps) {
  const headingClass = titleColor
    ? `text-[32px] md:text-[44px] font-extrabold ${titleColor} mb-4 tracking-[-0.02em] uppercase leading-tight`
    : light
      ? 'text-[32px] md:text-[44px] font-extrabold text-white mb-4 tracking-[-0.02em] uppercase leading-tight'
      : 'text-[32px] md:text-[44px] font-extrabold bg-gradient-to-r from-gray-900 via-[#7c3aed] to-gray-900 dark:from-white dark:via-[#a78bfa] dark:to-white bg-clip-text text-transparent mb-4 tracking-[-0.02em] uppercase leading-tight';

  return (
    <motion.div
      variants={fadeInUpSoft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
      className="text-center mb-16"
    >
      <h2 className={headingClass}>
        {title}
      </h2>
      <div className="flex justify-center gap-1.5 mb-2">
        {accentReversed ? (
          <>
            <div className="w-[50px] h-[3px] bg-[#7c3aed]" />
            <div className="w-10 h-[3px] bg-[#1e40af]" />
          </>
        ) : (
          <>
            <div className="w-10 h-[3px] bg-[#1e40af]" />
            <div className="w-[50px] h-[3px] bg-[#7c3aed]" />
          </>
        )}
      </div>
      {subtitle && (
        <p className="text-[17px] text-gray-600 dark:text-gray-400 leading-[1.8] font-light max-w-3xl mx-auto mt-8 transition-colors duration-300">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
