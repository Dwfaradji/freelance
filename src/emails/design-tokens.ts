/**
 * Design Tokens — Email Design System DevEvoke
 * Basé sur l'identité visuelle réelle de DevEvoke (SaaS B2B Dark Mode, WCAG 2.1)
 * Adapté aux contraintes strictes des moteurs de rendu email
 * (Gmail, Outlook 2016-365, Apple Mail, Yahoo, Thunderbird).
 */

export const emailTokens = {
  brand: {
    name: 'DevEvoke',
    tagline: 'Agence digitale · Solutions logicielles & numériques sur-mesure',
    website: 'https://www.devevoke.com',
    contactEmail: 'contact@devevoke.com',
    logoUrl: 'https://www.devevoke.com/images/home/workshop_coconception.webp',
    servicesSummary: 'Sites web · Applications · SaaS · Solutions métier',
    location: 'Perpignan (Occitanie) · Accompagnement France entière',
    siren: '878 438 951 00013',
  },

  colors: {
    // Arrière-plans
    background: '#030712', // gray-950 (fond externe)
    canvas: '#0b1120',     // Boîte email principale
    surface: '#0f172a',    // slate-900 (cartes intérieures)
    surfaceRaised: '#1e293b', // slate-800 (encadrés surélevés)
    surfaceLight: '#1e293b',  // Alias rétro-compatibilité
    surfaceCard: '#111827',   // gray-900

    // Bordures
    border: '#1e293b',
    borderLight: '#334155',
    borderSubtle: '#141d2e',

    // Textes
    text: '#f9fafb',        // Blanc doux lisible
    primaryText: '#ffffff', // Blanc pur
    muted: '#cbd5e1',       // slate-300 (ratio 7:1 sur fond sombre)
    textMuted: '#cbd5e1',   // Alias rétro-compatibilité
    textDimmed: '#94a3b8',  // slate-400 (mentions secondaires)
    textSubtle: '#64748b',  // slate-500 (footer légal)

    // Couleurs d'action & Marque (Charte DevEvoke: D: Turquoise / E: Bleu Roi)
    primary: '#38c6d9',     // Turquoise Cyan vif (Lettre D)
    primaryLight: '#8cf0f8',// Cyan glacé
    primaryDark: '#0e5a8a', // Bleu Canard / Océan
    secondary: '#1e62a8',   // Bleu Roi / Saphir (Lettre E)
    secondaryLight: '#48a4e8', // Bleu Azur moyen

    // Variantes de statut (Accessibles, fort contraste)
    // Succès (Vert Émeraude)
    success: '#10b981',
    successSurface: '#064e3b',
    successText: '#34d399',
    successBorder: '#059669',
    emerald: '#10b981',
    emeraldBg: '#064e3b',
    emeraldText: '#34d399',

    // Attention / En attente (Ambre)
    warning: '#f59e0b',
    warningSurface: '#78350f',
    warningText: '#fbbf24',
    warningBorder: '#d97706',
    amber: '#f59e0b',
    amberBg: '#78350f',
    amberText: '#fbbf24',

    // Danger / Risque Critique (Rouge Vif)
    danger: '#ef4444',
    dangerSurface: '#7f1d1d',
    dangerText: '#f87171',
    dangerBorder: '#dc2626',
    red: '#ef4444',
    redBg: '#7f1d1d',
    redText: '#f87171',

    // Information / Diagnostic (Bleu Ciel & Indigo)
    info: '#38bdf8',
    infoSurface: '#0c4a6e',
    infoText: '#7dd3fc',
    infoBorder: '#0284c7',

    // Pôle Stratégique & Audit (Violet / Indigo)
    purple: '#a855f7',
    purpleBg: '#581c87',
    purpleSurface: '#2e1065',
    purpleText: '#c084fc',
    purpleBorder: '#7c3aed',
  },

  typography: {
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    monoFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",

    // Poids de polices
    bodyWeight: 400,
    mediumWeight: 500,
    semiboldWeight: 600,
    headingWeight: 700,
    boldWeight: 800,

    // Tailles
    sizes: {
      xs: '11px',
      sm: '13px',
      base: '14px',
      md: '15px',
      lg: '18px',
      xl: '22px',
      xxl: '26px',
    },

    // Hauteurs de ligne
    lineHeights: {
      tight: 1.25,
      normal: 1.5,
      relaxed: 1.65,
    },
  },

  radius: {
    card: '14px',
    button: '8px',
    badge: '9999px',
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px',
  },

  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '40px',
  },

  // Rétro-compatibilité pour emailTheme
  fonts: {
    base: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
  },
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    full: '9999px',
  },
} as const;

// Alias universel emailTheme
export const emailTheme = emailTokens;

export type BadgeVariant = 'blue' | 'emerald' | 'amber' | 'purple' | 'red' | 'default' | 'info' | 'success' | 'warning' | 'danger';
