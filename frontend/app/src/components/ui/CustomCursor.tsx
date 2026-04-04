import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(position.x - 16, springConfig);
  const cursorY = useSpring(position.y - 16, springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#00fbfb] pointer-events-none z-[9999]"
      style={{
        x: cursorX,
        y: cursorY,
        boxShadow: "0 0 20px rgba(0, 251, 251, 0.4)",
      }}
    />
  );
}
