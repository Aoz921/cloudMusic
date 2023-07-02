import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import BScroll from '@better-scroll/core'
import HomeView from './views/HomeView/HomeView.vue';
import { Swipe, SwipeItem } from 'vant';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Drawer from '@/components/Drawer.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
// import { Switch } from 'vant';
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

import Switch  from '@/components/Switch.vue';
Vue.component('v-Switch', Switch);

Vue.use(Switch);

Vue.use(Vant);
dayjs.extend(relativeTime);
Vue.prototype.dayjs = dayjs;
Vue.component('Icon', Icon);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.component('Drawer',Drawer)

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
      },
      handleTouchStart(event) {
        this.swiper.autoplay.stop(); // 停止自动播放
        // 处理手指触摸事件
      },
      handleTouchEnd() {
        // 处理手指滑动结束事件
        // 重新启动自动播放
        this.startAutoPlay();
      },
      startAutoPlay() {
        this.swiper.autoplay.start(); // 启动自动播放
      }
    }
  });