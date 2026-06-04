import React from 'react';
import PagesInfo from '@/components/PagesInfo/pagesInfo';
import { pageInfosProcess } from '@/data/data';

const Page = () => {
  return (
    <>
      <PagesInfo infosText={pageInfosProcess} />
    </>
  );
};

export default Page;
