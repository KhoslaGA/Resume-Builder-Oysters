module.exports = {
  // Specify the root of the project
  root: true,

  // Extend from recommended Next.js configurations
  extends: [
    "next", // Base Next.js linting rules
    "next/core-web-vitals", // Web vitals rules for Next.js
    "eslint:recommended", // Basic ESLint recommended rules
    "plugin:react/recommended", // React-specific linting rules
    "plugin:@typescript-eslint/recommended", // TypeScript-specific linting rules
  ],

  // Use parser for TypeScript
  parser: "@typescript-eslint/parser",

  // Specify ESLint plugin for React
  plugins: ["react", "@typescript-eslint"],

  // Define environment to enable global variables
  env: {
    browser: true, // In a browser environment (e.g., window, document)
    node: true, // In a Node.js environment (e.g., process, require)
    es2021: true, // Enable ECMAScript 2021 features
  },

  // Specify parser options for TypeScript
  parserOptions: {
    ecmaVersion: 12, // Use ECMAScript 2021 features
    sourceType: "module", // Enable ES Modules
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },

  // Custom linting rules (you can adjust or add more rules)
  rules: {
    // Override some of the default rules as per your preferences
    "react/react-in-jsx-scope": "off", // React 17+ no longer requires React to be in scope
    "@typescript-eslint/explicit-module-boundary-types": "off", // Disable function return type requirement
    "@typescript-eslint/no-explicit-any": "warn", // Warn on usage of `any` type
    "react/prop-types": "off", // Since we're using TypeScript, disable PropTypes warning
    "no-unused-vars": "warn", // Warn on unused variables
  },

  // Additional settings for plugins and environments
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
