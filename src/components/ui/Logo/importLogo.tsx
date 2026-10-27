import React from 'react';
import LogoSVG from './LogoSvg';

interface ILogoProps {
  displayColor?: 'colorP' | 'colorS';
  className?: string;
  showText?: boolean;
  animated?: boolean;
}

const ImportLogo = ({ className, showText = true, animated = true }: ILogoProps) => {
  return (
    <div className={`flex items-center gap-2.5 ${className || ''}`}>
      <div className="relative size-9 sm:size-10 flex items-center justify-center shrink-0">
        {/* Glow ambient aura au survol */}
        <div className="absolute inset-0 rounded-xl bg-primary-500/15 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <LogoSVG className="size-full relative z-10" animated={animated} />
      </div>
      {showText && (
        <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center select-none">
          Dev<span className="text-primary-400">Evoke</span>
        </span>
      )}
    </div>
  );
};

export default ImportLogo;
