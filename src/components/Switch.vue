<template>
    <div class="w-[60px] h-[30px] rounded-[15px]" 
        :class="`${value1 ? 'bg-red-400' : 'bg-black'}`"
        @click="toggle">

        <div class="w-[30px] h-[30px] rounded-[15px] bg-white translate-all" 
        :class= "`${value1 ? 'translate-x-[30px]' : 'translate-x-0'}`">
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