<template>
  <div>
    <div class="px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center">
      <div  @click="$router.push('/Playsong')" class="w-[10vw] h-[10vw] relative flex items-center justify-center">
        <img  src="/static/bf_1.png" alt="" class="absolute top-0 left-0 z-[1]">
        <img :src="$player._currentTrack?.al?.picUrl" alt="" class="w-[7vw] h-[7vw] rounded-[50%] absolute top-1/2 left-1/2 rotate-image" :class="{ 'paused-animation': !this?.$player?._playing }">
      </div>
      <div class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]">
        <span class="text-[#3E485E]">{{$player._currentTrack.name}}</span>
        <span v-if="Array.isArray($player._currentTrack?.ar)">
          - {{ $player._currentTrack?.ar[0]?.name }}
        </span>
      </div>
      <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw]" @click="playFn">
        
        <van-circle v-model="currentRate" :rate="($player._progress * 100) / $player._duration" size="5.6vw" :stroke-width="120" color="#475165" layer-color="#C7CBD2"/> 
        <Icon :icon="`${$player._playing?'carbon:pause-filled':'ph:play-fill'}`" width="11px" class="top-1/2 left-1/2 translate-x-[-50%]  translate-y-[-50%] absolute" />
      </div>
      <!-- 播放列表 -->
      <Icon @click.native="show = !show" icon="iconamoon:playlist-fill" class="text-[6vw] text-[#3b4152] ml-[4.5vw]"/>
    </div>
<!-- 歌单列表 -->
<van-popup v-model="show" position="bottom" round :style="{ height: '136vw' }" class="z-[999]">
     <div class="px-[4vw] relative">
         <div class="ceiling">
             <div class="h-[17.86vw] flex items-center">
                 <span class="text-[4.53vw] text-[#313132] mr-[1.5vw]">当前播放</span>
                 <span class="text-[3.16vw] text-[#A9A9AA]">({{ data.data?.songs?.length }})</span>
             </div>
             <div class="h-[6vw] pb-[4vw] flex items-center justify-between border-b-[0.3vw] border-b-[#F5F5F5]">
                 <div class="w-[23vw] flex items-center justify-between">
                     <Icon icon="icon-park-outline:loop-once" class="text-[#ADADAD] text-[5.38vw]" />
                     <span class="text-[#323232] text-[3.42vw]">列表循环</span>
                 </div>
                 <div class="w-[26vw] flex items-center justify-between">
                     <Icon icon="line-md:downloading-loop" class="text-[#ADADAD] text-[5.38vw]" />
                     <Icon icon="icon-park-outline:add" class="text-[#ADADAD] text-[5.38vw]" />
                     <Icon icon="uiw:delete" class="text-[#ADADAD] text-[5vw]" /> 
                 </div>
             </div>
         </div>
         <!-- 歌曲列表 -->
         <div>
             <div v-for="item in fetch" :key="item.id" class="flex justify-between items-center h-[14vw]" @click="playColor(item.id)">
                 <h1 class="text-[14px]">
                     {{ item.name }}
                     <span class="text-[3vw] text-[#BCBCBC]" :class=" item.id === $player._currentTrack.id ? 'text-[#D15B57]' : ''">{{ item.ar[0].name }}</span>
                 </h1>
                 <div class="flex items-center">
                     <p class="text-[3vw] mr-[6vw] text-[#BCBCBC]">播放来源</p>
                     <Icon icon="ic:baseline-close" :horizontalFlip="true" class="text-[5vw] text-[#B1B1B1]" />
                 </div>
             </div>
         </div>
     </div>
    </van-popup>
    
  </div>
   
    
  </template>
  
  <script>
  import store from 'storejs'
  import {songInfo,playlistTrackAll} from '@/request'
  export default {
    data() {
      return {
        progress: 0, 
        currentRate: 0,
        show:false,
        data:[],
        fetch:[],
      };
    },
    methods:{
      playFn(){
        this.$player.playOrPause();
      },
      showPopup() {
          this.show = true;
      },
      playColor(id){
          this.$player.replacePlaylist([id], '', '');
          store.set('cookie_music', this.fetch);
      }
    },
    async created() {
      this.switchCheckStatus = store.get("switch");
      this.data = await playlistTrackAll(this.$route.query.id.replace(":id="), "");
      songInfo(this.$route.query.id).then((res) => {
          console.log(res);
          this.fetch = res.data.songs;
          console.log(this.fetch);
      })
    },
    
  };
  </script>
  <style>
.rotate-image {
  animation: rotate 10s infinite linear; /* 调整动画的持续时间和速度根据实际需要 */
}

@keyframes rotate {
  from {
    transform: translateX(-50%)translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%)translateY(-50%)  rotate(360deg);
  }
}
.paused-animation {
  animation-play-state: paused;
}


.ceiling {
    position: sticky;
    top: 0;
    background-color: white;
}
</style>