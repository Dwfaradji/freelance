// src/config/metadata.ts
import { Metadata as NextMetadata } from 'next';
const metadata: NextMetadata = {
  icons: {
    icon: [
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/favicon/apple-touch-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      {
        url: '/favicon/apple-touch-icon-114x114.png',
        sizes: '114x114',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-touch-icon-120x120.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-touch-icon-144x144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-touch-icon-152x152.png',
        sizes: '152x152',
        type: 'image/png',
      },
      {
        url: '/favicon/apple-touch-icon-180x180.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      { url: '/favicon/safari-pinned-tab.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default metadata;
