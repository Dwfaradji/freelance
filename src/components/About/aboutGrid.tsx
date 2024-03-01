import React from 'react';
import AboutTeamCard from './aboutTeamCard';
import react from '@/images/about/react.webp';
import nextjs from '@/images/about/nextjs.webp';
import tailwind from '@/images/about/tailwind.webp';
import nodejs from '@/images/about/nodejs.webp';
import postGrey from '@/images/about/postgresql.webp';
import symfony from '@/images/about/symphony.webp';

const AboutGrid = () => {
  return (
    <article className="mx-auto mt-20 grid grid-cols-3 justify-items-center gap-16 p-8 xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard imgSrc={String(react.src)} position="React" />
      <AboutTeamCard imgSrc={String(nextjs.src)} position="NextJs" />
      <AboutTeamCard imgSrc={String(tailwind.src)} position="TailwindCss" />
      <AboutTeamCard imgSrc={String(nodejs.src)} position="NodeJs"></AboutTeamCard>
      <AboutTeamCard imgSrc={String(postGrey.src)} position="PostGreySql" />
      <AboutTeamCard imgSrc={String(symfony.src)} position="Symfony" />
    </article>
  );
};

export default AboutGrid;
