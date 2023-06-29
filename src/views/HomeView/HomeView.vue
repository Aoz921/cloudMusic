<template>
     <div class="bg-gradient-to-b from-red-100 via-blue-100 bg-gray-200 bg-opacity-20 box">
        <header class="w-[97vw] h-[10vw] relative mt-4">
            <div class="flex justify-around items-center">
                <Icon icon="pepicons-pop:menu"  class="text-[6vw]" />
                <div class="relative">
                    <input type="text" placeholder="Peaches Justin Bieber" class="w-[70vw] h-[6vw] rounded-3xl pl-8  border-amber-400 bg-gradient-to-r from-red-100 via-blue-100  bg-opacity-20">
                    <Icon icon="carbon:search" color="Seashell3" class="text-[6vw] absolute bottom-0 left-[4px]" />
                </div>
                <Icon icon="ph:microphone-bold"  class="text-[6vw]" />
            </div>
        </header>
        <!-- <headView :head="head"></headView> -->
        
        <!-- 轮播图 -->
        <!-- <section>
          <div class="swiper mySwiper mt-[4.537vw]">
            <div class="swiper-wrapper">
                <div class="swiper-slide " v-for="item in menu" :key="item.id">
                    <img :src="item.pic" alt="" class="w-[92.22vw] h-[35.741vw] m-auto rounded-2xl">
                </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </section> -->
        <bannerView :menu="menu"></bannerView>

        <!-- 菜单 -->
        <!-- <section class="w-[90%] mx-auto">
          <ul class="menu flex overflow-auto mt-6">
            <li v-for="item in menulist" :key="item.id" class=" w-[18vw] text-center flex-none">
              <img :src="item.iconUrl" alt="" class=" w-[14vw] red-image  mx-auto">
              <span class=" whitespace-nowrap text-sm">{{ item.name }}</span>
            </li>
          </ul>
          <div class="menu flex overflow-auto mt-6">
            <menulists v-for="item in menulist" :key="item.id" class=" w-[18vw] text-center flex-none" :menulist="item"></menulists>
          </div>
        </section> -->
        <menulists :menulist="menulist"></menulists>
        
        <!-- 推荐歌单 -->
        <!-- <section>
          <div>
            <div class=" ml-[4vw] mt-[3vw] h-[5vw] leading-[5vw] flex items-center">
                <span class="text-[4vw] font-bold">推荐歌单</span>
                <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold"/>
            </div>
          </div>
          <ul class="flex w-[98vw] overflow-auto lis menu mt-[3vw] ml-[2vw]">
            <li v-for="item in personalized" :key="item.id" class="w-[29vw] text-[1vw] mr-[2vw]">
                <img :src="item.picUrl" class="w-[29vw] h-[30vw] rounded-[3vw]">
                <p>{{item.name}}</p>
            </li>
          </ul>
        </section> -->
        <section>
          <div>
            <div class="w-[95%] mx-auto mt-6 mb-3 h-[5vw] leading-[5vw] flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-[4vw] font-bold">推荐歌单</span>
                <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold"/>
              </div>
              <div class="flex items-center" @click="show = !show">
                <Icon icon="ant-design:more-outlined" />
              </div>
            </div>
          </div>
          <ul class="flex w-[98vw] overflow-auto lis menu ml-[2vw]">
            <div class="w-[31vw] h-[31vw]  mr-[2vw] ">
              <div class="w-[31vw] h-[31vw] border-[1px] overflow-hidden relative rounded-[3vw]">
                <transition name="abc" v-for="(item, index) in resources" :key="item.id">
                  <div v-if="visible === index" class="absolute top-0 left-0&quot;" >
                    <img :src="item.uiElement.image.imageUrl" alt="" class="w-[31vw] h-[31vw] rounded-[3vw]" />
                    <div class="absolute top-[2vw] right-[2.5vw] font-[800] text-[#fff] flex items-center">
                      <Icon icon="ion:infinite-outline" class="text-[#fff] w-[8vw] h-[8vw]"/>
                    </div>
                  </div>
                </transition>
              </div>
              <p class="text-[2.78vw] text-[#3E4759] scroll-item line-clamp-2">
                {{ resourceData }}
              </p>
            </div>
            <recommend-view :hotTopic="hotTopic"></recommend-view>
          </ul>
          <van-popup v-model="show" round closeable position="bottom" :style="{ height: '20%' }">
            <p class="text-[#e5e7eb] text-[1vw] p-[4vw]">推荐歌单</p>
              <ul>
                <li
                  class="text-[5vw] w-[31vw] h-[9vw] flex justify-evenly items-center ml-[3vw]"
                >
                  <Icon icon="icon-park-outline:good-one"  />
                  <span>优先推选</span>
                </li>
                <li
                  class="text-[5vw] w-[31vw] h-[9vw] flex justify-evenly items-center ml-[3vw]"
                >
                  <Icon icon="basil:heart-off-outline" />
                  <span>减少推荐</span>
                </li>
                <li
                  class="text-[5vw] w-[31vw] h-[9vw] flex justify-evenly items-center ml-[3vw]"
                >
                  <Icon icon="mingcute:more-4-line"  />
                  <span>更多内容</span>
                </li>
              </ul>
          </van-popup>
        </section>
        
        


        <!-- 新歌新碟 -->
        <!-- <section class="pl-[2vw] mt-5">
          <div class="flex items-center">
              <span class="text-[4vw] font-bold">新歌新碟\数字专辑</span>
              <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold" />
          </div>
          <ul class="flex overflow-auto menu">
            <li  v-for="item in newSong" :key="item.id" class="flex-none w-[90%]">
              <div v-for="key in item.resources" class="flex mt-4">
                <div>
                  <img :src="key.uiElement.image.imageUrl" alt="" class="w-[13vw] rounded-md">
                </div>
                <div class="flex flex-col justify-center ml-4">
                  <p class="text-[3.6vw] font-bold">{{ key.uiElement.mainTitle.title }}</p>
                  <p class="text-[2vw] text-gray-500">{{ key.uiElement.subTitle.rcmdText }}</p>
                </div>
              </div>
            </li>
          </ul>
        </section> -->
        <newSong :newSong="newSong"></newSong>

        <!-- 排行榜 -->
        <!-- <section class="pl-[3.5vw] mt-8">
          <div class="flex items-center">
              <span class="text-[4vw] font-bold">排行榜</span>
              <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold" />
          </div>
          <ul class="flex mt-3 overflow-auto menu">
            <li v-for="item in topList " class="w-[95%] flex-none mr-[3.5vw] bg-white p-2 rounded-xl">
              <div class="flex items-center">
                <span class="text-[4vw] font-bold">{{ item.uiElement.mainTitle.title }}</span>
                <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold"/>
              </div>
              <div v-for="(key,index) in item.resources" class="flex mt-[2.1vw]">
                <div>
                  <img :src="key.uiElement.image.imageUrl" alt="" class="w-[10vw] h-[10vw] rounded-md">
                </div>
                <div class="flex items-center">
                  <span class="ml-4 mr-4 text-orange-200">{{ index+1 }}</span>
                  <div>
                    <p class="text-[3.4vw] font-bold">{{ key.uiElement.mainTitle.title }}</p>
                    <p class="text-[2vw]">{{ key.resourceExtInfo?.artists[0].name }}</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section> -->
        <theCharts :topList="topList"></theCharts>

        <!-- 热门话题 -->
        <section>
          <div class="w-[95%] mx-auto mt-6 mb-3 h-[5vw] leading-[5vw] flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-[4vw] font-bold">热门话题</span>
              </div>
              <div class="flex items-center">
                <Icon icon="ant-design:more-outlined" />
              </div>
            </div>
          <ul class="flex overflow-auto menu">
            <li v-for="item in hotTopic" class="flex-none w-[95%] bg-indigo-200 rounded-md p-[3vw] ml-[2.3vw]">
              <div class="flex items-center">
                <Icon icon="icon-park-solid:topic" color="white" />
                <span class="text-[4.1vw] text-white font-blod">{{ item.uiElement.labelTexts[0] }}</span>
              </div>
              <div class="flex justify-around items-center">
                <div class="text-[2.5vw] text-white">{{ item.uiElement.mainTitle.title }}</div>
                <div>
                  <img :src="item.uiElement.image.imageUrl" alt="" class="w-[12vw] h-[12vw] rounded-md">
                </div>
              </div>
            </li>
          </ul>
        </section>

        <!-- 音乐日历 -->
        <!-- <section class="mt-[8vw]">
          <div class="flex items-center ml-4">
              <span class="text-[4vw] font-bold">音乐日历</span>
              <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold" />
          </div>
          <div>
            <ul class="w-[95%] mx-auto  overflow-hidden bg-white rounded-xl">
              <li
                v-for="item in Calendar"
                :key="item.id"
                class="flex justify-between items-center w-[90%] mx-auto mt-[10vw] mb-[10vw]"
              >
                <div>
                  <div>{{ dayjs(item.onlineTime).format('MM/DD ') }}</div>
                  <div>{{ item.title }}</div>
                </div>
                <img :src="item.imgUrl" alt="" class="w-[15vw] h-[15vw] rounded-md"/>
              </li>
            </ul>
          </div>
        </section> -->
        <musicCalendar :Calendar="Calendar"></musicCalendar>

        
    </div>
