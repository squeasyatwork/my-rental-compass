/** @type {import('next').NextConfig} */
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
  };
  
  module.exports = nextConfig;