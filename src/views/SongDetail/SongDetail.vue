<template>
    <div class="bg-[#9d7660] text-[#fff]">
        <header>
            <div class="flex text-center justify-between w-[92%] mx-auto pt-[6.5vw]">
                <span class="w-[12vw]">
                    <Icon icon="formkit:left" class="text-[5.43vw]" />
                </span>
                <span class="text-[4.11vw] w-[12vw] ">
                    歌单
                </span>
                <span class="w-[12vw]">
                    <span class="flex">
                        <Icon icon="carbon:search" color="Seashell3" class="text-[5.31vw] mr-[2vw]" />
                        <Icon icon="ant-design:more-outlined" class="text-[5.31vw]" />
                    </span>
                </span>
            </div>
        </header>
        <section>
            <div class="w-[92%] mx-auto mt-[5.3vw] flex justify-between">
                <div class="flex">
                    <div class="relative">
                        <img :src="songdetail.coverImgUrl" alt="" class="w-[25.36vw] rounded-[2vw]">
                        <div class="flex items-center absolute top-[2.3vw] right-[1.45vw]">
                          <Icon icon="bi:play-fill" class="text-[3.45vw]"/>
                          <span class="text-[2.05vw]">{{ dataTruncation(songdetail.playCount) }}</span>
                        </div>
                    </div>
                    <div class="ml-[3vw]">
                        <div>
                            <p class="text-[3.74vw]">{{ songdetail.name }}</p>
                            <div class="mt-[1.8vw] flex items-center">
                                <img :src="songdetail.creator.avatarUrl" alt="" class="w-[6vw] rounded-[50%]">
                                <span class="text-[2.66vw] mx-[1vw]">{{ songdetail.creator.nickname }}</span>
                                <span
                                    class="flex items-center bg-opacity-20 rounded-[3.6vw] px-[1.5vw] py-[0.8vw] bg-white">
                                    <Icon icon="ic:round-add" class="text-[2.66vw] text-white" />
                                    <span class="text-[2.66vw]  text-white">关注</span>
                                </span>
                            </div>
                            <div class="flex mt-[2.17vw]">
                                <div v-for="item in songdetail.tags"
                                    class="text-[#fff] bg-white bg-opacity-20 flex items-center rounded-[1vw] mr-[1.45vw] py-[0.55vw] px-[1vw]">
                                    <span class="text-[2.29vw]">{{ item }}</span>
                                    <Icon icon="formkit:right" class="1.8vw" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class=" bg-white bg-opacity-20 w-[5.83vw] h-[4.83vw]  rounded-[50%] flex items-center justify-center">
                  <Icon icon="uiw:left" :rotate="3" class="text-[#d8cac2] text-[2.3vw]"/>
                </div>
            </div>
            <div class="flex items-center w-[92%] mx-auto mt-[3.5vw]">
                <p class=" overflow-auto whitespace-nowrap w-[95%] songP text-[2.78vw] mr-[1vw] text-[#c9b3a7]">{{ songdetail.description }}</p>
                <Icon icon="formkit:right" class="1.8vw text-[#c9b3a7]" />
            </div>
            <div class="flex w-[92%] mx-auto justify-between mt-[5vw]">
                <div class="w-[28.86vw] h-[9.66vw] rounded-[4.5vw] text-[#fff] bg-white bg-opacity-20 flex justify-center items-center">
                    <Icon icon="majesticons:share" class="text-[3.74vw]"/>
                    <span>{{ songdetail.shareCount }}</span>
                </div>
                <div class="w-[28.86vw] h-[9.66vw] rounded-[4.5vw] text-[#fff] bg-white bg-opacity-20 flex justify-center items-center">
                    <Icon icon="heroicons-solid:chat"  class="text-[3.74vw]"/>
                    <span>{{ songdetail.trackCount }}</span>
                </div>
                <div class="w-[28.86vw] h-[9.66vw] rounded-[4.5vw] text-[#fff] bg-[#eb484c] flex justify-center items-center">
                    <Icon icon="fluent:collections-24-filled" class="text-[3.74vw]" />
                    <span>{{ songdetail.subscribedCount }}</span>
                </div>
            </div>
        </section>
        <section class="mt-[4vw] text-[#2a3146]">
          <div class="bg-[#fff] rounded-t-[4vw]">
            <div class=" flex justify-between items-center px-[3.38vw]  py-[3vw] border-b-[0.5vw] border-[#e5e3e3]">
              <div class="flex items-center">
                <Icon icon="icon-park-solid:play" class="text-[5.9vw] text-[#eb4d44] mr-[2.5vw]"/>
                <span class="font-bold">播放全部</span>
                <span class="text-[2.17vw]">({{ songInfo.length }})</span>
              </div>
              <div class="flex items-center">
                <Icon icon="circum:save-down-1" class="text-[5.99vw] mr-[4.35vw]"/>
                <Icon icon="solar:list-check-linear" class="text-[5.62vw]"/>
              </div>
            </div>
            <div>
              <ul class="px-[3.38vw]">
                <li v-for="(item,index) in songInfo" :key="index" class="flex items-center justify-between mt-[5.8vw]">
                  <div class="flex items-center">
                    <span class="w-[5.2vw] text-[#999] text-center mr-[4vw]">{{ index+1 }}</span>
                    <div>
                      <p class="text-[3.74vw]">{{ item.name }}</p>
                      <p class="text-[2.05vw] text-[#9296a0]">{{ item.ar[0].name }} - {{ item.name }}</p>
                    </div>
                  </div>
                  <div>
                    <Icon icon="ant-design:more-outlined" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
</template>
<script>
import { songdetail, songInfo } from "@/request/index";

export default {
  data() {
    return {
      songdetail: {},
      songInfo:[]
    };
  },
  async created() {
    const res1 = await songdetail(this.$route.query.id);
    const res2 = await songInfo(this.$route.query.id);
    this.songdetail = res1.data.playlist;
    this.songInfo = res2.data.songs;
    console.log(this.songdetail);
    console.log(this.songInfo);
  },
  methods:{
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
        return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 100000) {
        return `${Math.floor(playVolume / 10000)}万`;
      } else {
        return playVolume;
      }
    },
  }
};
</script>
<style>
.songP::-webkit-scrollbar {
  height: 0px;
  width: 20px;
}

</style>