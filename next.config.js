/** @type {import('next').NextConfig} */

// const nextConfig = {}
// module.exports = nextConfig

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
    KEY_SENDGRID: "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",
  }
};

