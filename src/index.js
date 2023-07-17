import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import { Swipe, SwipeItem,Button,NoticeBar,Popup,Area, Cell, CellGroup,Tab, Tabs } from 'vant';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Drawer from '@/components/Drawer.vue';
import Vant from 'vant';
import 'vant/lib/index.css';
import App from '@/App.vue'
import router from '@/router/index'
import Switch  from '@/components/Switch.vue';
import { Circle } from 'vant';
import player from './components/player/player.js';
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)
Vue.use(player)
Vue.component('v-Switch', Switch);
Vue.use(Switch);
Vue.use(Vant);
dayjs.extend(relativeTime);
Vue.prototype.dayjs = dayjs;
Vue.component('Icon', Icon);
Vue.use(Swipe).use(SwipeItem).use(Button).use(Popup).use(Area).use(Cell).use(CellGroup).use(Circle).use(NoticeBar).use(Tab).use(Tabs);
Vue.component('Drawer',Drawer)

// Vue.extend给Vue构造函数配置项设置默认值
const ChildVue = Vue.extend({
    template:'<h1>{{msg}}</h1>',
    data(){
      return{
        msg:'123',
      }
    }
})

// new Vue({});
// new ChildVue({
//   el:'#app',
//   data(){
//     return{
//       msg:'abc',
//     }
//   }
// });

const app = new Vue({
    el:'#app',
    router,
    components: { App },
    template: '<App/>',
})

// Vue.extend()
// const app = new Vue({
//     el: '#app',
//     data: {
//       swiper: null
//     },
//     router,
//     render: h => h(App),
//     // mounted() {
//     //   this.initSwiper();
//     // },
//     // methods: {
//     //   initSwiper() {
//     //     this.swiper = new Swiper(".mySwiper", {
//     //       autoplay: true, // 自动播放
//     //       disableOnInteraction: false, // 鼠标交互后不停止自动播放
//     //       pagination: {
//     //         el: ".swiper-pagination",
//     //         clickable: true,
//     //         renderBullet: function (index, className) {
//     //           return '<span class="' + className + '">'  + "</span>";
//     //         },
//     //       },
//     //     });
//     //   },
//     //   handleTouchStart(event) {
//     //     this.swiper.autoplay.stop(); // 停止自动播放
//     //     // 处理手指触摸事件
//     //   },
//     //   handleTouchEnd() {
//     //     // 处理手指滑动结束事件
//     //     // 重新启动自动播放
//     //     this.startAutoPlay();
//     //   },
//     //   startAutoPlay() {
//     //     this.swiper.autoplay.start(); // 启动自动播放
//     //   }
//     // }
//   });
//   app.$mount();//把模板编译为浏览器能够识别的html片段并复制给app的$el属性
//   setTimeout(()=>{
//     document.querySelector('body').appendChild(app.$el)
//   },5000)
//   window.app = app;
//   console.log(app);