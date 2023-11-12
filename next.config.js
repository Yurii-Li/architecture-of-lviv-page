const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'architectureoflvivblob.blob.core.windows.net',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
