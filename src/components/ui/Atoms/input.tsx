import React from 'react';

interface InputProps {
  placeholder?: string;
  onChange?: any;
  id?: string;
}

const Input = ({ placeholder, onChange, id }: InputProps) => {
  return (
    <input
      id={id}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="flex-1 appearance-none rounded-lg border-transparent bg-white/20 p-2 font-poppins text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple xxs:text-sm sm:w-full md:w-full"
    ></input>
  );
};

export default Input;