</template>

<script>
 import axios from 'axios';
 import menulists from './components/menulists.vue'
 import RecommendView from './components/RecommendView.vue'
 import newSong from './components/newSong.vue'
 import theCharts from './components/theCharts.vue'
 import musicCalendar from './components/musicCalendar.vue'
 import bannerView from './components/bannerView.vue'
//  import headView from './components/headView.vue'
//  import Panel from './components/Panel.vue';
    
    export default{
        name:'HomeView',
        components:{
          menulists,
          RecommendView,
          newSong,
          theCharts,
          musicCalendar,
          bannerView,
          // headView,
          // Panel
        },
        data() {
            return{
                // drawerVisible: true,
                // visible: true,
                menu:[],
                menulist:[],
                activeMenuItem:'',
                playlists:[],
                personalized:[],
                newSong:[],
                topList:[],
                Calendar:[],
                hotTopic:[],
                // resources:[],
                visible: 0,
                resourceData: '',
                resources: [],
                show:false,
                today: new Date().getTime(),
                yesterdayTimeStamp: new Date().getTime() - 86400000,
                mingtian: new Date().getTime() - 1,
            };
        },
        mounted() {
          this.animateItems();
        },
        methods:{
          fetchCalendar() {
              axios
                .get(
                  `https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=${this.yesterdayTimeStamp}&endTime=${this.mingtian}`
                )
                .then((res) => {
                  this.Calendar = res.data.data.calendarEvents;
                  // this.totalData = this.calendar.length;
                });
            },
            toggleMenu(name){
                this.activeMenuItem=name;
                this.fetchPlaylists(name);
            },
            fetchPlaylists(cat){
            axios
            .get(
                'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
                {
                patams:{cat}
                }
            )
            .then((res)=>{
                this.playlists=res.data.playlists;
            });
            },
            animateItems() {
            setInterval(() => {
              this.visible++;
              if (this.visible === this.resources.length) {
                this.visible = 0;
              }
              this.resourceData =
                this.resources[this.visible].uiElement.mainTitle.title;
            }, 5000);
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


        },
        created(){
          this.fetchCalendar();
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page')
            .then((res)=>{
                this.menu=res.data.data.blocks[0].extInfo.banners; 
                this.newSong = res.data.data.blocks[5].creatives;
                this.topList = res.data.data.blocks[3].creatives;
                this.hotTopic = res.data.data.blocks[1].creatives.slice(1);
                this.resources = res.data.data.blocks[1].creatives[0].resources;
                console.log(this.topList);
            })
            .catch((err) => console.log(err));
            axios
            .get(
              'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
            )
            .then((res) => {
              this.menulist = res.data.data;
              // console.log(this.menulist);
            })
            .catch((err) => {
              console.log(err);
            });
            axios.get('https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized')
            .then((res)=>{
              this.personalized = res.data.result;
              // console.log(this.personalized);
            })
            .catch((err) => console.log(err));
            axios
            .get(
              'https://netease-cloud-music-api-five-roan-88.vercel.app/calendar?startTime=1687836243619&endTime=1687922643618'
                    )
            .then((res) => {
              console.log(res);
              this.Calendar = res.data.data.calendarEvents; 
            })
            .catch((err) => {
              console.log(err);
            });

        },
        
    }
</script>

<style>

    .swiper-container {
        width: 100%;
        height: 37vw;
        overflow: hidden;
      }
      
      .swiper-slide {
        text-align: center;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .swiper-slide>img{
        width: 84vw;
        height: 37vw;
        border-radius: 2vw;
      }

      .box{
        overflow: hidden;
      }
  
      /* 滚动条整体样式 */
      .menu::-webkit-scrollbar {
        height: 0px;
        width: 20px;
      }

      .red-image {
        filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
      }

      img{
        max-width: none;
      }

      

.abc-enter{
  opacity: 0;
  transform: translateY(100%) scale(.7);
}
.abc-enter-active{
  transition: all ease-in-out 1s;
}
.abc-enter-to{
  opacity: 1;
  transform: translateY(0%) scale(1);
}

.abc-leave{
  transform: translateY(0) scale(1);
}
.abc-leave-active{
  transition: all ease-in-out 1s;
}
.abc-leave-to{
  transform: translateY(-100%) scale(.7);
}

            
</style>