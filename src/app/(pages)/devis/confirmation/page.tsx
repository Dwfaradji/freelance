'use client';
import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Atoms/button';

import { useRouter } from 'next/navigation';
import { useMyContext } from '@/context/context';
import Loading from '@/app/loading';

const Page = () => {

  const router = useRouter();
  const [{ status }] = useMyContext();
  useEffect(() => {
    if (!status) {
      return router.push('/');
    }
  }, [status, router]);
  return (
    <Suspense fallback={<Loading />}>
      <main>
        <div className=" m-10 mx-auto flex h-96 w-11/12  flex-col justify-between rounded-lg p-6 text-center text-white shadow-lg md:w-10/12 lg:w-6/12 ">
          <h2>Devis envoyé</h2>
          <p className="mb-14 text-blue">
            {
              "Merci d'avoir remplis le devis nous reviendrons vers vous une fois le devis effectuer"
            }
          </p>

          <Link href="/">
            <Button
              type="button"
              title="Retour à l'accueil"
              colorClass="text-white"
            />
          </Link>
        </div>
      </main>
    </Suspense>
  );
};

export default Page;
