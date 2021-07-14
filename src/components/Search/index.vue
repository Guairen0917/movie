<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-sousuo"></i>
        <!-- <input type="text" v-model="message"> -->
        <input type="text">
      </div>					
    </div>
    <div class="search_result">
      <h3>离你最近</h3>
      <ul class="cinema-index-detail">
        <li v-for="data in nearby" :key="data.cinemaId">
          <p>{{data.name}}</p>
          <span class="cinemaaddress">{{data.address}}</span>
        </li>
      </ul>
    </div>

    <div class="search_result">
      <h3>电影/电视剧/综艺</h3>
      <!-- <ul>
        <li v-for="item in movieList" :key="item.id">
          <div class="img"><img :src="item.poster"></div>
          <div class="info">
            <p><span>{{data.name}}</span><span>{{data.grade}}</span></p>
            <p>{{data.category}}</p>
            <p>2018-11-16</p>
          </div>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Search',
  data() {
    return {
      nearby: []
      // message: '',
      // movieList: [],
    }
  },
  mounted() {
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=440100&k=8951405',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16257571244384470119481345","bc":"440100","lo":"0","la":"0"}',
          'X-Host': 'mall.film-ticket.cinema.recommend'    
        }
      }).then(res => {
      // console.log(res.data.data.cinemas)
      this.nearby = res.data.data.cinemas
    })
  }
  // watch: {
  //   message(newValue) {
  //     console.log(newValue)
  //     axios({
  //       url: 'https://m.maizuo.com/gateway?cityId=440100&k=8951405',
  //       headers: {
  //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16257571244384470119481345","bc":"440100","lo":"0","la":"0"}',
  //         'X-Host': 'mall.film-ticket.cinema.recommend'    
  //       }
  //     }).then(res => {
  //     console.log(res.data)
  //     var movies = res.data.data.movies
  //     if (movies) {
  //       this.movieList = res.data.data.movies.list
  //     }
  //   })
  //   }
  // }
}
</script>

<style lang="scss" scoped>
#content .search_body{ flex:1; overflow:auto;}
.search_body .search_input{ padding: 8px 10px; background-color: #f5f5f5; border-bottom: 1px solid #e5e5e5;}
.search_body .search_input_wrapper{ padding: 0 10px; border: 1px solid #e6e6e6; border-radius: 5px; background-color: #fff; display: flex; line-height: 20px;}
.search_body .search_input_wrapper i{font-size: 16px; padding: 4px 0;}
.search_body .search_input_wrapper input{ border: none; font-size: 13px; color: #333; padding: 4px 0; outline: none; margin-left: 5px; width:100%;}

.search_body .search_result h3{ font-size: 15px; color: #999; padding: 9px 15px; border-bottom: 1px solid #e6e6e6;}

.search_body .search_result li{ border-bottom:1px #c9c9c9 dashed; padding: 10px 15px; box-sizing:border-box; display: flex;flex-direction: column;}
.search_body .search_result .cinemaaddress{ font-size: 12px; color: #c9c9c9;}
.search_body .search_result .img{ width: 60px; float:left; }
.search_body .search_result .img img{ width: 100%; }
.search_body .search_result .info{ float:left; margin-left: 15px; flex:1;}
.search_body .search_result .info p{ height: 22px; display: flex; line-height: 22px; font-size: 12px;}
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(1){ font-size: 18px; flex:1; }
.search_body .search_result .info p:nth-of-type(1) span:nth-of-type(2){ font-size: 16px; color:#fc7103;}
</style>
