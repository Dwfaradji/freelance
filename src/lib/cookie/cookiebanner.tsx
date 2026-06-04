'use client';
import React, { useState, useEffect } from 'react';
import styles from './cookiebanner.module.css';

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
    }
  }, [config.delay]);

  const handleAccept = () => {
    document.cookie = `cookieConsent=true; max-age=${config.expires * 24 * 60 * 60}`;
    document.cookie = `cookiePreferences=${encodeURIComponent(
      JSON.stringify(cookies),
    )}; max-age=${config.expires * 24 * 60 * 60}`;
    injectScripts();
    setIsBannerVisible(false);
  };

  const handleReject = () => {
    document.cookie = 'cookieConsent=false; max-age=-1';
    document.cookie = 'cookiePreferences=; max-age=-1';
    setIsBannerVisible(false);
  };

  const injectScripts = () => {
    headerScripts.forEach((script) => {
      if (cookies[script.type]) {
        const scriptElement = document.createElement('script');
        scriptElement.src = script.value;
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
      }
    });
  };

  const toggleSettings = () => setIsSettingsVisible(!isSettingsVisible);

  return (
    isBannerVisible && (
      <div
        className={`${styles.banner} ${isBannerVisible ? styles.visible : ''}`}
        style={
          {
            '--banner-bg-color':
              config.themeMode === 'dark' ? '#1e1e1e' : '#f9f9f9',
            '--banner-text-color':
              config.themeMode === 'dark' ? '#ffffff' : '#333',
            '--banner-link-color': config.primaryColor,
            '--button-primary-bg': config.primaryColor,
            '--button-primary-text': config.lightColor,
            '--button-secondary-text': config.primaryColor,
            '--button-secondary-border': config.primaryColor,
          } as React.CSSProperties
        }
      >
        <div className={styles.content}>
          <h4>{config.title}</h4>
          <p>
            {config.description}{' '}
            <a
              href={config.moreInfoBtnLink}
              style={{ color: config.primaryColor }}
            >
              {config.moreInfoBtnLabel}
            </a>
          </p>
          <button onClick={toggleSettings} className={styles.settingsToggle}>
            {config.settingsBtnLabel}
          </button>

          {isSettingsVisible && (
            <div className={styles.settings}>
              <h5>{config.cookieTypesTitle}</h5>
              <ul>
                {config.cookieTypes.map(({ type, value, description }) => (
                  <li key={value}>
                    <label>
                      <input
                        type="checkbox"
                        checked={cookies[value]}
                        onChange={() =>
                          setCookies((prev) => ({
                            ...prev,
                            [value]: !prev[value],
                          }))
                        }
                      />
                      {type}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className={styles.actions}>
            <button
              style={{
                backgroundColor: config.primaryColor,
                color: config.lightColor,
              }}
              onClick={handleAccept}
            >
              {config.acceptBtnLabel}
            </button>
            {config.showDeclineBtn && (
              <button
                style={{
                  color: config.primaryColor,
                  border: `1px solid ${config.primaryColor}`,
                }}
                onClick={handleReject}
              >
                {config.declineInfoBtnLabel}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default CookieBanner;
