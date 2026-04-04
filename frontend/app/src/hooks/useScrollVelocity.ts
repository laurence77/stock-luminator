import { useScroll, useVelocity, useTransform, useSpring } from "framer-motion";

export function useScrollVelocity() {
  const { scrollY } = useScroll();
  
  // Track scroll speed and smooth it out instantly
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });

  // Dynamically map vertical velocity (e.g., -1000 to 1000px/s) to intense CSS blur sizes
  const blurValue = useTransform(smoothVelocity, [-1000, 0, 1000], [24, 8, 24]);
  const blurFilter = useTransform(blurValue, (v) => `blur(${v}px)`);

  // Dynamically map velocity to alpha transparency boundaries
  const bgOpacity = useTransform(smoothVelocity, [-1000, 0, 1000], [0.95, 0.65, 0.95]);

  return { blurFilter, bgOpacity };
}
