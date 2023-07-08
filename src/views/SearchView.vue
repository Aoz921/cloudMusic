<template>
    <div :class="{dark:switchCheckStatus}">
        <div class="bg-[#f7f8fb] w-screen h-screen pt-[4.23vw] overflow-auto dark:bg-[#1b1b23] dark:text-[#fff]">
        <header class="w-[90%] mx-auto">
            <div class="flex justify-between items-center">
                <div @click="HomeView">
                    <Icon icon="formkit:left" class="text-[3.86vw]" />
                </div>
                <div class="flex w-[72.83vw] h-[8.57vw] bg-[#fff] rounded-[5vw] items-center dark:bg-[#313138]">
                    <Icon icon="carbon:search" color="Seashell3" class="text-[3.5vw] ml-[3vw] mr-[2vw] dark:text-[#acacb0]" />
                    <input type="text" :placeholder="defaultSearch.showKeyword" v-model="userSearchKeywords" class="text-[3.5vw] text-[#76767b] dark:bg-[#313138]"/>
                </div>
                <span>搜索</span>
                <ul v-if="searchSuggestList.length" class="absolute z-50 mb-[0.5vw] top-[8vw] left-[16vw] text-[2vw]"
                    id="ulNode">
                    <li v-for="item in searchSuggestList" :key="item.id" @click="searchHandler(item.name)"
                        class="w-[60vw] mb-[1vw] z-99 text-white bg-pink-700">
                        {{ item.name }}
                    </li>
                </ul>
            </div>
            <div class="mt-[3.4vw]">
                 <ul class="flex justify-between text-center">
                <li class="w-[24.88vw] flex items-center justify-center border-r-[0.4vw] border-[#e4e6e9] dark:border-[#2d2d34]">
                    <Icon icon="majesticons:user" color="#eb4d44" class="text-[4.5vw] mr-[1vw]"/>
                    <span>歌手</span>
                </li>
                <li class="w-[24.88vw] flex items-center justify-center border-r-[0.4vw] border-[#e4e6e9] dark:border-[#2d2d34]">
                    <Icon icon="fontisto:apple-music" color="#eb4d44" class="text-[4.5vw] mr-[1vw]"/>
                    <span>曲风</span>
                </li>
                <li class="w-[24.88vw] flex items-center justify-center border-r-[0.4vw] border-[#e4e6e9] dark:border-[#2d2d34]">
                    <Icon icon="fluent-emoji-high-contrast:musical-notes" color="#eb4d44" class="text-[4.5vw] mr-[1vw]"/>
                    <span>专区</span>
                </li>
                <li class="w-[24.88vw] flex items-center justify-center">
                    <Icon icon="ph:microphone-fill" color="#eb4d44" class="text-[4.5vw] mr-[1vw]"/>
                    <span>识曲</span>
                </li>
            </ul>
            </div>
        </header>
        <section class="w-[90%] mx-auto mt-[4vw]">
           <div class="flex justify-between">
                <span class="text-[3.14vw] ">猜你喜欢</span>
                <Icon icon="ion:refresh-outline" color="#666" width="24" height="24" />
           </div>
           <div class="flex">
                <span class="p-[1vw] px-[2vw] rounded-[3vw] bg-white text-[2.17vw] text-[#666c7b] mr-[2vw] dark:bg-[#323239] dark:text-[#d6d6d7]" v-for="item in guessLike">{{item.searchWord}}</span>
           </div>
        </section>
        <section class="mt-[5.31vw] pl-[4vw]">
            <van-swipe  :loop="false" :width="250" class="flex">
                <van-swipe-item v-for="item in List"  :key="item.id">
                    <div  class="w-[60vw] mr-[2vw] flex-none bg-white rounded-[3vw] dark:bg-[#323239]">
                        <div class="w-[90%] h-[12.32vw] mx-auto border-b-[0.5vw] border-[#e5e5e5] flex items-center">
                            <span class=" text-[3.86vw]">{{ item.name }}</span>
                            <div class="flex items-center bg-[#f2f3f4] rounded-[3vw] p-[1vw] pl-[1.8vw] pr-[1.8vw] border-[#ebedef] ml-[3.26vw] dark:bg-[#3a3a39]">
                                <Icon icon="bi:play-fill" class="text-[3.05vw]"/>
                                <span class="text-[2.78vw]">播放</span>
                            </div>
                        </div>
                    <ul>
                        <li v-for="(key,index) in item.tracks.slice(0, 20)" :key="index">
                            <div class="flex items-center mt-[5.43vw]">
                                <span class="w-[10vw] text-center text-[2.66vw] text-[#7f838f]" :style="{color:getTextColor(index+1)}">{{ index+1 }}</span>
                                <span class="text-[3.26vw] w-[33vw] overflow-hidden whitespace-nowrap truncate">{{ key.name }}</span>
                            </div>
                        </li>
                    </ul>
                    </div>
                    
                </van-swipe-item>
            </van-swipe>
        </section>
    </div>
    </div>
</template>
<script>
import axios from 'axios';
import _ from 'lodash';
import store from 'storejs'
import {
    fetchSearchDefault,
    fetchSearchResult,
    fetchSearchSuggest,
    fetchSeachList,
    fetchSearchHotDetail
} from '@/request';
import { List } from 'vant';
export default {
    data() {
        return {
            userSearchKeywords: '',
            defaultSearch: {},
            searchSuggestList: [],
            List:[],
            guessLike:[],
            switchCheckStatus: null,
        };
    },
    methods: {
        HomeView() {
            this.$router.push('/home');
        },
        async searchHandler(keywords) {
            const res = await fetchSearchResult({
                keywords: keywords || this.defaultSearch.realkeyword,
            });
        },
    },
    computed:{
        getTextColor() {
            return function(item) {
              if (item=='1' || item=='2' || item=='3') {
                return 'red'; // 设置红色
              } 
              return ''; // 默认值为空
            };
          },
    },
    async created() {
        this.switchCheckStatus = store.get('switch')
        const res = await fetchSearchDefault();
        this.defaultSearch = res.data.data;
        const res1 = await fetchSearchHotDetail()
        this.guessLike = res1.data.data.splice(0,3);
        console.log(this.guessLike);
        const res2 = await fetchSeachList(); // 热榜
        this.List = res2.splice(0,11)
        console.log(this.List);
        
    },
    watch: {
        userSearchKeywords: _.debounce(async function (keywords) {
            const res = await fetchSearchSuggest(keywords);
            this.searchSuggestList = res.data.result.songs;
        }, 300),
    },
};

</script>
<style>
 .van-swipe__indicators > .van-swipe__indicator {
    width: 0;
    height: 0;
  }
</style>