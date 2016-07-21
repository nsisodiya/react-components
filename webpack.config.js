var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
console.log(__dirname);
module.exports = [{
  cache: true,
  devtool: "source-map",
  entry: {
    "ReactComponents": "./src/index.js"
  },
  babelrc: false,
  output: {
    path: "./demo/node_modules/@nsisodiya/react-components/dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  plugins: [
    new ExtractTextPlugin("ReactComponents.css", {
      allChunks: true
    }),
    new LiveReloadPlugin({
      port: 36001
    })
  ],
  externals: {
    "react": {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    "react-css-modules": {
      commonjs: "react-css-modules",
      commonjs2: "react-css-modules",
      amd: "react-css-modules",
      root: "react-css-modules"
    },
    "react-bootstrap": {
      commonjs: "react-bootstrap",
      commonjs2: "react-bootstrap",
      amd: "ReactBootstrap",
      root: "ReactBootstrap"
    },
    "uuid": {
      commonjs: "uuid",
      commonjs2: "uuid",
      amd: "UUID",
      root: "UUID"
    }
  },
  module: {
    preLoaders: [],
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ["es2015", "react"],
          plugins: ["transform-object-rest-spread"]
        }
      }, {
        test: /\.css$/,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract("style",
          "css?modules&importLoaders=1&localIdentName=RC_[name]__[local]")
      }, {
        test: /\.css$/,
        include: [/node_modules/],
        loaders: ["style", "css"]
      }, {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/font-woff"
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=1000000&mimetype=application/octet-stream"
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/svg+xml"
      }, {
        test: /\.gif(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/gif"
      }, {
        test: /\.png(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=100000&mimetype=image/png"
      }
    ]
  }
}];
