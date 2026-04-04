import { motion } from 'framer-motion';
import { Wifi, ThumbsUp, Flame, Briefcase } from 'lucide-react';
import { staggerContainer, fadeInUp, viewportOptions } from '../lib/animations';
import { SectionHeader } from '../components/ui/SectionHeader';
import ShapeGrid from '../components/ui/ShapeGrid';
import { useTheme } from '../components/theme-provider';

const features = [
  {
    icon: Wifi,
    description: 'Answers to the questions you have, and the ones you never knew you had',
  },
  {
    icon: ThumbsUp,
    description: 'Help seeing your financial blind spots and ways to account for them',
  },
  {
    icon: Flame,
    description: 'A judgment-free, pressure-free environment',
  },
  {
    icon: Briefcase,
    description: 'A financial partner who sees where you are now and where you want to go',
  },
];

export function GuideNextStep() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-[120px] bg-brand-surface dark:bg-[#131318] transition-colors duration-300 relative overflow-hidden">
      {/* ShapeGrid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ShapeGrid
          direction="diagonal"
          speed={0.5}
          squareSize={45}
          borderColor={isDark ? 'rgba(255,255,255,0.03)' : 'rgba(0,0,0,0.04)'}
          hoverFillColor={isDark ? 'rgba(124, 58, 237, 0.15)' : 'rgba(124, 58, 237, 0.08)'}
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title="Here to guide your next step."
          titleColor="text-brand-purple"
          subtitle="Our advisors can get you closer to your dreams — showing you the right financial steps to take today and in the days to come."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="text-center px-4"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6">
                <feature.icon className="w-12 h-12 text-brand-purple" strokeWidth={1} />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-[16px] leading-[1.8] font-light transition-colors duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
