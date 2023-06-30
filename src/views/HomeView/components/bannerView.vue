<template>
    <section>
          <div class="swiper mySwiper mt-[4.537vw]">
            <div class="swiper-wrapper">
                <div class="swiper-slide " v-for="item in menu" :key="item.id">
                    <img :src="item.pic" alt="" class="w-[94vw] h-[35.741vw]  rounded-2xl">
                </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
    </section>
</template>
<script>
    export default{
        name:'bannerView',
        props:['menu']
    }
</script>