import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginNext from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";

/** @type {import("eslint").Linter.Config[]} */
export default [
  { files: ["/src/**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { ignores: ["**/node_modules/**", "**/.next/**"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      "@next/next": pluginNext,
    },
  },
  {
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
