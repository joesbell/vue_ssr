<template>
 <div class="page">
     <div>
         <span :class="getClass">{{name}}</span>
         <span>{{fullName}}</span>
         <span>{{splitName}}</span>\
         <input type="text" v-model="firstName">
         <input type="text" v-model="obj.a">
     </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     firstName:"jose",
     lastName:"bellr",
     arrName:["sdaf","dd","vv"],
     fullName:"",
     obj:{
         a:1
     }
 }
 },
 components: {
 },
 computed:{
     name(){
         return `${this.firstName}+${this.lastName}`
     },
     splitName(){
         return this.arrName.join(",")
     },
     getClass(){
         return `${this.firstName}+${this.lastName}`
     }
 },
 watch:{
     firstName(newName,oldName){
         this.fullName=`${newName}__${this.firstName}`
     },
     obj:{
         handler(){
             console.log("sdds");
             
         },
           // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
    immediate: true,

         deep:true
     }
 }
}
</script>

<style scoped lang="scss">
</style>
