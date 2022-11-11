/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom"
  },
  reactStrictMode: true,
};
const withImages = require("next-images");
module.exports = withImages();
module.exports = nextConfig;
