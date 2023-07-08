<template>
    <div class=" h-screen">
        <div class="w">
            <div class="flex justify-between pt-[6vw]">
                <Icon @click.native="$router.push('/home')" icon="ep:arrow-up" width="26" height="26" :rotate="3"  />
                <h1 class="text-[#6b6b6b]">游客登录</h1>
            </div>
            <div class="flex justify-center items-center  h-[30vw]">
                <img src="static/logo.fill.svg" alt="Image" class="my-auto w-[38vw] h-[7.4vw]">
            </div>
            <div v-if="code === 802">
                <img src="/static/ok.png" alt="" class="h-[41vw] mx-auto">
                <h1 class="h-[17vw] leading-[17vw] text-center text-[4vw] text-[#04090C]">扫描成功</h1>
                <p class="text-[#0F1619] text-[3.4vw] text-center">请在手机上确认登录</p>
            </div>
            <div v-else  class="flex justify-center items-center flex-col h-full">
                <div class=" relative">
                    <img :src="qrcode" alt="Image" class="my-auto w-[40vw] h-[40vw]">
                    <div v-if="code === 800"  class="w-[40vw] h-[40vw] bg-[#fff] bg-opacity-80 absolute top-0 flex justify-center items-center">
                        <div class="bg-[#f7372a] rounded-[7vw] px-[4vw] py-[2.39vw] text-[#fff] text-[3vw] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]" @click="fn">
                            点击刷新
                        </div>
                    </div>
                </div>
                <p class="mt-[10vw] text-[4vw]">使用&nbsp;&nbsp;<a href="#" class="text-[#1f6fbf]">网易云音乐APP&nbsp;&nbsp;</a>扫码登录</p>
            </div>
        </div>
        <div class=" fixed  bottom-0 ">
            <img class="w-[100%]"  src="static/bg-login.png" alt="">
        </div>
    </div>
</template>
<script>
import {getQRkey,getQrInfo,checkQrStatus, getUserAccount, getUserDetail} from '@/request'
import store from 'storejs'
export default{
    name:'Login',
    data(){
        return{
            qrcode:'',
            code:0
        }
    },
    methods:{
    async fn(){
      const res = await getQRkey().catch(err=>{console.log(err);})
      const qrinfo = await getQrInfo(res.data.data.unikey).catch(err=>{console.log(err);})
      this.qrcode = qrinfo.data.data.qrimg;
      this.pollingCheck(res.data.data.unikey);
    },
    pollingCheck(key,interval = 1000){
      const timer = setInterval(async ()=>{

        const res = await checkQrStatus(key);
        if(res.data.code === 803){

            clearInterval(timer)
          store.set('__m__cookie',res.data.cookie);//存cookie

          const user = await getUserAccount();
          console.log('用户详情',user.data);

          store.set('__m__User',user.data);//存用户信息
          const userData = await getUserDetail(user.data.account.id);


          store.set('__m__UserData',userData.data);//存账号信息
          console.log('账号信息',userData.data)
          this.$router.push('/home');

        }
        else if(res.data.code === 802){this.code = 802;}
        else if(res.data.code === 800){
          this.code = 800;clearInterval(timer);

        }
        else {this.code = 801}
        console.log(res.data.code)
      },interval)

      // this.$on('hook',函数)
      //自己监听自己本页面是否结束
      this.$on('hook:beforeDestroy',()=>{clearInterval(timer)});
    },
  },
    async created(){
         const res = await getQRkey().catch(err => {
            console.log(err);
        })
        const qrInfo = await getQrInfo(res.data.data.unikey).catch((err)=>
            console.log(err)
        )
        this.qrcode = qrInfo.data.data.qrimg
        this.pollingCheck(res.data.data.unikey)
        console.log(res);
    },
}
</script>
<style>
    body {
        background-color:#fefefe;
    }

    .w {
        width: 88vw;
        margin:auto;
    }


</style>