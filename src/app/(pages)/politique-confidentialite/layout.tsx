import React from 'react';

export const metadata = {
  title: 'Politique de confidentialité - DevEvoke',
  description:
`Découvrez la politique de confidentialité de DevEvoke. Apprenez comment nous collectons, utilisons et protégeons vos données personnelles sur notre site.`,
  alternates: {
    canonical: 'https://www.devevoke.com/politique-confidentialite',
  },
  robots: {
    follow: true,
    index: true,
  },
};
export default function MentionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
