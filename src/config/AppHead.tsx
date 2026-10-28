// src/components/Head.tsx
import React from 'react';
import siteMetadata from '@/config/metadata';
import CookieBanner from '@/lib/cookie/cookiebanner';
import { config } from '@/lib/cookie';

const AppHead: React.FC = () => {
  const metadata = siteMetadata;

  return (
    <>
      <meta name="theme-color" content="#030712" />

      <CookieBanner config={config as any} />
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
