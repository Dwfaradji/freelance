/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },

  images: {
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      // Seules les pages qui existaient réellement en production sur devevoke.com sont redirigées
      {
        source: '/portfolio',
        destination: '/realisations',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
