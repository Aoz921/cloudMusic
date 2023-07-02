<template>
    <div :class="{dark:switchCheckStatus}">
      <div class=" bg-[#f7f9fc]  dark:bg-[#1b1b23] dark:text-[#fff]"
      >
      
        <header class="pl-[4vw] pr-[4vw]  relative mx-auto pt-4" :class="switchCheckStatus?'custom-gradient1':'custom-gradient'">
            <div class="flex justify-around items-center">
                <div @click="visi = !visi">
                  <Icon icon="pepicons-pop:menu"  class="text-[6vw]"/>
                </div>
                <div class="relative">
                    <input type="text" placeholder="Peaches Justin Bieber" class="w-[70vw] h-[6vw] rounded-3xl pl-8 border-[0.5vw] border-[#c6c6f5] dark:border-[#33233f]" :class="switchCheckStatus?'inp-gradient1':'inp-gradient'">
                    <Icon icon="carbon:search" color="Seashell3" class="text-[6vw] absolute bottom-0 left-[4px]" />
                </div>
                <Icon icon="ph:microphone-bold"  class="text-[6vw]" />
            </div>
            <section class="mt-[4vw]">
                  <div class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide " v-for="item in menu" :key="item.id">
                            <img :src="item.pic" alt="" class="w-[94vw] h-[35.741vw]  rounded-2xl">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
            </section>
        </header>
        
        
        <!-- 轮播图 -->
        
        <!-- <bannerView :menu="menu"></bannerView> -->

        <!-- 菜单 -->
       
        <menulists :menulist="menulist"></menulists>
        
        <!-- 推荐歌单 -->
        
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
              <div class="w-[31vw] h-[31vw]  overflow-hidden relative rounded-[3vw]">
                <div class="absolute top-[4%] right-[8%] font-[800] text-[#fff] flex items-center z-30">
                  <Icon icon="ion:infinite-outline" class="text-[#fff] w-[6vw] h-[6vw]"/>
                </div>
                <transition name="abc" v-for="(item, index) in resources" :key="item.id">
                  <div v-if="visible === index" class="absolute top-0 left-0&quot;" >
                    <img :src="item.uiElement.image.imageUrl" alt="" class="w-[31vw] h-[31vw] rounded-[3vw]" />
                  </div>
                </transition>
              </div>
              <p class="text-[2.78vw] text-[#3E4759] scroll-item line-clamp-2 dark:text-[#c0c0c3]">
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
       
        <newSong :newSong="newSong"></newSong>

        <!-- 排行榜 -->
        
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
            <li v-for="item in hotTopic" class="flex-none w-[95%] bg-indigo-200 rounded-md p-[3vw] ml-[2.3vw] dark:bg-[#282830] ">
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
       
        <musicCalendar :Calendar="Calendar" ></musicCalendar>

        <Drawer :visible.sync="visi" direction="ltr" class=" dark:bg-[#151515] dark:text-[#fff]">
          <template #header>
                <div class="flex justify-between items-center w-[90%] mx-auto mt-[4vw]">
                    <div class="flex items-center">
                        <img src="http://www.hhhtrc.com/uploads/allimg/201122/2226391X2-6.jpg" alt="" class="rounded-full w-[7vw] h-[7vw] mr-[3vw]">
                        <p>波风面麻</p>
                        <Icon icon="ep:arrow-left-bold"  width="15" :horizontalFlip="true" :verticalFlip="true" class="dark:text-[#fff]"/>
                    </div>
                    <Icon icon="tabler:scan"  width="20" class="dark:text-[#fff]" />
                </div>
            </template>
            <div class="mt-[4vw]"> 
                <!-- 黑胶vip -->
                <div class="w-[76vw] h-[32vw]  rounded-xl p-[4vw] box-border mx-auto bg-gradient-to-tr from-[#2d2b2b] via-[#493f3e] to-[#4b4040] ">
                    <div class="border-b border-[#827773] pb-[3.8vw] box-border">
                        <div class="flex justify-between">
                            <div class="flex items-center">
                                <p class="text-[#fde4df] font-bold text-[4vw]">黑胶VIP·贰</p>
                                <div class="w-[12vw] h-[2vw] bg-[#343230] rounded-xl mx-[3vw]">
                                    <div class="bg-[#ead2cb] h-[100%] rounded-xl" style="width: 60%;"></div>
                                </div>
                                <span class="text-[#827773]">v3</span>
                            </div>
                            <p class="text-[2.66vw] text-[#968884] border border-[#968884] rounded-xl w-[16vw] h-[6vw] text-center leading-[6vw] float-right">会员中心</p>
                        </div>
                        <div class="flex mt-[1.5vw]">
                            <p class="text-[2.8vw] text-[#968884]">礼品卡 | 毕业快乐！</p>
                        </div>
                    </div>
                    <div class="text-[#968884] mt-[4vw] text-[2vw]">您的黑胶VIP即将到期，点击立即续费</div>
                </div>
                <!-- 我的消息 -->
                <div class="w-[76vw] mx-auto rounded-xl p-[4vw] pr-[0] box-border  mt-[3.9vw] dark:bg-[#202020]">
                    <ul>
                        <li class="flex justify-between items-center pb-[4vw] box-border border-b border-[#f3f3f3] mt-[4vw] dark:border-[#363636]">
                            <div class="flex justify-between items-center">
                                <Icon icon="heroicons:envelope" width="28" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">我的消息</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="bg-[red] text-[white] rounded-xl text-center w-[10vw] h-[5vw] leading-[5vw]">99+</span>
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true" class="mr-[4vw]"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border border-b border-[#f3f3f3] mt-[4vw] dark:border-[#363636]">
                            <div class="flex justify-between items-center">
                                <Icon icon="cib:shell"  width="20" :horizontalFlip="true" :verticalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">云贝中心</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-[#999] text-[4vw]">签到</span>
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true" class="mr-[4vw]"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] mt-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="icons8:idea"  width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">创作者中心</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true" class="mr-[4vw]"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 音乐服务 -->
                <div class="w-[76vw] mx-auto rounded-xl py-[4vw] box-border bg-[white] mt-[3.9vw] dark:bg-[#202020]">
                    <p class="px-[4vw] pb-[4vw] border-b border-[#f3f3f3] text-[#999] dark:border-[#363636]">音乐服务</p>
                    <ul class="px-[4vw]">
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw] ">
                            <div class="flex justify-between items-center">
                                <Icon icon="ph:star-of-david"  width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">测趣</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-[#999]">点击查看今日运势</span>
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ion:ticket-outline" width="20" :horizontalFlip="true" :verticalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">云村有票</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ion:cube-outline"  width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">多多西西口袋</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="icon-park-outline:shopping-bag"  width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">商城</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="streamline:health-medical-heart-rate-health-beauty-information-data-beat-pulse-monitor-heart-rate-info"  width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">Beat专区</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-[#999]">顶尖制作邀你创作</span>
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="clarity:bell-line"  width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">口袋彩铃</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="mingcute:game-1-line" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">游戏专区</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-[#999]">音乐浇灌治愈花园</span>
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 其他 -->
                <div class="w-[76vw] mx-auto rounded-xl py-[4vw] box-border bg-[white] mt-[3.9vw] dark:bg-[#202020]">
                    <p class="px-[4vw] pb-[4vw] border-b border-[#f3f3f3] text-[#999] dark:border-[#363636]">其他</p>
                    <ul class="px-[4vw]">
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw] ">
                            <div class="flex justify-between items-center">
                                <Icon icon="ri:settings-line" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">设置</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="gg:moon" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">深色模式</span>
                            </div>
                            <div class="flex justify-between items-center">
                              <v-Switch v-model="switchCheckStatus" ></v-Switch>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="clarity:alarm-clock-line" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">定时关闭</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="iconoir:t-shirt" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">个性装扮</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ph:headset-duotone" width="20" :horizontalFlip="true" class=" dark:text-[#fff]" />
                                <span class="text-[4vw] ml-[4vw]">边听边存</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-[#999]">未开启</span>
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="carbon:radio" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">在线听歌免流量</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ant-design:stop-outlined" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">音乐黑名单</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ant-design:safety-outlined"  width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">青少年模式</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <span class="text-[#999]">未开启</span>
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="mdi:alarm-clock" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">音乐闹钟</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 我的订单 -->
                <div class="w-[76vw] mx-auto rounded-xl py-[4vw] box-border bg-[white] mt-[3.9vw] dark:bg-[#202020]">
                    <ul class="px-[4vw]">
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw] ">
                            <div class="flex justify-between items-center">
                                <Icon icon="fluent-mdl2:activate-orders" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">我的订单</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ion:ticket-outline" width="20" :horizontalFlip="true" :verticalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">优惠券</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ri:customer-service-2-line" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">我的客服</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="ri:share-circle-line" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">分享网易云音乐</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="carbon:license-third-party" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">个人信息收集与使用清单</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="carbon:radio" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">个人信息第三方共享清单</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="material-symbols:health-and-safety-outline" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">个人信息与隐私保护</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                        <li class="flex justify-between items-center pb-[4vw] box-border my-[4vw]">
                            <div class="flex justify-between items-center">
                                <Icon icon="mdi:about-circle-outline" width="20" :horizontalFlip="true" class=" dark:text-[#fff]"/>
                                <span class="text-[4vw] ml-[4vw]">关于</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <Icon icon="ep:arrow-left" color="#ccc" width="20" :horizontalFlip="true"/>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 退出登录 -->
                <div class="w-[76vw] mx-auto rounded-xl py-[4vw] box-border bg-[white] mt-[3.9vw] text-center text-[red] text-[4vw] dark:bg-[#202020]">退出登录/关闭</div>
            </div>
        </Drawer>
    </div>
    </div>
</template>

<script>
 import axios from 'axios';
 import menulists from './components/menulists.vue'
 import RecommendView from './components/RecommendView.vue'
 import newSong from './components/newSong.vue'
 import theCharts from './components/theCharts.vue'
 import musicCalendar from './components/musicCalendar.vue'
    
    export default{
        name:'HomeView',
        components:{
          menulists,
          RecommendView,
          newSong,
          theCharts,
          musicCalendar,
      },
        data() {
            return{
                menu:[],
                menulist:[],
                activeMenuItem:'',
                playlists:[],
                personalized:[],
                newSong:[],
                topList:[],
                Calendar:[],
                hotTopic:[],
                visible: 0,
                resourceData:'',
                resources: [],
                show:false,
                visi:false,
                switchCheckStatus:false,
            };
        },
        mounted() {
          this.animateItems();
        },
        methods:{
          fetchCalendar() {
            let nowDate = new Date()
            // let start = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()} 00:00:00`)
            // let end = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()} 23:59:59`)
            let start = nowDate.getTime();
            nowDate.setDate(nowDate.getDate()+1)
            let end = nowDate.getTime()
              axios
                .get(
                  `https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=${start}&endTime=${end}`
                )
                .then((res) => {
                  console.log(res.data.data.calendarEvents)
                  this.Calendar = res.data.data.calendarEvents;
                  // let luckday =  Calendar.filter((item,index)=>{
                  //   return index<2
                  // })
                  // this.Calendar = luckday
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
                this.resourceData =this.resources[0].uiElement.mainTitle.title;
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
        width: 94vw;
        height: 40vw;
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


.custom-gradient {
  background:  linear-gradient(to bottom, #e6e4f9 ,#eae5fa,#f4e7f3,#f7f9fc);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-blend-mode: screen;
}

.custom-gradient1 {
  background-image: linear-gradient(to right, #1c1933,#27192d);
}

.inp-gradient {
  background:  linear-gradient(to right, #e6e4f9 ,#eae5fa,#f4e7f3,#f7f9fc);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-blend-mode: screen;
}

.inp-gradient1 {
  background-image: linear-gradient(to right, #1c1933,#27192d);

}

</style>