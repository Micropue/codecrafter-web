import { createRouter, createWebHistory } from "vue-router"
import Error404 from '@/error/404.vue'
import store from '@/store/store'
const routes = [
    { name: "home", path: "/", component: () => import('./view/home/home.vue') },
    {
        path: "/about", component: () => import('./view/about/about.vue'),
        children: [
            { name: "about", path: "", component: () => import('./view/about/about/about.vue') },
            { name: "joinus", path: "joinus", component: () => import('./view/about/joinus/joinus.vue') },
            { name: "privacy", path: "privacy", component: () => import('./view/about/privacy/privacy.vue') }
        ]
    },
    { name: "community", path: "/community", component: () => import('./view/community/community.vue') },
    { name: "blog", path: "/blog", component: () => import('./view/blog/blog.vue') },
    { name: "projects", path: "/projects", component: () => import('./view/projects/projects.vue') },
    { name: "chat", path: "/chat", component: () => import('./view/chat/chat.vue') },
    {
        name: "auth", path: "/auth", component: () => import('./view/auth/auth.vue'),
        children: [
            { name: "login", path: "login", component: () => import('./view/auth/login/login.vue') },
            { name: "register", path: "register", component: () => import('./view/auth/register/register.vue') },
            { name: "restpwd", path: "restpwd", component: () => import('./view/auth/restpwd/restpwd.vue') },
        ]
    },
    { name: "404", path: "/:catchAll(.*)", component: Error404 }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    store.commit('load')
    if (to.name == "auth") {
        store.state.logined ? next() : next("/auth/login")
        return
    }
    if(["login","register","resetpwd"].includes(String(to.name)) && store.state.logined){
        next('/auth')
        return
    }
    next()
})
router.afterEach((to, from) => {
    store.commit('loaded')
})
export default router