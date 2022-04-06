const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {

  // Entry point
  entry: "./src/launcher.js",

  // Environment mode
  mode: "production",

  // Output file 
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },

  // Loaders
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  }
}