const path = require('path')
const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'bootstrap-components': path.resolve(__dirname, 'node_modules/bootstrap-vue/es/components')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}