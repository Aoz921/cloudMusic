<template>
<div class="relative transition-container">
  <div class=" absolute z-[3] w-[100%] h-[100vh] flex  flex-col justify-between">
    <!-- 头部 -->
    <div class=" flex items-center justify-center pt-[4.7vw]">
        <Icon icon="formkit:right" color="white" :rotate="1" class="mr-[4.84vw]" @click.native="$router.go(-1)"/>
        <div class="flex items-center text-[#fff] text-[12px] flex-col">
            <p class="w-[61.97vw] overflow-hidden text-center">{{ $player._currentTrack.name }}</p>
            <div class="flex items-center mt-[1.62vw]">
                <p class="text-[#aab2af] text-[13px] pr-[1.2vw]">{{ $player._currentTrack?.ar[0].name }}</p>
                <p class="text-[#e9e9e9] bg-[#575f5c] rounded-[6px] pl-[1.45vw] pr-[1.37vw] pt-[0.2vw] pb-[0.2vw]">关注</p>
            </div>
        </div>
        <Icon icon="ri:share-circle-fill" color="white" width="25" height="25" class="ml-[6.44vw]" />
    </div>
    <!-- 唱片 -->
    <div class="rotate-container h-[100vw] pt-[25vw]" v-if="!lyric1">
        <div class="absolute top-[5%] left-[49%]  z-[10] rotated w-[40vw] h-[50vw]" ref="pointer" :style="!$player._playing ? `transform:rotate(-36deg)`:`transform:rotate(-5deg)`">
          <img src="/static/bf_3.png" alt="" class="h-[40vw] absolute top-[-3.2vw] left-[-3.2vw]">
        </div>
        <div class="relative">
            <img src="/static/bf_1.png" class="m-auto w-[71.1vw]" alt="">
            <img :src="$player._currentTrack?.al?.picUrl" alt="" class="w-[45.98vw] rounded-[50%] absolute top-1/2 left-1/2 rotate-image" :class="{ 'paused-animation': !this?.$player?._playing }" @click="lyric1=!lyric1">
        </div>
    </div>
    <div
      class="w-[100vw] h-[130vw] flex items-center flex-wrap px-[6vw] justify-center overflow-hidden relative internalShadow"
      v-if="lyric1"
      @click="lyric1 = !lyric1"
    >
      <div
        class="absolute top-0 transition-all duration-1000"
        :style="{ top: -$player.lineHieght + 'vw' }"
      >
        <div
          v-for="(line, index) in $player.lyricLines"
          :key="index"
          class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center"
          :style="{
            color: index === $player.lineIndex ? '#fff' : 'hsla(0,0%,88.2%,.7)',
          }"
        >
          {{ line.txt }}
        </div>
      </div>
    </div>

    <div>
      <!-- 选项 -->
      <div class="flex items-center justify-around">
          <div @click="color = !color">
            <Icon icon="basil:heart-solid" color="red" width="25" height="25" v-if="color"/>
            <Icon icon="basil:heart-outline" color="white" width="25" height="25" v-else />
          </div>
          <Icon icon="heroicons-outline:download" color="white" width="25" height="25"/>
          <Icon icon="majesticons:airplane-line" color="white"  width="25" height="25"/>
          <Icon icon="fluent:chat-28-regular" color="white" width="25" height="25"/>
          <Icon icon="formkit:reorder" color="white" width="25" height="25"/>
      </div>
      <!-- 进度条 -->
      <div class="px-[8vw] flex pt-[11.03vw]">
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">{{ timeModification($player._progress) }}</div>
        <vue-slider v-model="$player.progress" :duration="0" :process="true" tooltip="none" :drag-on-click="true" :min="0" :max="$player._duration" :interval="0.1"  class="flex-1 mx-[2.5vw]"/>
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">{{ timeModification($player._duration) }}</div>
      </div>
      <!-- 播放 -->
      <div class="flex items-center justify-around pb-[13.33vw] pt-[5.98vw]">
          <Icon icon="mi:shuffle" color="white"  width="30" height="30" />
          <Icon icon="fluent:previous-48-filled" color="white" width="25" height="25" @click.native="PrevTrackCallback"/>
          <van-circle v-model="currentRate" :rate="5" :speed="50"  size="15.6vw" :stroke-width="39" color="#fff" layer-color="#fff"/>
          <Icon @click.native="playFn" icon="carbon:pause-filled" width="25" color="white" class="top-84% left-50% absolute " v-if="$player._playing"/>
          <Icon @click.native="playFn" icon="ph:play-fill" width="25px" color="white"  class="top-84% left-50% absolute " v-else/>
          <Icon icon="fluent:next-16-filled" color="white" width="25" height="25"  @click.native="$player._nextTrackCallback()"/>
          <Icon icon="iconamoon:playlist" class="text-[4.7vw]" color="white" width="30" height="30"/>
      </div>
    </div>
     
