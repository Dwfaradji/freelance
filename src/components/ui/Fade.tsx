import React from 'react';

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
  className,
}) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Fade;
