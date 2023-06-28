<template>
    <section class="w-[90%] mx-auto">
          <ul class="menu flex overflow-auto mt-6">
            <li v-for="item in menulist" :key="item.id" class=" w-[18vw] text-center flex-none">
              <img :src="item.iconUrl" alt="" class=" w-[14vw] red-image  mx-auto">
              <span class=" whitespace-nowrap text-sm">{{ item.name }}</span>
            </li>
          </ul>
    </section>
</template>
<script>
    export default{
        name:'menulists',
        props:['menulist']
    }
</script>