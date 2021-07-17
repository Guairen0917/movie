<template>
  <!-- <div id="content"> -->
    <div class="cinema_body">
      <Loading v-if="isLoading" />
      <ul>
        <li v-for="data in cinemaList" :key="data.index">
          <div>
            <span>{{data.name}}</span>
            <span class="q">￥&nbsp;<span class="price">{{data.lowPrice / 100}}</span> 起</span>
          </div>
          <div class="address">
            <span>{{data.address}}</span>
            <span v-if="data.Distance">{{data.Distance | Distancefilter}}&nbsp;Km</span>
          </div>
          <div class="card">
                    <div v-if="data.businessTime">营业中</div>
                    <div class="work" v-else>休息中</div>
              </div>
        </li>
      </ul>
    </div>
  <!-- </div> -->
</template>

<script>
import axios from 'axios'
import Vue from 'vue'

Vue.filter('Distancefilter', function(data) {
  var distance = data.toFixed(2)
  return distance
})

export default {
  name: 'CinemaList',
  data() {
    return {
      cinemaList: [],
      isLoading: true,
      prevCtiyId: -1
    }
  },
  mounted() {
    axios({
      url: `https://m.maizuo.com/gateway?cityId=${this.$store.state.city.id}&ticketFlag=1&k=9660977`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16257571244384470119481345"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      this.isLoading = false
      
      // console.log(res.data.data.cinemas)
      this.cinemaList = res.data.data.cinemas
    })
  }
}
</script>

<style lang="scss" scoped>
#content {margin-bottom: 0;}
#content .cinema_body{ flex:1; overflow:auto;}
.cinema_body ul{ padding:20px;}
.cinema_body li{  border-bottom:1px solid #e6e6e6; margin-bottom: 20px;}
.cinema_body div{ margin-bottom: 10px;}
.cinema_body .q{ float: right; font-size: 11px; color:#f03d37;}
.cinema_body .price{ font-size: 18px;}
.cinema_body .address{display: flex; font-size: 13px; color:#9c9c9c; flex-direction: row; justify-content: space-between;}
.cinema_body .address span:nth-of-type(2){ float:right;margin-left: 20px;}
.cinema_body .card{ display: flex;}
.cinema_body .card div{ padding: 0 3px; height: 15px; line-height: 15px; border-radius: 2px; color: #f90; border: 1px solid #f90; font-size: 13px; margin-right: 5px;}
.cinema_body .card div{ color: #f90; border: 1px solid #f90;}
.cinema_body .card .work{ color: #589daf; border: 1px solid #589daf;}
</style>
