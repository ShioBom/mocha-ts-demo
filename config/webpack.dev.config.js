const path = require("path");
const fs = require("fs");

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

module.exports = {
  entry: "./src/index.tsc",
  plugins: [
    new CleanWebpackPlugin(["public/build"]),
    new HtmlWebpackPlugin({
      inject: true,
      // chunks: ["index"],
      template: resolveApp("src/entry/index.html"),
      filename: "index.html",
    }),
  ],
  output: {
    path: resolveApp("dist"),
    filename: "static/js/[name].[contenthash].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
};
