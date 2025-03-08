import Blog from './view/blog/blog.vue'
import Home from './view/home/home.vue'
import Product from './view/product/product.vue'
import Community from './view/community/community.vue'
import { createRouter, createWebHistory } from "vue-router"
const routes = [
    { path: "/", component: Home },
    { path: "/blog.html", component: Blog },
    { path: "/community.html", component: Community },
    { path: "/product.html", component: Product }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router