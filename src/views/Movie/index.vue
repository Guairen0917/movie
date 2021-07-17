<template>
  <div id="main">
    <Header title="宅男趴电影" />
    	<div id="content">
        <div class="movie_menu">
          <router-link tag="div" to="/movie/city" class="city_name">
            <span>{{$store.state.city.name}}</span><i class="iconfont icon-lower-triangle"></i>
          </router-link>
          <div class="hot_swtich">
            <router-link to="/movie/nowplaying" tag="div" class="hot_item">正在热映</router-link>
            <router-link to="/movie/comingsoon" tag="div" class="hot_item">即将上映</router-link>
          </div>
          <router-link to="/movie/search" tag="div" class="search_entry">
            <i class="iconfont icon-sousuo"></i>
          </router-link>  
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
			</div>
    <TabBar />
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
// import { messageBox } from '@/components/JS'
// import axios from 'axios'

export default {
  name: 'Movie',
  components: {
    Header,
    TabBar
  },
  // mounted(){
  //   setTimeout(()=>{
  //       axios({
  //         url: 'https://m.maizuo.com/gateway?cityId=520400&k=2534097',
  //         headers: {
  //           'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16257571244384470119481345","bc":"520400"}',
  //           'X-Host': 'mall.cfg.float-window.banner'
  //         }
  //       }).then(res => {
  //           var msg = res.data.msg;
  //           if(msg === '数据为空'){

  //               var name = res.data.data.name;
  //               var id = res.data.data.id;
  //               if( this.$store.state.city.id == id ) { return }
  //               messageBox({
  //                   title : '定位',
  //                   content : name,
  //                   cancel : '取消',
  //                   ok : '切换定位',
  //                   handleOk(){
  //                       window.localStorage.setItem('nowName', name);
  //                       window.localStorage.setItem('nowId',id);
  //                       window.location.reload();
  //                   }
  //               });
  //           }
  //       });
  //   },3000);
  // }
}
</script>

<style lang="scss">
#content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
.movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
.movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
.movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
.movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
.movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
.movie_menu .search_entry i{  font-size:24px; color:red;}
</style>
