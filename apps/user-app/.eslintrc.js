/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  "exclude": ["node_modules", "tailwind.config.js"],
  parserOptions: {
    project: true,
  },
};
