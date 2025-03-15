import tailwindcssAnimate from "tailwindcss-animate";
import tailwindcssReactAriaComponents from "tailwindcss-react-aria-components";

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [tailwindcssAnimate, tailwindcssReactAriaComponents],
};

export default config;
