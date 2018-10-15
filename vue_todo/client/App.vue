<template>
 <div id="app">
     <Header></Header>
     <p>{{count}}</p>
     <p>{{$store.state.count}}</p>
     <button @click="add">增加</button>
    <!-- <Todo></Todo> -->
    <!-- <transition name="fade">
    
    </transition> -->
    <router-view />
    <!-- <p>dsfdfd</p> -->
    <Footer></Footer>
 </div>
</template>

<script type="text/ecmascript-6">
 import Header from './layout/Header.vue';
 import Todo from './views/Todo.vue';
 import Footer from './layout/Footer.jsx';
export default {
 data() {
 return {
     text:"hello wrold",
 }
 },
 components: {
     Header,
     Todo,
     Footer
 },
 mounted() {
     console.log(this.$store)
 },
 computed:{
     count(){
          console.log(this.$store.state.count)
         return this.$store.state.count
     }
 },
 methods:{
     add(){
         this.$store.commit("updateCount",2)
        
     }
 }
}
</script>

<style   lang="scss">

    #app{
        width:100%;
        height: 2000px;
    }
</style>
