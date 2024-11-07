/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.ignoreWarnings = [/punycode/];
    config.cache = false;
    return config;
  },
};

module.exports = nextConfig;

module.exports = {
  //...
  output: "standalone",
  //...
};
