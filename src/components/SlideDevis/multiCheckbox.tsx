import React, { useEffect, useState } from 'react';
import { useMyContext } from '@/context/context';

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
  //TODO -- Voir si bug si je retire "checkbox"
  const [{ checkbox }, dispatch] = useMyContext();
  const [selections, setSelections] = useState<Selections>({
    [page]: valueDefault,
  });

  useEffect(() => {
    dispatch({
      type: 'ADD_CHECKBOX',
      payload: { page, value: selections[page] }, // Envoyer uniquement la sélection de la page actuelle
    });
  }, [selections, page, dispatch]);

  const handleOptionChange = (page: string, option: string) => {
    setSelections((prevSelections) => ({
      ...prevSelections,
      [page]: option,
    }));
  };

  return (
    <section className="mx-auto flex h-full  flex-col flex-wrap  items-center justify-evenly lg:flex-row">
      {options.map((option, i) => (
        <article key={option}>
          <label
            htmlFor={option + i}
            className="text-slate-700 hover:bg-slate-100 m-1 flex w-56 cursor-pointer items-center justify-between gap-6 whitespace-nowrap rounded-full bg-blue p-4 shadow ring-1 ring-transparent md:m-5"
          >
            {option}
            <input
              id={option + i}
              type="radio"
              className="box-content size-3 "
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
