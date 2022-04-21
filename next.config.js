/** @type {import('next/dist/server/config').NextConfig} */
const nextConfig = {
  experimental: {
    emotion: {
      autoLabel: "always",
      labelFormat: "customPrefix-[filename]_[local]",
      sourceMap: false,
    }
  }
};

module.exports = nextConfig;
