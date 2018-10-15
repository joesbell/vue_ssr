// import Todo from '@/views/Todo.vue'
// import Login from '@/views/login.vue'
/* webpackChunkName: 'ImportFuncDemo' */
const Todo = () => import('@/views/Todo.vue')
const Login = () => import('@/views/login.vue')
// const Todo = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../views/Todo.vue')
// const Login = () => import(/* webpackChunkName: 'ImportFuncDemo' */ '../views/login.vue')

export default [
    {
        path: "/",
       redirect:"/login"
    },
    {
        path:"/app",
        component: Todo,
        name:"todo",
        meta:{
            
        }
    },
    {
        path: "/Login",
        // props:true,
        component: Login,
        name:"login"
    }
]