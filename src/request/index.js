// 所有的请求都定义在这个位置
import axios from 'axios';
import store from 'storejs'
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    const cookie = store.get("__m__cookie")??"";
    config.params = config.params || {};
    config.params.cookie = cookie;
    return config;
  });
export const fetchPlaylisthot = () =>  
    http.get(
        '/playlist/hot'
    );
export const fetchPlaylists = (cat) =>
    http.get(
        '/top/playlist',
        { params: { cat } }
    )

export const HomeData = () => http.get('/homepage/block/page')

//搜索框
export const fetchSearchDefault = () => http.get('/search/default');
export const fetchSearchResult = (params) =>
  http.get('/search', { params });
export const fetchSearchSuggest = (keywords) => http.get('/search/suggest',{params:{keywords}})
export const fetchSearchHotDetail = () => http.get('/search/hot/detail')
// 榜单
export async function fetchSeachList() {
     const res = await http.get('/toplist/detail'); // 榜单
     const playlist = await Promise.all(res.data.list.map(({id}) => http.get('./playlist/detail',{params:{id}})));
     return playlist.map(item => item.data.playlist);
} 
// 歌曲详情
export const songdetail = (params) => http.get(`/playlist/detail?id=${params}`)


export const songInfo = (params) => http.get(`/playlist/track/all?id=${params}`);


export const getQRkey = () => http.get('/login/qr/key')

export const getQrInfo = (key,qrimg = 1) => http.get('/login/qr/create',{params:{key,qrimg}})

export const checkQrStatus = (key) => http.get('/login/qr/check',{params:{key,timestamp:Date.now()}})

export const getUserAccount = () =>http.get('/user/account')

export const getUserDetail = (uid) => http.get('/user/detail',{params:{uid}})

export const musicSlider = (params) => http.get(`related/playlist?id=${params}`)

export const fetchPlaylist = (uid) => http.get('/user/playlist',{params:{uid}})

export const fetchUserComment = (uid) => http.get('/user/comment/history',{params:{uid}})

export const getTrackDetail = (id) => http.get('/song/detail',{params:{ids:id}});

export const getMP3 = (id) =>
  http.get('/song/url/v1', { params: { id, level: 'standard' } })

export const playlistTrackAll = (id) => http.get('/playlist/track/all',{params:{id}})

export const updateinfo = (info) => http.get('/user/update',{params:{...info}})