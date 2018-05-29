const { SourceMapDevToolPlugin } = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public/js');
const APP_DIR = path.resolve(__dirname, 'src');
const jsBundle = 'bundle.js';
const cssBundle = 'styles.css';

module.exports = {
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
            filename: (getPath) => (getPath('../css/[name].css')
                .replace('css/js', 'css')
                .replace(getPath('[name].css'), cssBundle)),
            allChunks: true
        })
    ]
}