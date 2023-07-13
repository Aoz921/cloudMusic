import{ getUserAccount,getUserDetail,fetchPlaylist,fetchUserComment  }from '@/request'
import styled from 'styled-components-vue';
import { areaList } from '@vant/area-data';
import store from 'storejs';
const Wrapper = styled.div`
    .w {width:90vw}
    @keyframes fade-in {
      0% {
        heigth: 0;
      }
      100% {
        heigth: 34vw;
      }
    }

    .backgroundWithe {
      background: linear-gradient(to bottom, #fcf4f4, #fefcfc);
    }

    .backgroundBlck {
      background: linear-gradient(to bottom, #43434a, #393940);
    }
`

export default {
    render() {
      return (
        <Wrapper>
          <div class={this.switchCheckStatus ? 'dark' : ''}>
          <div class='bg-[#f3f5f8] dark:bg-[#1b1b23] dark:text-[#f5f5f5]'>
             <nav>
                <div class='relative w-screen'>
                    <div class='w-[100%] px-[5.4vw] pt-[6.7vw] flex items-center justify-between absolute'>
                        <router-link to='/home'>
                          <Icon icon="uiw:left" class='text-[5.31vw] text-[#fff]'/>
                        </router-link>
                        <span class='w-[12.14vw] h-[5.62vw] text-[1.8vw] bg-[#fff] bg-opacity-80 rounded-[4vw] text-center leading-[5.62vw] dark:text-[#000]' >照片墙</span>
                        <Icon icon="uim:ellipsis-v" class="text-[5.31vw] text-[#fff]" />
                    </div>
                    <img src={this.myInfo.backgroundUrl} class='w-[100%]'/>
                </div>                
             </nav>
             <section>
                <div class='relative'>       
                    <div class='w mx-auto pt-[10vw] pb-[4vw]  bg-[#fefefe] dark:bg-[#303037] bg-opacity-95  mt-[-6vw] rounded-[4vw]'>
                        <img class='w-[17.15vw] h-[17.15vw] rounded-[50%] mt-[-18.5vw] mx-auto' src={this.myInfo.avatarUrl} />
                        <p class='text-[4.47vw] text-center'>{this.myInfo.nickname}</p>
                        <div class='flex justify-center text-center my-[2.5vw]'>
                          <span class='w-[13vw] text-[#9498a2] text-[2.42vw]'>{this.details.profile.follows} 关注</span>
                          <span class='w-[13vw] text-[#9498a2] text-[2.42vw]'>{this.details.profile.followeds} 粉丝</span>
                          <span class='w-[13vw] text-[#9498a2] text-[2.42vw]'>Lv.{this.details.level} </span>
                        </div>
                        <div class='flex justify-center text-center'>
                          <span class='px-[1.5vw] py-[0.8vw] rounded-[2vw] border-[0.3vw] border-[#ccc] dark:border-[#828287] text-[2.7vw] mx-[1vw]'>IP:{areaList.province_list[this.details.profile.province].slice(0,2)}</span>
                          <span class='px-[1.5vw] py-[0.8vw] rounded-[2vw] border-[0.3vw] border-[#ccc] dark:border-[#828287] text-[2.7vw] mx-[1vw]'>{areaList.province_list[this.details.profile.province].slice(0,2)} {areaList.city_list[this.details.profile.city].slice(0,2)}</span>
                          <span class='px-[1.5vw] py-[0.8vw] rounded-[2vw] border-[0.3vw] border-[#ccc] dark:border-[#828287] text-[2.7vw] mx-[1vw]'>村龄{Math.floor(this.details.createDays / 365)}年</span>
                        </div>
                        <div class='flex items-center justify-center mt-[3.5vw]'>
                          <router-link to='/information' class=' mr-[3.5vw]'>
                            <span class='px-[2.9vw] py-[1.8vw] text-[2.9vw]  border-[0.3vw] border-[#c9ccd1] dark:border-[#828287] rounded-[5vw]'>编辑资料</span>
                          </router-link>
                          <span onClick={this.toggleHeight} class='w-[7.25vw] h-[7.25vw] flex justify-center items-center border-[0.3vw] border-[#c9ccd1] dark:border-[#828287] rounded-[50%]'>
                            <Icon icon="uiw:left" rotate="3" />
                          </span>
                        </div>
                        {this.showHeight && 
                        <div  class='flex justify-evenly mt-[4vw] fade-in ease-in'>
                        <div class='w-[22.95vw] h-[33.33vw] bg-[#f7f7f8] py-[2.29vw] rounded-[4vw] flex flex-col justify-center items-center'>
                            <img class='w-[11vw] h-[11vw] rounded-[50%]' src="http://p2.music.126.net/BLjUAg89JoevV0FTPsBtnw==/18644418674350657.jpg" alt="" />
                            <p class='text-[2.9vw] mt-[2.29vw]'>yoyo21ktime</p>
                            <p class='text-[2.42vw] text-[#a8abb3]'>你可能喜欢</p>
                            <div class='text-[2.66vw] text-[#eb4d44] border-[0.4vw] border-[#ee9d9b] rounded-[4vw] px-[2.42vw] py-[1vw] flex justify-center items-center '>
                              <Icon icon="ic:round-add" />
                              <span>关注</span>
                            </div>
                        </div>
                        <div class='w-[22.95vw] h-[33.33vw] bg-[#f7f7f8] py-[2.29vw] rounded-[4vw] flex flex-col justify-center items-center'>
                            <img class='w-[11vw] h-[11vw] rounded-[50%]' src="http://p1.music.126.net/RKDx0K4qLB_GIp-oJzRMeQ==/109951165475828213.jpg" alt="" />
                            <p class='text-[2.9vw] mt-[2.29vw]'>是阿涵阿</p>
                            <p class='text-[2.42vw] text-[#a8abb3]'>你可能喜欢</p>
                            <div class='text-[2.66vw] text-[#eb4d44] border-[0.4vw] border-[#ee9d9b] rounded-[4vw] px-[2.42vw] py-[1vw] flex justify-center items-center '>
                              <Icon icon="ic:round-add" />
                              <span>关注</span>
                            </div>
                        </div>
                        <div class='w-[22.95vw] h-[33.33vw] bg-[#f7f7f8] py-[2.29vw] rounded-[4vw] flex flex-col justify-center items-center'>
                            <img class='w-[11vw] h-[11vw] rounded-[50%]' src="http://p1.music.126.net/9Im18b55wxz7ZXx0n2mOVQ==/109951165386439858.jpg" alt="" />
                            <p class='text-[2.9vw] mt-[2.29vw]'>SAKEE3300</p>
                            <p class='text-[2.42vw] text-[#a8abb3]'>你可能喜欢</p>
                            <div class='text-[2.66vw] text-[#eb4d44] border-[0.4vw] border-[#ee9d9b] rounded-[4vw] px-[2.42vw] py-[1vw] flex justify-center items-center '>
                              <Icon icon="ic:round-add" />
                              <span>关注</span>
                            </div>
                        </div>
                      </div>
                        }
                        
                    </div>
                </div>
             </section>
             <section class='w mx-auto mt-[6.3vw]'>
                <div class='flex justify-center'>
                  <div class='w-[28.26vw] text-[3.38vw] text-center'>
                    <span>主页</span>
                    <span></span>
                  </div>
                  <div class='w-[28.26vw] text-[3.38vw] text-center text-[#9095a1]'>
                    <span>动态</span>
                    <span></span>
                  </div>
                  <div class='w-[28.26vw] text-[3.38vw] text-center text-[#9095a1]'>
                    <span>播客</span>
                    <span></span>
                  </div>
                </div>
                <div class='rounded-[4vw] bg-[#fefefe] dark:bg-[#303037] bg-opacity-95 mt-[2vw] px-[3.5vw] py-[4.6vw]'>
                  <h2>音乐品味</h2>
                  <div class='flex justify-between mt-[4.23vw]'>
                      <div class='bg-[#fdf6f6] dark:bg-[#3d3d44] dark:border-[#515157] w-[27vw] h-[31.4vw] rounded-[3.5vw] border-[0.5vw] border-[#f9e8e7] px-[1.9vw] py-[1.7vw] flex flex-col justify-between'>
                        <div>
                          <p class='text-[2.6vw] text-[#9a99a2]'>我的喜欢</p>
                          <p class='text-[3.8vw] text-[#545969] font-bold dark:text-[#d9d9da]'>{ this.trackCount }首</p>
                        </div>
                        <div class="flex items-center">
                          <Icon icon="icon-park-solid:like"class=' text-[#a9abb3] text-[2.78vw]'/>
                          <span class="text-[2.78vw] text-[#a9abb3]">喜欢的音乐</span>
                        </div>
                      </div>
                    
                    <div class='bg-[#fdfaf1] dark:bg-[#3d3d44] dark:border-[#515157] w-[27vw] h-[31.4vw] rounded-[3.5vw] border-[0.5vw] border-[#faf1dd] px-[1.9vw] py-[1.7vw] flex flex-col justify-between'>
                      <div>
                        <p class='text-[2.6vw] text-[#9a99a2]'>累计听歌</p>
                        <p class='text-[3.8vw] text-[#545969] font-bold dark:text-[#d9d9da]'>{ this.details.listenSongs }首</p>
                      </div>
                      <div class="flex items-center">
                        <Icon  icon="ic:outline-bar-chart"  class=' text-[#a9abb3] text-[2.78vw]'/>
                        <span class="text-[2.78vw] text-[#a9abb3]">听歌排行</span>
                      </div>
                    </div>
                    <div class='bg-[#f6f9fc] dark:bg-[#3d3d44] dark:border-[#515157] w-[27vw] h-[31.4vw] rounded-[3.5vw] border-[0.5vw] border-[#ebf1f9] px-[1.9vw] py-[1.7vw] flex flex-col justify-between'>
                      <div>
                        <p class='text-[2.6vw] text-[#9a99a2]'>本周关键词</p>
                        <p class='text-[3.8vw] text-[#545969] font-bold dark:text-[#d9d9da]'>属于你的音乐档案</p>
                      </div>
                      <div class="flex items-center">
                        <Icon icon="solar:hourglass-bold" class='text-[#a9abb3] text-[2.78vw]'/>
                        <span class="text-[2.78vw] text-[#a9abb3]">黑胶时光机</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='rounded-[4vw] bg-[#fefefe] dark:bg-[#303037] bg-opacity-95  mt-[3.62vw] px-[3.5vw] py-[4.6vw]'>
                  <div class='flex items-center'>
                    <p>创建的歌单</p>
                    <span class='text-[2.78vw] text-[#9599a3]'>({ this.create.length}个)</span>
                  </div>
                  <ul class="mt-[2vw]">
                    {this.create.map((item, index) => (
                      <li key={index} class="w-[85vw] h-[14vw] flex mb-[2vw] ]">
                        <img src={item.coverImgUrl} class="w-[12.08vw] h-[12.08vw] rounded-[2.5vw] " />
                        <div class="flex flex-col ml-[3vw]">
                          <p class='text-[3.86vw]'>{item.name}</p>
                          <p><span class="text-[2.78vw] text-[#aaadb5]">{item.trackCount}首</span></p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class='rounded-[4vw] bg-[#fefefe] dark:bg-[#303037] bg-opacity-95  mt-[3.62vw] px-[3.5vw] py-[4.6vw]'>
                  <div class='flex items-center'>
                    <p>收藏的歌单</p>
                    <span class='text-[2.78vw] text-[#9599a3]'>({ this.songList.length})</span>
                  </div>
                  <ul class="mt-[2vw]">
                    {this.songList.map((item, index) => (
                      <li key={index} class="w-[85vw] h-[14vw] flex mb-[2vw] ]">
                        <img src={item.coverImgUrl} class="w-[12vw] h-[12vw] rounded-[3vw] " />
                        <div class="flex flex-col ml-[3vw] justify-center">
                          <p class="w-[60vw] truncate text-[3.5vw]">{item.name}</p>
                          <p  class="text-[2.78vw] text-[#b3b3b4]  w-[60vw] truncate">{item.trackCount}首,By  {item.creator.nickname},播放{this.dataTruncation(item.playCount)}次</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div class='rounded-[4vw] bg-[#fefefe] dark:bg-[#303037] bg-opacity-95  mt-[3.62vw] py-[4.6vw]'>
                  <div class='flex items-center justify-between px-[3.5vw]'>
                    <p>基本信息</p>
                    <div class='text-[2.9vw] text-[#787878] border-[0.3vw] border-[#eaeaea] dark:border-[#3f3e44] px-[2.17vw] py-[1.33vw] rounded-[5vw] flex items-center'>
                      <Icon icon="ant-design:user-outlined" />
                      村民证
                    </div>
                  </div>
                  <div class='px-[3.5vw] '>
                      <p class='text-[3.38vw] text-[#b4b4b4]'>
                        <span class='text-[#999999]'>村龄:</span>{Math.floor(this.details.createDays / 365)}年{this.getRegistrationDate(this.details.createDays)}
                      </p>
                      <p class='text-[3.38vw] text-[#b4b4b4]'>
                        <span class='text-[#999999]'>性别:</span>{this.isGender(this.sex)}
                      </p>
                      <p class='text-[3.38vw] text-[#b4b4b4]'>
                        <span class='text-[#999999]'>地区:</span>{areaList.province_list[this.details.profile.province].slice(0,2)} {areaList.city_list[this.details.profile.city].slice(0,2)}
                      </p>
                  </div>
                  <div class='flex items-center justify-center text-[2.78vw] text-[#adadad] pt-[3.8vw] border-t-[0.3vw] border-[#e8e8e8] mt-[4vw] dark:border-[#3f3e44]'>
                        <span class="mr-[1vw]">查看全部</span>
                        <Icon icon="ep:arrow-up" rotate={1} class="text-[4vw]"/>
                      </div>
                </div>
             </section>
          </div>
          </div>
          
        </Wrapper>
      );
    },
    data() {
      return {
          myInfo:[],
          details:[],
          trackCount:[],
          create:[],
          songList:[],
          areaList,
          showHeight:false,
          switchCheckStatus:null,
      };
  },
    async created() {
        this.switchCheckStatus = store.get('switch')
        const Info = await getUserAccount()
        const detail = await getUserDetail(Info.data.profile.userId)
        this.myInfo = Info.data.profile;
        this.details = detail.data
        console.log(this.details);
        const res4 = await fetchPlaylist(detail.data.profile.userId);
        // console.log(res4);
        this.songList = res4.data.playlist  //截取的收藏的歌单
          .filter((item) => item.subscribed)
          .slice(0, 10);
        this.create = res4.data.playlist   //创建的所有歌单 截取两个
          .filter((item) => !item.subscribed)
          .slice(1, 3);
        this.trackCount = res4.data.playlist[0].trackCount;  //我的喜欢
        //性别
        this.sex = detail.data.profile.gender
        console.log('收藏的歌单', this.songList);
        console.log('创建的歌单', this.create);
        console.log('我的喜欢',this.trackCount)
        console.log(areaList);

        // const provinces = areaData.provinces;
        // console.log(provinces);
      },
    
    methods: {
      confirm(e) {
        this.popupVisible = false;
        console.log(e);
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
      getRegistrationDate(totalDays) {
        const currentDate = new Date();
        const registrationDate = new Date(currentDate.getTime() - totalDays * 24 * 60 * 60 * 1000); // 计算注册日期
    
        const year = registrationDate.getFullYear(); // 获取年份
        const month = registrationDate.getMonth() + 1; // 获取月份
    
        return `(${year}年${month}月注册)`;
      },
      isGender(sex){
        return sex === 1 ? '男' : '女'
      },
      toggleHeight() {
        this.showHeight = !this.showHeight; // 切换高度显示与隐藏
      },
    },
  };
  