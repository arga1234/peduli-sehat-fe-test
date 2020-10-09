module.exports = {
  devServer: {
    https: false,
    port: 8080,
    open: false, // opens browser window automatically
    proxy: {
      '/fcm' : {
          target: 'https://fcm.googleapis.com/fcm',
          changeOrigin: true,
          pathRewrite: {
            '^/fcm': '',
          },
      }
    }
  }
}