import styled from "styled-components-vue";
import store from "storejs";
import { areaList } from "@vant/area-data";
import {updateinfo,getUserAccount} from '@/request'
const Wrapper = styled.div`
  .van-cell-group{
    ::after{
      display: none;
    }
    div:last-child{border: none;}
  } 
  .van-cell__title{font-size: 3.6vw;} 
  .van-cell__value{color:#999999;font-size:3vw;font-weight: 200;} 
  .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after{border-width: 0 !important;}

  .bg-black{
    backgound-color:#191b23
  }
`

export default {
    render() {
        return (
            <div class={this.switchCheckStatus ? 'dark' : ''}>
                <div class='bg-[#e9ecec] dark:bg-[#11131b] h-[100vh]'>
                    <Wrapper>
                        <div class="dark:bg-[#1a1c24] flex  w-[100%]  items-center h-[14vw] bg-[#FFFFFF] pl-[4vw]">
                            <div class='flex w-[54vw] justify-between items-center'>
                                <Icon icon="simple-line-icons:arrow-left" class="dark:text-[#FFFFFF] mr-[4vw] text-[4vw] text-[#333333]" nativeOnClick={() => { this.$router.push('/user'); }} />
                                <div class="dark:text-[#f3f3f4]  flex items-center justify-center text-[#2a3146]  text-[4.2vw] font-[600]">我的资料</div>
                            </div>

                        </div>
                        <van-cell-group class='bg-[#f1f4f4] dark:bg-[#191b23] mt-[2vw]'>
                            <van-cell title="头像" is-link size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#EAEAEA] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' >
                                <img src={this.user.profile.avatarUrl} alt="" class='w-[11vw] h-[11vw] rounded-[50%] float-right' />
                            </van-cell>
                            <van-cell title="昵称" value={this.user.profile.nickname} is-link size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <van-cell title="性别" onClick={()=>this.genderBoolean = !this.genderBoolean} value={this.genderList[this.gender]}  is-link size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:text-[#FFFFFF] dark:bg-[#191b23] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <van-cell title="二维码" is-link size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' >
                                <Icon icon="ph:qr-code-thin" class='text-[4.8vw] float-right' />
                            </van-cell>
                        </van-cell-group>
                        <van-cell-group class='bg-[#f1f4f4] dark:bg-[#191b23] mt-[2vw]'>
                            <van-cell title="生日" is-link value={this.TimestampConversion(this.userData.profile.birthday)} size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <van-cell title="地区" is-link size="large" value={this.province[0] + this.city[0]} onClick={() => this.popupVisible = !this.popupVisible} class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' ></van-cell>
                            <van-cell title="大学" is-link value="未填写" size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <van-cell title="音乐标签" is-link value="选择标签" size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <van-cell title="简介" size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <div class="w-[92vw] h-[30vw] mx-auto relative mt-[2.78vw]">
                                <textarea
                                    class=" border-none bg-[#f1f4f4]  dark:bg-[#191b23]  w-[96vw] h-[30vw]" style="resize: none; color:#cccccc"
                                    placeholder="请输入个人介绍..."
                                ></textarea>
                                <span class="absolute bottom-[1vw] right-[2vw] text-[#c4c7c7] dark:text-[#45474e]  text-[2.66vw] z-[3]">
                                    300
                                </span>
                            </div>
                        </van-cell-group>
                        <van-cell-group class='bg-[#f1f4f4] dark:bg-[#191b23] mt-[2vw]'>
                            <van-cell title="个人主页隐私设置" is-link size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <van-cell title="主页模块顺序设置" is-link size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                            <van-cell title="账号绑定和设置" is-link size="large" class='bg-[#f1f4f4] border-b-[0.3vw] border-[#d7dada] dark:border-[#30323a] dark:bg-[#191b23] dark:text-[#FFFFFF] text-[#333333] text-[3.6vw] font-[800] flex items-center w-[96vw] ml-[4vw] p-0 h-[12.5vw] pr-[4vw]' />
                        </van-cell-group>
                    </Wrapper>
                    <van-popup v-model={this.popupVisible} position="bottom" style={{ height: '40%' }} >
                        <van-area columns-num="2" confirm-button-text="完成" area-list={areaList} value={this.city[1]} onConfirm={this.confirm} />
                    </van-popup>
                    <van-popup v-model={this.genderBoolean} position="bottom" style={{ height: '30%' }}>
                        <van-picker show-toolbar columns={this.genderList} default-index={this.userData.profile.gender} onConfirm={this.genderConfirm} onCancel={()=>this.genderBoolean = false} confirm-button-text="完成" cancel-button-text="取消"/>
                    </van-popup>
                </div>
            </div>

        )
    },
    data() {
        return {
            user: [],
            userData: [],
            popupVisible: false,
            province: [],//省
            city: [],//市
            switchCheckStatus: null,
            genderBoolean:false,//性别弹出框
            genderList:['男','女'],//性别数组
            gender:0,//性别下标
        }
    },
    methods: {
        confirm(e) {
            this.popupVisible = false
            this.province[0] = e[0].name;
            this.city[0] = e[1].name;
            this.province[1] = e[0].code;
            this.city[1] = e[1].code;

            console.log(e);
            this.updatainfomation({
                province:e[0].code,
                city:e[1].code
            })
        },
         //性别函数
         genderConfirm(e) {
            this.genderBoolean = false;
            this.gender = this.genderList.indexOf(e); // 查找对应性别 获取对应的下标
            console.log(this.gender+1);
            console.log(e)
            this.updatainfomation({
                gender: e=='男'?1:2
            })
        },
        TimestampConversion(timeStamp) {
            const date = new Date(timeStamp);
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return (`${year}-${month}-${day}`);
        },
        postalCodeSearch(key, zipCode) {
            if (areaList.hasOwnProperty(key) && areaList[key][zipCode]) {
                let src = areaList[key][zipCode];
                return src;
            }
        },
        updatainfomation(obj) {
            let localuserinfo = JSON.parse(localStorage.getItem('__m__UserData'));
            localuserinfo= localuserinfo.profile
            let oldinfo = {
                gender: localuserinfo.gender || '',
                birthday: localuserinfo.birthday || '',
                nickname: localuserinfo.nickname || '',
                province: localuserinfo.province || '',
                city: localuserinfo.city || '',
                signature: localuserinfo.signature || '',
            }
            updateinfo(Object.assign(oldinfo, obj)).then(res => {
                getUserAccount().then(res => {
                    // console.log(res.data.profile)
                    // this.$root.$options.store.state.userinfo = res.data.profile;
                    let info = store.get('__m__UserData')
                    // console.log(info)
                    // console.log(typeof info)
                    info.profile = res.data.profile
                    store.set('__m__UserData',info)
                    // localStorage.setItem('__m__UserData', JSON.stringify(res.data.profile))
                }).catch(err => console.log(err))
                console.log('更新成功')
            }).catch(err => { alert('更新失败') })
        },
    },
    async created() {
        this.switchCheckStatus = store.get('switch');
        console.log('__m__User', store.get('__m__User'));
        console.log('__m__UserData', store.get('__m__UserData'));
        this.user = store.get('__m__User');
        this.userData = store.get('__m__UserData');

        this.province[0] = this.postalCodeSearch('province_list', this.userData.profile.province);
        this.province[1] = this.userData.profile.province + ''; // 省的邮编
        this.city[0] = this.postalCodeSearch('city_list', this.userData.profile.city);
        this.city[1] = this.userData.profile.city + ''; // 市的邮编
    }
}