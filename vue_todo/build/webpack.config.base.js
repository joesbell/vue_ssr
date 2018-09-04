// webpack版本：^ 3.10.0
// vue - loader 版本：^ 13.6.0
// webpack - dev - server版本:@^ 2.9.7
const path = require("path")
const isDev = process.env.NODE_ENV === "development"
const createVueLoader=require("./vue-loader.config")
const config = {
    target: "web",
    entry: path.resolve("client/index.js"),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "../dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                // use:[
                //     "babel-loader" 
                // ],
                loader: "babel-loader",
                exclude:/node_modules/,
                // babel-preset-latest最新的es6转换规则
                query: {
                    presets: ['latest'] //按照最新的ES6语法规则去转换
                }
            },
            {
                test: /\.jsx$/,
                loader: "babel-loader",
                query: {
                    presets: ["latest"]
                }
            },
            {
                test: /\.vue$/,
                loader:"vue-loader",
                options: createVueLoader(isDev)

            },
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                use: [
                    {
                        // url-loader 需要依赖file-loader
                        loader: "url-loader",
                        // option:{
                        //     limit:1024
                        // }
                    }
                ]
            }
        ]
    }
}
module.exports = config