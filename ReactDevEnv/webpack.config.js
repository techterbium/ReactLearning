var webpack = require("webpack");
var path = require("path");

var SRC = path.resolve(__dirname, "src");
var BUILD = path.resolve(__dirname, "build");

var config = {
    entry: SRC + "/index.jsx",
    output: {
        path: BUILD,
        filename: "op.js"
    },
    module: {
        loaders: [
            {
                include: SRC,
                loader: "babel-loader"
            }
        ]
    }
};

module.exports = config;
