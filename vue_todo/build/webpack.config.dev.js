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
    port: 2018,
    // host: "192.169.101.155",
    overlay: {
        errors: true
    },
    historyApiFallback:{
        index:"/index.html"
    },
    // 改了一个组件，只重新渲染这个组件，不会整页渲染
    hot: true
}
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
    resolve: {
        extensions: ['.js', '.json',".vue"],
        alias: {
            'vue$': 'vue/dist/vue.js',
            '@': path.resolve('client')
        }
    },
    plugins: defualtPlugin.concat([
        new webpack.HotModuleReplacementPlugin(),
    ])
})

module.exports = config