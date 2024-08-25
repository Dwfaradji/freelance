import React from 'react';
import PagesInfo from '@/components/ui/PagesInfo/pagesInfo';
import { pageInfosPrice } from '@/data/data';

const Page = () => {
  return (
    <div>
      <PagesInfo infosText={pageInfosPrice} />
    </div>
  );
};

export default Page;
