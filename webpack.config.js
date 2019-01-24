const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Extract CSS
const extractCSS = new ExtractTextPlugin('styles.min.css');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const WriteFilePlugin  = require('write-file-webpack-plugin');

let pathsToClean = [
  'bundle'
]

// the clean options to use
let cleanOptions = {
  root:     __dirname,
  exclude:  ['app.js', 'styles.min.css'],
  verbose:  true,
  dry:      false
}

module.exports = {
  // module: {
  //   rules: [
  //     {
  //       test: /\.tsx?$/,
  //       use: 'ts-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  // output: {
  //   filename: 'bundle.js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './app/index.ts',
  ],
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'app.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: extractCSS.extract([
            'css-loader',
            'postcss-loader'
        ])
      }
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    extractCSS,
    new WriteFilePlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};