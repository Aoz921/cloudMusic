import VueRouter from 'vue-router';
import Vue from 'vue';
import HomeView from "@/views/HomeView/HomeView.vue"
import IndexView from '@/views/IndexView.vue'
import SearchView from '@/views/SearchView.vue'
Vue.use(VueRouter);
const router = new VueRouter({
  routes:[
    // 路径重定向
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: '/index',
      component: SearchView,
    },
    // {
    //   path: '/MineView',
    //   component: MineView,
    // },
    {
      path:'/Foo',
      // 懒加载
      component:() => import('@/views/Foo.vue')
    }
  ]
});
export default router;