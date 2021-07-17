<template>
  <div class="movie_body">
    <Loading v-if="isLoading" />
    <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10" infinite-scroll-immediate-check="false">
      <li v-for="data in comingList" :key="data.filmId">
        <div class="pic_show" @click="handleChangePage(data.filmId)"><img :src="data.poster"></div>
        <div class="info_list" @click="handleChangePage(data.filmId)">
          <h2>{{data.name}}<img v-if="data.filmType.name === '3D'" src="@/assets/maxs.png"></h2>
          <p class="category">类型：{{data.category}}</p>
          <p v-if="data.actors">主演：{{data.actors | actorfilter}}</p>
          <p v-if="data.premiereAt">首映：{{data.premiereAt | formatDate}}</p>
        </div>
        <div class="btn_pre" v-if="data.isPresale">
          预售中
        </div>
        <div class="btn_sale" v-else>无排期</div>
      </li>
    </ul>
    <div v-show="isShow" class="load_active">正在加载中...</div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

import { formatDate } from '@/assets/utils'

Vue.filter('actorfilter', function(data) {
  var newlist = data.map(item => item.name)
  return newlist.join(' ')
  // return newlist.join(' ')
})

export default {
  name: 'ComingSoon',
  filters: {
      formatDate(time) {
          time = time * 1000
          let date = new Date(time)
          return formatDate(date, 'yyyy-MM-dd')
      }
  },
  data() {
    return {
      comingList: [],
      loading: false,
      current: 1,
      total: 0,
      isShow: true,
      isLoading: true
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
      this.isLoading = false
      // console.log(res.data)
      this.comingList = res.data.data.films
      // 异步请求的数据提交到 Mutation
      // store.commit('comingsoonList', res.data.data.films)
      this.total = res.data.data.total
    })
  },
  methods: {
    handleChangePage(id) {
      // console.log(id)
      // 编程式导航 路径跳转
      // this.$router.push(`/detail/${id}`)

      // 编程式导航 名字跳转
      this.$router.push({ name: 'moviedetail', params: { id: id } })
    },
    loadMore() {
      // console.log('没有更多啦')
      this.loading = true

      this.current++
      if (this.comingList.length === this.total) {
        this.isShow = false
        return
      }

      axios({
        url: `https://m.maizuo.com/gateway?cityId=440100&pageNum=${this.current}&pageSize=10&type=2&k=2070027`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15610855429195524981146","bc":"210300"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // datalist 应该是拼接上下面请求回来的数据
        this.comingList = [...this.comingList, ...res.data.data.films]
        this.loading = false // 启用无限滚动
      })
    }
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
.movie_body .btn_sale{ background-color: #636363;}
.movie_body .load_active{ width: 100%; height: 24px; line-height: 24px; text-align: center;}
</style>
