'use client';
import React from 'react';
import { MyProvider } from '@/context/context';
import { initialState, reducer } from '@/context/reducer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (

      <MyProvider initialState={initialState} reducer={reducer}>
        {children}
      </MyProvider>
  );
};

export default RootLayout;
