<template>
    
    <div :class="{ dark: switchCheckStatus }">
        
        <div class="px-[4vw] dark:bg-[#151515] dark:text-[#fff]">
            <header class="pt-[6.2vw]">    
                <div class=" flex justify-between items-center">
                    <Icon icon="uiw:left" class="text-[5.19vw]"/>
                    <span class="text-[4.11vw]">MV 排行榜</span>
                    <span class="w-[4.11vw]"></span>
                </div>
               
            </header>
            <van-tabs @click="tab" background="transparent"  line-width="3.5vw" animated swipeable  @change="tab">
                    <van-tab v-for="item in title" :key="item.id" :title="item">
                        <section class="mt-[5.8vw]">
                <div class="flex items-center">
                    <span class="text-[3.14vw]">最近更新:</span>
                    <span class="text-[3.14vw] w-[11vw] text-center">今天</span>
                    <Icon class="text-[4.95vw] text-[#e9e9e9] " icon="quill:warning-alt" :rotate="2" />
                </div>
                <div v-for="(item,index) in MVmenu" :key="item.id" class="mt-[4.35vw]" @click="MV(item.id)">
                    <div class="relative">
                        <img class="rounded-[3vw]" :src="item.cover" alt="">
                        <div class="absolute top-[1.1vw] right-[1.7vw] text-[2.3vw] text-[#fbfbfb] flex justify-center items-center">
                            <Icon icon="ph:play-bold" class="mr-[1vw]"/>
                            <span>{{ dataTruncation(item.playCount) }}</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-[13vw] h-[13vw] text-[4vw] text-[#cd443e] leading-[13vw] font-bold flex-none">{{ SerialNumber(index + 1) }}</div>
                        <div>
                            <p class="text-[3.74vw] w-[74vw] truncate">{{ item.name }}</p>
                            <p class="text-[2.54vw] text-[#9d9d9d]">{{ item.artistName }}</p>
                        </div>
                    </div>
                </div>
            </section></van-tab>
            
        </van-tabs>
        </div>
    
    </div>
    
</template>
<script>
import {mvlist} from '../../request'
import store from 'storejs'
export default{
    data(){
        return{
            title:['内地','港台','欧美','韩国','日本'],
            initial:'内地',
            MVmenu:[],
            switchCheckStatus: null,
        }
    },
    methods:{
        MV(id){
            this.$router.push({
                name:'video',
                params:{id}
            })
        },
        tab(name,title){
            this.initial=title
            console.log(this.initial);
        }, 
        SerialNumber(num){
            if(num < 10){
                num = '0' + num
            }
            return num
        },
        dataTruncation(playVolume) {
            if (playVolume > 100000000) {
                return `${Math.floor(playVolume / 100000000)}亿`;
            } else if (playVolume > 100000) {
                return `${Math.floor(playVolume / 10000)}万`;
            } else {
                return playVolume;
            }
        },
    },
    async created() {
        const MVdata = await mvlist(this.initial)
        console.log(MVdata);
        this.MVmenu = MVdata.data.data
        console.log(this.MVmenu);
        this.switchCheckStatus = store.get('switch')
    },
    watch:{
        initial(value){
            mvlist(value).then((res) => {
                console.log(res);
                this.MVmenu = res.data.data
            })
        }
    }
}
</script>
<style>
   
</style>