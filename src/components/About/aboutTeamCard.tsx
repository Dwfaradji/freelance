import React from 'react';
import { Fade } from 'react-awesome-reveal';
import Image from 'next/image';

interface AboutTeamCardProps {
  imgSrc: string;
  position: string;
}

const AboutTeamCard = ({ imgSrc, position }: AboutTeamCardProps) => {
  return (
    <Fade cascade className={'w-full p-3'}>
      <div className="relative flex h-96 w-full flex-col items-center justify-end overflow-hidden rounded-xl">
        <Image
          width={300}
          height={400}
          className="size-full object-cover"
          src={''}
          alt={''}
        />
        <h2 className="absolute mb-4 w-3/4 rounded-xl bg-white p-2 text-center">
          {position}
        </h2>
      </div>
    </Fade>
  );
};

export default AboutTeamCard;
