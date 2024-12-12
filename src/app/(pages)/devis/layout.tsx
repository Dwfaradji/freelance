'use client';
import React, { Suspense } from 'react';
import { MyProvider } from '@/context/context';
import { initialState, reducer } from '@/context/reducer';
import Loading from '@/app/loading';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MyProvider initialState={initialState} reducer={reducer}>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </MyProvider>
  );
};

export default RootLayout;
