import Router from 'vue-router'
import routes from './routes'


export default ()=>{
    return new Router({
        routes,
        mode:"history",
        // base:"",
        // linkActiveClass:"",
        // linkExactActiveClass:""
        scrollBehavior (to, from, savedPosition) {
            // savedPosition  保存滚动条位置
            // if (savedPosition){
            //     return savedPosition
            // }else{
            //     return {x:0,y:600}
            // }
            console.log(to, from, savedPosition)
        },
        // 在某些浏览器不支持单页应用时候，自动把history转成hash
        fallback:true,
        // parseQuery(query){

        // },
        // stringifyQuery(obj){
            
        // }
    })
}
