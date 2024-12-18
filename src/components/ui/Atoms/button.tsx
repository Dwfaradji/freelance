import React from 'react';

interface ButtonProps {
  title?: string;
  colorClass?: string;
  textColor?: string;
  marginClass?: string;
  id?: string;
  type?: any;
  onClick?: any;
}

const Button = ({
  title,
  colorClass,
  textColor,
  onClick,
  marginClass,
  id,
  type,
}: ButtonProps) => {
  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={`${colorClass} ${textColor} ${marginClass} sm:width-full md:width-full lg:width-full scale-100 transform rounded-lg border
            border-white px-3 py-2 text-sm text-gradient transition hover:scale-110 focus:outline-none focus:ring-1 focus:ring-offset-1 active:scale-95`}
    >
      {title}
    </button>
  );
};

export default Button;
