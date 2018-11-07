const webpack = require("webpack");
const path = require("path");
const mode = process.env.NODE_ENV;

module.exports = {
  entry: {
    app: ["./static/javascript/index.tsx"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        enforce: "pre",
        loader: "eslint-loader",
        options: {
          failOnWarning: false,
          failOnError: true
        }
      },
      {
        test: /\.js$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.tsx?$/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "file-loader?hash=sha512&digest=hex&name=[hash].[ext]"
      },
      {
        test: /\.svg$/,
        loader: "svg-sprite-loader"
        //options: { ... }
      }
    ]
  },

  output: {
    path: path.join(__dirname, "/static", "build"),
    filename: "bundle.js",
    publicPath: "http://localhost:9000/static/build/"
  },

  plugins: [],

  stats: true,
  mode: mode,

  devServer: {
    port: 9000,
    contentBase: "./"
  },

  resolve: {
    modules: [path.join(__dirname, "static/javascript/"), path.join(__dirname, "node_modules")],

    extensions: [".js"]
  },
  devtool: process.env.NODE_ENV === "production" ? false : "eval-cheap-module-source-map"
};
