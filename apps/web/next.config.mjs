// @ts-check

/**
 * https://nextjs.org/docs/app/building-your-application/styling/sass#customizing-sass-options
 */

import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eu.ui-avatars.com',
        port: '',
        pathname: '/api/**',
      },
      {
        protocol: 'https',
        hostname: 'media.triple.guide',
        port: '',
        pathname: '/triple-cms/c_limit,f_auto,h_1024,w_1024/**',
      },
    ],
  },
  async redirects() {
    // dev 일 경우에만 playground 경로 접근
    if (process.env.NODE_ENV === 'production') {
      return [
        {
          source: '/playground/*',
          destination: '/',
          permanent: true,
        },
      ];
    }
    return [{ source: '/', destination: '/home', permanent: true }];
  },
  async rewrites() {
    return [
      {
        source: '/api/place/textsearch/json',
        destination: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
      },
    ];
  },
};

export default nextConfig;
