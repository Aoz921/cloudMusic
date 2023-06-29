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
            <li v-for="item in topList " class="w-[95%] flex-none mr-[3.5vw] bg-white p-2 rounded-xl ml-[2vw]">
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
    </section>
</template>
<script>
    export default{
        name:'theCharts',
        props:['topList']
    }
</script>