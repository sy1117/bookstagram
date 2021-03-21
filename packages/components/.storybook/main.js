const path = require("path");

// your app's webpack.config.js
const custom = require("../webpack.config.js");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "storybook-css-modules-preset",
    "@storybook/addon-docs",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/react",
    "storybook-addon-react-docgen",
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
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true,
          },
        },
        {
          loader: "sass-loader",
          options: {
            implementation: require("node-sass"),
          },
        },
      ],
    });
    console.log(config.module.rules);
    // console.log(config.module.rules);
    return config;
    // return {
    //   ...config,
    //   // plugins: [...config.plugins, ...custom.plugins],
    //   module: { ...config.module, rules: custom.module.rules },
    // };
  },
};
