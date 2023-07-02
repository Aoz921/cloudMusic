<template>
    <section class=" mt-8">
      <div class="w-[95%] mx-auto mt-[3vw] h-[5vw] leading-[5vw] flex justify-between items-center">
              <div class="flex items-center">
                <span class="text-[4vw] font-bold">排行榜</span>
                <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold"/>
              </div>
              <div class="flex items-center">
                <Icon icon="ant-design:more-outlined" />
              </div>
            </div>
          <ul class="flex mt-3 overflow-auto menu">
            <li v-for="item in topList " class="w-[95%] flex-none mr-[3.5vw] bg-white  dark:bg-[#282830] p-2 rounded-xl ml-[2vw]">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <span class="text-[4vw] font-bold">{{ item.uiElement.mainTitle.title }}</span>
                  <Icon icon="bi:chevron-right" class=" text-[4vw] font-bold"/>
                </div>
                <div>
                  <span class="text-[2vw] text-gray-500 dark:text-[#a4a4a7]">{{  item.uiElement.mainTitle.titleDesc  }}</span>
                </div>
                
              </div>
              <div v-for="(key,index) in item.resources" class="flex justify-between mt-[2.1vw]">
                <div class="w-[10vw] h-[10vw]">
                  <img :src="key.uiElement.image.imageUrl" alt="" class="w-[10vw] h-[10vw] rounded-md">
                </div>
                <div class="flex-auto flex items-center justify-between">
                  <div class="flex items-center ">
                    <span class="ml-4 mr-4 text-orange-200" :style="{color: getTextColor(index+1)}" >{{ index+1 }}</span>
                    <div>
                      <p class="w-[48vw] overflow-hidden text-ellipsis whitespace-nowrap text-[3.4vw] font-bold">{{ key.uiElement.mainTitle.title }}</p>
                      <p class="text-[1.5vw] text-gray-500 dark:text-[#a4a4a7]">{{ key.resourceExtInfo?.artists[0].name }}</p>
                    </div>
                  </div>
                  
                  <p :style="{ color: getTextColor(key.uiElement.labelText.text) }" class="text-[2vw]">{{ key.uiElement.labelText.text }}</p>
                </div>
              </div>
            </li>
          </ul>
    </section>
</template>
<script>
    export default{
        name:'theCharts',
        props:['topList'],
        computed: {
          getTextColor() {
            return function(item) {
              if (item=='1') {
                return 'gold'; // 设置金色
              } else if (item=='2') {
                return 'silver'; // 设置银色
              } else if (item=='3') {
                return 'bronze'; // 设置铜色
              } else if (item=='新晋') {
                return 'green'; // 设置绿色
              } else if (item=='热门' || item=='飙升' || item=='霸榜') {
                return 'red'; // 设置红色
              }
              return ''; // 默认值为空
            };
          },
        },
    }
</script>