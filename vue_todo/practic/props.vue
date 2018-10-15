<template>
 <div class="page">
     <div v-show=active>tretger</div>
     <button @click=addnum>增加</button>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {
     
 }
 },
 props:{
     active:{
         type:Boolean,
         require:true,
        //  validator(val){
        //      return 
        //  }
     }
 },
 components: {

 },
 mounted() {
     console.log(this.$parent.obj)
 },
 computed:{
     num(){
         return this.active+"111"
     }
 },
 methods:{
     addnum(){
         this.$emit("addnum",1)
     }
 }
}
</script>

<style scoped lang="scss">
</style>
