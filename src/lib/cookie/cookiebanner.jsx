'use client';
import React, { useState, useEffect } from 'react';
import './cookiebanner.css';

const CookieBanner = ({ config, headerScripts }) => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);
  const [cookies, setCookies] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const cookieConsent = getCookie('cookieConsent');
    if (cookieConsent) {
      injectScripts();
    } else {
      setTimeout(() => setIsBannerVisible(true), config.delay);
    }
  }, []);

  const injectScripts = () => {
    if (headerScripts) {
      headerScripts.forEach((script) => {
        if (isPreferenceAccepted(script.type)) {
          if (script.type === 'analytics') {
            // Inject external Google Analytics script
            const tagScript = document.createElement('script');
            tagScript.async = true;
            tagScript.src = script.value;
            const firstScript = document.getElementsByTagName('script')[0];
            firstScript.parentNode.insertBefore(tagScript, firstScript);

            // Inject inline configuration script
            tagScript.onload = () => {
              const configScript = document.createElement('script');
              configScript.id = 'google-analytics';
              configScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('consent', 'default', {
      'ad_user_data': '${cookies.analytics ? 'granted' : 'denied'}',
      'ad_personalization': '${cookies.analytics ? 'granted' : 'denied'}',
      'ad_storage': '${cookies.analytics ? 'granted' : 'denied'}',
      'analytics_storage': '${cookies.analytics ? 'granted' : 'denied'}',
      'wait_for_update': 500,
    });
    dataLayer.push({'gtm.start': new Date().getTime(), 'event': 'gtm.js'});
  `;
              document.head.appendChild(configScript);
            };
          } else {
            // For other types of scripts
            const scriptElement = document.createElement('script');
            scriptElement.async = true;
            scriptElement.src = script.value;
            document.head.appendChild(scriptElement);
          }
        }
      });
    }
  };

  const isPreferenceAccepted = (type) => {
    const cookieConsentPrefs = getCookie('cookieConsentPrefs');
    return cookieConsentPrefs
      ? JSON.parse(decodeURIComponent(cookieConsentPrefs)).includes(type)
      : false;
  };

  const setCookie = (name, value, options = {}) => {
    options = {
      path: '/',
      ...options,
    };

    if (options.expires instanceof Date) {
      options.expires = options.expires.toUTCString();
    }

    let updatedCookie =
      encodeURIComponent(name) + '=' + encodeURIComponent(value);

    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }
    document.cookie = updatedCookie;
  };

  const getCookie = (name) => {
    let matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') +
          '=([^;]*)',
      ),
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  const handleAccept = () => {
    setCookie('cookieConsent', true, {
      'max-age': config.expires * 24 * 60 * 60,
    });
    setCookie(
      'cookieConsentPrefs',
      JSON.stringify(Object.keys(cookies).filter((key) => cookies[key])),
      { 'max-age': config.expires * 24 * 60 * 60 },
    );
    injectScripts();
    setIsBannerVisible(false);
  };

  const handleReject = () => {
    setCookie('cookieConsent', false, { 'max-age': -1 });
    setCookie('cookieConsentPrefs', '', { 'max-age': -1 });
    setIsBannerVisible(false);
  };

  const handleSettingsToggle = () => {
    setIsSettingsVisible(!isSettingsVisible);
  };

  return (
    isBannerVisible && (
      <div
        className={`cookie-banner ${config.themeMode} display-${config.displayPosition} full-width-${config.fullWidth}`}
      >
        <div className="title-wrap">
          <h4>{config.title}</h4>
        </div>
        <div className="content-wrap">
          <div className="msg-wrap">
            <p>
              {config.description}{' '}
              <a
                href={config.moreInfoBtnLink}
                style={{ color: config.primaryColor }}
              >
                {config.moreInfoBtnLabel}
              </a>
            </p>
            <div id="cookieSettings" onClick={handleSettingsToggle}>
              {config.settingsBtnLabel}
            </div>
            {isSettingsVisible && (
              <div id="cookieTypes">
                <h5>{config.cookieTypesTitle}</h5>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      name="gdprPrefItem"
                      value="necessary"
                      checked
                      disabled
                    />
                    <label title={config.necessaryCookieTypeDesc}>
                      {config.necessaryCookieTypeLabel}
                    </label>
                  </li>
                  {config.cookieTypes.map((cookieType, index) => (
                    <li key={index}>
                      <input
                        type="checkbox"
                        id={`gdprPrefItem${cookieType.value}`}
                        name="gdprPrefItem"
                        value={cookieType.value}
                        checked={cookies[cookieType.value]}
                        onChange={() =>
                          setCookies({
                            ...cookies,
                            [cookieType.value]: !cookies[cookieType.value],
                          })
                        }
                      />
                      <label
                        htmlFor={`gdprPrefItem${cookieType.value}`}
                        title={cookieType.description}
                      >
                        {cookieType.type}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="btn-wrap">
            <button
              id="cookieAccept"
              style={{
                color: config.lightColor,
                background: config.primaryColor,
                border: `1px solid ${config.primaryColor}`,
              }}
              onClick={handleAccept}
            >
              {config.acceptBtnLabel}
            </button>
            {config.showDeclineBtn && (
              <button
                id="cookieReject"
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
