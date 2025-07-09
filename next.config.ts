// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // 🚫 This disables ESLint from running during `next build`
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
