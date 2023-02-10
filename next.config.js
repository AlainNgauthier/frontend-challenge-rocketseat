/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // webpack(config) {
  //   // if not work, try `config.module.rules[2]...`
  //   config.module.rules[2].oneOf.forEach((one) => {
  //     if (!`${one.issuer?.and}`.includes('_app')) return;
  //     one.issuer.and = [path.resolve(__dirname)];
  //   });
  //   return config;
  // },
  compiler: {
		// ssr and displayName are configured by default
		styledComponents: true,
	},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}

module.exports = nextConfig
