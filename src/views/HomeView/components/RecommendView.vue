<template>
  <div class="flex">
    <li v-for="item in hotTopic" :key="item.id" class="w-[31vw] text-[1vw] mr-[2vw] rounded-[3vw] ">
          <div class="relative">
            <img :src="item.uiElement.image.imageUrl" class="w-[31vw] h-[31vw] rounded-[3vw]" @click="songdetail(item.resources[0].resourceId)">
            <Icon icon="ion:play" width="10"
              class="absolute bottom-[2vw] right-[2.5vw] text-[#fff] w-[5vw] h-[5vw]" />
            <div class="absolute top-[2vw] right-[2.5vw] font-[800] text-[#fff] flex items-center">
              <Icon icon="ion:play" width="10" class="text-[#fff] w-[3vw] h-[3vw]" />
              <span class="font-[800] text-[2.5vw]">{{
                dataTruncation(item.resources[0].resourceExtInfo.playCount)
              }}</span>
            </div>
          </div>
          <p class="line-clamp-2 text-[2.78vw] text-[#3E4759] scroll-item dark:text-[#c0c0c3]">{{item.uiElement.mainTitle.title}}</p>
    </li>
  </div>
       
          
          
         
        
</template>
<script>
    export default{
        name:'RecommendView',
        props:['hotTopic'],
        data(){
          return{
            show:false
          }
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
          songdetail(id){
            this.$router.push({path:"/songdetail",query:{id}})
            // this.$router.push('/songdetail')
          }
        }
    }
</script>