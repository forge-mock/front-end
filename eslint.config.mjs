import pluginNext from "@next/eslint-plugin-next";
import parser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
const config = {
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      ecmaFeatures: {
        jsx: true,
      },
    },
  },
  plugins: {
    "@next/next": pluginNext,
  },
  rules: {
    ...pluginNext.configs.recommended.rules,
  },
};

export default config;
