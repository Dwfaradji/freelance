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
      // Redirection demande de démo Floticar vers la plateforme officielle
      {
        source: '/demande-demo',
        destination: 'https://floticar.com/demande-de-demo',
        permanent: true,
      },
      {
        source: '/demander-demo',
        destination: 'https://floticar.com/demande-de-demo',
        permanent: true,
      },
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
