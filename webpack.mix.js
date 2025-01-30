let mix = require('laravel-mix')
let path = require('path')

require('./mix')

mix
  .setPublicPath('dist')
  .js('resources/js/field.js', 'js')
  .vue({ version: 3 })
  .sass('resources/sass/field.scss', 'css')
  .webpackConfig({
    resolve: {
      alias: {
        'laravel-nova-ui': path.resolve(__dirname, 'node_modules/laravel-nova-ui'),
      },
    },
  })
  .nova('marcobax/nova-status-field')

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          'babel-loader',
          'vue-svg-loader',
        ],
      },
    ],
  },
};
