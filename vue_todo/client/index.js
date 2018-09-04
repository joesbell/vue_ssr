import Vue from 'Vue'
import App from './App.vue'
import "./assets/px.scss"

// const root=document.createElement("div")
//     document.body.appendChild(root)
console.log(process.env.NODE_ENV);

new Vue({
   render:(h)=>h(App)
}).$mount("#page")