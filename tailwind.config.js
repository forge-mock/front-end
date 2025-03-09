import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
