<template>
    <div class="w-[12vw] h-[6.3vw] rounded-[15px] border-[0.5vw] border-[#e6e6e6]" 
        :class="`${value1 ? 'bg-[#e45242] border-none' : 'bg-[#fff]'}`"
        @click="toggle">

        <div class="w-[6vw] h-[6vw] rounded-[15px] bg-white translate-all duration-300 shadow-md" 
        :class= "`${value1 ? 'translate-x-[6vw]' : 'translate-x-0'}`">
        </div>
    </div>
</template>
<script>
    export default{
        // model 主要是去配置v-model指令所需要使用的 属性名 和事件名
        model:{
            prop:'value1',
            event:'input1',
        },
        props:{
            value1:{
                type:Boolean,
                required:true,
            },
        },
        methods:{
            toggle(){
                // this.$emit('updata:value', !this.value)
                // 触发自身的input1方法
                // console.log(this.value1);
                this.$emit('input1', !this.value1)
            }
        }
    };
</script>