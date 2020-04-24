const ExtractTextWebpackPlugin = require("extract-text-webpack-plugin")

const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    polyfill: "babel-polyfill",
    app: "./src/js/index.js"
  },

  // plugins: [new ExtractTextWebpackPlugin("style.css")],

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "dist"
  },
  watch:true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },

      {
        test: /\.(sa|sc)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ]
        // use: ExtractTextWebpackPlugin.extract({
        //   fallback: "style-loader",
        //   use: [
        //     "css-loader",
        //     "sass-loader"
        //   ]
        // })
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          }
        ]
      }
    ]
  }
};