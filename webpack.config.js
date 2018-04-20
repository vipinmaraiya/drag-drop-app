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
                use: ExtractTextPlugin.extract({
                    use:"css-loader"
                }),
                test:/\.css/
            },
            {
                test:/\.(jpe?g|png|svg|gif)$/,
               use:'url-loader'
            }
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