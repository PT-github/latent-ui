/*
 * @Author: PT
 * @Date: 2020-04-23 09:13:00
 * @LastEditors: PT
 * @LastEditTime: 2020-04-23 12:13:12
 * @Description: 文档打包webpack配置
 */
var nodeExternals = require('webpack-node-externals')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const markdownConf = require('./markdown.conf.js')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '../example/main.js'),
  output: {
    path: path.resolve(__dirname, '../docs'),
    filename: '[name].[hash:7].js',
    chunkFilename: '[name].[hash:7].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: markdownConf()
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(sa|sc)ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js', '.vue', '.json' ],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      example: path.resolve(__dirname, '../example')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '../example/index.html'),
      inject: true
    }),
    new ProgressBarWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}