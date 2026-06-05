'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface CookieBannerProps {
  config: {
    delay: number;
    expires: number;
    themeMode: string;
    displayPosition: string;
    fullWidth: boolean;
    title: string;
    description: string;
    primaryColor: string;
    lightColor: string;
    moreInfoBtnLink: string;
    moreInfoBtnLabel: string;
    settingsBtnLabel: string;
    cookieTypesTitle: string;
    necessaryCookieTypeDesc: string;
    necessaryCookieTypeLabel: string;
    cookieTypes: Array<{
      type: string;
      value: keyof Cookies;
      description: string;
    }>;
    showDeclineBtn: boolean;
    acceptBtnLabel: string;
    declineInfoBtnLabel: string;
  };
  headerScripts: Array<{
    type: keyof Cookies;
    value: string;
  }>;
}

interface Cookies {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const CookieBanner: React.FC<CookieBannerProps> = ({
  config,
  headerScripts,
}) => {
  const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);
  const [cookies, setCookies] = useState<Cookies>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const cookieConsent = document.cookie.includes('cookieConsent=true');
    if (!cookieConsent) {
      setTimeout(() => setIsBannerVisible(true), config.delay);
    } else {
      // If already consented, parse preferences and apply them immediately
      try {
        const prefMatch = document.cookie.match(/cookiePreferences=([^;]+)/);
        if (prefMatch) {
          const savedCookies = JSON.parse(decodeURIComponent(prefMatch[1]));
          applyConsent(savedCookies);
        }
      } catch (e) {
        // Ignorer les erreurs de parsing
      }
    }
  }, [config.delay]);

  const applyConsent = (preferences: Cookies) => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': preferences.analytics ? 'granted' : 'denied',
        'ad_storage': preferences.marketing ? 'granted' : 'denied',
        'ad_user_data': preferences.marketing ? 'granted' : 'denied',
        'ad_personalization': preferences.marketing ? 'granted' : 'denied'
      });
    }
  };

  const handleAccept = () => {
    document.cookie = `cookieConsent=true; max-age=${config.expires * 24 * 60 * 60}`;
    document.cookie = `cookiePreferences=${encodeURIComponent(
      JSON.stringify(cookies),
    )}; max-age=${config.expires * 24 * 60 * 60}`;
    applyConsent(cookies);
    setIsBannerVisible(false);
  };

  const handleReject = () => {
    document.cookie = 'cookieConsent=false; max-age=-1';
    document.cookie = 'cookiePreferences=; max-age=-1';
    // Par défaut "denied", on s'assure que tout reste bloqué
    applyConsent({ necessary: true, analytics: false, marketing: false, preferences: false });
    setIsBannerVisible(false);
  };

  const toggleSettings = () => setIsSettingsVisible(!isSettingsVisible);

  return (
    <AnimatePresence>
      {isBannerVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[400px] z-50 flex flex-col glass rounded-3xl border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] overflow-hidden bg-black/60 backdrop-blur-2xl"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl" aria-hidden="true">🍪</span>
              <h4 className="text-lg font-bold text-white tracking-tight">
                {config.title}
              </h4>
            </div>
            
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              {config.description}{' '}
              <a
                href={config.moreInfoBtnLink}
                className="text-primary-400 hover:text-primary-300 underline underline-offset-4 transition-colors inline-block mt-1 font-medium"
              >
                {config.moreInfoBtnLabel}
              </a>
            </p>

            <AnimatePresence>
              {isSettingsVisible && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-6 overflow-hidden"
                >
                  <div className="pt-4 border-t border-white/10 space-y-5">
                    <h5 className="text-[11px] font-bold text-white/40 uppercase tracking-[0.2em] mb-2">
                      {config.cookieTypesTitle}
                    </h5>
                    
                    {/* Necessary cookies (disabled toggle) */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-gray-200">{config.necessaryCookieTypeLabel}</div>
                        <div className="text-xs text-gray-500 mt-1 leading-relaxed">{config.necessaryCookieTypeDesc}</div>
                      </div>
                      <div className="relative inline-flex h-5 w-9 shrink-0 cursor-not-allowed items-center rounded-full bg-primary-500/50">
                        <span className="translate-x-5 inline-block h-3 w-3 transform rounded-full bg-white transition" />
                      </div>
                    </div>

                    {/* Dynamic cookies */}
                    {config.cookieTypes.map(({ type, value, description }) => (
                      <div key={value} className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-200">{type}</div>
                          <div className="text-xs text-gray-500 mt-1 leading-relaxed">{description}</div>
                        </div>
                        <button
                          type="button"
                          onClick={() => setCookies(prev => ({ ...prev, [value]: !prev[value] }))}
                          className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${cookies[value] ? 'bg-primary-500' : 'bg-white/10'}`}
                        >
                          <span className={`${cookies[value] ? 'translate-x-5 bg-white' : 'translate-x-1 bg-gray-400'} inline-block h-3 w-3 transform rounded-full transition duration-200 ease-in-out`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex flex-col gap-3">
              <button
                onClick={handleAccept}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 hover:opacity-90 text-white font-bold text-sm transition-opacity shadow-[0_0_20px_rgba(59,130,246,0.3)]"
              >
                {config.acceptBtnLabel}
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={toggleSettings}
                  className="flex-1 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 font-semibold text-xs transition-colors"
                >
                  {isSettingsVisible ? "Masquer" : config.settingsBtnLabel}
                </button>
                {config.showDeclineBtn && (
                  <button
                    onClick={handleReject}
                    className="flex-1 py-2.5 rounded-xl bg-transparent hover:bg-white/5 border border-white/5 text-gray-400 hover:text-gray-200 font-semibold text-xs transition-colors"
                  >
                    {config.declineInfoBtnLabel}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
