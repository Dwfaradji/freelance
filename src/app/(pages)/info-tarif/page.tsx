import React from 'react';
import PagesInfo from '@/components/ui/PagesInfo/pagesInfo';
import { pageInfosPrice } from '@/data/data';

const Page = () => {
  return (
    <main>
      <PagesInfo infosText={pageInfosPrice} />
    </main>
  );
};

export default Page;
