<template>
    <section class="pl-[2vw] mt-5">
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
    </section>
</template>
<script>
    export default{
        name:'newSong',
        props:['newSong']
    }
</script>