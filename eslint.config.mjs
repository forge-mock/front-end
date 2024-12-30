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
      "@next/eslint-plugin-next": pluginNext,
    },
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
];
