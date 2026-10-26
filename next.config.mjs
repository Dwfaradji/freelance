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
      {
        source: '/logiciel-gestion-vehicules-medico-social',
        destination: '/realisations/floticar',
        permanent: true,
      },
      {
        source: '/portfolio',
        destination: '/realisations',
        permanent: true,
      },
      {
        source: '/solutions-medico-social',
        destination: '/solutions',
        permanent: true,
      },
      {
        source: '/developpement-logiciel-medico-social',
        destination: '/solutions/logiciel-metier',
        permanent: true,
      },
      {
        source: '/agence-digitale-medico-social',
        destination: '/secteurs/medico-social',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
