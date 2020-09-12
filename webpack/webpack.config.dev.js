const { merge } = require("webpack-merge");
const base = require("./webpack.config.base");

module.exports = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public",
    compress: true,
    hot: true,
    stats: {
      cached: false,
      cachedAssets: false,
      chunks: false,
      chunkModules: false,
      chunkOrigins: false,
      modules: false,
    },
  },
});
