'use client';
import React, { useEffect, useState } from 'react';
import './multiColorPicker.css';
import { useMyContext } from '@/context/context';

interface Colors {
  Principal: string;
  Secondaire: string;
  Texte: string;
}

interface MultiColorPickerProps {
  onColorsSelect: (colors: Colors) => void;
}

const MultiColorPicker: React.FC<MultiColorPickerProps> = ({
  onColorsSelect,
}) => {
  const [{}, dispatch] = useMyContext();

  const [selectColors, setSelectColors] = useState<Colors>({
    Principal: '#abc2e8',
    Secondaire: '#f7b6b6',
    Texte: '#a6cca4',
  });

  const handleColorChange =
    (colorName: keyof Colors) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newColors = { ...selectColors, [colorName]: event.target.value };
      setSelectColors(newColors);
      // onColorsSelect(newColors);
    };

  useEffect(() => {
    if (selectColors) {
      dispatch({ type: 'ADD_COLORS', payload: selectColors });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectColors]);

  return (
    <section className="flex size-full flex-wrap justify-around">
      {Object.entries(selectColors).map(([colorName, colorValue]) => (
        <div key={colorName} className="m-3 flex items-center">
          <article className="flex justify-center -space-x-14">
            <div className="mix-blend-multiply">
              <div
                style={{ boxShadow: `0px 15px 15px ${colorValue}` }} // Appliquer le shadow ici
                className="bg-blue-500 input-color flex items-center justify-center overflow-hidden rounded-full p-1 shadow-lg"
              >
                <input
                  className="input-color"
                  aria-label="Color"
                  type="color"
                  value={colorValue}
                  onChange={handleColorChange(colorName as keyof Colors)}
                />
              </div>
            </div>
            <div className="mix-blend-multiply">
              <div className="input-color flex items-center justify-center overflow-hidden rounded-full p-1">
                <input
                  aria-label="Color"
                  className="input-color "
                  type="color"
                  value={colorValue}
                  onChange={handleColorChange(colorName as keyof Colors)}
                />
              </div>
            </div>
          </article>
          <p className="text-cyan-950 m-3">
            {colorName} : {colorValue}
          </p>
        </div>
      ))}
    </section>
  );
};

export default MultiColorPicker;
