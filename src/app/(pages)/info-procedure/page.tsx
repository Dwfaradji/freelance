import React from 'react';
import PagesInfo from '@/components/ui/PagesInfo/pagesInfo';
import { pageInfosProcess } from '@/data/data';

const Page = () => {
  return (
    <main>
      <PagesInfo infosText={pageInfosProcess} />
    </main>
  );
};

export default Page;
