const config = {
  primaryColor: '#3c9dda',
  darkColor: '#3b3e4a',
  lightColor: '#ffffff',
  themeMode: 'light',
  showSettingsBtn: true,
  showCloseIcon: false,
  showDeclineBtn: true,
  fullWidth: true,
  displayPosition: 'bottom',
  settingsBtnLabel: 'Personnaliser',
  delay: 1500,
  expires: 365,
  title: 'Consentement aux cookies',
  description:
    'Ce site utilise des cookies d’analyse Google Analytics pour mesurer la fréquentation et optimiser l’expérience. Le suivi est activé par défaut, mais vous pouvez le désactiver selon votre choix.',
  acceptBtnLabel: 'Accepter',
  declineInfoBtnLabel: 'Refuser',
  moreInfoBtnLink: 'https://www.devevoke.com/politique-confidentialite',
  moreInfoBtnLabel: 'Politique de confidentialité',
  cookieTypesTitle: 'Gestion des cookies',
  necessaryCookieTypeLabel: 'Nécessaires (Obligatoires)',
  necessaryCookieTypeDesc:
    'Ces cookies sont indispensables au fonctionnement technique du site et ne peuvent pas être désactivés.',
  cookieTypes: [
    {
      type: 'Google Analytics (Mesure d’audience)',
      value: 'analytics',
      description:
        'Mesure anonyme du trafic et des parcours utilisateurs. Activé par défaut, vous pouvez désactiver ce suivi en basculant l’interrupteur.',
    },
  ],
};

export { config };
