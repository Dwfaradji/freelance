import React from 'react';

export const metadata = {
  title:
    'Templates de DevEvoke - Explorez nos modèles pour vos projets web',
  description:
    "Découvrez une variété de templates proposés par DevEvoke pour accélérer vos projets web. Parcourez notre collection de modèles conçus pour différents besoins, du commerce en ligne aux blogs personnels. Trouvez le template idéal pour donner vie à vos idées et démarrez votre projet web dès aujourd'hui.",
  alternates: {
    canonical: 'https://www.devevoke.com/templates',
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
