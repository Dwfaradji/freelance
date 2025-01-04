'use client';
import React from 'react';
import ProjectsHeader from '@/components/Projects/projectsHeader';
import ProjectsRoles from '@/components/Projects/projectsRoles';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

const Page = () => {
  return (
    <>
      <ProjectsHeader />
      {/**<ProjectsRoles />**/}
      <div className="my-20 text-center">
        <Link href={'/tarifs'}>
          <Button
            colorClass="bg-gradient-to-r from-pink to-purple "
            title="Je suis Intéressé(e)"
            textColor="text-white text-xl"
          ></Button>
        </Link>
      </div>
    </>
  );
};

export default Page;
