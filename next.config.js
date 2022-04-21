/** @type {import('next/dist/server/config').NextConfig} */
const nextConfig = {
  experimental: {
    emotion: {
      autoLabel: "always",
      labelFormat: "customPrefix-[local]",
      sourceMap: false,
    }
  }
};

module.exports = nextConfig;
