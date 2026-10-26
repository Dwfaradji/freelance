'use client';
import React, { useEffect, useState } from 'react';

interface TextProps {
  text: string;
  style: string;
  heightVisible: string;
}

const TextHidden = ({ text, style, heightVisible }: TextProps) => {
  const [visibleText, setVisibleText] = useState(heightVisible);
  const [textButton, setTextButton] = useState('Lire la suite ...');
  const handleShowText = () => {
    setVisibleText('h-full');
    setTextButton('Fermer');

    if (textButton == 'Fermer') {
      setVisibleText(heightVisible);
      setTextButton('Lire la suite ...');
    }
  };
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.id !== 'button') {
        setVisibleText(heightVisible);
        setTextButton('Lire la suite ...');
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [heightVisible]);
  return (
    <>
      <p className={`${visibleText} ${style} overflow-hidden break-all`}>
        {text}
      </p>
      <span
        id={'button'}
        className={'cursor-pointer  truncate'}
        onClick={handleShowText}
      >
        {textButton}
      </span>
    </>
  );
};

export default TextHidden;
