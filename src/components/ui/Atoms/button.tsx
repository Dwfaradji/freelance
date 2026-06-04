import React from 'react';

interface ButtonProps {
  title?: string;
  colorClass?: string;
  textColor?: string;
  marginClass?: string;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
}

const Button = ({
  title,
  colorClass,
  textColor,
  onClick,
  marginClass,
  id,
  type = 'button',
  children,
}: ButtonProps) => {
  const isPrimary = colorClass?.includes('from-pink') || colorClass?.includes('from-blue') || colorClass?.includes('gradient');

  if (isPrimary) {
    return (
      <button
        type={type}
        id={id}
        onClick={onClick}
        className={`btn-primary ${marginClass ?? ''} ${textColor?.includes('xl') ? 'text-base' : 'text-sm'}`}
      >
        {title}
        {children}
      </button>
    );
  }

  return (
    <button
      type={type}
      id={id}
      onClick={onClick}
      className={`btn-outline ${colorClass ?? ''} ${textColor ?? ''} ${marginClass ?? ''}`}
    >
      {title}
      {children}
    </button>
  );
};

export default Button;
