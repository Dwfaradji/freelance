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
      className={`${colorClass} ${textColor} ${marginClass} active:scal -95 sm:width-full md:width-full lg:width-full scale-100 transform rounded-lg px-3
            py-2 text-sm transition hover:scale-110 focus:outline-none focus:ring-1 focus:ring-offset-1`}
    >
      {title}
    </button>
  );
};

export default Button;
