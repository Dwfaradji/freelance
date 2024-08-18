import React, { useEffect, useMemo, useState } from 'react';
import logoSVG from '@/components/ui/Logo/logo';

const ImportLogo = ({ displayColor }) => {
  const [colors, setColors] = useState('');
  const colorsInit = useMemo(
    () => ({
      colorPrimary: '#3c9dda',
      colorSecondary: '#5e6163',
    }),
    [],
  );

  const colorsSecond = useMemo(
    () => ({
      colorPrimary: '#ffffff',
      colorSecondary: '#3c9dda',
    }),
    [],
  );

  const svgElement = logoSVG(colors);

  useEffect(() => {
    if (displayColor === 'colorP') {
      setColors(colorsInit);
    } else {
      setColors(colorsSecond);
    }
  }, [displayColor]);

  return <div className={'h-20 w-20'}>{svgElement}</div>;
};

export default ImportLogo;
