import styled from "styled-components-vue";
import store from "storejs";
import {areaList} from "@vant/area-data";
const Wrapper = styled.div`
  .van-cell-group{
    ::after{
      display: none;
    }
    >div{
      //border-bottom: 1px solid #373737;
    } 
    
    div:last-child{border: none;}
  } 
  .van-cell__title{font-size: 3.6vw;} 
  .van-cell__value{color:#999999;font-size:3vw;font-weight: 200;} 
  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{border-width: 0 !important;}
`

export default {
    render(){
        return (
            <div class='bg-[#e9ecec] dark:bg-[#151515] h-[100vh]'>
                <Wrapper>
                    <div class="dark:bg-[#2C2C2C] flex  w-[100%]  items-center h-[14vw] bg-[#FFFFFF] pl-[4vw]">
                        <Icon icon="simple-line-icons:arrow-left" class="dark:text-[#FFFFFF] mr-[4vw] text-[4vw] text-[#333333]" nativeOnClick={() => {this.$router.push('/Information');}}/>
                        <div class="dark:text-[#f3f3f4]  flex items-center justify-center text-[#2a3146]  text-[4.2vw] font-[600]">我的资料</div>
                    </div>
                    <van-cell-group class='bg-[#f1f4f4] dark:bg-[#2C2C2C] mt-[2vw]'>
                        <van-cell title="头像" is-link  size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#EAEAEA] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' >
                            <img src={this.user.profile.avatarUrl} alt="" class='w-[11vw] h-[11vw] rounded-[50%] float-right'/>
                        </van-cell>
                        <van-cell title="昵称" value={this.user.profile.nickname} is-link  size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                        <van-cell title="性别" value={this.userData.profile.gender ? '男' : '女'} is-link  size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:text-[#FFFFFF] dark:bg-[#2C2C2C] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                        <van-cell title="二维码" is-link   size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' >
                            <Icon icon="ph:qr-code-thin"  class='text-[4.8vw] float-right'/>
                        </van-cell>
                    </van-cell-group>
                    <van-cell-group class='bg-[#f1f4f4] dark:bg-[#2C2C2C] mt-[2vw]'>
                        <van-cell title="生日" is-link  value={this.TimestampConversion(this.userData.profile.birthday)} size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]'/>
                        <van-cell title="地区" is-link   size="large" value={this.city} onClick={()=>this.popupVisible = !this.popupVisible} class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' ></van-cell>
                        <van-cell title="大学" is-link  value="未填写" size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]'/>
                        <van-cell title="音乐标签" is-link  value="选择标签" size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]'/>
                        <van-cell title="简介"  size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]'/>
                        <div class="w-[92vw] h-[30vw] mx-auto relative mt-[2.78vw]">
                            <textarea
                            class=" border-none bg-[#f1f4f4]   w-[96vw] h-[30vw]"  style="resize: none;"
                            placeholder="请输入个人介绍..."
                            ></textarea>
                            <span class="absolute bottom-[1vw] right-[2vw] text-[#c4c7c7] text-[2.66vw] z-[3]">
                            300
                            </span>
                        </div>
                    </van-cell-group>
                    <van-cell-group class='bg-[#f1f4f4] dark:bg-[#2C2C2C] mt-[2vw]'>
                        <van-cell title="个人主页隐私设置" is-link   size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]'/>
                        <van-cell title="主页模块顺序设置" is-link   size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]'/>
                        <van-cell title="账号绑定和设置" is-link  size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:bg-[#2C2C2C] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]'/>
                    </van-cell-group>
                </Wrapper>
                <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }}>
                    <van-area columns-num="2" confirm-button-text="完成" area-list={areaList} onConfirm={this.confirm}/>
                </van-popup>
            </div>
        )
    },
    data(){
        return {
            user:[],
            userData:[],
            popupVisible: false,
            city:'',
        }
    },
    methods:{
        confirm(e) {
            this.popupVisible = false
            this.city = e[0].name + e[1].name
        },
        //时间
        TimestampConversion(timeStamp) {
            const date = new Date(timeStamp);
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // 注意月份从 0 开始，需要加 1
            const day = date.getDate();
            return (`${year}-${month}-${day}`);
        },
    },
    async created() {
        console.log('__m__User', store.get('__m__User'));
        console.log('__m__UserData', store.get('__m__UserData'));
        this.user = store.get('__m__User');
        this.userData = store.get('__m__UserData');
    }
}