// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/diatrada',
        destination: '/',
        permanent: true
      }
    ]
  }
}