</div>
 <!--bg-->
 <div class="element fixed z-[1] top-0 left-0 right-0 bottom-0 " :style="`background-image: url(${$player._currentTrack?.al?.picUrl})`"></div>
  <div class="fixed z-[2] bgColor top-0 left-0 right-0 bottom-0 "></div>
   
  
</div>
</template>

<script>
import {lyricText} from '@/request/index';
import Lyric from 'lyric-parser';
export default{
    data(){
        return{
          color:false,
          currentRate: 0,
          songsLyric:'',
          lyric:{},
          // visible:false,
          currentId:"",
          lyric1:false
        }
    },
    methods:{
      playSingle(id) {
        this.$player.replacePlaylist(
            this.$player.list.map((data) => data),
            '',
            '',
            id
        );
      },
        playFn(){
            this.play = !this.play
            this.$player.playOrPause();
        },
        timeModification(time) {
          const minutes = Math.floor(time / 60);
          return `${String(minutes).padStart(2, '0')}:${String(
              Math.floor(time % 60)
          ).padStart(2, '0')}`;
        },
        PrevTrackCallback() {
          if (this.$player.list.indexOf(this.$player._currentTrack.id) == 0) {
            this.currentId = this.$player.list[this.$player.list.length - 1]
            this.playSingle(this.$player.list[this.$player.list.length - 1]);
          } else {
            this.currentId = this.$player.list[
                this.$player.list.indexOf(this.$player._currentTrack.id) - 1
              ]
            this.playSingle(
              this.$player.list[
                this.$player.list.indexOf(this.$player._currentTrack.id) - 1
              ]
            );
        }
    },
    },
    created(){
      this.currentId = this.$player._currentTrack.id
      lyricText(this.currentId ).then((res) => {
        console.log(res);
        this.lyric = new Lyric(res.data.lrc.lyric)
        console.log(this.lyric);
      })
      
    },
    watch:{
      currentId(value){
        this.currentId = value
        lyricText(value).then((res) => {
        // console.log(res);
        this.lyric = new Lyric(res.data.lrc.lyric)
        console.log(this.lyric);
      })
      }
    }
}
</script>

<style>
.rotate-container {
  position: relative;
}

.rotate-image {
  animation: rotate 10s infinite linear; /* 调整动画的持续时间和速度根据实际需要 */
}

.paused-animation {
  animation-play-state: paused;
}

@keyframes rotate {
  0% {
    transform: translateX(-50%) translatey(-50%)  rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translatey(-50%) rotate(360deg);
  }
}

/* 
.ter{
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
} */

.rotated {
  /* transition: all .5s; */
  transition-duration: .5s;
  transform-origin: left top;
}

.element {
  background-size: 100% 100%;
  filter: blur(24px);
}

.bgColor {
  background-color: rgba(0, 0, 0, 0.5);
}


.transition-container {
        animation: slide-up 0.5s ease-out;
        /* 过渡动画 */
        position: relative;
        /* 相对定位 */
        top: 0;
        /* 初始位置在视口底部之外 */
    }

    @keyframes slide-up {
        0% {
            top: 100vh;
            /* 初始位置在视口底部之外 */
        }

        100% {
            top: 0;
            /* 结束位置为视口顶部 */
        }
    }
</style>