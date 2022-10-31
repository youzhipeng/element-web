module.exports = {
  devServer: {
    proxy: {
      '/front': {
        target: 'http://eduboss.lagounews.com',
        ws: true,
        changeOrigin: true
      },
      '/foo': {
        target: '<other_url>'
      }
    }
  }
}
