import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局过滤 图片过滤
// Vue.filter('setWH', (url, arg) => {
//   return url.replace(/w\.h/, arg)
// })

// 引入element-ui 针对PC端
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)

// 引入Mint UI 针对移动端
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// // 封装 Better-scroll 为全局组件
// import Scroller from '@/components/Scroller'
// Vue.component('Scroller' , Scroller)

// 封装加载效果组件 CSS3制作
import Loading from '@/components/Loading'
Vue.component('Loading', Loading)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
