'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/shopping': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/shopping': '/shopping'
        }
      },
      '/ugc': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/ugc': '/ugc'
        }
      },
      '/v1': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': '/v1'
        }
      },
      '/v2': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/v2': '/v2'
        }
      },
      '/v3': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/v3': '/v3'
        }
      },
      '/v4': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/v4': '/v4'
        }
      },
      '/bos': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/bos': '/bos'
        }
      },
      '/member': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/member': '/member'
        }
      },
      '/promotion': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/promotion': '/promotion'
        }
      },
      '/eus': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/eus': '/eus'
        }
      },
      '/payapi': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/payapi': '/payapi'
        }
      },
      '/img': {
        target: 'http://cangdu.org:8001',
        changeOrigin: true,
        pathRewrite: {
          '^/img': '/img'
        }
      },
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8888, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: true,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
