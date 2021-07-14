<template>
  <div class="movie_body">
    <ul>
      <li v-for="data in comingList" :key="data.filmId">
        <div class="pic_show"><img :src="data.poster"></div>
        <div class="info_list">
          <h2>{{data.name}}<img v-if="data.filmType.name === '3D'" src="@/assets/maxs.png"></h2>
          <p class="category">类型：{{data.category}}</p>
          <p v-if="data.actors">主演：{{data.actors | actorfilter}}</p>
          <p>简介：{{data.synopsis}}</p>
        </div>
        <div class="btn_pre" v-if="data.isPresale">
          预售
        </div>
        <!-- <div class="btn_sale" v-else>热映中</div> -->
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

Vue.filter('actorfilter', function(data) {
  var newlist = data.map(item => item.name)
  return newlist.slice(1).join(' ')
  // return newlist.join(' ')
})

export default {
  name: 'ComingSoon',
  data() {
    return {
      comingList: []
    }
  },
  mounted() {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=440100&pageNum=1&pageSize=10&type=2&k=5652247',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16257571244384470119481345"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      this.comingList = res.data.data.films
      // 异步请求的数据提交到 Mutation
      // store.commit('comingsoonList', res.data.data.films)
    })
  }
}
</script>

<style lang="scss" scoped>
#content .movie_body{ flex:1; overflow:auto;}
.movie_body ul{ margin:0 12px; overflow: hidden;}
.movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
.movie_body .pic_show{ width:64px; height: 90px;}
.movie_body .pic_show img{ width:100%;}
.movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
.movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
.movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
.movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
.movie_body .btn_mall , .movie_body .btn_pre, .movie_body .btn_sale{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
.movie_body .btn_pre{ background-color: #3c9fe6;}
.movie_body .btn_sale{ background-color: #f03d37;}
</style>
