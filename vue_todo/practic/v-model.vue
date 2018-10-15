<template>
 <div class="page">
     <input type="text" :value="valuenum" @input="inputhandel" >
 </div>
</template>

<script type="text/ecmascript-6">
export default {
    model:{
        prop:"valuenum",
        event:"change"
    },
 data() {
 return {

 }
 },
 props:["valuenum"],
 components: {

 },
 methods:{
     inputhandel(e){
         this.$emit("change",e.target.value)
     }
 }
}
</script>

<style scoped lang="scss">
</style>
