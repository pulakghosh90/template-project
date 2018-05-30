const { SourceMapDevToolPlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, 'src');

const template = './src/template/index.html';
const jsBundle = 'js/bundle.js';
const cssBundle = 'css/styles.css';
const htmlBundle = 'html/index.html';

const webpackConfig = {
    entry: APP_DIR + '/index.js',
    output: {
        path: BUILD_DIR,
        filename: jsBundle
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                camelCase: true,
                                sourceMap: true,
                                modules: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new SourceMapDevToolPlugin({
            filename: jsBundle + '.map'
        }),
        new ExtractTextPlugin({
            filename: (getPath) => getPath('[name].css').replace(getPath('[name].css'), cssBundle),
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            title: 'Poll',
            filename: htmlBundle,
            template,
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true
        })
    ]
};

module.exports = webpackConfig;