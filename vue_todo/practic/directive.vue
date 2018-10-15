<template>
 <div class="page">
     <ul>
         <!-- key  节省开销，不用每次都重新渲染dom,key的值不要用index -->
         <li v-for="(item) in arr" :key="item">{{item}}</li>
     </ul>
     <div v-for="item in obj" :key="item">{{item}}</div>
     <div>
         <button @click="all">全选</button>
         <button @click="noall">取消全选</button>
         <input type="checkbox" v-for="item in arrobj" :key="item.a" :value="item.a" v-model="check">
         <p>{{check}}</p>
         <input type="radio" :value="1" v-model="radio" >
          <input type="radio" :value="2" v-model="radio" >
          <p>{{radio}}</p>
         <pop :active="data"  @addnum="addnumber"></pop>
        <p>{{num}}</p>
        <p>{{value}}</p>
        <input type="text" v-model="num">
        <v-model v-model="value"></v-model>
        <sloter class="slot">
            <!-- 插槽 -->
            <span >{{value}}</span>
            <!-- 具名插槽 -->
            <p name="header">这是一个具名插槽</p>
            <!-- 作用域插槽，可以使用子组件内部的数据 -->
            <!-- <p  slot-scope="props">{{value}} {{props.slotn}}</p> -->

        </sloter>
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
import pop from './props.vue'
import vModel from './v-model.vue'
import sloter from './slot.vue'
export default {
 data() {
 return {
     data:true,
     arr:[1,2,3],
     check:[],
     num:1,
     value:"000",
     radio:"",
     obj:{
         a:"111",
         b:"222",
         c:"333"
     },
     arrobj:[
         {
            a:1,
            text:"111"
         },
         {
             a:2,
            text:"222"

         },
         {
             a:3,
            text:"333"
         }
     ]
 }
 },
 components: {
     pop,
     vModel,
     sloter
 },
 methods:{
     all(){
            this.check=[]
        for(let x of this.arrobj){
            this.check.push(x.a)
        }
     },
     noall(){
            this.check=[]
     },
     addnumber(number){
         this.num=this.num+number,
         this.data=!this.data
     }
 }
}
</script>

<style scoped lang="scss">
.slot{
    width: 300px;
    height: 100px;
    border: 1px solid red;
}
</style>
