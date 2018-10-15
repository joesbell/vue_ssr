import Vue from 'Vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import createRouter from './router/router'
import store from './store'
import "./assets/px.scss"
// Vue.prototype.$store = store
import Vuex from 'vuex'
Vue.use(Vuex);

// const store = new Vuex.Store({
//     state: {
//         count: 0
//     },
//     mutations: {
//         updateCount(state, num) {
//             state.count += num
//         }
//     }
// })
Vue.use(VueRouter)
const router = createRouter();


// 全局导航守卫
// 导航跳转之前
// router.beforeEach((to,from,next)=>{
//     console.log(to);
//     next()
// })
// router.beforeResolve((to,from,next)=>{
//     console.log(to);
//     next()
// })
// // 导航跳转之后
// router.afterEach((to,from)=>{

// })
// const root=document.createElement("div")
//     document.body.appendChild(root)
console.log(process.env.NODE_ENV);

new Vue({
    el:"#page",
    store,
    router,
    render:(h)=>{
        return h(App)
    }
    // components: { App },
    // template: '<App/>',
})