<template>
    <div class="w-screen h-screen overflow-hidden pt-[6vw]">
        <div class=" text-center relative mb-[6.5vw]">
            <Icon icon="uiw:left" class="absolute bottom-0 left-2 text-[6.239vw]"/>
            歌单广场
        </div>
        <div class="flex justify-around leading-normal h-[9vw] leading-10vw horizontal-container">
            <div class="w-[78.94vw] overflow-hidden scroll-wrapper" ref="scrollWrapper">
                <ul class="flex w-[187vw] scroll-content" ref="scrollContent">
                    <li v-for="item in menu" :key="item.id" v-on:click="toggleMenu(item.name)" class="mx-4 text-gray-500 text-[3.675vw] scroll-item" :class="{ active: item.name === activeMenuItem }">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="pt-[1.09vw]">
                <icon icon="charm:apps" style='color: #ccc; font-size: 3.675vw;'></icon>
            </div>
        </div>
        <ul class="flex flex-wrap justify-around">
            <li v-for="item in playlists" :key="item.id" class="w-[28.889vw] mb-[6.325vw]">
                <div class=" rounded overflow-hidden">
                    <img :src="item.coverImgUrl" class="w-[28.889vw]" alt="" />
                </div>
                <p class="line-clamp-2 leading-tight text-[3.675vw]">{{ item.name }}</p>
            </li>
        </ul>
    </div>

</template>
<script>
import {fetchPlaylisthot,fetchPlaylists} from '@/request/index.js'
import axios from 'axios';
import BScroll from 'better-scroll';
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: '华语',
      playlists: [],
    };
  },
  mounted() {
    this.initScroll();
  },
  methods: {
    initScroll() {
      const scrollWrapper = this.$refs.scrollWrapper;
      const scrollContent = this.$refs.scrollContent;

      new BScroll(scrollWrapper, {
        scrollX: true, // 启用横向滚动
        click: true, // 允许点击事件
      });
    },
    toggleMenu(name) {
      this.fetchPlaylists(name);
    },
  },
  async created() {
      const res = await fetchPlaylisthot().catch((err) => console.log(err));
      this.menu = res.data.tags;  
  },
  // 监控某个响应数据发生变化之后执行指定的动作(函数)
  //methods\beforeCreate\created\watch中的this指向vm
  // watch:{
  //   activeMenuItem:function(newCat){
  //     this.fetchPlaylists(newCat);
  //   },
  // }
  watch:{
    activeMenuItem:{
      // 指定数据变化的回调函数
      // async() { await + promise }
      async handler(newCat){
        const res = await fetchPlaylists(newCat)
        this.playlists = res.data.playlists;
        // fetchPlaylists(newCat).then((res) => {
        //   this.playlists = res.data.playlists;
        // });
      },
      // 执行配置：立即执行
      immediate:true,
     
    },
  
  }
};
</script>

<style>
    .active{
        color: #000;
        font-weight: 500;
        position: relative;
    }

    .active::after {
        content: '';
        position: absolute;
        background-color: rgba(247, 64, 61,.85);
        width: 100%;
        height: 1.709vw;
        left: 0vw;
        bottom: 0vw;
        border-radius: 10vw;
    }
</style>