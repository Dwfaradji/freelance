import React from 'react';
import PagesInfo from '@/components/PagesInfo/pagesInfo';
import { politiqueConfidentialite } from '@/data/data';

const Page = () => {
  return (
    <>
      <PagesInfo infosText={politiqueConfidentialite} />
    </>
  );
};

export default Page;
