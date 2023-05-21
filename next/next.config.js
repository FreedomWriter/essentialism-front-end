/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // Enable experimental ES modules support
  experimental: {
    esmExternals: true,
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
