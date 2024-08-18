'use client';
import React, { useState, useEffect } from 'react';
import { useMyContext } from '@/context/context';

interface FontSelectorProps {
  label: string;
  value: string;
  onChange: (fontKey: string, newValue: string) => void;
  fonts: string[];
}

const FontSelector: React.FC<FontSelectorProps> = ({
  label,
  value,
  onChange,
  fonts,
}) => (
  <article className="mb-8">
    <label htmlFor={label}>{label}:</label>
    <select
      id={label}
      value={value}
      onChange={(e) => onChange(label, e.target.value)}
      className="border-none bg-transparent text-center"
    >
      {fonts.map((font) => (
        <option key={font} value={font}>
          {font}
        </option>
      ))}
    </select>
    <div
      style={{
        fontFamily: value,
        marginTop: '2em',
        border: '1px solid #ccc',
        padding: '10px',
      }}
    >
      Aperçu : The quick brown fox jumps over the lazy dog
    </div>
  </article>
);

interface MultiFontsProps {
  onFontsSelect: (font: { [key: string]: string }) => void;
}

const MultiFontsChoice: React.FC<MultiFontsProps> = () => {
  const [{}, dispatch] = useMyContext();

  const availableFonts: string[] = [
    'Arial',
    'Times New Roman',
    'Georgia',
    'Verdana',
  ];

  const [selectedFontFirst, setSelectedFontFirst] = useState<string>(
    availableFonts[0],
  );
  const [selectedFontSecond, setSelectedFontSecond] = useState<string>(
    availableFonts[1],
  );

  const handleFontChange = (fontKey: string, newValue: string) => {
    if (fontKey === 'Choisissez une police principale') {
      setSelectedFontFirst(newValue);
    } else {
      setSelectedFontSecond(newValue);
    }
  };

  useEffect(() => {
    const fontsSelected = {
      primary: selectedFontFirst,
      secondary: selectedFontSecond,
    };

    if (fontsSelected) {
      dispatch({ type: 'ADD_FONTS', payload: fontsSelected });
    }
  }, [selectedFontFirst, selectedFontSecond]);

  return (
    <section className="flex size-full flex-col items-center justify-around">
      <FontSelector
        label="Choisissez une police principale"
        value={selectedFontFirst}
        onChange={handleFontChange}
        fonts={availableFonts}
      />
      <FontSelector
        label="Choisissez une police secondaire"
        value={selectedFontSecond}
        onChange={handleFontChange}
        fonts={availableFonts}
      />
    </section>
  );
};

export default MultiFontsChoice;
