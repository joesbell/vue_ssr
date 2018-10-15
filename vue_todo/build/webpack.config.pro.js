// webpack版本：^ 3.10.0
// vue - loader 版本：^ 13.6.0
// webpack - dev - server版本:@^ 2.9.7
const webpack = require("webpack")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require("path")
const merge = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

// const ExtractPlugin = require("extract-text-webpack-plugin")

const baseConifg = require("./webpack.config.base")

let defualtPlugin = [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
        title: 'vue-todo',
        template: './index.html', // 源模板文件
        filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
        showErrors: true,
        inject: 'body',
    })
]

let config;
config = merge(baseConifg, {
    entry: {
        app: path.resolve("client/index.js"),
    },
    output: {
        filename: '[name][chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.json', ".vue"],
        alias: {

            // "vue": path.join(__dirname, "../node_modules/vue/dist/vue.esm.js"),
            '@': path.resolve('client')
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../"
                        }
                    },
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    // webpack4类库单独打包vendor.js中。
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        runtimeChunk: true,
        minimizer: [
            new OptimizeCSSPlugin({})
        ]

    },
    performance: {
        hints: false
    },
    plugins: defualtPlugin.concat([
        new MiniCssExtractPlugin({
            filename: 'scss.[contentHash:8].css'
        })
        // new ExtractPlugin('scss.[contentHash:8].css'),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: "vendor"
        // }),
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'difftime'
        // })
    ])
})
module.exports = config