const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    client: './src/index.jsx',
    vendor: [
      'react',
      'react-router',
      'react-router-dom',
      'redux',
      'react-redux',
      'jquery',
      'react-dom'
    ]
  },
  output: {
    path: `${__dirname}/public`,
    filename: "bundle.js",
    chunkFilename: '[name].[id].js',
  },
  devServer: {
    port: 8080,
    hot: true,
    contentBase: './public',
    historyApiFallback: true,
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Select!bootstrap/js/dist/select",
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    })
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread'],
      },
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'}),
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader', 'sass-loader']}),
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.png|.jpg|.svg*.*$/,
      loader: 'file-loader',
    }]
  },
};
