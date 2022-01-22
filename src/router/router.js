import Main from "@/pages/Main";
import PostsListPage from "@/pages/PostsListPage";
import PostsListPageWithStore from "@/pages/PostsListPageWithStore";
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostsListPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostPage
    },
    {
        path: '/store',
        component: PostsListPageWithStore
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;