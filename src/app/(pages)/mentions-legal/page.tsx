import React from 'react';
import PagesInfo from '@/components/PagesInfo/pagesInfo';
import { pageMentionsLegales } from '@/data/data';

const Page = () => {
  return (
    <main>
      <PagesInfo infosText={pageMentionsLegales} />
    </main>
  );
};

export default Page;
