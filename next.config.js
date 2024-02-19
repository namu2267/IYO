/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["d3uzax8st0176c.cloudfront.net"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
