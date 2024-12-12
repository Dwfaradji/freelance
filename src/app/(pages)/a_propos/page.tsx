'use client';
import React from 'react';
import AboutHeader from '@/components/About/aboutHeader';
import AboutMore from '@/components/About/aboutMore';
import AboutTeamBigCard from '@/components/About/aboutTeamBigCard';
import AboutGrid from '@/components/About/aboutGrid';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

const Page = () => {
  return (
    <section>
      <AboutHeader />
      <AboutMore />
      <AboutTeamBigCard />
      <AboutGrid />
      <div className="mt-3 mt-4 text-center">
        <Link href={'/portfolio'}>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="En savoir plus"
            textColor="text-white text-xl"
          ></Button>
        </Link>
      </div>
    </section>
  );
};

export default Page;
