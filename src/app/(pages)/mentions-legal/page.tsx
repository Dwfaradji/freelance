import React from 'react';
import PagesInfo from '@/components/PagesInfo/pagesInfo';
import { pageMentionsLegales } from '@/data/data';

const Page = () => {
  return (
    <>
      <PagesInfo infosText={pageMentionsLegales} />
    </>
  );
};

export default Page;
