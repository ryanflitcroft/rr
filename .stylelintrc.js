module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-prettier"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "block-no-empty": true,
    "color-hex-case": "lower",
    "number-leading-zero": "always",
  },
};
