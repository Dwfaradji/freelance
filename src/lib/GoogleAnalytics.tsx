import Script from 'next/script';
interface GoogleAnalyticsProps {
  GA_TRACKING_ID: string;
}

const GoogleAnalytics = ({ GA_TRACKING_ID }: GoogleAnalyticsProps) => {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          
          // Suivi Google Analytics activé par défaut, désactivé uniquement si l'utilisateur l'a refusé
          var initialAnalytics = 'granted';
          try {
            var prefMatch = document.cookie.match(/cookiePreferences=([^;]+)/);
            if (prefMatch) {
              var savedPref = JSON.parse(decodeURIComponent(prefMatch[1]));
              if (savedPref && savedPref.analytics === false) {
                initialAnalytics = 'denied';
              }
            } else if (document.cookie.includes('cookieConsent=false')) {
              initialAnalytics = 'denied';
            }
          } catch(e) {}

          gtag('consent', 'default', {
            'analytics_storage': initialAnalytics,
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied'
          });

          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
