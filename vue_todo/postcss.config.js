// postcss对css进行优化，
// autoprefixer对css自动加浏览器属性前缀
const autoprefixer = require("autoprefixer")
module.exports={
    plugins:[
        autoprefixer()
    ]
}