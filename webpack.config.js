var webpack           = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin    = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './app/entry',
  output: {
    filename: './app/bundle/bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/, 
        loader: 'url?limit=10000&name=images/[name].[ext]'
      },
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/, 
        loader: "file-loader?limit=10000&publicPath=/bundle/&outputPath=app/bundle/&name=[hash:6].[ext]"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("app/bundle/bundle.css"),
    new UglifyJSPlugin({
      comments: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};