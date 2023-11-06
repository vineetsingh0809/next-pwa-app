/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  sw: "sw.js",
});

module.exports = withPWA({
  // next.js config
});
