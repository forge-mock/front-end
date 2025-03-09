// Need to remove the no-undef rule for the module.exports, because PostCSS doesn't use modules
// eslint-disable-next-line no-undef
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
