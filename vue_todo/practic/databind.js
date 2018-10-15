import Vue from 'vue'

const app=new Vue({
    el:"#root",
    data:{
        text:"0000",
        flag:false
    },
    template:`<div :class="[flag ? 'test' : 'notest']">{{text}}</div>`
})