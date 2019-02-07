// .eslintrc.js
module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error" // only hooks for now
  }
};
