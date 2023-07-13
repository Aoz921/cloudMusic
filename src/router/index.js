import VueRouter from 'vue-router';
import Vue from 'vue';
import HomeView from "@/views/HomeView/HomeView.vue"
import IndexView from '@/views/IndexView.vue'
import SearchView from '@/views/SearchView.vue'
import SongDetail from "@/views/SongDetail/SongDetail.vue"
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    // 路径重定向
    {
      path: '/',
      redirect: '/Login',
    },
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: '/index',
      component: SearchView,
    },
    {
      path: '/songdetail',
      component: SongDetail,
    },
    {
      path: '/Foo',
      // 懒加载
      component: () => import('@/views/Foo.vue')
    },
    {
      path: '/Login',
      // 懒加载组件文件
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/user',
      // 懒加载组件文件
      component: () => import('@/views/user/user.jsx'),
    },
    {
      path: '/information',
      // 懒加载组件文件
      component: () => import('@/views/user/information.jsx'),
    },
    {
      path: '/Playsong',
      // 懒加载组件文件
      component: () => import('@/views/Playsong.vue'),
    },



  ]
});
export default router;