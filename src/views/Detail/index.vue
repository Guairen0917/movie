<template>
   
  <!-- filminfo还没获取到数据时就渲染报错 利用 v-if 解决 -->
  <div>
  <Loading v-if="isLoading" />
    <div v-else>
      <img :src="filminfo.poster" class="poster">
      <h2>{{filminfo.name}}</h2>

      <!-- 详情页轮播部分 -->
      <h3>演员名单</h3>
      <swiper perview='4' class="actorswiper" myclassname="actorswiper">
        <div class="swiper-slide" v-for="data in filminfo.actors" :key="data.name">
          <img :src="data.avatarAddress">
          <p>{{data.name}}</p>
          <p>{{data.role}}</p>
        </div>
      </swiper>
      <h3>剧照花絮</h3>
      <swiper perview='3' class="photoswiper" myclassname="photoswiper">
        <div class="swiper-slide" v-for="(data,index) in filminfo.photos" :key="index">
          <img :src="data">
        </div>
      </swiper>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import swiper from '@/views/Detail/DetailSwiper'

// import { HIDE_TABBAR_MUTATION, SHOW_TABBAR_MUTATION } from '@/type'

// import bus from '@/bus'
export default {
  name: 'Detail',
  data() {
    return {
      filminfo: null,
      isLoading: true
    }
  },
  props: ['id'],
  components: {
    swiper
  },
  // beforeMount() {
  //   // 事件总线实例
  //   // bus.$emit('电影', false)

  //   // 团队合作可能修改状态 不应直接修改
  //   // this.$store.state.isTabbarShow = false

  //   // 第一个参数即 mutation 名字
  //   // this.$store.commit('HideTabbar', false)
  //   // this.$store.commit(HIDE_TABBAR_MUTATION, false)
  // },
  mounted() {
    // console.log('传递的id', this.$route.params.id)
    
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=343196`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16257571244384470119481345","bc":"210300"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.isLoading = false
      // console.log(res.data)
      this.filminfo = res.data.data.film
    })
  },
  // beforeLeave(){
  //   console.log('返回上一级')
  //   this.$destroy('Detail')
  // }
  // beforeDestroy() {
  //   // 事件总线实例
  //   // bus.$emit('电影', false)

  //   // this.$store.state.isTabbarShow = true

  //   // this.$store.commit('ShowTabbar', true)
  //   this.$store.commit(SHOW_TABBAR_MUTATION, true)
  // }

}

</script>

<style scoped>
.poster{
  width: 100%;
}
</style>
