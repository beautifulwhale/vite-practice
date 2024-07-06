module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-config-recess-order",
    "stylelint-config-prettier",
    "stylelint-prettier/recommended"
  ],
  rules: {
    "prettier/prettier": true,
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "declaration-no-important": true, // 禁止使用 !important
    "selector-max-id": 0, // 禁止使用 ID 选择器
    "max-nesting-depth": 1 // 最大嵌套深度为 1
  }
};
