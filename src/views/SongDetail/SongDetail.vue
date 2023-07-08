<template>
  <div :class="{dark:switchCheckStatus}">
    <div class="bg-[#3e4769] text-[#fff] ">
        <header class="fixed top-0 w-[100%] bg-[#3e4769] z-50">
            <div class="flex text-center justify-between w-[92%] mx-auto pt-[6.5vw] h-[13vw] ">
                <span class="w-[12vw]" @click="HomeView">
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
          <div v-if="display">
            <div  class="w-[92%] mx-auto pt-[5.3vw] flex justify-between mt-[13vw]">
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
                <div class=" bg-white bg-opacity-20 w-[4.83vw] h-[4.83vw]  rounded-[50%] flex items-center justify-center flex-none" @click="display = !display">
                  <Icon icon="uiw:left" :rotate="3" class="text-[#d8cac2] text-[2.3vw]"/>
                </div>
            </div>
            <div class="flex items-center w-[92%] mx-auto mt-[3.5vw]">
                <p class=" overflow-auto whitespace-nowrap w-[95%] songP text-[2.78vw] mr-[1vw] text-[#c3c3c3] text-opacity-70">{{ songdetail.description }}</p>
                <Icon icon="formkit:right" class="1.8vw text-[#c9b3a7]" />
            </div>
          </div>
            
            <div v-if="!display" class=" mt-[13vw] pt-[5.3vw]">
                <p class="flex  pl-[4vw] pr-[4vw]" style="justify-content: space-between;">
                    <span class="text-[2vw] text-[#c3c3c3] text-opacity-70">喜欢这个歌单的用户也听了</span>
                    <span class="w-[4.83vw] h-[4.83vw] rounded-[50%] bg-white bg-opacity-20 flex"  @click="display = !display" style="align-items: center; justify-content:center" >
                        <Icon icon="ep:arrow-up"  class="text-[#d8cac2] text-[2.3vw]"  />
                    </span>
                </p>
                <div class="overflow-auto songP pl-[2vw] pr-[2vw] mt-[3vw]">
                    <div class=" flex " :style="`width:${music?.length * 25 + 25}vw`"  style="justify-content: space-around;">
                        <div v-for="(item) in music" :key="item.tom" class="w-[28vw]">
                            <img :src="item.coverImgUrl" alt="" class="w-[28vw] h-[28vw] rounded-[3vw]">
                            <p class=" line-clamp-2 text-[#fff] text-[3vw] mt-[2vw]">{{ item.name }}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex w-[92%] mx-auto justify-between mt-[5vw]">
                <div class="w-[28.86vw] h-[9.66vw] rounded-[4.5vw] text-[#fff] bg-white bg-opacity-20 flex justify-center items-center">
                    <Icon icon="majesticons:share" class="text-[5vw]"/>
                    <span>{{ songdetail.shareCount }}</span>
                </div>
                <div class="w-[28.86vw] h-[9.66vw] rounded-[4.5vw] text-[#fff] bg-white bg-opacity-20 flex justify-center items-center">
                    <Icon icon="heroicons-solid:chat"  class="text-[5vw]"/>
                    <span>{{ songdetail.trackCount }}</span>
                </div>
                <div class="w-[28.86vw] h-[9.66vw] rounded-[4.5vw] text-[#fff] bg-[#eb484c] flex justify-center items-center">
                    <Icon icon="fluent:collections-24-filled" class="text-[5vw]" />
                    <span>{{ songdetail.subscribedCount }}</span>
                </div>
            </div>
        </section>
        <section class="mt-[4vw] text-[#2a3146] dark:text-[#fff]">
          <div class="bg-[#fff] rounded-t-[4vw] dark:bg-[#4e5778] ">
                <div class=" flex justify-between items-center px-[3.38vw]  py-[3vw] border-b-[0.5vw] border-[#e5e3e3] sticky top-[13vw] rounded-t-[4vw] bg-[#fff] dark:bg-[#4e5778] dark:border-[#555e7d]">
                  <div class="flex items-center">
                    <div class="bg-[#eb4d44] w-[5.9vw] h-[5.9vw] rounded-[50%] flex items-center justify-center mr-[2.54vw]">
                      <Icon icon="ion:play" class="text-[#fff] text-[2.54vw]"/>
                    </div>
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
                    <span class="w-[5.2vw] text-[#999] text-center mr-[4vw] dark:text-[#8c91a6]">{{ index+1 }}</span>
                    <div>
                      <p class="text-[3.74vw] w-[67vw] whitespace-nowrap overflow-hidden overflow-ellipsis">{{ item.name }}</p>
                      <p class="text-[2.05vw] w-[67vw] text-[#9296a0] dark:text-[#8c91a6] whitespace-nowrap overflow-hidden overflow-ellipsis">{{ item.ar[0].name }} - {{ item.name }}</p>
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
  </div>
    
</template>
<script>
import { songdetail, songInfo ,musicSlider} from "@/request/index";
import store from 'storejs'
export default {
  data() {
    return {
      songdetail: {},
      songInfo:[],
      switchCheckStatus: null,
      music:[],
      display:true,
    };
  },
  async created() {
    this.switchCheckStatus = store.get('switch')
    const res1 = await songdetail(this.$route.query.id);
    const res2 = await songInfo(this.$route.query.id);
    this.songdetail = res1.data.playlist;
    this.songInfo = res2.data.songs;
    console.log(this.songdetail);
    console.log(this.songInfo);
    musicSlider(this.$route.query.id).then((res) => {
          console.log(res)
          this.music = res.data.playlists
          console.log(this.music);
        })
  },
  methods:{
    HomeView() {
      this.$router.push('/home');
    },
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