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
        hostname: '8y9u0dodlxxf6ihz.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

module.exports = nextConfig;
