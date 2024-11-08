const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  // Correct output option
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    // Disable problematic packages in Webpack build
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    config.ignoreWarnings = [/punycode/];

    // Add alias for '@' to resolve to 'app' folder
    config.resolve.alias["@"] = path.resolve(__dirname, "app"); // Resolves '@' to 'app' folder

    // Disable Webpack cache
    config.cache = false;

    return config;
  },
};

module.exports = nextConfig;
