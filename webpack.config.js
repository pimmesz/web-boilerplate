const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const path = require('path');

module.exports = {
  entry: {
    js: './assets/js/App.jsx',
  },
  output: {
    filename: './js/app.js',
    publicPath: '/dist/',
    path: path.join(__dirname, '/dist/'),
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.(sa|sc|c)ss$/,
      use: ExtractTextPlugin.extract({
        fallback: ['style-loader'],
        use: ['css-loader', 'postcss-loader', 'sass-loader'],
      }),
    // }, {
    //   test: /\.(ttf|eot|woff|woff2)$/,
    //   use: [{
    //     loader: 'file-loader',
    //     options: {
    //       outputPath: '/fonts/',
    //     },
    //   }],
    }, {
      test: /\.(png|jpg|jpeg|svg)$/,
      use: [{
        loader: 'file-loader',
        options: {
          outputPath: '/images/',
        },
      }],
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      use: {
        loader: 'file-loader?limit=10000&mimetype=application/font-woff',
      },
    }],
  },

  plugins: [
    new ExtractTextPlugin('/css/style.css'),

    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static'
    // }),

    new webpack.optimize.CommonsChunkPlugin({
      name: 'node-static',
      filename: 'js/vendor.js',
      minChunks(module, count) {
        const context = module.context;
        return context && context.indexOf('node_modules') >= 0;
      },
    }),
  ],
  devtool: 'eval',
};
