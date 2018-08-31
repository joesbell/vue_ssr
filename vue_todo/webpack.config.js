// webpack版本：^ 3.10.0
// vue - loader 版本：^ 13.6.0
// webpack - dev - server版本:@^ 2.9.7
const webpack=require("webpack")
const path=require("path")
const isDev=process.env.NODE_ENV==="development"
const htmlWebpackPlugin=require("html-webpack-plugin")
const ExtractPlugin=require("extract-text-webpack-plugin")
const config={
    target:"web",
    entry:path.resolve("src/index.js"),
    output:{
        filename: "bundle.js",
        path:path.join(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                // use:[
                //     "babel-loader" 
                // ],
                loader:"babel-loader",
                // babel-preset-latest最新的es6转换规则
                query: {
                    presets: ['latest'] //按照最新的ES6语法规则去转换
                }
            },
            {
                test:/\.jsx$/,
                loader:"babel-loader",
                query:{
                    presets:["latest"]
                }
            },
            {
                test:/\.vue$/,
                use:[
                    "vue-loader"
                ],
             
            },
            {
                test:/\.css$/,
                use:[
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test:/\.(jpg|png|jpeg|gif|svg)$/,
                use:[
                    {
                        // url-loader 需要依赖file-loader
                        loader:"url-loader",
                        // option:{
                        //     limit:1024
                        // }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:isDev?'"development"' :'"production"'
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
}
if(isDev){
    // 方便开发环境调试
    config.devtool="#cheap-module-eval-source-map"
    config.module.rules.push(
           {
                test:/\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:"postcss-loader",
                        options:{
                            sourceMap:true
                        }
                    },
                    "sass-loader"
                ]
            },
    )
    config.devServer={
        port:2000,
        host:"0.0.0.0",
        overlay:{
            errors:true
        },
        // 改了一个组件，只重新渲染这个组件，不会整页渲染
        hot:true
    },
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()

    )
}else{
    config.entry={
        app:path.join(__dirname,"src/index.js"),
        // 类库单独打包
        vendor:['vue']
    }
    config.output.filename='[name][chunkhash:8].js'
    config.module.rules.push(
        {
            test: /\.scss$/,
            use:ExtractPlugin.extract({
                fallback: "style-loader",
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
    ),
    config.plugins.push(
        new ExtractPlugin('scss.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendor"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime'
        })
    )
}
module.exports=config