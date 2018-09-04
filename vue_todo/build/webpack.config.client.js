// webpack版本：^ 3.10.0
// vue - loader 版本：^ 13.6.0
// webpack - dev - server版本:@^ 2.9.7
const webpack = require("webpack")
const path = require("path")
const isDev = process.env.NODE_ENV === "development"
const merge=require("webpack-merge")
const htmlWebpackPlugin = require("html-webpack-plugin")
const ExtractPlugin = require("extract-text-webpack-plugin")
const baseConifg=require("./webpack.config.base")
const devServer={
        port: 2018,
        host: "0.0.0.0",
        overlay: {
        errors: true
    },
    // 改了一个组件，只重新渲染这个组件，不会整页渲染
    hot: true
}
let defualtPlugin=[
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: isDev ? '"development"' : '"production"'
        }
    }),
    new htmlWebpackPlugin({
        title: 'vue-todo',
        template: './index.html', // 源模板文件
        filename: './index.html', // 输出文件【注意：这里的根路径是module.exports.output.path】
        showErrors: true,
        inject: 'body',
    })
]

let  config;
if (isDev) {
    config=merge(baseConifg,{
        module:{
            rules:[
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
        devtool: "#cheap-module-eval-source-map",
        devServer,
        plugins: defualtPlugin.concat([
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        ])
    })
} else {
    config=merge(baseConifg,{
        entry:{
            app: path.resolve("client/index.js"),
            // 类库单独打包
            vendor: ['vue']
        },
        output:{
            filename: '[name][chunkhash:8].js'
        },
        module:{
            rules:[
                {
                    test: /\.scss$/,
                    use: ExtractPlugin.extract({
                        fallback: "vue-style-loader",
                        use: [
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
                    )

                },
            ]
        },
        plugins: defualtPlugin.concat([
            new ExtractPlugin('scss.[contentHash:8].css'),
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor"
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'difftime'
            })
        ])
    })
}
module.exports = config