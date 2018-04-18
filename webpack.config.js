const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const VENDOR_LIBS = [
    "jquery",
    "jquery-ui"
]
module.exports = {
    entry:{
        bundle: path.resolve(__dirname, "src/index.js"),
        vendor:VENDOR_LIBS
    },
    output:{
        filename:"[name].js",
        path: path.resolve(__dirname, "public")
    },
    module:{
        rules:[
            {
                loader: ExtractTextPlugin.extract({
                 loader:"css-loader"
                }),
                test:/\.css/
            },
        ]
    },

    plugins:[
        new ExtractTextPlugin("css/style.css"),
        new webpack.optimize.CommonsChunkPlugin({
            name:["vendor"]
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jquery:"jquery",
            jQuery:"jquery",
            "window.jQuery": "jquery'",
      "window.$": "jquery"
        })
    ]
};