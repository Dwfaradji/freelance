import React from 'react';
import PagesInfo from '@/components/PagesInfo/pagesInfo';
import { politiqueConfidentialite } from '@/data/data';

const Page = () => {
  return (
    <main>
      <PagesInfo infosText={politiqueConfidentialite} />
    </main>
  );
};

export default Page;
