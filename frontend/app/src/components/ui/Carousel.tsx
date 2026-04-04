import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
// Use type-only imports for Framer Motion types
import type { PanInfo, Transition, MotionValue } from 'framer-motion';
// Use existing lucide-react icons instead of react-icons to avoid environment issues
import { FileText, Circle, Layers, Layout, Code } from 'lucide-react';

import './Carousel.css';

interface CarouselItemData {
  id?: number | string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const DEFAULT_ITEMS: CarouselItemData[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FileText className="carousel-icon" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <Circle className="carousel-icon" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <Layers className="carousel-icon" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <Layout className="carousel-icon" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <Code className="carousel-icon" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
// Custom spring transition for smooth 3D rotation
const SPRING_TRANSITION: Transition = { 
  type: 'spring', 
  stiffness: 300, 
  damping: 30 
} as const;

interface CarouselItemProps {
  item: CarouselItemData;
  index: number;
  itemWidth: number;
  round?: boolean;
  trackItemOffset: number;
  x: MotionValue<number>;
  transition: Transition;
}

function CarouselItem({ item, index, round, trackItemOffset, x, transition }: Omit<CarouselItemProps, 'itemWidth'>) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [25, 0, -25];
  const rotateY = useTransform(x, range, outputRange, { clamp: true });
  const scale = useTransform(x, range, [0.85, 1, 0.85], { clamp: true });
  const opacity = useTransform(x, range, [0.3, 1, 0.3], { clamp: true });
  const zIndex = useTransform(x, range, [0, 10, 0], { clamp: true });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`carousel-item ${round ? 'round-item' : ''}`}
      style={{
        rotateY,
        scale,
        opacity,
        zIndex,
      }}
      transition={transition}
    >
      <div className={`carousel-item-header ${round ? 'round' : ''}`}>
        <span className="carousel-icon-container">{item.icon}</span>
      </div>
      <div className="carousel-item-content">
        <div className="carousel-item-title">{item.title}</div>
        <p className="carousel-item-description">{item.description}</p>
      </div>
    </motion.div>
  );
}

interface CarouselProps {
  items?: CarouselItemData[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 350,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps) {
  const itemWidth = baseWidth;
  const trackItemOffset = itemWidth + GAP;
  
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(() => (loop ? 1 : 0));
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initial position setup
    const startingPosition = loop ? 1 : 0;
    x.set(-startingPosition * trackItemOffset);
  }, [loop, trackItemOffset, x]);

  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      if (!isAnimating) {
        setPosition((prev: number) => {
           const next = prev + 1;
           if (next >= itemsForRender.length) return loop ? 1 : prev;
           return next;
        });
      }
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length, isAnimating, loop]);

  const effectiveTransition: Transition = isJumping ? { duration: 0 } : SPRING_TRANSITION;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition((prev: number) => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0
        }
      };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  // Optimization: For high-volume strategic notes (300+ requested), 
  // we limit dots to prevent UI overflow.
  const maxIndicators = 15;
  const showIndicators = items.length > 0 && items.length <= maxIndicators;

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round-container' : ''}`}
      style={{ 
        '--base-width': `${baseWidth}px`,
        '--item-width': `${itemWidth}px`,
        '--track-gap': `${GAP}px`
      } as React.CSSProperties}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item: CarouselItemData, index: number) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      
      {showIndicators && (
        <div className={`carousel-indicators-container ${round ? 'round-indicators' : ''}`}>
          <div className="carousel-indicators">
            {items.map((_: CarouselItemData, index: number) => (
              <motion.div
                key={index}
                className={`carousel-indicator ${activeIndex === index ? 'active' : 'inactive'}`}
                animate={{
                  scale: activeIndex === index ? 1.2 : 1
                }}
                onClick={() => setPosition(loop ? index + 1 : index)}
                transition={{ duration: 0.15 }}
                style={{
                  minWidth: '4px', // ensure flex doesn't squash them
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {!showIndicators && items.length > 0 && (
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-white/40 tracking-[.3em] font-bold uppercase pointer-events-none">
            {activeIndex + 1} / {items.length}
         </div>
      )}
    </div>
  );
}
