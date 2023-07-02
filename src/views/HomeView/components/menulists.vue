<template>
  <section class="w-[90%] mx-auto">
    <ul class="menu flex overflow-auto mt-3">
      <li v-for="(item, index) in menulist" :key="item.id" class="w-[18vw] text-center flex-none">
        <div class="relative">
          <img :src="item.iconUrl" alt="" class="w-[14vw] red-image mx-auto">
          <span v-if="index === 0" class="whitespace-nowrap text-[2vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white mt-[0.5vw]">{{ getCurrentDate() }}</span>
        </div>
        <span class="whitespace-nowrap text-[3vw]">{{ item.name }}</span>
      </li>
    </ul>
  </section>
</template>
<script>
    export default{
        name:'menulists',
        props:['menulist'],
        methods: {
          getCurrentDate() {
            const date = new Date();
            return date.getDate(); // 获取今天的日期，返回一个数字
          },
        },
    }
</script>