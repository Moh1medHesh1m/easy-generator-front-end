/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  compiler: {
    // Enables the styled-components SWC transformC
    styledComponents: true,
  },
  experimental: {
    serverless: true, // Enable serverless mode

    appDir: true,
  },

  // Enable client-side routing by default
  router: {
    // Force all links to use client-side routing
    // This is the default behavior in Next.js 13
    // You can remove this property if you want to use server-side rendering
    basePath: '/',
    trailingSlash: true,
    scroll: false,
    shallow: true,
  },

  fallback: {
    // Redirect all non-existent routes to the main page
    '/': '/',
  },
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});
