const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/app.js"],
  output: {
    path: path.resolve(__dirname, "build/src"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    publicPath: "/src/",
    port: 9000
  }
};
