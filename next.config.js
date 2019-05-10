const withSass = require('@zeit/next-sass')
module.exports = withSass({
    cssModules: true,
    target: 'serverless',
    // exportPathMap: function() {
    //     return {
    //       '/': { page: '/' },
    //       '/enterprenuer': { page: '/enterprenuer' },
    //       '/organizations': { page: '/organizations' },
    //       '/taxes': { page: '/taxes' }
    //     }
    //   },
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
