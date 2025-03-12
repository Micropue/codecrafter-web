import { createRouter, createWebHistory } from "vue-router"
import Error404 from '@/error/404.vue'
import store from '@/store/store'
const routes = [
    { name: "home", path: "/", component: () => import('./view/home/home.vue') },
    {
        path: "/about", component: () => import('./view/about/about.vue'),
        children: [
            { name: "about", path: "", component: () => import('./view/about/about/about.vue') },
            { name: "joinus", path: "joinus", component: () => import('./view/about/joinus/joinus.vue') }
        ]
    },
    { name: "community", path: "/community", component: () => import('./view/community/community.vue') },
    { name: "blog", path: "/blog", component: () => import('./view/blog/blog.vue') },
    { name: "projects", path: "/projects", component: () => import('./view/projects/projects.vue') },
    { name: "chat", path: "/chat", component: () => import('./view/chat/chat.vue') },
    { name: "404", path: "/:catchAll()", component: Error404 }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    store.commit('load')
    next()
})
router.afterEach((to, from) => {
    store.commit('loaded')
})
export default router