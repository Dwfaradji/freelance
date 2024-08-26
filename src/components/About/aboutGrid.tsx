import React from 'react';
import AboutTeamCard from './aboutTeamCard';
import react from '@/images/about/react.webp';
import nextjs from '@/images/about/nextjs.webp';
import tailwind from '@/images/about/tailwind.webp';
import nodejs from '@/images/about/nodejs.webp';
import postGrey from '@/images/about/postgresql.webp';
import symfony from '@/images/about/symphony.webp';
import { Fade } from "react-awesome-reveal";

const AboutGrid = () => {
  return (
    <article className="mx-auto mt-20 grid grid-cols-3 justify-items-center gap-16 p-8 xxs:grid-cols-1 sm:grid-cols-3">
      <Fade cascade triggerOnce >
        <AboutTeamCard imgSrc={String(react.src)} altText="React" />
        <AboutTeamCard imgSrc={String(nextjs.src)} altText="NextJs" />
        <AboutTeamCard imgSrc={String(tailwind.src)} altText="TailwindCss" />
        <AboutTeamCard imgSrc={String(nodejs.src)} altText="NodeJs" />
        <AboutTeamCard imgSrc={String(postGrey.src)} altText="PostGreySql" />
        <AboutTeamCard imgSrc={String(symfony.src)} altText="Symfony" />
      </Fade>
    </article>
  );
};

export default AboutGrid;
