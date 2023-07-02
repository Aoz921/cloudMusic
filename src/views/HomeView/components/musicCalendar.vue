<template>
    <section class="mt-6">
      <div class="w-[95%] mx-auto mt-[3vw] h-[5vw] leading-[5vw] flex justify-between items-center mb-3">
              <div class="flex items-center">
                <span class="text-[4vw] font-bold">音乐日历</span>
                <div class="flex text-[black] items-center bg-gray-200 rounded-xl h-[4vw] leading-[4vw] ml-[2vw] dark:bg-[#24242b] dark:text-[#e9e9ea]">
                  <span class="text-[2vw] mt-[0.5vw]">今日{{Calendar.length}}条</span>
                  <Icon icon="bi:chevron-right" class=" text-[2vw] font-bold"/>
                </div>
                
              </div>
              <div class="flex items-center">
                <Icon icon="ant-design:more-outlined" />
              </div>
            </div>
          <div>
            <ul class="w-[95%] mx-auto  overflow-hidden bg-white rounded-xl dark:bg-[#282830] ">
              <li
                v-for="item in num"
                :key="item.id"
                class="flex justify-between items-center w-[90%] mx-auto mt-[8vw] mb-[10vw]"
              >
                <div>
                  <div class="text-[3.5vw] text-gray-500">{{ dayjs(item.onlineTime).format('MM/DD ') }}</div>
                  <div class="text-[3.5vw]">{{ item.title }}</div>
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
        props:['Calendar'],
        computed:{
          num(){
            return this.Calendar.filter((item,index)=>{
              return index<2
            })
          }
        }
    }
</script>