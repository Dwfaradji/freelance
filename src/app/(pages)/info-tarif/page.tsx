import React from 'react';
import PagesInfo from '@/components/PagesInfo/pagesInfo';
import { pageInfosPrice } from '@/data/data';

const Page = () => {
  return (
    <>
      <PagesInfo infosText={pageInfosPrice} />
    </>
  );
};

export default Page;
