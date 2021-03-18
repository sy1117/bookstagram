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
    globalObject: "this",
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
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          // Creates `style` nodes from JS strings
          // "style-loader",
          // Translates CSS into CommonJS
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              // modules: {
              //   compileType: "module",
              //   mode: "local",
              //   exportOnlyLocals: true,
              // },
            },
          },
          "postcss-loader",
          // Compiles Sass to CSS
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
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
};
