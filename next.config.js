const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssModules: true,
    // target: 'serverless',
    exportPathMap: function() {
        return {
          '/': { page: '/' },
          '/individuals': { page: '/individuals' },
          '/organisations': { page: '/organisations' },
          '/taxes': { page: '/taxes' },
          '/tax/1': { page: '/tax', query: {id: 0} },
          '/tax/2': { page: '/tax', query: {id: 1} },
          '/tax/3': { page: '/tax', query: {id: 2} },
          '/tax/4': { page: '/tax', query: {id: 3} },
          '/tax/5': { page: '/tax', query: {id: 4} },
          '/tax/6': { page: '/tax', query: {id: 5} },
          '/tax/7': { page: '/tax', query: {id: 6} },
          '/tax/8': { page: '/tax', query: {id: 7} },
          '/tax/9': { page: '/tax', query: {id: 8} },
          '/tax/10': { page: '/tax', query: {id: 9} },
          '/tax/11': { page: '/tax', query: {id: 10} },
          '/tax/12': { page: '/tax', query: {id: 11} }
        }
      },
    webpack (config, options) {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    })

    return config
  }
})
