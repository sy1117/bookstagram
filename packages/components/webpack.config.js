const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
    publicPath: "/dist/",
    libraryTarget: "umd",
    // globalObject: "this",
    publicPath: "/dist/",
  },
  target: "node",
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
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
          // "postcss-loader",
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
  externals: {
    // Use external version of React
    react: {
      root: "React",
      amd: "react",
      commonjs: "react",
      commonjs2: "react",
      umd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      amd: "react",
      commonjs: "react",
      commonjs2: "react",
      umd: "react",
    },
  },
};
