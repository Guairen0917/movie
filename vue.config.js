module.exports = {
  devServer: {
    // 反向代理
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        // ws: true,
        changeOrigin: true
      }
      // '/api': {
      //   target: 'http://m.maoyan.com',
      //   // ws: true,
      //   changeOrigin: true
      // }
    }
  }
}
