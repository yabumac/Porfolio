'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ReadingProgress() {
  const [completion, setCompletion] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setCompletion(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-primary origin-[0%] transform-gpu"
        style={{ scaleX }}
      />
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg"
        >
          <span className="text-sm font-medium">{completion}%</span>
        </motion.div>
      </div>
    </>
  );
} 