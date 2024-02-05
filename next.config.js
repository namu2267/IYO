/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d3uzax8st0176c.cloudfront.net",
        port: "",
        pathname: "/store/**/*",
      },
    ],
  },
};

module.exports = nextConfig;
