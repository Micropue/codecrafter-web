import { createRouter, createWebHistory } from "vue-router"
import { store } from './states/store'
import  Error404  from './error/404.vue'
const routes = [
    { name:"home", path: "/", component: () => import('./view/home/home.vue') },
    { name:"blog", path: "/blog.html", component: () => import('./view/blog/blog.vue') },
    { name:"community", path: "/community.html", component: () => import('./view/community/community.vue') },
    { name:"product", path: "/product.html", component: () => import('./view/product/product.vue') },
    { name:"joinus", path: "/joinus.html", component: () => import('./view/joinus/joinus.vue') },
    { name:"404", path: "/:catchAll()", component: Error404 }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
const loader = {
    open() {
        store.dispatch('open')
    },
    close() {
        store.dispatch('close')
    }
}
router.beforeEach((to, from, next) => {
    loader.open()
    next()
})
router.afterEach((to, from) => {
    setTimeout(loader.close,900)
})
export default router