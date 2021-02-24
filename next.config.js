const withPWA = require('next-pwa')
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  i18n,
  future: { webpack5: true, },
  pwa: {
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
  }
})