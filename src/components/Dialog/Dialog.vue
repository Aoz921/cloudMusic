<template>
    <div
    v-show="visible"
      class="w-[320px] fixed top-[50%] left-[50%] text-[4.35vw] rounded-[12px] bg-[#cbcbcb] translate-x-[-50%] translate-y-[-40%] z-[9999]"
    >
      <div class="pt-[26px] font-medium leading-[24px] text-center text-[4.35vw]">
        {{ title }}
      </div>
      <div>
        <div
          class="pt-[8px] pb-[26px] px-[24px] box-border  text-[3.2vw] text-center"
        >
          {{ message }}
        </div>
      </div>
      <div
        class="flex items-center text-center h-[48px] border-t border-[#9c9c9c] cursor-pointer overflow-hidden"
      >
        <div @click="cancel" class="flex-1 border-r border-[#9c9c9c] box-border leading-[48px] text-[#1272d9]">
          <span>取消</span>
        </div>
        <div @click="confirm" class="flex-1 leading-[48px] text-[#1272d9]">
          <span>确认</span>
        </div>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: 'Dialog',
    data(){
        return{
            visible:false
        }
    },
    methods:{
        hide(){
            this.visible=false
        },
        cancel(){
            this.hide()
            this.reject()
            this.$router.push('/Login');
        },
        confirm(){
            this.hide()
            this.resolve()
        }
    }
    // props: {
    //   title: {
    //     type: String,
    //   },
    //   message: {
    //     type: String,
    //     required: true,
    //   },
    // },
  };
  </script>