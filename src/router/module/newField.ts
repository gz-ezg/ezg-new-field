export default [
    {
        path:'/newField',
        name:'newField',
        component:()=>
            import(/* webpackChunkName: "newField" */ '@/views/newField/index.vue')
    }
]