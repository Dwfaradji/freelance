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
    TEMPLATE_ID: process.env.KEY_TEMPLATE,
    EMAIL_TO: process.env.ADRESS_MAIL,
    // DATABASE_URL: process.env.DATABASE_URL,


  },
};
