const webpack = require("webpack");
const path = require("path");
const mode = process.env.NODE_ENV;

module.exports = {
  entry: {
    app: ["@babel/polyfill", "./static/javascript/index.tsx"]
  },
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   enforce: "pre",
      //   loader: "tslint-loader",
      //   options: {
      //     failOnWarning: false,
      //     failOnError: true
      //   }
      // },
      // {
      //   test: /\.js$/,
      //   use: ["source-map-loader"],
      //   enforce: "pre"
      // },
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

  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery"
    })
  ],

  stats: true,
  mode: mode,

  devServer: {
    port: 9000,
    contentBase: "./"
  },

  resolve: {
    modules: [path.join(__dirname, "static/javascript/"), path.join(__dirname, "node_modules")],
    extensions: [".js", ".ts", ".tsx"]
  },
  devtool: process.env.NODE_ENV === "production" ? false : "source-map"
};
