<template>
  <header class="main-header">
      <router-link :to="{name:'todo'}">主页</router-link>
    <router-link :to="{name:'login'}">登陆</router-link>
    <button @click="go">登陆</button>
    <div>todo</div>
  </header>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      go(){
          this.$router.push({name:"login",query:{test:"12354"}})
      }
    }
  }
</script>
<style lang='scss' scoped>
.main-header{
    text-align:center;
    div{
    font-size:100px;
    color:rgba(175,47,47,1);
    font-weight:500;
    margin:20px;
    }
   
}
</style>