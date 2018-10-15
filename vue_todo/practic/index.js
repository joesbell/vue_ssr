import Vue from 'vue'
// import computed from './computed.vue'
import directives from './directive.vue'
// import "./lifecycle"
// import "./databind"
// console.log(process.env.NODE_ENV+"111");
// vue instance vue实例
const app=new Vue({
    el:"#root",
    render: (h) => h(directives),
    watch:{
        text(newtext,oldtext){

        }
    }
})

// // 在vue  data 中的值发生下一次变化之后， 生效，
// // app.$options.render=(h)=>{
// //     return h("div",{},"new render funtion")
// // }
// // console.log(app.$root==app);true

// // console.log(app.$slots);
// // console.log(app.$scopedSlots);
// // console.log(app.$refs);
// // console.log(app.$isServer);
// app.$watch("text",(newtext,oldtext)=>{
//     console.log(`$(newtext):$(oldtext)`);
// })
// // 强制组件重新渲染
// app.$forceUpdate();

// // dom重新渲染之后的回调
// app.$nextTick(()=>{

// })


