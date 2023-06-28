<template>
    <section class="mt-[8vw]">
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
    </section>
</template>
<script>
    export default{
        name:'musicCalendar',
        props:['Calendar']
    }
</script>