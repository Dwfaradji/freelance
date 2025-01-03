import React from 'react';

export const metadata = {
  title:
    'Foire aux questions - Contactez DevEvoke pour des réponses sur le développement web',
  description:
    `Consultez la FAQ de DevEvoke pour des réponses à vos questions sur nos services de développement web et comment nous vous accompagnons.`,
     alternates: {
    canonical: 'https://www.devevoke.com/foire-aux-questions',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
