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
        source: '/portfolio',
        destination: '/realisations',
        permanent: true,
      },
      {
        source: '/secteurs/medico-social',
        destination: '/medico-social',
        permanent: true,
      },
      {
        source: '/solutions-medico-social',
        destination: '/medico-social',
        permanent: true,
      },
      {
        source: '/agence-digitale-medico-social',
        destination: '/a-propos',
        permanent: true,
      },
      {
        source: '/developpement-logiciel-medico-social',
        destination: '/solutions-metier',
        permanent: true,
      },
      {
        source: '/logiciel-gestion-vehicules-medico-social',
        destination: '/realisations',
        permanent: true,
      },
      {
        source: '/solutions/site-web',
        destination: '/developpement-web',
        permanent: true,
      },
      {
        source: '/solutions/application-web',
        destination: '/developpement-web',
        permanent: true,
      },
      {
        source: '/solutions/application-mobile',
        destination: '/application-mobile',
        permanent: true,
      },
      {
        source: '/solutions/saas-sur-mesure',
        destination: '/developpement-saas',
        permanent: true,
      },
      {
        source: '/solutions/logiciel-metier',
        destination: '/solutions-metier',
        permanent: true,
      },
      {
        source: '/solutions/outils-metier',
        destination: '/solutions-metier',
        permanent: true,
      },
      {
        source: '/solutions/automatisation',
        destination: '/automatisation',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/templates',
        destination: '/solutions-metier',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
