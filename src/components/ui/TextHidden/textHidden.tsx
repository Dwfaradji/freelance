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
    window.addEventListener('click', (e) => {
      // @ts-ignore
      if (e.target.id !== 'button') {
        setVisibleText(heightVisible);
        setTextButton('Lire la suite ...');
      }
    });
  }, []);
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
