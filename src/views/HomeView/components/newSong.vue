<template>
          <div class="flex overflow-auto menu">
            <li  v-for="item in newSong" :key="item.id" class="flex-none w-[90%] ml-[2vw]">
              <div v-for="key in item.resources" class="flex mt-4">
                <div>
                  <img :src="key.uiElement.image.imageUrl" alt="" class="w-[13vw] rounded-md">
                </div>
                <div class="flex flex-col justify-center ml-4">
                  <p class="text-[3.6vw] font-bold">{{ key.uiElement.mainTitle.title }}</p>
                  <p class="text-[2vw] text-gray-500 dark:text-[#a4a4a7]">{{ key.uiElement.subTitle.rcmdText }} - {{ key.resourceExtInfo.artists[0].name }}</p>
                </div>
                
              </div>
            </li>
          </div>
           
          
         
</template>
<script>
    export default{
        name:'newSong',
        props:['newSong'],
        
    }
</script>