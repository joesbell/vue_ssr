<template>
 <div id="page">
     <Header></Header>
    <todo></todo>
    <Footer></Footer>
 </div>
</template>

<script type="text/ecmascript-6">
 import Header from './todo/header.vue';
 import Todo from './todo/todo.vue';
 import Footer from './todo/footer.jsx';

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
