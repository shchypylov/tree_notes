const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  // optimization: {
  //     runtimeChunk: 'single',
  //     splitChunks: {
  //         chunks: "all",
  //         maxInitialRequests: Infinity,
  //         minSize: 0,
  //         cacheGroups: {
  //             vendor: {
  //                 test: /[\\/]node_modules[\\/]/,
  //                 name(module) {
  //                     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
  //                     return `npm.${packageName.replace('@', '')}`;
  //                 },
  //             },
  //         },
  //     },
  // },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname + "/../public"),
    compress: true,
    hot: true,
  },
  entry: {
    app: path.join(__dirname + "/../src/index.tsx"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname + "/../build"),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/../public/index.html"),
    }),
    new webpack.HashedModuleIdsPlugin(),
  ],
};
