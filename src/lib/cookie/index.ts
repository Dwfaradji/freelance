const config = {
  primaryColor: '#3c9dda',
  darkColor: '#3b3e4a',
  lightColor: '#ffffff',
  themeMode: 'light',
  showSettingsBtn: true,
  showCloseIcon: false,
  showDeclineBtn: false,
  fullWidth: true,
  displayPosition: 'bottom',
  settingsBtnLabel: 'Paramètres des cookies',
  delay: 2000,
  expires: 365,
  title: 'Consentement aux cookies',
  description:
    'Ce site utilise des cookies ou des technologies similaires pour améliorer votre expérience de navigation et fournir des recommandations personnalisées. En continuant à utiliser notre site, vous acceptez notre politique de confidentialité et notre consentement aux cookies',
  acceptBtnLabel: 'Accepter',
  declineInfoBtnLabel: 'Décliner',
  moreInfoBtnLink: 'https://www.devevoke.com/politique-confidentialite',
  moreInfoBtnLabel: 'Politique de confidentialité',
  cookieTypesTitle: 'Sélectionnez les cookies à accepter',
  necessaryCookieTypeLabel: 'Nécessaires',
  necessaryCookieTypeDesc:
    'Ces cookies sont nécessaires au fonctionnement du site et ne peuvent pas être désactivés.',
  cookieTypes: [
    {
      type: 'Analytics',
      value: 'analytics',
      description:
        "Les cookies d'analyse nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site. Ils nous aident à savoir quelles app sont les plus et les moins populaires et à voir comment les visiteurs se déplacent sur le site.",
    },
  ],
};

const headerScripts = [
  {
    title: 'Google Analytics',
    type: 'analytics',
    value: `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`,
  },
];

export { headerScripts, config };
