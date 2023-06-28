<template>
    <section>
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
        </section>
</template>
<script>
    export default{
        name:'RecommendView',
        props:['personalized']
    }
</script>