/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  nextConfig,
  images: { domains: ["dummyimage.com"] },
  pwa: {
    dest: "public",
    sw: "service-worker.js",
    skipWaiting: true,
    runtimeCaching,
  },
});
