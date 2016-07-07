var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require("webpack-livereload-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = [{
  cache: true,
  devtool: "source-map",
  entry: {
    "ReactComponents": "./src/index.js",
    "DemoComponent": "./demo/Demo.js"
  },
  babelrc: false,
  output: {
    path: "dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  eslint: {
    //fix: true,
    failOnWarning: false,
    failOnError: false,
    emitError: true,
    configFile: "./node_modules/@hotelsoft/common/.eslintrc",
    formatter: require("eslint/lib/formatters/stylish")
  },
  plugins: [
    new ExtractTextPlugin("ReactComponents.css", {
      allChunks: true
    }),
    new LiveReloadPlugin({
      port: 36001
    }),
    new CopyWebpackPlugin([
      // {output}/file.txt
      {from: "demo/index.html"}])
  ],
  externals: {
    "@hotelsoft/react-components": {
      commonjs: "@hotelsoft/react-components",
      commonjs2: "@hotelsoft/react-components",
      amd: "ReactComponents",
      root: "ReactComponents"
    },
    "@nsisodiya/flux": {
      commonjs: "@nsisodiya/flux",
      commonjs2: "@nsisodiya/flux",
      amd: "ReactFlux",
      root: "ReactFlux"
    },
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
    "@hotelsoft/utils": {
      commonjs: "@hotelsoft/utils",
      commonjs2: "@hotelsoft/utils",
      amd: "HotelsoftUtils",
      root: "HotelsoftUtils"
    },
    "react-css-modules": {
      commonjs: "react-css-modules",
      commonjs2: "react-css-modules",
      amd: "ReactCSSModules",
      root: "ReactCSSModules"
    },
    "lang-engine": {
      commonjs: "lang-engine",
      commonjs2: "lang-engine",
      amd: "langEngine",
      root: "langEngine"
    },
    "react-bootstrap": {
      commonjs: "react-bootstrap",
      commonjs2: "react-bootstrap",
      amd: "ReactBootstrap",
      root: "ReactBootstrap"
    },
    "screenfull": {
      commonjs: "screenfull",
      commonjs2: "screenfull",
      amd: "screenfull",
      root: "screenfull"
    },
    "moment": {
      commonjs: "moment",
      commonjs2: "moment",
      amd: "moment",
      root: "moment"
    },
    "@nsisodiya/es6-mixins": {
      commonjs: "@nsisodiya/es6-mixins",
      commonjs2: "@nsisodiya/es6-mixins",
      amd: "ES6Mixins",
      root: "ES6Mixins"
    },
    "react-datepicker": {
      commonjs: "react-datepicker",
      commonjs2: "react-datepicker",
      amd: "DatePicker",
      root: "DatePicker"
    },
    draggabilly: {
      commonjs: "draggabilly",
      commonjs2: "draggabilly",
      amd: "Draggabilly",
      root: "Draggabilly"
    },
    "react-json-viewer": {
      commonjs: "react-json-viewer",
      commonjs2: "react-json-viewer",
      amd: "ReactJsonViewer",
      root: "ReactJsonViewer"
    },
    "react-syntax-highlight": {
      commonjs: "react-syntax-highlight",
      commonjs2: "react-syntax-highlight",
      amd: "ReactSyntaxHighlight",
      root: "ReactSyntaxHighlight"
    },
    "jquery": {
      commonjs: "jquery",
      commonjs2: "jquery",
      amd: "JQuery",
      root: "JQuery"
    },
    "react-select2-wrapper": {
      commonjs: "react-select2-wrapper",
      commonjs2: "react-select2-wrapper",
      amd: "ReactSelect2Wrapper",
      root: "ReactSelect2Wrapper"
    },
    "react-c3js": {
      commonjs: "react-c3js",
      commonjs2: "react-c3js",
      amd: "ReactC3js",
      root: "ReactC3js"
    },
    "uuid": {
      commonjs: "uuid",
      commonjs2: "uuid",
      amd: "UUID",
      root: "UUID"
    }
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        loader: "eslint",
        exclude: /node_modules/
      }
    ],
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
}, {
  cache: true,
  devtool: "source-map",
  entry: {
    "External": "./demo/external.js"
  },
  babelrc: false,
  output: {
    path: "dist",
    filename: "[name].js",
    libraryTarget: "umd",
    library: "[name]"
  },
  plugins: [
    new ExtractTextPlugin("External.css", {
      allChunks: true
    }),
    new CleanWebpackPlugin(["dist"], {
      //root: "",
      verbose: true,
      dry: false
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          presets: ["es2015"]
        }
      }, {
        test: /\.css$/,
        include: [/node_modules/],
        loader: ExtractTextPlugin.extract("style", "css")
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
