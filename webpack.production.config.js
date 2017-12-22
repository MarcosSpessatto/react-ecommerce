const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const path = require('path');


module.exports = {
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
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
        chunkFilename: 'vendor/[name].[hash].js',
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
        new CleanWebpackPlugin(['dist'], { verbose: true }),
        new CopyWebpackPlugin([
            { from: 'public/index.html', to: 'index.html' }
        ]),
        new ImageminPlugin({
            test: /\.(jpe?g|png|gif|svg)$/i, optipng: {
                optimizationLevel: 9
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('bundle.css'),
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: 'vendor.bundle.js',
            minChunks: Infinity
        }),
        new webpack
            .optimize
            .UglifyJsPlugin({
                compress: {
                    warnings: false
                },
                output: {
                    comments: false,
                    'ascii_only': true
                }
            }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            loader: 'eslint-loader',
            include: path.resolve(process.cwd(), 'src'),
            enforce: 'pre',
            options: {
                fix: false,
            },
        }, {
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread'],
            },
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }),
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: ['css-loader', 'sass-loader'] }),
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.png|.jpg|.svg*.*$/,
            loader: 'file-loader',
        }],
    },
};
