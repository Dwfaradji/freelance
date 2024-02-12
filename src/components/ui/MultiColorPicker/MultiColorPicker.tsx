"use client";
import React, { useState } from "react";
import "./MultiColorPicker.css";

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
  const [selectColors, setSelectColors] = useState<Colors>({
    Principal: "#abc2e8",
    Secondaire: "#f7b6b6",
    Texte: "#a6cca4",
  });

  const handleColorChange =
    (colorName: keyof Colors) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColors = { ...selectColors, [colorName]: event.target.value };
        setSelectColors(newColors);
        onColorsSelect(newColors);
      };

  return (
    <div className="color-picker-container w-full justify-around flex flex-wrap h-full">
      {Object.entries(selectColors).map(([colorName, colorValue]) => (
        <div key={colorName} className="flex items-center m-3 ">
          <div className="flex justify-center -space-x-14 ">
            <div className="mix-blend-multiply">
              <div
                style={{ boxShadow: `0px 15px 15px ${colorValue}` }} // Appliquer le shadow ici
                className="bg-blue-500 shadow-lg flex justify-center items-center rounded-full overflow-hidden p-1 input-color"
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
            <div className=" mix-blend-multiply ">
              <div className="flex justify-center items-center rounded-full overflow-hidden p-1 input-color">
                <input
                  aria-label="Color"
                  className="input-color "
                  type="color"
                  value={colorValue}
                  onChange={handleColorChange(colorName as keyof Colors)}
                />
              </div>
            </div>
          </div>

          <p className="text-cyan-950 m-3">
            {colorName} : {colorValue}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MultiColorPicker;
