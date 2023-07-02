<template>
  <div class="w-[95%] mx-auto  overflow-hidden bg-white rounded-xl dark:bg-[#282830] ">
    <li v-for="item in num" :key="item.id" class="flex justify-between items-center w-[90%] mx-auto mt-[8vw] mb-[10vw]">
      <div>
        <div class="text-[3.5vw] text-gray-500">{{ dayjs(item.onlineTime).format('MM/DD ') }}</div>
        <div class="text-[3.5vw]">{{ item.title }}</div>
      </div>
      <img :src="item.imgUrl" alt="" class="w-[15vw] h-[15vw] rounded-md" />
    </li>
  </div>
</template>
<script>
export default {
  name: 'musicCalendar',
  props: ['Calendar'],
  computed: {
    num() {
      return this.Calendar.filter((item, index) => {
        return index < 2
      })
    }
  }
}
</script>