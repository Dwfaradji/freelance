"use client";
import '../../public/cookie/cookiebanner.style.css'; // Chemin mis à jour pour CSS
import Script from 'next/script';
import { useEffect } from 'react';
import React from 'react';

const Cookies = () => {
  useEffect(() => {
    window.cookieBanner = {
      init: function() {
        // Votre logique pour afficher la bannière de cookies
        console.log('Cookie banner initialized');
      }
    };
  }, []);

  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/cookie/cookiebanner.script.js" strategy="afterInteractive" />
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
