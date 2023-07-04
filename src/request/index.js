// 所有的请求都定义在这个位置
import axios from 'axios';
const http = axios.create({
    baseURL:'https://netease-cloud-music-api-five-roan-88.vercel.app'
})
export const fetchPlaylisthot = () =>  
    http.get(
        '/playlist/hot'
    );
export const fetchPlaylists = (cat) =>
    http.get(
        '/top/playlist',
        { params: { cat } }
    )
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