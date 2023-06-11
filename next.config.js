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
};

// const withImages = require('next-images');
//
// module.exports = withImages({
//     images: {
//         outputPath: 'images/', // Répertoire de sortie pour les images
//
//     },
// });
