/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
  webpack: (config, { isServer }) => {
    // Handle .geojson files
    config.module.rules.push({
      test: /\.geojson$/,
      type: 'javascript/auto',
      use: {
        loader: 'json-loader', // Use 'json-loader' or a similar loader
      },
    });

    return config;
  },
  i18n,
  reactStrictMode: true
};

module.exports = nextConfig;