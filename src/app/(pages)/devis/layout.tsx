'use client';
import React, { Suspense } from 'react';
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={null}>{children}</Suspense>
  );
};

export default RootLayout;
