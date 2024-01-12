import React, { useState } from "react";

const MultiFontsChoice = () => {
  const [selectedFontFirst, setSelectedFontFirst] = useState("Arial"); // État pour la police sélectionnée
  const [selectedFontSecond, setSelectedFontSecond] = useState("Helvetica"); // État pour la police sélectionnée

  // Liste des polices disponibles
  const availableFonts = ["Arial", "Times New Roman", "Georgia", "Verdana"];

  const handleFontChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.id === "fontSelectorFirst") {
      setSelectedFontFirst(e.target.value);
    } else {
      setSelectedFontSecond(e.target.value);
    }
  };

  return (
    <div className={"w-full flex-wrap"}>
      <div className="mb-8 ">
        {/* Appliquer la police sélectionnée */}
        <label className="w-2/4" htmlFor="fontSelectorFirst">
          Choisissez une police principal:
        </label>
        <select
          id="fontSelectorFirst"
          value={selectedFontFirst}
          onChange={handleFontChange}
          className="text-center"
        >
          {availableFonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        {/* Élément d'aperçu */}
        <div
          className="font-preview"
          style={{
            fontFamily: selectedFontFirst,
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          Aperçu : The quick brown fox jumps over the lazy dog
        </div>
      </div>
      <div className="mb-8">
        {/* Appliquer la police sélectionnée */}
        <label htmlFor="fontSelectorLast">
          Choisissez une police secondaire:
        </label>
        <select
          id="fontSelectorLast"
          value={selectedFontSecond}
          onChange={handleFontChange}
          className="text-center"
        >
          {availableFonts.map((font) => (
            <option key={font} value={font}>
              {font}
            </option>
          ))}
        </select>
        {/* Élément d'aperçu */}
        <div
          className="font-preview"
          style={{
            fontFamily: selectedFontSecond,
            marginTop: "20px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          Aperçu : The quick brown fox jumps over the lazy dog
        </div>
        {/* ... reste du formulaire ... */}
      </div>
    </div>
  );
};

export default MultiFontsChoice;
