// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { webpack } = require("webpack");
// js
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  // dev-server
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  // html
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      // css (import js)
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // img (template.html)
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // img (import js)
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

