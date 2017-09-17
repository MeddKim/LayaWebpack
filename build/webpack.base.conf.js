// var path = require('path')
// var utils = require('./utils')
// var config = require('../config')
// var vueLoaderConfig = require('./vue-loader.conf')

// function resolve (dir) {
//   return path.join(__dirname, '..', dir)
// }

// var lang = require('highlight.js-async-webpack/src/file.lang.hljs.js');
// var _entry= {
//     app: './src/main.js', // 原始入口
//     vue: ['vue']
// };
// for (var i = 0; i < lang.length; i++) {
//     _entry[lang[i]] = ['mavon-editor/dist/js/' + lang[i] + '.js']
// }

// module.exports = {
//   // entry: {
//   //   app: './src/main.js'
//   // },
//   entry:_entry,
//   output: {
//     path: config.build.assetsRoot,
//     filename: 'js/[name].js',
//     publicPath: process.env.NODE_ENV === 'production'
//       ? config.build.assetsPublicPath
//       : config.dev.assetsPublicPath
//   },
//   resolve: {
//     extensions: ['.js', '.vue', '.json'],
//     alias: {
//       'vue$': 'vue/dist/vue.esm.js',
//       '@': resolve('src')
//     }
//   },
//   module: {
//     rules: [
//       {
//         test: /\.vue$/,
//         loader: 'vue-loader',
//         options: vueLoaderConfig
//       },
//       {
//         test: /\.js$/,
//         loader: 'babel-loader',
//         include: [resolve('src'), resolve('test')]
//       },
//       {
//         test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: utils.assetsPath('img/[name].[hash:7].[ext]')
//         }
//       },
//       {
//         test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//         loader: 'url-loader',
//         options: {
//           limit: 10000,
//           name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
//         }
//       }
//     ]
//   }
// }



const path = require('path');
var config = require('../config')

module.exports = {
  entry:{
    laya :'./src/LayaAir.js',
    main: './src/main.js'
  },
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  module: {
    rules: [{
      test:/\.txt$/,    //要处理什么文件
      use:'raw-loader'  //要用什么loader处理
    },{
      test:path.join(__dirname,'src/main.js'),
      loader:'babel-loader',
      query:{
        presets:['es2015']
      }
    }]
  }
}