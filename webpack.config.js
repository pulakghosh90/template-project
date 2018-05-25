var webpack = require("webpack");
var path = require("path");

const BUILD_DIR = path.resolve(__dirname, "public/js");
const APP_DIR = path.resolve(__dirname, "src");
const filename = "bundle.js";

module.exports = {
    entry: APP_DIR + "/index.js",
    output: {
        path: BUILD_DIR,
        filename
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: filename + ".map"
        })
    ]
}