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
      className="focus:ring-purple-600 sm:width-full md:width-full flex-1 appearance-none rounded-lg border-transparent bg-white bg-opacity-20 px-2 py-2 font-poppins text-white focus:border-transparent focus:outline-none focus:ring-2 xxs:text-sm"
    ></input>
  );
};

export default Input;
