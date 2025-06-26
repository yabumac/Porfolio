'use client';

import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  fromDirection?: 'left' | 'right' | 'bottom';
}

export function SectionWrapper({ children, className = '', fromDirection = 'bottom' }: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const springConfig = { stiffness: 70, damping: 15, mass: 0.5 };
  
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]),
    springConfig
  );
  
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [100, 0, 0, -100]),
    springConfig
  );
  
  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.2, 0.9, 1],
      fromDirection === 'left' 
        ? [-100, 0, 0, 100]
        : fromDirection === 'right'
        ? [100, 0, 0, -100]
        : [0, 0, 0, 0]
    ),
    springConfig
  );

  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0.8, 1, 1, 0.8]),
    springConfig
  );

  const rotate = useSpring(
    useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [5, 0, 0, -5]),
    springConfig
  );

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
        y,
        scale,
        rotateZ: rotate,
      }}
      className={`relative ${className}`}
    >
      {/* Parallax background effect */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 1], [1.2, 1]),
        }}
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10 pointer-events-none"
      />
      
      {/* Content with dramatic reveal */}
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]),
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>

      {/* Animated border effect */}
      <motion.div
        style={{
          scaleX: useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0]),
        }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"
      />
    </motion.div>
  );
} 