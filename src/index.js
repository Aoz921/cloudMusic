import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import BScroll from '@better-scroll/core'
// import indexView from '@/views/IndexView.vue';
import HomeView from './HomeView.vue';
Vue.component('Icon', Icon);

const vm = new Vue({
    el: '#app',
    data: {
      swiper: null
    },
    render: h => h(HomeView),
    mounted() {
      this.initSwiper();
    },
    methods: {
      initSwiper() {
        this.swiper = new Swiper(".mySwiper", {
          autoplay: true, // 自动播放
          disableOnInteraction: false, // 鼠标交互后不停止自动播放
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '">'  + "</span>";
            },
          },
        });
      }
    }
  });