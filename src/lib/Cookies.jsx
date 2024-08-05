"use client";

import Script from 'next/script';
import { useEffect } from 'react';
import React from 'react';
import CookieBanner from '@/utils/cookie/cookiebanner';

const Cookies = () => {
  useEffect(() => {
    window.cookieBanner = {
      init: function() {
        CookieBanner()
        // Votre logique pour afficher la bannière de cookies
        console.log('Cookie banner initialized');
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script src="" strategy="afterInteractive" />
      <Script id="cookie-banner-init" strategy="afterInteractive">
        {`$(document).ready(function() {
          cookieBanner.init();
        });
        `}
      </Script>
    </>
  );
}

export default Cookies;
