import React, { useEffect, useMemo, useState } from 'react';
import logoSVG from '@/components/ui/Logo/LogoSvg';

interface ILogoProps {
  displayColor?: 'colorP' | 'colorS';
}

interface IColors {
  colorPrimary: string;
  colorSecondary: string;
}

const ImportLogo = ({ displayColor }: ILogoProps) => {
  const [colors, setColors] = useState<IColors | null>(null);

  const colorsInit = useMemo<IColors>(
    () => ({
      colorPrimary: '#3c9dda',
      colorSecondary: '#5e6163',
    }),
    [],
  );

  const colorsSecond = useMemo<IColors>(
    () => ({
      colorPrimary: '#ffffff',
      colorSecondary: '#3c9dda',
    }),
    [],
  );

  useEffect(() => {
    if (displayColor === 'colorP') {
      setColors(colorsInit);
    } else {
      setColors(colorsSecond);
    }
  }, [displayColor, colorsInit, colorsSecond]);

  if (!colors) {
    return null;
  }

  const svgElement = logoSVG(colors);

  return <div className={'size-20'}>{svgElement}</div>;
};

export default ImportLogo;
