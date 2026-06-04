import React from 'react';

export const metadata = {
  title:
    'Templates de DevEvoke - Explorez nos modèles pour vos projets web',
  description:
`Explorez les templates DevEvoke pour vos projets web. Trouvez des modèles adaptés à vos besoins, du e-commerce au blog, et lancez votre projet rapidement.`,
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
