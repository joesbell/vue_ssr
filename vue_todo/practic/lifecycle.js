import Vue from 'vue'

const app=new Vue({
    el:"#root",
    template:"<div>{{text}}</div>",
    data(){
        return{
            text:"aaa"
        }
    },
    // 最好不要在这修改data数据，进行ajax请求
    beforeCreate() {
        console.log(this.$el,"beforeCreate");
        
    },
    created() {
        console.log(this.$el, "Create");
        
    },
    beforeMount() {
        console.log(this.$el, "beforemount");
        
    },
    mounted() {
        console.log(this.$el, "mounted");
        
    },
    activated() {
        
    },
    beforeUpdate() {
        
    },
    updated() {
        
    },
    destroyed() {
        
    },
    errorCaptured: (err, vm, info) => {
        console.log(err)//在正式环境可以调用
    },
})

// 服务端渲染只有beforecreate  created