import React from "react";

interface MultiCheckboxProps {
    options: string[];
    selectedOption: string;
    onOptionChange: (option: string) => void;
}

const MultiCheckbox: React.FC<MultiCheckboxProps> = ({
                                                         options,
                                                         selectedOption,
                                                         onOptionChange,
                                                     }) => {

    return (
        <div className="mx-auto flex items-center  flex-col lg:flex-row  justify-evenly flex-wrap h-full">
            {options.map((option,i) => (
                <div key={option}>
                    <label
                        htmlFor={option+i}
                        className="w-56 whitespace-nowrap m-1 md:m-5 text-slate-700 bg-blue shadow flex justify-between items-center gap-6 rounded-full p-4 ring-1 ring-transparent hover:bg-slate-100 cursor-pointer"
                    >
                        {option}
                        <input
                            id={option+i}
                            type="radio"
                            className="box-content h-3 w-3 "
                            checked={selectedOption === option}
                            onChange={() => onOptionChange(option)}
                        />
                    </label>
                </div>


            ))}
        </div>
    );
};

export default MultiCheckbox;
