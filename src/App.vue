<template>
  <div class="w-screen h-screen "  :class="{dark:switchCheckStatus}">
    <!-- 声明式导航 -->
    <!-- <router-link :to="{ path: '/home' }">go to index</router-link> -->
    <!-- <router-link to="/IndexView">go to index</router-link> -->
    <router-view />
    <!-- 播放器 -->
    <Player  v-if="showPlayer" class="fixed bottom-0 w-[100%]" />
    <!-- 菜单 -->
  </div>
</template>
<script>
import store from 'storejs';
export default {
  async created() {
    // setTimeout(() => {
    //   // 编程式导航
    //   this.$router.push('/IndexView');
    // }, 10000);
    this.switchCheckStatus = store.get('switch')
  },
  computed:{
        showPlayer() {
      // 在这里根据你的逻辑判断是否在当前页面显示播放器组件
        //   return this.$route.path !== '/Playsong';
      if(this.$route.path === '/Playsong'){
        return false;
      }
      return true;
    },
    }
  
        
    
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;


</style>
