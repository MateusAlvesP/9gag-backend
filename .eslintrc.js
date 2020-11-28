module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
      },
    ],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'consistent-return': 'warn'
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
};
