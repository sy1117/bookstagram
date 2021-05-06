const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: path.resolve(__dirname, "/src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "./dist/"),
    filename: "main.js",
    publicPath: "/dist/",
    libraryTarget: "umd",
    globalObject: "this",
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
          // {
          //   loader: "typings-for-css-modules-loader?modules&sass&namedExport",
          // },
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
  externals: ["react", "react-dom"],
};
