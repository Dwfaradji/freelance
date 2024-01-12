import React from "react";

interface MultiCheckboxProps {
  options: string[];
  selectedOption: string;
  onOptionChange: (option: string) => void;
}

const MultiCheckbox: React.FC<MultiCheckboxProps> = ({ options, selectedOption, onOptionChange }) => {
  return (
    <div className="w-full h-full mx-auto flex items-center justify-around flex-wrap">
      {options.map((option) => (
        <label key={option} className="m-5 text-slate-700 bg-white shadow flex items-center gap-6 rounded-full p-4 ring-1 ring-transparent hover:bg-slate-100">
          {option}
          <input
            type="radio"
            className="box-content h-1.5 w-1.5 appearance-none rounded-full border-[5px] border-white bg-white bg-clip-padding outline-none ring-1 ring-gray-950/10 checked:border-indigo-500 checked:ring-indigo-500"
            checked={selectedOption === option}
            onChange={() => onOptionChange(option)}
          />
        </label>
      ))}
    </div>
  );
};

export default MultiCheckbox;
