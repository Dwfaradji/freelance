'use client';
import React, { Suspense, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMyContext } from '@/context/context';
import Loading from '@/app/loading';


const Page = () => {
  const router = useRouter();
  const [{ status }] = useMyContext();
  
  useEffect(() => {
    if (!status) {
      router.push('/');
    }
  }, [status, router]);

  return (
    <Suspense fallback={<Loading />}>
      <main className="min-h-[80vh] flex items-center justify-center relative py-20 px-4">
        {/* Glow de fond */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xl h-[400px] bg-primary-600/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="glass relative z-10 mx-auto flex flex-col items-center justify-center rounded-3xl p-10 sm:p-16 text-center text-white border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)] max-w-2xl">
          <div className="w-20 h-20 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center mb-8 border border-primary-500/30">
      
          </div>
          
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight">
            Demande envoyée avec succès
          </h1>
          
          <p className="text-lg text-muted-light mb-12 max-w-lg mx-auto leading-relaxed">
            Merci de nous avoir contactés ! Notre équipe va étudier votre projet avec attention et reviendra vers vous sous 48h avec une proposition adaptée.
          </p>

          <Link href="/" className="btn-primary">
            Retour à l'accueil
          </Link>
        </div>
      </main>
    </Suspense>
  );
};

export default Page;
