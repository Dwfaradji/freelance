'use client';
import React from 'react';
import AboutHeader from '@/components/About/aboutHeader';
import AboutMore from '@/components/About/aboutMore';
import AboutTeamBigCard from '@/components/About/aboutTeamBigCard';
import AboutGrid from '@/components/About/aboutGrid';

const Page = () => {
  return (
        <div>
          <AboutHeader />
          <AboutMore />
          <AboutTeamBigCard />
          <AboutGrid />
        </div>
  );
};

export default Page;
