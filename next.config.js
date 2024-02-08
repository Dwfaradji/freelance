/** @type {import('next').NextConfig} */

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: "asset/source",
    });

    return config;
  },
  env: {
    KEY_SENDGRID: process.env.KEY_SENDGRID_API,
    TEMPLATE_ID: process.env.TEMPLATE_ID_CONTACT,
    EMAIL_TO: process.env.ADRESS_MAIL,
    // TEMPLATE_ID_DEVIS: process.env.KEY_TEMPLATE_DEVIS
    TEMPLATE_ID_DEVIS: process.env.TEMPLATE_ID_DEVIS,
  },
};
