'use client';

import React from 'react';
import { motion } from 'motion/react';

export interface FadeProps {
  children?: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  cascade?: boolean;
  damping?: number;
  delay?: number;
  fraction?: number;
  triggerOnce?: boolean;
  className?: string;
}

export const Fade: React.FC<FadeProps> = ({
  children,
  direction = 'up',
  delay = 0,
  className,
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 20 };
      case 'down':
        return { opacity: 0, y: -20 };
      case 'left':
        return { opacity: 0, x: 20 };
      case 'right':
        return { opacity: 0, x: -20 };
      default:
        return { opacity: 0, y: 20 };
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: delay ? delay / 1000 : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Fade;
