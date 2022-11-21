module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "xo",
    "prettier",
    "plugin:react-native/all",
  ],
  overrides: [
    {
      extends: ["xo-typescript", "prettier"],
      files: ["*.ts", "*.tsx"],
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier", "jest"],
  rules: {
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "object-curly-spacing": ["error", "always"],
    "no-use-before-define": ["off"],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/no-use-before-define": ["off"],
    "@typescript-eslint/no-var-requires": ["warn"],
    "@typescript-eslint/no-empty-function": ["warn"],
    "@typescript-eslint/camelcase": ["off"],
    "@typescript-eslint/no-empty-interface": ["warn"],
    "react-native/no-inline-styles": ["error"],
    "react-native/no-raw-text": ["warn"],
    "react-native/split-platform-components": ["warn"],
    "react-native/sort-styles": "off",
    "react-native/no-color-literals": ["warn"],
    "react-native/no-unused-styles": ["warn"],
    "comma-dangle": ["error", "only-multiline"],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
};
