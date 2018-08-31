import Vue from 'Vue'
import App from './app.vue'
import "./assets/px.scss"

// const root=document.createElement("div")
//     document.body.appendChild(root)
console.log(process.env.NODE_ENV);

new Vue({
   render:(h)=>h(App)
}).$mount("#page")