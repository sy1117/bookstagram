const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
const custom = require("../webpack.config");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["/src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-css-modules-preset",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/react",
    "storybook-addon-react-docgen",
    "@storybook/preset-scss",
    "@storybook/addon-postcss",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  webpackFinal: (config) => {
    // config.plugins.push(new StylelintPlugin());
    config.plugins.push(new MiniCssExtractPlugin());
    // config.plugins.push(new HtmlWebpackPlugin());

    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module.rules,
      },
    };
  },
};
