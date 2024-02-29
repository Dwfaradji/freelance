import React, { useEffect, useState } from "react";
import { useMyContext } from "@/context/Mycontext";

interface MultiCheckboxProps {
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
  page: string;
  valueDefault: string;
}

interface Selections {
  [key: string]: string;
}

const MultiCheckbox = ({ page, options, valueDefault }: MultiCheckboxProps) => {
  const [{ checkbox }, dispatch] = useMyContext();
  const [selections, setSelections] = useState<Selections>({ [page]: valueDefault });

  useEffect(() => {
    dispatch({
      type: "ADD_CHECKBOX",
      payload: { page, value: selections[page] } // Envoyer uniquement la sélection de la page actuelle
    });
  }, [selections, page, dispatch]);

  const handleOptionChange = (page: string, option: string) => {
    setSelections(prevSelections => ({
      ...prevSelections,
      [page]: option
    }));
  };

  return (
    <section className="mx-auto flex items-center  flex-col lg:flex-row  justify-evenly flex-wrap h-full">
      {options.map((option, i) => (
        <article key={option}>
          <label
            htmlFor={option + i}
            className="w-56 whitespace-nowrap m-1 md:m-5 text-slate-700 bg-blue shadow flex justify-between items-center gap-6 rounded-full p-4 ring-1 ring-transparent hover:bg-slate-100 cursor-pointer"
          >
            {option}
            <input
              id={option + i}
              type="radio"
              className="box-content h-3 w-3 "
              checked={selections[page] === option}
              onChange={() => handleOptionChange(page, option)}
            />
          </label>
        </article>
      ))}
    </section>
  );
};

export default MultiCheckbox;
