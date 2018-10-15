// webpack版本：^ 3.10.0
// vue - loader 版本：^ 13.6.0
// webpack - dev - server版本:@^ 2.9.7
const webpack = require("webpack")
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require("path")
const merge = require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")


// const ExtractPlugin = require("extract-text-webpack-plugin")

const baseConifg = require("./webpack.config.base")
const devServer = {
    port: 1111,
    host: "0.0.0.0",
    overlay: {
        errors: true
    },
    // 改了一个组件，只重新渲染这个组件，不会整页渲染
    hot: true
}
let defualtPlugin = [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
        title: 'vue-todo',
        template: path.join(__dirname,"./tem.html"), // 源模板文件
        // filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
        showErrors: true,
        inject: 'body',
    })
]

let config;
    config = merge(baseConifg, {
        entry:path.join(__dirname,"../practic/index.js"),
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        "vue-style-loader",
                        "css-loader",
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        "sass-loader"
                    ]
                },
            ]
        },
        // devtool: "#cheap-module-eval-source-map",
        devServer,
        // import  VUE  from 'vue'规定引入的vue 的版本
        resolve:{
            alias:{
                "vue": path.join(__dirname, "../node_modules/vue/dist/vue.esm.js")
            }
        },
        plugins: defualtPlugin.concat([
            new webpack.HotModuleReplacementPlugin(),
        ])
    })

module.exports = config