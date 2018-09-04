<template>
 <div id="page">
     <Header></Header>
    <Todo></Todo>
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
     text:"hello wrold"
 }
 },
 components: {
     Header,
     Todo,
     Footer
 }
}
</script>

<style scoped  lang="scss">
    #page{
        width:100%;
        height: 200px;
    }
</style>
