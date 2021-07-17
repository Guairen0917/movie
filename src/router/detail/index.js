export default {
  path : '/movie/detail/:id', // 动态路由
  name: 'moviedetail',
  // meta: {
  //   keepalive: false
  // },
  component: () => import('@/views/Detail')
}