// src/components/Head.tsx
import React from 'react';
import Head from 'next/head';
import siteMetadata from '@/config/metadata';
import CookieBanner from '@/lib/cookie/cookiebanner';
import { config, headerScripts } from '@/lib/cookie';

// Définir les types pour les icônes
type Icon = {
  url: string;
  sizes: string;
  type: string;
};

type Metadata = {
  title: string;
  description: string;
  alternates: {
    canonical: string;
  };
  robots: {
    follow: boolean;
    index: boolean;
  };
  icons: {
    icon: Icon[];
    apple: Icon[];
    other: Icon[];
  };
  manifest: string;
};

// S'assurer que le type de siteMetadata correspond à Metadata
const AppHead: React.FC = () => {
  // @ts-ignore
  const metadata: Metadata = siteMetadata;

  return (
    <>
      <meta name="theme-color" content="#ffffff" />

      <CookieBanner config={config} headerScripts={headerScripts} />
      {/* Icons */}
      {metadata.icons.icon.map((icon, index) => (
        <link
          key={`icon-${index}`}
          rel="icon"
          href={icon.url}
          sizes={icon.sizes}
          type={icon.type}
        />
      ))}
      {metadata.icons.apple.map((appleIcon, index) => (
        <link
          key={`apple-icon-${index}`}
          rel="apple-touch-icon"
          href={appleIcon.url}
          sizes={appleIcon.sizes}
          type={appleIcon.type}
        />
      ))}
      {metadata.icons.other.map((otherIcon, index) => (
        <link
          key={`other-icon-${index}`}
          rel="mask-icon"
          href={otherIcon.url}
          color="#5bbad5"
        />
      ))}
      <link rel="manifest" href={metadata.manifest} />
    </>
  );
};

export default AppHead;
