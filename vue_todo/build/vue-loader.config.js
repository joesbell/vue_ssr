module.exports = (isDev)=>{
    return{
        // .VUE文件 空格问题
        preserveWhitepace:true,
        //把vue文件中的样式也打包进单独的css文件中
        extractCSS: !isDev,
        // cssModules:{
        //     // 给vue文件中css生成一个独一无二的类名
        //     localIdentName:"[path]-[name]-[hash:base64:5]",
        //     camelCase:true
        // },
        // 热重载
        hotReload:true
    }
}