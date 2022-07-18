/** @type {import('next').NextConfig} */
const withTranslateRoutes = require('next-translate-routes/plugin')

const nextConfig = withTranslateRoutes({
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'ro', 'hu'],
    defaultLocale: 'hu',
    localeDetection: false
  },
  trailingSlash: true,
  translateRoutes: {
    debug: false
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
})

module.exports = nextConfig
