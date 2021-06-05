const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const nodeExternals = require("webpack-node-externals");
const StylelintPlugin = require("stylelint-webpack-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "/src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist/"),
    publicPath: "/dist/",
    libraryTarget: "umd",
    globalObject: "this",
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
          },
          {
            loader: "image-webpack-loader",
          },
        ],
      },
      {
        test: /\.ts[x]?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        sideEffects: true,
        exclude: [/node_modules/, /\.stories.tsx$/],
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-modules-typescript-loader" },
          {
            loader: "css-loader",
            options: {
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
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".scss"],
  },
  externals: [
    nodeExternals(),
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react",
        umd: "react",
      },
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom",
        umd: "react-dom",
      },
    },
  ],
};
