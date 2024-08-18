import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

interface AboutTeamCardProps {
  imgSrc: string;
  altText: string;
}

const AboutTeamCard = ({ imgSrc, altText }: AboutTeamCardProps) => {
  return (
    <Fade cascade className={'w-full p-3'}>
      <div className="relative flex w-full flex-col items-center justify-end overflow-hidden rounded-xl">
        <Image
          className={'rounded-2xl'}
          width={500}
          height={350}
          src={imgSrc}
          alt={altText}
        />
      </div>
    </Fade>
  );
};

export default AboutTeamCard;
